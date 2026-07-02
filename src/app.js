const sites = [
  {
    name: "Ko Nu",
    distanceKm: 1.2,
    speciesCount: 3,
    groups: ["Coral", "Bird", "Fish"],
    closeEnough: true
  },
  {
    name: "Ko Meaw",
    distanceKm: 2.5,
    speciesCount: 2,
    groups: ["Bird", "Crab"],
    closeEnough: false
  },
  {
    name: "Ko Kham",
    distanceKm: 4.8,
    speciesCount: 2,
    groups: ["Coral", "Fish"],
    closeEnough: false
  },
  {
    name: "Khao Nam Khang National Park",
    distanceKm: 58,
    speciesCount: 2,
    groups: ["Bird", "Plant"],
    closeEnough: false
  },
  {
    name: "Ton Nga Chang Wildlife Sanctuary",
    distanceKm: 31,
    speciesCount: 2,
    groups: ["Mammal", "Plant"],
    closeEnough: false
  },
  {
    name: "Songkhla Lake wetland area",
    distanceKm: 8,
    speciesCount: 3,
    groups: ["Bird", "Fish", "Plant"],
    closeEnough: false
  },
  {
    name: "Songkhla mangrove area",
    distanceKm: 6.5,
    speciesCount: 3,
    groups: ["Crab", "Bird", "Plant"],
    closeEnough: false
  }
];

const species = [
  {
    commonName: "Blue Coral",
    scientificName: "Heliopora coerulea",
    group: "Coral",
    area: "Ko Nu",
    rarity: "Rare",
    role: "Builds reef habitat",
    fact: "Its skeleton can look blue even when the living colony is brown."
  },
  {
    commonName: "Little Egret",
    scientificName: "Egretta garzetta",
    group: "Bird",
    area: "Songkhla Lake wetland area",
    rarity: "Common",
    role: "Wetland predator",
    fact: "It uses quick foot movements to stir small prey from shallow water."
  },
  {
    commonName: "Mudskipper",
    scientificName: "Periophthalmus gracilis",
    group: "Fish",
    area: "Songkhla mangrove area",
    rarity: "Common",
    role: "Links mudflat and water food webs",
    fact: "It can move across mud using its fins."
  },
  {
    commonName: "Nipa Palm",
    scientificName: "Nypa fruticans",
    group: "Plant",
    area: "Songkhla mangrove area",
    rarity: "Common",
    role: "Stabilizes muddy banks",
    fact: "Its leaves are traditionally used for thatching."
  },
  {
    commonName: "Brahminy Kite",
    scientificName: "Haliastur indus",
    group: "Bird",
    area: "Ko Meaw",
    rarity: "Uncommon",
    role: "Coastal scavenger and predator",
    fact: "Adults have a bright white head and chestnut wings."
  }
];

let observations = loadObservations();
let checkIns = loadCheckIns();

const params = new URLSearchParams(window.location.search);
let selectedSite = getSiteFromQuery() || sites[0];

const startButton = document.querySelector("#startButton");
const locationStatus = document.querySelector("#locationStatus");
const nearestSite = document.querySelector("#nearestSite");
const homeSpeciesFound = document.querySelector("#homeSpeciesFound");
const homeCheckIns = document.querySelector("#homeCheckIns");
const homeBadges = document.querySelector("#homeBadges");
const homeAreasExplored = document.querySelector("#homeAreasExplored");
const siteList = document.querySelector("#siteList");
const areaDetail = document.querySelector("#areaDetail");
const checkInButton = document.querySelector("#checkInButton");
const checkInStatus = document.querySelector("#checkInStatus");
const areaFilter = document.querySelector("#areaFilter");
const speciesList = document.querySelector("#speciesList");
const observationForm = document.querySelector("#observationForm");
const observationArea = document.querySelector("#observationArea");
const speciesSelect = document.querySelector("#speciesSelect");
const formError = document.querySelector("#formError");
const totalFound = document.querySelector("#totalFound");
const areaSummary = document.querySelector("#areaSummary");
const groupSummary = document.querySelector("#groupSummary");
const badgeList = document.querySelector("#badgeList");
const recordsTable = document.querySelector("#recordsTable");
const speciesDetail = document.querySelector("#speciesDetail");

if (startButton) {
  startButton.addEventListener("click", requestLocation);
}

if (checkInButton) {
  checkInButton.addEventListener("click", checkIn);
}

if (areaFilter) {
  areaFilter.addEventListener("change", renderSpecies);
}

if (observationArea) {
  observationArea.addEventListener("change", syncSpeciesSelect);
}

if (observationForm) {
  observationForm.addEventListener("submit", saveObservation);
}

render();

function requestLocation() {
  if (!navigator.geolocation) {
    locationStatus.textContent = "Location is not available. Please choose a site manually.";
    return;
  }

  locationStatus.textContent = "Requesting location permission...";
  navigator.geolocation.getCurrentPosition(
    () => {
      selectedSite = sites[0];
      locationStatus.textContent = "Location allowed. Nearest site: Ko Nu.";
      renderHomeStats();
    },
    () => {
      locationStatus.textContent = "Location denied. Please choose a site manually.";
    }
  );
}

function render() {
  renderSiteList();
  renderAreaDetail();
  renderSelects();
  renderSpecies();
  renderSpeciesDetailPage();
  renderRecords();
  renderHomeStats();
}

function renderSiteList() {
  if (!siteList) {
    return;
  }

  siteList.innerHTML = "";

  sites.forEach((site) => {
    const card = document.createElement("article");
    card.className = `site-card${site.name === selectedSite.name ? " active" : ""}`;
    card.innerHTML = `
      <div class="site-thumb"></div>
      <h3>${site.name}</h3>
      <p>${site.distanceKm} km away</p>
      <p>${site.speciesCount} species available</p>
      <a class="button-link" href="area.html?site=${encodeURIComponent(site.name)}">View Area</a>
    `;

    siteList.appendChild(card);
  });
}

function renderAreaDetail() {
  if (!areaDetail) {
    return;
  }

  areaDetail.innerHTML = `
    <dl>
      <dt>Site</dt>
      <dd>${selectedSite.name}</dd>
      <dt>Distance</dt>
      <dd>${selectedSite.distanceKm} km</dd>
      <dt>Total species</dt>
      <dd>${selectedSite.speciesCount}</dd>
      <dt>Groups</dt>
      <dd>${selectedSite.groups.join(", ")}</dd>
    </dl>
  `;
}

function checkIn() {
  if (selectedSite.closeEnough) {
    checkIns.unshift({
      site: selectedSite.name,
      date: new Date().toLocaleDateString()
    });
    localStorage.setItem("natureExplorerCheckIns", JSON.stringify(checkIns));
    checkInStatus.textContent = `Check-in succeeded at ${selectedSite.name}.`;
    return;
  }

  checkInStatus.textContent = "You need to be closer to this site to check in.";
}

function renderSelects() {
  if (areaFilter) {
    const currentFilter = areaFilter.value || "All areas";
    areaFilter.innerHTML = `<option>All areas</option>${sites
      .map((site) => `<option>${site.name}</option>`)
      .join("")}`;
    areaFilter.value = currentFilter;
  }

  if (observationArea) {
    const currentObservationArea = observationArea.value || selectedSite.name;
    observationArea.innerHTML = sites.map((site) => `<option>${site.name}</option>`).join("");
    observationArea.value = currentObservationArea;
    syncSpeciesSelect();
  }
}

function syncSpeciesSelect() {
  if (!observationArea || !speciesSelect) {
    return;
  }

  const areaSpecies = species.filter((item) => item.area === observationArea.value);
  const choices = areaSpecies.length > 0 ? areaSpecies : species;
  speciesSelect.innerHTML = choices
    .map((item) => `<option value="${item.commonName}">${item.commonName}</option>`)
    .join("");
}

function renderSpecies() {
  if (!speciesList) {
    return;
  }

  speciesList.innerHTML = "";
  const selectedArea = areaFilter.value || "All areas";
  const filteredSpecies =
    selectedArea === "All areas" ? species : species.filter((item) => item.area === selectedArea);

  filteredSpecies.forEach((item) => {
    const unlocked = isUnlocked(item.commonName);
    const card = document.createElement("article");
    card.className = `species-card${unlocked ? "" : " locked"}`;
    card.innerHTML = `
      <div class="species-image-row">
        <div class="image-placeholder cartoon-art">${item.group}</div>
        <div class="image-placeholder photo-art">Reference photo</div>
      </div>
      <h3 class="species-name">${item.commonName}</h3>
      <p><em>${item.scientificName}</em></p>
      <p>${item.group} - ${item.area}</p>
      <p>Rarity: ${item.rarity}</p>
      <p class="rarity-dots" aria-label="Rarity indicator"><span></span><span></span><span></span><span></span><span></span></p>
      <p>Role: ${item.role}</p>
      <p>Fun fact: ${item.fact}</p>
      <p>Status: ${unlocked ? "Unlocked" : "Locked"}</p>
      <a class="button-link" href="species.html?species=${encodeURIComponent(item.commonName)}">
        View Detail
      </a>
    `;

    speciesList.appendChild(card);
  });
}

function renderSpeciesDetailPage() {
  if (!speciesDetail) {
    return;
  }

  const selectedSpecies =
    species.find((item) => item.commonName === params.get("species")) || species[0];
  renderSpeciesDetail(selectedSpecies);
}

function renderSpeciesDetail(item) {
  speciesDetail.className = "species-detail";
  speciesDetail.innerHTML = `
    <div class="image-placeholder detail-image cartoon-art">${item.group}</div>
    <h3>${item.commonName}</h3>
    <dl>
      <dt>Scientific name</dt>
      <dd><em>${item.scientificName}</em></dd>
      <dt>Group</dt>
      <dd>${item.group}</dd>
      <dt>Area</dt>
      <dd>${item.area}</dd>
      <dt>Rarity</dt>
      <dd>${item.rarity}</dd>
      <dt>Ecosystem role</dt>
      <dd>${item.role}</dd>
      <dt>Fun fact</dt>
      <dd>${item.fact}</dd>
      <dt>Status</dt>
      <dd>${isUnlocked(item.commonName) ? "Unlocked" : "Locked"}</dd>
    </dl>
    <a class="button-link" href="upload.html">I Found This!</a>
  `;
}

function saveObservation(event) {
  event.preventDefault();
  formError.style.display = "none";

  if (!speciesSelect.value) {
    formError.textContent = "Choose a suspected species before saving.";
    formError.style.display = "block";
    return;
  }

  const chosenSpecies = species.find((item) => item.commonName === speciesSelect.value);
  const status = new FormData(observationForm).get("verificationStatus");
  const record = {
    area: observationArea.value,
    species: chosenSpecies.commonName,
    group: chosenSpecies.group,
    status,
    date: new Date().toLocaleDateString()
  };

  observations.unshift(record);
  localStorage.setItem("natureExplorerObservations", JSON.stringify(observations));
  observationForm.reset();
  observationArea.value = selectedSite.name;
  syncSpeciesSelect();
  formError.textContent = "Observation saved. Open Records to see it in the table.";
  formError.style.display = "block";
}

function renderRecords() {
  const unlockedSpecies = new Set(
    observations.filter((record) => record.status === "Unlocked").map((record) => record.species)
  );

  if (recordsTable) {
    recordsTable.innerHTML = "";

    observations.forEach((record) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${record.area}</td>
        <td>${record.species}</td>
        <td>${record.group}</td>
        <td>${record.status}</td>
        <td>${record.date}</td>
      `;
      recordsTable.appendChild(row);
    });
  }

  if (totalFound) {
    totalFound.textContent = unlockedSpecies.size;
  }
  if (areaSummary) {
    renderRecordSummary(areaSummary, countUnlockedBy("area"));
  }
  if (groupSummary) {
    renderRecordSummary(groupSummary, countUnlockedBy("group"));
  }
  if (badgeList) {
    renderBadges(getBadges(unlockedSpecies));
  }
}

function renderHomeStats() {
  if (!nearestSite || !homeSpeciesFound || !homeCheckIns || !homeBadges || !homeAreasExplored) {
    return;
  }

  const unlockedSpecies = new Set(
    observations.filter((record) => record.status === "Unlocked").map((record) => record.species)
  );
  const badges = getBadges(unlockedSpecies);
  const exploredAreas = new Set(checkIns.map((record) => record.site));

  nearestSite.textContent = selectedSite.name;
  homeSpeciesFound.textContent = unlockedSpecies.size;
  homeCheckIns.textContent = checkIns.length;
  homeBadges.textContent = badges.length;
  homeAreasExplored.textContent = exploredAreas.size;
}

function countUnlockedBy(key) {
  const counts = {};

  observations
    .filter((record) => record.status === "Unlocked")
    .forEach((record) => {
      counts[record[key]] = (counts[record[key]] || 0) + 1;
    });

  return counts;
}

function renderRecordSummary(element, counts) {
  const entries = Object.entries(counts);

  element.innerHTML =
    entries.length === 0
      ? "<li>No unlocked species yet.</li>"
      : entries.map(([label, count]) => `<li>${label}: ${count}</li>`).join("");
}

function getBadges(unlockedSpecies) {
  const badges = [];
  const birdCount = observations.filter(
    (record) => record.status === "Unlocked" && record.group === "Bird"
  ).length;
  const coralCount = observations.filter(
    (record) => record.status === "Unlocked" && record.group === "Coral"
  ).length;

  if (unlockedSpecies.size >= 3) {
    badges.push("Songkhla Explorer Badge");
  }
  if (birdCount >= 1) {
    badges.push("Bird Watcher Badge");
  }
  if (coralCount >= 1) {
    badges.push("Coral Explorer Badge");
  }
  if (new Set(checkIns.map((record) => record.site)).size >= 1) {
    badges.push("First Check-in Badge");
  }

  return badges;
}

function renderBadges(badges) {
  badgeList.innerHTML =
    badges.length === 0
      ? "<p>No badges earned yet.</p>"
      : badges.map((badge) => `<span class="badge">${badge}</span>`).join("");
}

function isUnlocked(commonName) {
  return observations.some(
    (record) => record.species === commonName && record.status === "Unlocked"
  );
}

function getSiteFromQuery() {
  return sites.find((site) => site.name === params.get("site"));
}

function loadObservations() {
  const saved = localStorage.getItem("natureExplorerObservations");

  if (!saved) {
    return [];
  }

  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

function loadCheckIns() {
  const saved = localStorage.getItem("natureExplorerCheckIns");

  if (!saved) {
    return [];
  }

  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}
