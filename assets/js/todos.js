// CHECKS OFF ANY TODO
// turns the todo items gray and add a strikethrough effect
$("li").on("click", function(){
    // toggle the class .completed on and off the li that we clicked on
    $(this).toggleClass("completed");
});

// CLICK ON X TO DELETE TODO
// pass an event as a parameter to stop event from bubbling up
$("span").on("click", function(event){
    // a jQuery method that stop an event from bubbling up - stopPropagation()
    event.stopPropagation();
    // to target the parent element of <span> - parent()
    // and use fadeOut to remove the element
    // and insert a parameter to completely remove the element
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});