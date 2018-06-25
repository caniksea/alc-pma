// Select color input
let color;
// Select size input
let height;
let width;

// When size is submitted by the user, call makeGrid()

function makeGrid() {

	// Your code goes here!

	height = $("#inputHeight").val();
	width = $("#inputWeight").val();
	color = $("#colorPicker").val();

	//remove table body, if any.
	$("#pixelCanvas tbody").remove();

	//create table body
	let $table = $("#pixelCanvas");
	$table.append("<tbody>");

	//build rows and columns.
	for(var row = 0; row < height; row++){
		var $tr = $("<tr>");
		$table.append($tr);
		for(var column = 0; column < width; column++){
			$tr.append("<td>");
		}
	}

}

$(function(){
	//form submission.
	$("#sizePicker").submit(function(event){
		event.preventDefault();
		makeGrid();
	});

	//color grid.
	$("#pixelCanvas").on("click", "td", function(e){
		$(this).css("background", color);
	});
});
