$ (function() {

	var $project = $('.github-button');

	$project.on('click', function (event) {
		console.log('Clicked');
		var choice = $(this).val();

		if(choice == "project1") {
			window.open('https://github.com/stannard95/3D-Trading-game','_blank');
		}
		else if(choice == "project2") {
			window.open('https://github.com/stannard95/londonGame','_blank');
		}
		else if(choice == "project3-demo") {
			window.open('https://www.youtube.com/watch?v=dmUL6mOsZHg','_blank');
		}
		else if(choice == "project4") {
			window.open('https://github.com/stannard95/project-escape','_blank');
		}
		else if(choice == "project1-demo") {
			window.open('https://www.youtube.com/watch?v=OvcSvwz76Cg','_blank');
		}
	});
});



