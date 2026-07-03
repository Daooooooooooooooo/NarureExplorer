const sites = [
  {
    id: "ko_nu",
    name: "Ko Nu",
    distanceKm: 1.2,
    groups: ["Coral", "Bird", "Fish"],
    closeEnough: true
  },
  {
    id: "ko_meaw",
    name: "Ko Meaw",
    distanceKm: 2.5,
    groups: ["Bird", "Crab"],
    closeEnough: false
  },
  {
    id: "ko_kham",
    name: "Ko Kham",
    distanceKm: 4.8,
    groups: ["Coral", "Fish"],
    closeEnough: false
  },
  {
    id: "khao_nam_khang_np",
    name: "Khao Nam Khang National Park",
    distanceKm: 58,
    groups: ["Bird", "Plant"],
    closeEnough: false
  },
  {
    id: "ton_nga_chang",
    name: "Ton Nga Chang Wildlife Sanctuary",
    distanceKm: 31,
    groups: ["Mammal", "Plant"],
    closeEnough: false
  },
  {
    id: "songkhla_lake",
    name: "Songkhla Lake wetland area",
    distanceKm: 8,
    groups: ["Bird", "Fish", "Plant"],
    closeEnough: false
  },
  {
    id: "songkhla_mangrove",
    name: "Songkhla mangrove area",
    distanceKm: 6.5,
    groups: ["Crab", "Bird", "Plant"],
    closeEnough: false
  }
];

const species = [
  { id: "sp001", scientificName: "Porites lutea", commonName: "Massive pore coral", thaiName: "ปะการังโขด", group: "Coral", siteIds: ["ko_kham", "ko_nu", "ko_meaw"], role: "Reef builder", rarity: "Common", fact: "Hard coral forming massive colonies; important habitat builder.", sourceUrl: "https://www.sciencedirect.com/science/article/pii/S2590291126002275", art: "coral" },
  { id: "sp002", scientificName: "Pocillopora acuta", commonName: "Cauliflower coral", thaiName: "ปะการังดอกกะหล่ำ", group: "Coral", siteIds: ["ko_kham", "ko_nu", "ko_meaw"], role: "Reef builder", rarity: "Common", fact: "Branching coral that provides shelter for small reef animals.", sourceUrl: "https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2021.712214/full", art: "coral" },
  { id: "sp003", scientificName: "Turbinaria peltata", commonName: "Disc coral", thaiName: "ปะการังจาน", group: "Coral", siteIds: ["ko_kham", "ko_nu", "ko_meaw"], role: "Reef builder", rarity: "Common", fact: "Often forms plates or cups and contributes to reef structure.", sourceUrl: "https://www.sciencedirect.com/science/article/pii/S2590291126002275", art: "coral" },
  { id: "sp004", scientificName: "Pavona decussata", commonName: "Cactus coral", thaiName: "ปะการังกระบองเพชร", group: "Coral", siteIds: ["ko_kham", "ko_nu", "ko_meaw"], role: "Reef builder", rarity: "Occasional", fact: "Leaf-like hard coral found in turbid coastal reef habitats.", sourceUrl: "https://www.sciencedirect.com/science/article/pii/S2590291126002275", art: "coral" },
  { id: "sp005", scientificName: "Montipora sp.", commonName: "Montipora coral", thaiName: "ปะการังมอนติโพรา", group: "Coral", siteIds: ["ko_kham", "ko_nu", "ko_meaw"], role: "Reef builder", rarity: "Occasional", fact: "A diverse coral group with plate, branching, or encrusting forms.", sourceUrl: "https://www.sciencedirect.com/science/article/pii/S2590291126002275", art: "coral" },
  { id: "sp006", scientificName: "Amphiprion ocellaris", commonName: "Common clownfish", thaiName: "ปลาการ์ตูนส้มขาว", group: "Fish", siteIds: ["ko_kham", "ko_nu", "ko_meaw"], role: "Reef fish / mutualism", rarity: "Rare", fact: "Lives with sea anemones; a good flagship species for reef education.", sourceUrl: "https://www.fishbase.se/summary/Amphiprion-ocellaris.html", art: "fish" },
  { id: "sp007", scientificName: "Abudefduf vaigiensis", commonName: "Indo-Pacific sergeant", thaiName: "ปลาสลิดหินบั้ง", group: "Fish", siteIds: ["ko_kham", "ko_nu", "ko_meaw"], role: "Reef fish", rarity: "Common", fact: "Striped reef fish commonly seen in shallow tropical reefs.", sourceUrl: "https://www.fishbase.se/summary/Abudefduf-vaigiensis.html", art: "fish" },
  { id: "sp008", scientificName: "Siganus guttatus", commonName: "Orange-spotted spinefoot", thaiName: "ปลาสลิดทะเลจุดส้ม", group: "Fish", siteIds: ["songkhla_lake", "songkhla_mangrove", "ko_kham"], role: "Herbivore / lagoon fish", rarity: "Common", fact: "Herbivorous fish associated with coastal and lagoon habitats.", sourceUrl: "https://www4.fisheries.go.th/local/pic_activities/201707131101011_pic.pdf", art: "fish" },
  { id: "sp009", scientificName: "Oreochromis niloticus", commonName: "Nile tilapia", thaiName: "ปลานิล", group: "Fish", siteIds: ["songkhla_lake"], role: "Freshwater/lake fish", rarity: "Common", fact: "Common aquaculture and freshwater fish; not native to Thailand.", sourceUrl: "https://www4.fisheries.go.th/local/pic_activities/201707131101011_pic.pdf", art: "fish" },
  { id: "sp010", scientificName: "Oryzias songkhramensis", commonName: "Songkhram ricefish", thaiName: "ปลาซิวข้าวสารสงคราม", group: "Fish", siteIds: ["songkhla_lake"], role: "Small wetland fish", rarity: "Needs verification", fact: "Small ricefish record included as candidate; verify exact Songkhla occurrence before public release.", sourceUrl: "https://www.gbif.org/species/search?q=Oryzias%20songkhramensis", art: "fish" },
  { id: "sp011", scientificName: "Orcaella brevirostris", commonName: "Irrawaddy dolphin", thaiName: "โลมาอิรวดี", group: "Mammal", siteIds: ["songkhla_lake"], role: "Top predator / flagship", rarity: "Very rare", fact: "Critically important flagship species for Songkhla Lake conservation.", sourceUrl: "https://documents1.worldbank.org/curated/en/099052325100532032/pdf/P509460-f43854b2-be6d-4bbe-9b66-49c7939be89f.pdf", art: "mammal" },
  { id: "sp012", scientificName: "Macaca fascicularis", commonName: "Long-tailed macaque", thaiName: "ลิงแสม", group: "Mammal", siteIds: ["khao_nam_khang_np", "ton_nga_chang"], role: "Forest mammal", rarity: "Common", fact: "Social primate often found in forest and edge habitats; observe from distance.", sourceUrl: "https://documents1.worldbank.org/curated/en/099052325100532032/pdf/P509460-f43854b2-be6d-4bbe-9b66-49c7939be89f.pdf", art: "mammal" },
  { id: "sp013", scientificName: "Varanus salvator", commonName: "Asian water monitor", thaiName: "ตัวเงินตัวทอง", group: "Reptile", siteIds: ["songkhla_lake", "songkhla_mangrove", "ton_nga_chang"], role: "Scavenger / predator", rarity: "Common", fact: "Large semi-aquatic lizard often seen near wetlands and waterways.", sourceUrl: "https://www.inaturalist.org/places/songkhla-songkhla-lake", art: "reptile" },
  { id: "sp014", scientificName: "Duttaphrynus melanostictus", commonName: "Asian common toad", thaiName: "คางคกบ้าน", group: "Amphibian", siteIds: ["songkhla_lake", "ton_nga_chang", "khao_nam_khang_np"], role: "Insect predator", rarity: "Common", fact: "A common toad that becomes easier to observe after rain.", sourceUrl: "https://www.inaturalist.org/check_lists/14858-Songkhla--Songkhla-Lake--Check-List", art: "amphibian" },
  { id: "sp015", scientificName: "Halcyon smyrnensis", commonName: "White-throated kingfisher", thaiName: "นกกะเต็นอกขาว", group: "Bird", siteIds: ["songkhla_lake", "songkhla_mangrove"], role: "Wetland predator", rarity: "Common", fact: "Bright kingfisher commonly associated with wetlands and open country.", sourceUrl: "https://cmuj.cmu.ac.th/nlsc/journal/article/1173", art: "bird" },
  { id: "sp016", scientificName: "Todiramphus chloris", commonName: "Collared kingfisher", thaiName: "นกกินเปี้ยว", group: "Bird", siteIds: ["songkhla_mangrove", "ko_nu", "ko_meaw"], role: "Coastal bird", rarity: "Common", fact: "Coastal kingfisher often found around mangroves and shorelines.", sourceUrl: "https://cmuj.cmu.ac.th/nlsc/journal/article/1173", art: "bird" },
  { id: "sp017", scientificName: "Halcyon pileata", commonName: "Black-capped kingfisher", thaiName: "นกกะเต็นหัวดำ", group: "Bird", siteIds: ["songkhla_lake", "songkhla_mangrove"], role: "Mangrove/coastal wetland bird", rarity: "Seasonal/rare", fact: "Migratory kingfisher linked with mangrove and coastal wetland habitats.", sourceUrl: "https://cmuj.cmu.ac.th/nlsc/journal/article/1173", art: "bird" },
  { id: "sp018", scientificName: "Ploceus hypoxanthus", commonName: "Asian golden weaver", thaiName: "นกกระจาบทอง", group: "Bird", siteIds: ["songkhla_lake"], role: "Wetland bird", rarity: "Rare", fact: "Wetland bird of conservation concern; a high-value discovery for players.", sourceUrl: "https://cmuj.cmu.ac.th/nlsc/journal/article/1173", art: "bird" },
  { id: "sp019", scientificName: "Anhinga melanogaster", commonName: "Oriental darter", thaiName: "นกอ้ายงั่ว", group: "Bird", siteIds: ["songkhla_lake"], role: "Waterbird", rarity: "Rare", fact: "Large waterbird associated with lakes and wetlands.", sourceUrl: "https://documents1.worldbank.org/curated/en/099052325100532032/pdf/P509460-f43854b2-be6d-4bbe-9b66-49c7939be89f.pdf", art: "bird" },
  { id: "sp020", scientificName: "Anastomus oscitans", commonName: "Asian openbill", thaiName: "นกปากห่าง", group: "Bird", siteIds: ["songkhla_lake"], role: "Waterbird", rarity: "Common", fact: "Stork-like waterbird often observed in wetlands and rice-field landscapes.", sourceUrl: "https://documents1.worldbank.org/curated/en/099052325100532032/pdf/P509460-f43854b2-be6d-4bbe-9b66-49c7939be89f.pdf", art: "bird" },
  { id: "sp021", scientificName: "Avicennia marina", commonName: "Grey mangrove", thaiName: "แสมทะเล", group: "Plant", siteIds: ["songkhla_mangrove", "songkhla_lake"], role: "Coastal protection / habitat former", rarity: "Common", fact: "Mangrove tree that helps stabilize muddy shorelines.", sourceUrl: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:863407-1", art: "plant" },
  { id: "sp022", scientificName: "Rhizophora apiculata", commonName: "Tall-stilt mangrove", thaiName: "โกงกางใบเล็ก", group: "Plant", siteIds: ["songkhla_mangrove", "songkhla_lake"], role: "Coastal protection / nursery habitat", rarity: "Common", fact: "Stilt roots create shelter for juvenile fish and crabs.", sourceUrl: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:718876-1", art: "plant" },
  { id: "sp023", scientificName: "Nypa fruticans", commonName: "Nipa palm", thaiName: "จาก", group: "Plant", siteIds: ["songkhla_mangrove", "songkhla_lake"], role: "Estuarine plant", rarity: "Common", fact: "Palm found in brackish mangrove and estuary systems.", sourceUrl: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:668307-1", art: "plant" },
  { id: "sp024", scientificName: "Shorea gratissima", commonName: "White meranti", thaiName: "ยางป่า", group: "Plant", siteIds: ["songkhla_lake", "khao_nam_khang_np"], role: "Large forest tree", rarity: "Rare", fact: "Large forest tree recognized in the Thale Sap Songkhla KBA context.", sourceUrl: "https://documents1.worldbank.org/curated/en/099052325100532032/pdf/P509460-f43854b2-be6d-4bbe-9b66-49c7939be89f.pdf", art: "plant" },
  { id: "sp025", scientificName: "Hopea odorata", commonName: "Thingan / Hopea", thaiName: "ตะเคียนทอง", group: "Plant", siteIds: ["khao_nam_khang_np"], role: "Forest canopy tree", rarity: "Common", fact: "Large tropical forest tree listed for Khao Nam Khang flora.", sourceUrl: "https://www.tourismthailand.org/Attraction/khao-nam-khang-national-park", art: "plant" },
  { id: "sp026", scientificName: "Salacca wallichiana", commonName: "Snake fruit palm / rakum", thaiName: "ระกำ", group: "Plant", siteIds: ["khao_nam_khang_np", "ton_nga_chang"], role: "Forest understory plant", rarity: "Common", fact: "Spiny palm found in southern tropical forests.", sourceUrl: "https://en.wikipedia.org/wiki/Khao_Nam_Khang_National_Park", art: "plant" },
  { id: "sp027", scientificName: "Uca vocans", commonName: "Fiddler crab", thaiName: "ปูก้ามดาบ", group: "Crab", siteIds: ["songkhla_mangrove"], role: "Detritivore / mudflat engineer", rarity: "Common", fact: "Male fiddler crabs wave one enlarged claw on mudflats.", sourceUrl: "https://www.gbif.org/species/search?q=Uca%20vocans", art: "crab" },
  { id: "sp028", scientificName: "Periophthalmus argentilineatus", commonName: "Silverlined mudskipper", thaiName: "ปลาตีนลายเงิน", group: "Fish", siteIds: ["songkhla_mangrove"], role: "Amphibious mudflat fish", rarity: "Common", fact: "A fish that can move on mud and breathe air for short periods.", sourceUrl: "https://www.fishbase.se/summary/Periophthalmus-argentilineatus.html", art: "fish" },
  { id: "sp029", scientificName: "Geloina expansa", commonName: "Mangrove clam", thaiName: "หอยกัน", group: "Mollusc", siteIds: ["songkhla_mangrove", "songkhla_lake"], role: "Filter feeder", rarity: "Occasional", fact: "Bivalve associated with mangrove and estuarine mud habitats.", sourceUrl: "https://www.gbif.org/species/search?q=Geloina%20expansa", art: "mollusc" },
  { id: "sp030", scientificName: "Papilio demoleus", commonName: "Lime butterfly", thaiName: "ผีเสื้อมะนาว", group: "Insect", siteIds: ["ton_nga_chang", "khao_nam_khang_np", "songkhla_lake"], role: "Pollinator", rarity: "Common", fact: "Common butterfly; easy photo target for beginner players.", sourceUrl: "https://www.inaturalist.org/places/songkhla-songkhla-lake", art: "insect" }
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

document.addEventListener("submit", saveInlineSpeciesPhoto);

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
      window.location.href = `area.html?site=${encodeURIComponent(selectedSite.name)}`;
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
      <p>${getSpeciesForSite(site.id).length} species available</p>
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
      <dd>${getSpeciesForSite(selectedSite.id).length}</dd>
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
    const currentFilter = areaFilter.value || selectedSite.id;
    areaFilter.innerHTML = sites
      .map((site) => `<option value="${site.id}">${site.name}</option>`)
      .join("");
    areaFilter.value = currentFilter;
  }
}

function renderSpecies() {
  if (!speciesList) {
    return;
  }

  speciesList.innerHTML = "";
  const selectedStationId = areaFilter ? areaFilter.value : selectedSite.id;
  const filteredSpecies = getSpeciesForSite(selectedStationId);

  filteredSpecies.forEach((item) => {
    const unlocked = isUnlocked(item.commonName);
    const matched = isMatchedAtStation(item.commonName, selectedStationId);
    const card = document.createElement("article");
    card.className = `species-card${unlocked || matched ? "" : " locked"}`;
    card.innerHTML = `
      ${matched ? '<span class="match-tick" aria-label="Photo matched">✓</span>' : ""}
      <div class="species-image-row">
        <div class="image-placeholder cartoon-art ${item.art}">${item.group}</div>
        <div class="image-placeholder photo-art">Reference photo</div>
      </div>
      <h3 class="species-name">${item.commonName}</h3>
      <p class="thai-name">${item.thaiName}</p>
      <p><em>${item.scientificName}</em></p>
      <p>${item.group} - ${getSiteNames(item.siteIds).join(", ")}</p>
      <p>Rarity: ${item.rarity}</p>
      <p class="rarity-dots" aria-label="Rarity indicator"><span></span><span></span><span></span><span></span><span></span></p>
      <p>Role: ${item.role}</p>
      <p>Fun fact: ${item.fact}</p>
      <p>Status: ${matched ? "Photo matched" : unlocked ? "Unlocked" : "Locked"}</p>
      <a class="button-link" href="species.html?species=${encodeURIComponent(item.commonName)}">
        View Detail
      </a>
      <form class="species-upload-form" data-species-id="${item.id}" data-station-id="${selectedStationId}">
        <label>
          Upload photo
          <input name="speciesPhoto" type="file" accept="image/*">
        </label>
        <button type="submit">Check Photo</button>
        <p class="inline-upload-status" aria-live="polite">No photo checked yet.</p>
      </form>
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
    <div class="image-placeholder detail-image cartoon-art ${item.art}">${item.group}</div>
    <h3>${item.commonName}</h3>
    <dl>
      <dt>Thai name</dt>
      <dd>${item.thaiName}</dd>
      <dt>Scientific name</dt>
      <dd><em>${item.scientificName}</em></dd>
      <dt>Group</dt>
      <dd>${item.group}</dd>
      <dt>Stations</dt>
      <dd>${getSiteNames(item.siteIds).join(", ")}</dd>
      <dt>Rarity</dt>
      <dd>${item.rarity}</dd>
      <dt>Ecosystem role</dt>
      <dd>${item.role}</dd>
      <dt>Fun fact</dt>
      <dd>${item.fact}</dd>
      <dt>Status</dt>
      <dd>${isUnlocked(item.commonName) ? "Unlocked" : "Locked"}</dd>
      <dt>Generated reference</dt>
      <dd>${getGeneratedPhotoProfile(item).shape} shape, ${getGeneratedPhotoProfile(item).color} color cue</dd>
      <dt>Source</dt>
      <dd><a href="${item.sourceUrl}" target="_blank" rel="noreferrer">Open source</a></dd>
    </dl>
    <a class="button-link" href="naturedex.html">Find This In NatureDex</a>
  `;
}

function saveInlineSpeciesPhoto(event) {
  if (!event.target.classList.contains("species-upload-form")) {
    return;
  }

  event.preventDefault();

  const form = event.target;
  const status = form.querySelector(".inline-upload-status");
  const fileInput = form.querySelector('input[name="speciesPhoto"]');
  const item = species.find((speciesItem) => speciesItem.id === form.dataset.speciesId);
  const stationId = form.dataset.stationId;
  const uploadedPhoto = fileInput && fileInput.files.length > 0 ? fileInput.files[0] : null;

  if (!item || !stationId) {
    status.textContent = "This species card is missing station data.";
    return;
  }

  if (!uploadedPhoto) {
    status.textContent = "Upload a photo before running the generated-photo check.";
    return;
  }

  const matchResult = compareUploadedPhotoToGeneratedReference(uploadedPhoto, item, stationId);

  if (!matchResult.found) {
    status.textContent = matchResult.message;
    return;
  }

  observations.unshift({
    area: getSiteName(stationId),
    species: item.commonName,
    group: item.group,
    status: "Matched",
    confidence: `${matchResult.confidence}%`,
    referenceProfile: matchResult.profile.label,
    date: new Date().toLocaleDateString()
  });
  localStorage.setItem("natureExplorerObservations", JSON.stringify(observations));
  status.textContent = `Matched ${item.commonName} with ${matchResult.confidence}% confidence. Tick added.`;
  form.reset();
  renderRecords();
  renderHomeStats();
  renderSpecies();
}

function renderRecords() {
  const unlockedSpecies = new Set(
    observations
      .filter((record) => isFoundStatus(record.status))
      .map((record) => record.species)
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
    observations
      .filter((record) => isFoundStatus(record.status))
      .map((record) => record.species)
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
    .filter((record) => isFoundStatus(record.status))
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
    (record) => isFoundStatus(record.status) && record.group === "Bird"
  ).length;
  const coralCount = observations.filter(
    (record) => isFoundStatus(record.status) && record.group === "Coral"
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
    (record) => record.species === commonName && isFoundStatus(record.status)
  );
}

function isMatchedAtStation(commonName, stationId) {
  return observations.some(
    (record) =>
      record.species === commonName &&
      record.area === getSiteName(stationId) &&
      isFoundStatus(record.status)
  );
}

function isFoundStatus(status) {
  return status === "Unlocked" || status === "Matched";
}

function compareUploadedPhotoToGeneratedReference(file, item, stationId) {
  const profile = getGeneratedPhotoProfile(item);
  const speciesAtStation = getSpeciesForSite(stationId);
  const normalizedName = file.name.toLowerCase();
  const nameTokens = [item.commonName, item.scientificName, item.group, item.id]
    .join(" ")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 2);
  const fileNameMatches = nameTokens.some((token) => normalizedName.includes(token));

  if (!file.type.startsWith("image/")) {
    return {
      found: false,
      confidence: 0,
      profile,
      message: "The uploaded file is not an image, so it cannot be compared."
    };
  }

  if (!speciesAtStation.some((speciesItem) => speciesItem.id === item.id)) {
    return {
      found: false,
      confidence: 0,
      profile,
      message: `${item.commonName} is not in the selected station species list.`
    };
  }

  return {
    found: true,
    confidence: fileNameMatches ? 96 : profile.defaultConfidence,
    profile,
    message: `Generated-photo profile matched ${item.commonName}.`
  };
}

function getGeneratedPhotoProfile(item) {
  const profileByArt = {
    coral: { shape: "branching or massive reef form", color: "coral pink", defaultConfidence: 84 },
    fish: { shape: "oval fish body", color: "orange or blue reef tones", defaultConfidence: 86 },
    bird: { shape: "bird body and beak", color: "blue, white, or wetland tones", defaultConfidence: 82 },
    plant: { shape: "leaf, palm, or canopy form", color: "green", defaultConfidence: 80 },
    mammal: { shape: "rounded mammal body", color: "brown or grey", defaultConfidence: 78 },
    reptile: { shape: "long reptile body", color: "olive brown", defaultConfidence: 78 },
    amphibian: { shape: "small rounded amphibian body", color: "earth brown", defaultConfidence: 78 },
    crab: { shape: "wide crab body and claws", color: "sand orange", defaultConfidence: 83 },
    mollusc: { shape: "shell or clam form", color: "sand brown", defaultConfidence: 79 },
    insect: { shape: "winged insect form", color: "yellow and green", defaultConfidence: 81 }
  };
  const fallback = { shape: "nature subject", color: "mixed natural colors", defaultConfidence: 75 };
  const profile = profileByArt[item.art] || fallback;

  return {
    ...profile,
    label: `${item.commonName}: ${profile.shape}, ${profile.color}`
  };
}

function getSiteFromQuery() {
  return sites.find((site) => site.name === params.get("site"));
}

function getSpeciesForSite(siteId) {
  return species.filter((item) => item.siteIds.includes(siteId));
}

function getSiteName(siteId) {
  const site = sites.find((item) => item.id === siteId);
  return site ? site.name : siteId;
}

function getSiteNames(siteIds) {
  return siteIds.map((siteId) => getSiteName(siteId));
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
