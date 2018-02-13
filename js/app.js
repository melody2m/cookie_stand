'use strict;'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm'];

// first location, 1st and Pike

var firstAndPike = {
    name: '1st and Pike',
    minCustHr: 23,
    maxCustHr: 65,
    custPerHr: function(){
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    },
    cookiesEachHour: [],
    cookiesPerCust: 6.3,
    calcCooksPerHour: function(){
        for(var i=0; i < hours.length; i++){
            var round = Math.round(this.custPerHr() * this.cookiesPerCust);
            this.cookiesEachHour.push(round);
        };
    return this.cookiesEachHour;
    },
    
    calcTotalCooks: function(){
        var sumArray = [0];
        for(var i=0; i < this.cookiesEachHour.length; i++){
            sumArray.push(sumArray[i] + this.cookiesEachHour[i]);
            console.log(sumArray[i]);
        }
        return sumArray[i];
    },

    render: function() {
        var ulEl = document.getElementById('loc1');
        for (var i = 0; i < this.cookiesEachHour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
        ulEl.appendChild(liEl);
        }
        var liTotal = document.createElement('li');
        liTotal.textContent = 'Total: ' + this.calcTotalCooks();
        ulEl.appendChild(liTotal);
    }
}

firstAndPike.custPerHr();
firstAndPike.calcCooksPerHour();
firstAndPike.calcTotalCooks();
firstAndPike.render();

//second location

var seaTacAirport = {
    name: 'SeaTac Airport',
    minCustHr: 3,
    maxCustHr: 24,
    custPerHr: function(){
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    },
    cookiesEachHour: [],
    cookiesPerCust: 1.2,
    calcCooksPerHour: function(){
        for(var i=0; i < hours.length; i++){
            var round = Math.round(this.custPerHr() * this.cookiesPerCust);
            this.cookiesEachHour.push(round);
        };
    return this.cookiesEachHour;
    },
    
    calcTotalCooks: function(){
        var sumArray = [0];
        for(var i=0; i < this.cookiesEachHour.length; i++){
            sumArray.push(sumArray[i] + this.cookiesEachHour[i]);
            console.log(sumArray[i]);
        }
        return sumArray[i];
    },

    render: function() {
        var ulEl = document.getElementById('loc2');
        for (var i = 0; i < this.cookiesEachHour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
        ulEl.appendChild(liEl);
        }
        var liTotal = document.createElement('li');
        liTotal.textContent = 'Total: ' + this.calcTotalCooks();
        ulEl.appendChild(liTotal);
    }
}

seaTacAirport.custPerHr();
seaTacAirport.calcCooksPerHour();
seaTacAirport.calcTotalCooks();
seaTacAirport.render();

//third location

var seattleCenter = {
    name: 'Seattle Center',
    minCustHr: 11,
    maxCustHr: 38,
    custPerHr: function(){
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    },
    cookiesEachHour: [],
    cookiesPerCust: 3.7,
    calcCooksPerHour: function(){
        for(var i=0; i < hours.length; i++){
            var round = Math.round(this.custPerHr() * this.cookiesPerCust);
            this.cookiesEachHour.push(round);
        };
    return this.cookiesEachHour;
    },
    
    calcTotalCooks: function(){
        var sumArray = [0];
        for(var i=0; i < this.cookiesEachHour.length; i++){
            sumArray.push(sumArray[i] + this.cookiesEachHour[i]);
            console.log(sumArray[i]);
        }
        return sumArray[i];
    },

    render: function() {
        var ulEl = document.getElementById('loc3');
        for (var i = 0; i < this.cookiesEachHour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
        ulEl.appendChild(liEl);
        }
        var liTotal = document.createElement('li');
        liTotal.textContent = 'Total: ' + this.calcTotalCooks();
        ulEl.appendChild(liTotal);
    }
}

seattleCenter.custPerHr();
seattleCenter.calcCooksPerHour();
seattleCenter.calcTotalCooks();
seattleCenter.render();

//location 4

var capitolHill = {
    name: 'Capitol Hill',
    minCustHr: 20,
    maxCustHr: 38,
    custPerHr: function(){
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    },
    cookiesEachHour: [],
    cookiesPerCust: 2.3,
    calcCooksPerHour: function(){
        for(var i=0; i < hours.length; i++){
            var round = Math.round(this.custPerHr() * this.cookiesPerCust);
            this.cookiesEachHour.push(round);
        };
    return this.cookiesEachHour;
    },
    
    calcTotalCooks: function(){
        var sumArray = [0];
        for(var i=0; i < this.cookiesEachHour.length; i++){
            sumArray.push(sumArray[i] + this.cookiesEachHour[i]);
            console.log(sumArray[i]);
        }
        return sumArray[i];
    },

    render: function() {
        var ulEl = document.getElementById('loc4');
        for (var i = 0; i < this.cookiesEachHour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
        ulEl.appendChild(liEl);
        }
        var liTotal = document.createElement('li');
        liTotal.textContent = 'Total: ' + this.calcTotalCooks();
        ulEl.appendChild(liTotal);
    }
}

capitolHill.custPerHr();
capitolHill.calcCooksPerHour();
capitolHill.calcTotalCooks();
capitolHill.render();

//location 5

var alki = {
    name: '1st and Pike',
    minCustHr: 2,
    maxCustHr: 16,
    custPerHr: function(){
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    },
    cookiesEachHour: [],
    cookiesPerCust: 4.6,
    calcCooksPerHour: function(){
        for(var i=0; i < hours.length; i++){
            var round = Math.round(this.custPerHr() * this.cookiesPerCust);
            this.cookiesEachHour.push(round);
        };
    return this.cookiesEachHour;
    },
    
    calcTotalCooks: function(){
        var sumArray = [0];
        for(var i=0; i < this.cookiesEachHour.length; i++){
            sumArray.push(sumArray[i] + this.cookiesEachHour[i]);
            console.log(sumArray[i]);
        }
        return sumArray[i];
    },

    render: function() {
        var ulEl = document.getElementById('loc5');
        for (var i = 0; i < this.cookiesEachHour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i];
        ulEl.appendChild(liEl);
        }
        var liTotal = document.createElement('li');
        liTotal.textContent = 'Total: ' + this.calcTotalCooks();
        ulEl.appendChild(liTotal);
    }
}

alki.custPerHr();
alki.calcCooksPerHour();
alki.calcTotalCooks();
alki.render();