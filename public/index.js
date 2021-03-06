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

//Exercice 4
function deductibleReductionChargeIncome(rentals, numberOfRentalDays, index){
	var deductibleReductionIncome;
		
		if(rentals[index].options.deductibleReduction == true){
			
			deductibleReductionIncome = 4*numberOfRentalDays;
		}
		else{
			
			deductibleReductionIncome = 0;
		}
	
	return deductibleReductionIncome;
}

function modifPricesWithDeductibleReductionCharge(rentals){
	
	var i;
	for(i = 0; i < rentals.length; i++){
		
		var numberOfRentalDays = rentalDays(rentals, i);
		var deductibleIncome = deductibleReductionChargeIncome(rentals, numberOfRentalDays, i);

		rentals[i].price += deductibleIncome;
	}
}

function getCommissionWithDeductibleReductionCharge(rentals){
	
	var i;
	var commissionWithDeductibleReductionCharge;
	for(i = 0; i < rentals.length; i++){
		
		var numberOfRentalDays = rentalDays(rentals, i);
		var deductibleIncome = deductibleReductionChargeIncome(rentals, numberOfRentalDays, i);

		commissionWithDeductibleReductionCharge = rentals[i].price*0.3;
		rentals[i].commission.insurance = commissionWithDeductibleReductionCharge*0.5;
		rentals[i].commission.assistance = numberOfRentalDays;
		rentals[i].commission.drivy = commissionWithDeductibleReductionCharge - (rentals[i].commission.insurance + rentals[i].commission.assistance) + deductibleIncome;
		
	}
	
}

//Exercice 5
function totalCommission(rentals, index){
	var i;
	var commission;
	
	commission = rentals[index].commission.insurance + rentals[index].commission.assistance + rentals[index].commission.drivy;
	
	return commission;
}

function payment(rentals, actors){
	var i;
	var j;
	var k;
	
	for(i = 0; i < rentals.length; i++){
		var commission = totalCommission(rentals, i);
		var numberOfRentalDays = rentalDays(rentals, i);
		var deductibleIncome = deductibleReductionChargeIncome(rentals, numberOfRentalDays, i);

		for(j = 0; j < actors.length; j++){
			if(rentals[i].id == actors[j].rentalId){
				for(k = 0; k < actors[j].payment.length; k++){
					if(actors[j].payment[k].who == "driver"){
						actors[j].payment[k].amount = rentals[i].price;
					}
					else if(actors[j].payment[k].who == "owner"){
						actors[j].payment[k].amount = rentals[i].price - (commission + deductibleIncome);
					}
					else if(actors[j].payment[k].who == "insurance"){
						actors[j].payment[k].amount = rentals[i].commission.insurance;
					}
					else if(actors[j].payment[k].who == "assistance"){
						actors[j].payment[k].amount = rentals[i].commission.assistance;
					}
					else{
						actors[j].payment[k].amount = rentals[i].commission.drivy + deductibleIncome;
					}
				}
			}
		}
	}
}

//main
function main(){
	
	modifPrices(cars, rentals);
	getCommission(rentals); //compute commission without deductibleReductionCharge
	modifPricesWithDeductibleReductionCharge(rentals);
	//getCommissionWithDeductibleReductionCharge(rentals);
	payment(rentals, actors);
	
}

main();

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);


