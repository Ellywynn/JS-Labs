function TuristFirm(humans, days, rate) {
    this.humanCount = humans;
    this.daysNumber = days;
    this.coutryRate = rate;

    this.cost = function () {
        return humans*days*rate;
    }
}

let t = new TuristFirm(10, 5, 5);

for (let i in t) {
    document.write(i + ": " + t[i] + "<br>");
}

document.write("<br>");

document.write("Cost: " + t.cost() + "<br>");