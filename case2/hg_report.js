"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Ashlynn Hickman
   Date: 02/04/2020
   
   Filename: hg_report.js
	
*/

//local variables//

   //creates table using index values
   var gameReport = 
      "<h1>" + itemTitle[i] + "</h1>" +
      "<h2>By:" + itemManufacturer[i] + "</h2>" + 
      "<img src='hg_" + itemID[i] + ".png' alt='" + itemID[i] + "' id='gameImg' />" +
      "<table>" +
         "<tr><th>Product ID</th><td>" + itemID[i] + "</td></tr>" +
         "<tr><th>List Price</th><td>" + itemPrice[i] + "</td></tr>" +
         "<tr><th>Platform</th><td>" + itemPlatform[i] + "</td></tr>" +
         "<tr><th>ESRB Rating</th><td>" + itemESRB[i] + "</td></tr>" +
         "<tr><th>Condition</th><td>" + itemCondition[i] + "</td></tr>" +
         "<tr><th>Release</th><td>" + itemRelease[i] + "</td></tr>" +
      "</table>"
   ;

   //displays table
   document.getElementsByTagName("article").innerHTML += gameReport;

   //inital sum of ratingsSum = 0
   var ratingsSum = 0; 
   var ratingsCount = ratings.length; 
//--------------------------------------------------------


//loops//
   for (var i = 0; i < ratings.length; i++){
      ratingsSum++;
   }
   var ratingsAvg = ratingsSum / ratingsCount; 
   var ratingReport = 
      "<h1>Customer Reviews</h1>" +
      "<h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>"
   ;
   
   for (var i = 0; i < ratingSummaries.length; i++){
      ratings += 
         "<div class='review'>" + 
            "<h1>" + itemTitle[i] + "</h1>" + 
            "<table>" + 
               "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>" +
               "<tr><th>Review Date</th><td>" + ratingDates + "</td></tr>" +
               "<tr><th>Rating</th><td>"
      ;
      for (var i = 0; i < ratings.length; i++){
         ratingReport += "<img src='hg_star.png' />";
      }
      ratingReport += 
         "</td></tr></table>" +
         itemSummary +
         "</div>"
      ;
   }
//--------------------------------------------------------

document.getElementsByTagName("aside").innerHTML += ratingReport;

