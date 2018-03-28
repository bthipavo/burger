$(function () {
	// body...
	$(".change-devour").on("click", function(event) {
		console.log("hello click")
		var id = $(this).data("id");
		var newDevour = $(this).data("newdevour");

		var newDevourState = {
			devoured: newDevour
		}
	


	$.ajax("/api/burgers/" + id, {
		type: "PUT",
		data: newDevourState
	}).then(
		function() {
			console.log("changed devoured to ", newDevour);
			location.reload();
		});
	});

	$(".create-form").on("submit", function(event){
		event.preventDefault();

		var newBurger = {
			name: $("#burgerName").val().trim(),
			devoured: 0
		};

		$.ajax("/api/burgers/", {
			type: "POST",
			data: newBurger
		}).then(
			function() {
				console.log("new burger added");
				location.reload()
			})
	})
})