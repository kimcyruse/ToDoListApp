// CHECKS OFF ANY TODO ITEM
// turns the todo items gray and add a strikethrough effect
// using on click listener to the entire ul parent element that already exist when the page load
// with a second argument of "li", so when you click an li inside a ul
// run this code
$("ul").on("click", "li", function(){
    // toggle the class .completed on and off the li that we clicked on
    $(this).toggleClass("completed");
});

// CLICK ON X TO DELETE TODO ITEM
// pass an event as a parameter to stop event from bubbling up
$("ul").on("click", "span", function(event){
    // a jQuery method that stop an event from bubbling up - stopPropagation()
    event.stopPropagation();
    // to target the parent element of <span> - parent()
    // and use fadeOut to remove the element
    // and insert a parameter to completely remove the element
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});

// ADD A NEW TODO ITEM
$("input[type='text']").on("keypress", function(event){
    // to check if enter key is pressed - ENTER which value is 13
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        // sets input value to empty ""
        $(this).val("");
        // create a new li and add to ul
        // append() - can only take a string of html
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + " </li>");
    }
});