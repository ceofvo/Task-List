$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("button").on("click", function(event) {
        event.preventDefault();
		var todoText = $("input[type='text']").val();
		$("input[type='text']").val("");
		$("ul").append(`<li><span><i class='fas fa-trash'></i></span> ${todoText} </li>`);
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});