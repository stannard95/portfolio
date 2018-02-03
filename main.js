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
		else if(choice == "project3") {
			window.open('https://github.com/seb-faull/show_me_project_portal','_blank');
		}
		else if(choice == "project4") {
			window.open('https://github.com/stannard95/project-escape','_blank');
		}
		else if(choice == "project5") {
			window.open('https://github.com/spartaglobal/PostgresCookbook','_blank');
		}
	});
});



