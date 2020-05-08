// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)
var currentDateAndTime = Date(Date.now());
//Current hour in military time
var currentHour = new Date().getHours();

//run when page loads--loading previously stored planner items
var timeSlot = localStorage.getItem("saved");



function intervalUpdate(){
    $("#currentDay").html(currentDateAndTime);

    //Re-run the function on an interval (every 60s?) to update as time changes
    for(i = 0; i < currentDateAndTime; i++){
       
    }
    /* Load data for 9AM block from localStorage
    - Load data for 10AM block from localStorage
    - Load data for 11AM block from localStorage
    - Load data for 12PM block from localStorage
    - Load data for 1PM block from localStorage
    - Load data for 2PM block from localStorage
    - Load data for 3PM block from localStorage
    - Load data for 4PM block from localStorage
    - Load data for 5PM block from localStorage
    - Update the current date/time at the top of the page */

}
intervalUpdate();




function updateHours(){
    //Get the current hour in military time (i.e. 14 for 2pm)
    //Loop over all of the .time-blocks
   
    
    $('.time-block').each(function() {
        var blockHour = parseInt($(this).attr('id').split('-')[1])
        console.log(blockHour);
        console.log(currentHour);
        
        //Figure out which hour this block represents
        // If this block's hour is less than the current hour:
        if()
            $(this).removeClass('future')
            $(this).addClass('past')
            // Add the class "past" to this block
        // Else if this block's hour is the current hour:
                // Remove "past" class from this time block
                // Add "present" class to this time block
        // Else
          // Remote the "past" class from this time block
          // Remove the "present" class from this time block
          //Add the "future" class to this time block
    })

}
updateHours();


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


//when save button is clicked, value is saved to local storage ^^
$(".saveBtn").click(function(){
    var timeKey = $(this).parent().attr("id");
    var valueText = $(this).siblings(".description").val();
    
    localStorage.setItem(timeKey, valueText);
})
 














/* - Wait for DOM to be "ready", then...
- Create a function to update the hours
  - Get the current hour in military time (i.e. 14 for 2pm)
  - Loop over all of the .time-blocks
    - Figure out which hour this block represents
    - If this block's hour is less than the current hour:
      - Add the class "past" to this block
    - Else if this block's hour is the current hour:
      - Remove "past" class from this time block
      - Add "present" class to this time block
    - Else
      - Remote the "past" class from this time block
      - Remove the "present" class from this time block
      - Add the "future" class to this time block
- Call the function we just created to update the hours the first time
- Re-run the function on an interval (every 60s?) to update as time changes
- Load data for 9AM block from localStorage
- Load data for 10AM block from localStorage
- Load data for 11AM block from localStorage
- Load data for 12PM block from localStorage
- Load data for 1PM block from localStorage
- Load data for 2PM block from localStorage
- Load data for 3PM block from localStorage
- Load data for 4PM block from localStorage
- Load data for 5PM block from localStorage
- Update the current date/time at the top of the page
- Set up a click handler for the save button:
  - Get the value from the textarea in the block that is being saved
  - Get the time (i.e. 9) of the time block that's being saved
  - Store the value from the textarea in localStorage, using the hour as the key */
