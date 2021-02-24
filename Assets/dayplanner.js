
// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)
var currentDateAndTime = Date(Date.now());
//Current hour in military time
var currentHour = new Date().getHours();
//run when page loads--loading previously stored planner items
var timeSlot = localStorage.getItem("saved");


//Displaying date and time at top of page
function timeAndHour(){
    $("#currentDay").html(currentDateAndTime);
    var newP = $("<p>");
    newP.text("It is the current hour of " + currentHour);
    $("#currentDay").append(newP);
    
}
timeAndHour();

//when save button is clicked, value is saved to local storage 
$(".saveBtn").click(function(){
    var timeKey = $(this).parent().attr("id");
    var valueText = $(this).siblings(".description").val();
    //setting timekey and value text to local storage
    localStorage.setItem(timeKey, valueText);
})

//getting items from local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));



function colorUpdater () {

    $(".time-block").each(function() {
        //taking the string and turning it into an integer for current hour. spliting the -number off of string.
        var blockHour = parseInt($(this).attr('id').split('-')[1])
        
         // If this block's hour is less than the current hour:
        if (blockHour < currentHour) {
            $(this).addClass('past');
            
        } else if (blockHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
            
        } else {
            $(this).addClass("future");
            
        } 
    })
}
colorUpdater();
setInterval(colorUpdater,60000);