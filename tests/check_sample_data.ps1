$ErrorActionPreference = "Stop"

$requiredFiles = @(
    "src/index.html",
    "src/map.html",
    "src/area.html",
    "src/naturedex.html",
    "src/upload.html",
    "src/records.html",
    "src/species.html",
    "src/styles.css",
    "src/app.js",
    "docs/agent_report.md",
    "species.csv",
    "README.md",
    "docs/architecture.md",
    "docs/testing.md"
)

foreach ($file in $requiredFiles) {
    if (-not (Test-Path -LiteralPath $file)) {
        throw "Missing required file: $file"
    }
}

$html = ""
foreach ($file in @("src/index.html", "src/map.html", "src/area.html", "src/naturedex.html", "src/upload.html", "src/records.html", "src/species.html")) {
    $html += Get-Content -Raw -LiteralPath $file
}

$script = Get-Content -Raw -LiteralPath "src/app.js"
$styles = Get-Content -Raw -LiteralPath "src/styles.css"
$appText = "$html`n$script`n$styles"

$requiredHtmlText = @(
    "Nature Explorer Songkhla",
    "Camera / Upload",
    "Records",
    "Station",
    "recordsTable",
    "areaSummary",
    "groupSummary",
    "homeCheckIns",
    "Today's mission",
    "Explore. Discover. Protect.",
    "brand-logo",
    "step-number",
    "camera-preview",
    "photoPreview",
    "photoCheckResult",
    "map.html",
    "naturedex.html",
    "upload.html",
    "records.html"
)

foreach ($text in $requiredHtmlText) {
    if ($html -notlike "*$text*") {
        throw "HTML pages do not contain expected text: $text"
    }
}

$requiredScriptText = @(
    "natureExplorerObservations",
    "localStorage.setItem",
    "window.location.href",
    "You need to be closer to this site to check in.",
    "Unlocked",
    "countUnlockedBy",
    "Fun fact",
    "natureExplorerCheckIns",
    "First Check-in Badge",
    "URLSearchParams",
    "renderSpeciesDetailPage",
    "area.html",
    "species.html",
    "site-thumb",
    "rarity-dots",
    "cartoon-art",
    "thaiName",
    "siteIds",
    "getSpeciesForSite",
    "fishbase.se",
    "sourceUrl",
    "compareUploadedPhotoToGeneratedReference",
    "getGeneratedPhotoProfile",
    "isMatchedAtStation",
    "Matched",
    "match-tick",
    "Photo matched"
)

foreach ($text in $requiredScriptText) {
    if ($appText -notlike "*$text*") {
        throw "MVP files do not contain expected behavior text: $text"
    }
}

$speciesRows = Import-Csv -LiteralPath "species.csv"
if ($speciesRows.Count -lt 30) {
    throw "species.csv should contain at least 30 species rows."
}

Write-Host "Sample data and MVP behavior checks passed."
