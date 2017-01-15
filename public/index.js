'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

//Exercice1 & 2
function rentalDays(rentals, index){
	var rentalDays;
	
	var date1 = new Date(rentals[index].returnDate);
	var date2 = new Date(rentals[index].pickupDate);
	var returnDate = date1.getDate();
	var pickupDate = date2.getDate()-1;
	
	return rentalDays = returnDate - pickupDate;
}

function modifPrices(cars, rentals){
	var i;
	var j;
	for(i = 0; i < cars.length; i++){
		for(j = 0; j < rentals.length; j++){
			if(cars[i].id == rentals[j].carId){
				
				var numberOfRentalDays = rentalDays(rentals, j);
			
				if(numberOfRentalDays > 1 && numberOfRentalDays <= 4){
					rentals[j].price = numberOfRentalDays*(cars[i].pricePerDay*0.9) + rentals[j].distance*cars[i].pricePerKm;
				}
				else if(numberOfRentalDays > 4 && numberOfRentalDays <= 10){
					rentals[j].price = numberOfRentalDays*(cars[i].pricePerDay*0.7) + rentals[j].distance*cars[i].pricePerKm;
				}
				else if(numberOfRentalDays > 10){
					rentals[j].price = numberOfRentalDays*(cars[i].pricePerDay*0.5) + rentals[j].distance*cars[i].pricePerKm;
				}
				else{
					rentals[j].price = numberOfRentalDays*cars[i].pricePerDay + rentals[j].distance*cars[i].pricePerKm;
				}
			}
		}
	}
	
}

//Exercice 3
function getCommission(rentals){
	modifPrices(cars, rentals);
	
	var i;
	var commission;
	for(i = 0; i < rentals.length; i++){
		
		var numberOfRentalDays = rentalDays(rentals, i);
		
		commission = rentals[i].price*0.3;
		rentals[i].commission.insurance = commission*0.5;
		rentals[i].commission.assistance = numberOfRentalDays;
		rentals[i].commission.drivy = commission - (rentals[i].commission.insurance + rentals[i].commission.assistance);
		
	}
	
}

getCommission(rentals);

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);


