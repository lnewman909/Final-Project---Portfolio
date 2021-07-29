"use strict";


/*Set the data displayed in the calendar */

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1); //January is 0!
var yyyy = today.getFullYear();

var today = months[mm] + ' '+ dd + ', ' + yyyy;

var thisDay = new Date(today);

/*Write the HTML code for the event list tabl */

var tableHTML = "<table id='eventTable'>";
tableHTML += "<caption>Upcoming Hikes</caption>"
tableHTML += "<tr><th>Date</th><th>Event</th></tr>"
/*Set the end date of the event list two weeks from the current date */

var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

/*Loop through the eventDates array */
for (var i = 0; i < eventDates.length; i++) {
    var eventDate = new Date(eventDates[i]);
    var eventDay = eventDate.toDateString();
    var eventTime = eventDate.toLocaleTimeString();


/*if the even date is within the two-week window, display it on the page */
    if (thisDay <= eventDate && eventDate <=endDate) {
        tableHTML += "<tr>";
        tableHTML += "<td>"+eventDay + " @ " + eventTime + "</td>";
        tableHTML += "<td>"+eventDescriptions[i]+"</td>";
        tableHTML += "</tr>";
    }


}
tableHTML += "</table>";
/*Write the html code into the event list box */
document.getElementById("eventList").innerHTML = tableHTML;

