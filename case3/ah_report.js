"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author:  Ashlynn Hickman
   Date: 02/05/2020
   
   Filename: ah_report.js
   
   Functions:
   

   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/
// global variable
var donationTotal = 0;

   // calcSum(donorAmt)
   //    A callback function that adds the current donation amount in the array to the donationTotal variable
donors.forEach(function calcSum(donorAmt) {
	donationTotal += donorAmt[9];
});

// create a table 
var summaryTable =
	'<table><tr><th>Donors</th><td>' +
	donors.length +
	'</td><tr><tr><th>Total Donations</th><td>$' +
	donationTotal.toLocaleString() +
   '</td></tr></table>';

// display in html
document.getElementById('donationSummary').innerHTML = summaryTable;

// array majorDonors
var majorDonors = [];
majorDonors = donors.filter(findMajorDonors);
majorDonors.sort(function donorSortDescending(a, b) {
	return b[9] - a[9];
});
console.log(majorDonors);

// table
var donorTable =
	'<table><caption>Major Donors</caption><tr><th>Donation</th><th>Donor ID</th><th>Date</th><th>Name</th><th>Address</th><th>Phone</th><th>E-mail</th></tr>';

majorDonors.forEach(function writeDonorRow(value) {
	donorTable += '<tr>';
	donorTable += '<td>$' + value[9].toLocaleString() + '</td>';
	donorTable += '<td>' + value[0] + '</td>';
	donorTable += '<td>' + value[10] + '</td>';
	donorTable += '<td>' + value[2] + ', ' + value[1] + '</td>';
	donorTable += '<td>' + value[3] + '<br />' + value[4] + ', ' + value[5] + ' ' + value[6] + '</td>';
	donorTable += '<td>' + value[7] + '</td>';
	donorTable += '<td>' + value[8] + '</td>';
	donorTable += '</tr>';
});

// close table
donorTable += '</table>';

document.getElementById('donorTable').innerHTML = donorTable;

function findMajorDonors(donorAmt) {
	return donorAmt[9] >= 1000;
}