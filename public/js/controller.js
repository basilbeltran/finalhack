// angular.module('splitItApp', [])
// 	.controller('mainController', mainController);

// mainController.$inject = ['boatFactory'];

// function mainController(boatFactory) {
// 	var main = this;
// 	main.boat = {};
// 	main.newBoat = {};
//     main.boatList = [];

//     main.createBoat = function() {
//     	boatFactory.createBoat(main.newBoat)
//     		.then(function(returnData) {
//     			main.newBoat = {}; //reset the form
//     			main.getBoat(); // will show boat created
//     			console.log('Response from server: ', returnData)
//     		});
//     }

//     main.getBoat = function(boats) {
//     	boatFactory.getBoat('/api/boats', boats)
//     		.then(function(returnData) {
//     			if(returnData.data.length) {
//     				// if array (has length), store in boatList
//     				main.boatList = returnData.data;
//     			}
//     			else {
//     				//if not, store in main.boat?
//     				main.boat = returnData.data;
//     			}
// 			})
// 	}


// main.getBoat(); // get all the boats
// main.getBoat("123123234234"); // get one boat by ID
// }
