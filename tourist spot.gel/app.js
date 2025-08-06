const touristSpots = {
  "Mountain Province": {
    "Hanging Coffins of Sagada": "Ancient burial coffins hung on cliffs in Sagada, a unique cultural heritage site.",
    "Bomod-ok Falls": "A beautiful waterfall accessible via a scenic hike near Sagada.",
    "Echo Valley": "A valley famous for the hanging coffins and spectacular mountain views."
  },
  Benguet: {
    "Mt. Pulag": "The highest peak in Luzon known for its sea of clouds and rich biodiversity.",
    "Mines View Park": "A panoramic viewpoint overlooking old mining areas and mountain landscapes in Baguio City.",
    "Strawberry Farm": "Located in La Trinidad, this farm lets visitors pick fresh strawberries.",
    "Camp John Hay": "A leisure park in Baguio offering gardens, trails, and historical sites."
  }
};

const btnMountain = document.getElementById("btn-mountain");
const btnBenguet = document.getElementById("btn-benguet");
const spotsListSection = document.getElementById("spots-list-section");
const spotsList = document.getElementById("spots-list");
const spotDetailsSection = document.getElementById("spot-details-section");
const spotName = document.getElementById("spot-name");
const spotDescription = document.getElementById("spot-description");
const backToListBtn = document.getElementById("back-to-list");

btnMountain.addEventListener("click", () => showSpots("Mountain Province"));
btnBenguet.addEventListener("click", () => showSpots("Benguet"));
backToListBtn.addEventListener("click", () => {
  spotDetailsSection.hidden = true;
  spotsListSection.hidden = false;
});

function showSpots(province) {
  spotsListSection.querySelector("h2").textContent = `Tourist Spots in ${province}`;
  spotsList.innerHTML = "";

  for (const spot in touristSpots[province]) {
    const li = document.createElement("li");
    li.textContent = spot;
    li.addEventListener("click", () => showSpotDetails(province, spot));
    spotsList.appendChild(li);
  }

  spotsListSection.hidden = false;
  spotDetailsSection.hidden = true;
}

function showSpotDetails(province, spot) {
  spotName.textContent = spot;
  spotDescription.textContent = touristSpots[province][spot];
  spotsListSection.hidden = true;
  spotDetailsSection.hidden = false;
}
