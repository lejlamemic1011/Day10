function myFunction(propName) {
    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    }
    delete lion[propName];
    return lion;

}
myFunction("roar");
module.exports = myFunction;