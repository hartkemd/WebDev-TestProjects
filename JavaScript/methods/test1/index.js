function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress...");
    }
}

var houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "kitchen", "lobby"]);
houseKeeper1.clean();
