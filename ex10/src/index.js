function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Dino Merlin",
            title: "Moj je zivot Svicerska",
            release_year: 1999,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            id: 17
        }
    };
    return myMusic;
}
myFunction()[2];
console.log(myFunction()[2]);
module.exports = myFunction;