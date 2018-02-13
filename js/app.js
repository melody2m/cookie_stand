'use strict;'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookStores = []

//cookie store constructor

function cookStore(name, minCustHr, maxCustHr, cookiesPerCust, title, loc) {
    this.name = name;
    this.minCustHr = minCustHr;
    this.maxCustHr = maxCustHr;
    this.cookiesPerCust = cookiesPerCust;
    this.cookiesEachHour = [];
    this.totalCooks= 0;
    this.location= loc;
    cookStores.push(this);
};


cookStore.prototype.custPerHr = function(){
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
};

cookStore.prototype.calcCooksPerHour = function(){
    for(var i=0; i < hours.length; i++){
        this.cookiesEachHour.push(Math.round(this.custPerHr() * this.cookiesPerCust));
        this.totalCooks += this.cookiesEachHour[i];
        console.log(this.totalCooks);
    };
};

cookStore.prototype.render = function() {
    this.calcCooksPerHour();
    var trEl = document.createElement('tr');
    
    var tdElFirst = document.createElement('td')
    tdElFirst.textContent = this.name;
    trEl.appendChild(tdElFirst);

    for (var i = 0; i < this.cookiesEachHour.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = this.cookiesEachHour[i];
        trEl.appendChild(tdEl);
    }
    var tdElLast = document.createElement('td')
    tdElLast.textContent = this.totalCooks;
    trEl.appendChild(tdElLast);

    cookTable.appendChild(trEl);
}
    
// table head render function

function renderHead(){
    var trEl = document.createElement('tr');
    
    var thElFirst = document.createElement('th')
    thElFirst.textContent = 'Location';
    trEl.appendChild(thElFirst);
    
    for (var i=0; i < hours.length; i++){
        var thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }

    var thElLast = document.createElement('th')
    thElLast.textContent = 'Location Total';
    trEl.appendChild(thElLast);
    
    cookTable.appendChild(trEl);
}

// create store objects

var firstAndPike = new cookStore('1st and Pike', 23, 65, 6.3);
var seaTac = new cookStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new cookStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new cookStore('Capitol Hill', 20, 38, 2.3);
var alki = new cookStore('Alki', 2, 16, 4.6);

// render table body function

function renderBody(){
    for (var i=0; i < cookStores.length; i++){
        cookStores[i].render();
    }
}


function renderFoot(){
    var hourlySums = [];
    var hourlyTotal = 0;
    var grandTotal = 0;

    for (var j=0; j < hours.length; j++){
        hourlyTotal = 0;
        for (var i =0; i < cookStores.length; i++){
            hourlyTotal += cookStores[i].cookiesEachHour[j];
            grandTotal += cookStores[i].cookiesEachHour[j];
        }
        hourlySums.push(hourlyTotal);
    }
    console.log(hourlySums);

    var trEl = document.createElement('tr');
    
    var tdElFirst = document.createElement('td')
    tdElFirst.textContent = 'Totals';
    trEl.appendChild(tdElFirst);
    
    for (var i=0; i < hours.length; i++){
        var tdEl = document.createElement('td');
        tdEl.textContent = hourlySums[i];
        trEl.appendChild(tdEl);
    }

    var tdElLast = document.createElement('td')
    tdElLast.textContent = grandTotal;
    trEl.appendChild(tdElLast);
    
    cookTable.appendChild(trEl);
}

// call render functions to populate table

renderHead();
renderBody();
renderFoot();