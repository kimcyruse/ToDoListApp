// Check Off Specific Todos By CLicking
// turns the todo items gray and add a strikethrough effect
$("li").on("click", function(){
    // toggle the class .completed on the li that we clicked on
    $(this).toggleClass("completed");
});