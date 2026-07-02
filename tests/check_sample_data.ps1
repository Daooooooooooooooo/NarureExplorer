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
    "recordsTable",
    "areaSummary",
    "groupSummary",
    "homeCheckIns",
    "Today's mission",
    "Explore. Discover. Protect.",
    "brand-logo",
    "step-number",
    "camera-preview",
    "map.html",
    "naturedex.html",
    "upload.html",
    "records.html"
)

foreach ($text in $requiredHtmlText) {
    if ($html -notlike "*$text*") {
        throw "index.html does not contain expected text: $text"
    }
}

$requiredScriptText = @(
    "natureExplorerObservations",
    "localStorage.setItem",
    "You need to be closer to this site to check in.",
    "Pending verification",
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
    "cartoon-art"
)

foreach ($text in $requiredScriptText) {
    if ($appText -notlike "*$text*") {
        throw "MVP files do not contain expected behavior text: $text"
    }
}

Write-Host "Sample data and MVP behavior checks passed."
