$("ul").on("click","li",function()
{
    // var style={
    //     color:"gray",
    //     "text-decoration":"line-through"
    // };
    $(this).toggleClass("completed");

});

$("ul").on("click","span",function(event)
{
    $(this).parent().fadeOut(1000,function()
    {
        $(this).remove();

    });
    event.stopPropagation();


});

$("#newTodo").keypress(function(event)
{
    if(event.which===13)
    {
       var item=$(this).val();
        $("#todoList").append("<li><span><i class='fa fa-trash'></i> </span>"+item+"</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function()
{
    $("input[type='text']").fadeToggle();
});