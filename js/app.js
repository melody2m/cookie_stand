'use strict;'

// global variables

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookStores = []

//cookie store constructor

function cookStore(name, minCustHr, maxCustHr, cookiesPerCust) {
    this.name = name;
    this.minCustHr = minCustHr;
    this.maxCustHr = maxCustHr;
    this.cookiesPerCust = cookiesPerCust;
    this.cookiesEachHour = [];
    this.totalCooks= 0;
    cookStores.push(this);
};


cookStore.prototype.custPerHr = function(){
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
};

cookStore.prototype.calcCooksPerHour = function(){
    for(var i=0; i < hours.length; i++){
        this.cookiesEachHour.push(Math.round(this.custPerHr() * this.cookiesPerCust));
        this.totalCooks += this.cookiesEachHour[i];
    };
};

cookStore.prototype.render = function() {
    this.calcCooksPerHour();
    var trEl = document.createElement('tr');
    
    var tdElFirst = document.createElement('td')
    tdElFirst.textContent = this.name;
    trEl.appendChild(tdElFirst);

    for (var i = 0; i < hours.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = this.cookiesEachHour[i];
        trEl.appendChild(tdEl);
    }
    var tdElLast = document.createElement('td')
    tdElLast.textContent = this.totalCooks;
    this.totalCooks = 0;
    trEl.appendChild(tdElLast);

    cookTable.appendChild(trEl);
}

// render table head function

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

// render table body function

function renderBody(){
    for (var i=0; i < cookStores.length; i++){
        cookStores[i].render();
    }
}

// render table foot function

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
// render all function to populate table

function renderAll(){
    renderHead();
    renderBody();
    renderFoot();
}

// event handler for new location form submission

function handleFormSubmit(event) {
    
    event.preventDefault();
    
    // validation goes here

    var locId = event.target.locName.value;
    var minCust = event.target.minCust.value;
    var maxCust = event.target.maxCust.value;
    var salesPCust = event.target.salesPCust.value;

    var newLoc = new cookStore(locId, minCust, maxCust, salesPCust);

    // BAD CODE HERE, stretch goal for Wednesday, don't know 
    //what's wrong

    // for(var i=0; i < cookStores.length; i++){
    //     if (locId === cookStores[i].name){
    //     console.log ('names match')
    //         for (var j=0; j < hours.length; j++){
    //             cookStores[i].cookiesEachHour[j] = cookStores[cookStores.length -1].cookiesEachHour[j];
    //         };
    //     }
    //     else {
    //         break;
    //     }  
    // }

    event.target.locName.value = null;
    event.target.minCust.value = null;
    event.target.maxCust.value = null;
    event.target.salesPCust.value = null;

    cookTable.textContent = null;
    
    renderAll();
}

// event listener for Form Submission

newLocForm.addEventListener('submit', handleFormSubmit);

// create store objects

var firstAndPike = new cookStore('1st and Pike', 23, 65, 6.3);
var seaTac = new cookStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new cookStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new cookStore('Capitol Hill', 20, 38, 2.3);
var alki = new cookStore('Alki', 2, 16, 4.6);



// first call 

renderAll();