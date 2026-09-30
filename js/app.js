var today = [14, 8, 2025];
var age = function (day, month, year) {
    var ageNow = 0;
    ageNow = today[2] - year;
    if (today[1] < month) {
        ageNow--;
    }
    else if ((today[1] === month) && (today[0] < day)) {
        ageNow--;
    }
    return ageNow;
};
console.log("Tu edad es de: ".concat(age(12, 1, 2010), " a\u00F1os"));
