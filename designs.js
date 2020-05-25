//Set submitBtn for form element to get pixel grid value
const submitBtn = document.querySelector('#sizePicker');
//Set pixelCanvas for table element to display pixel grid
const canvas = document.querySelector('#pixelCanvas');
//set pixelColor to get pixel grid color info
const pixelColor = document.querySelector('#colorPicker').value;

//Run makeGrid() function. Function are explained below.
makeGrid();

//makeGrid() function consists of two part: making pixel grid, and coloring pixel grid
function makeGrid(event){
  //line 14 - 27 makes pizel grid. It's nested-for-loops for height and width.
  submitBtn.addEventListener('submit', function(event) {
    //removing tr value to refresh the pixelcanvas
    $('#pixelCanvas tr').remove();
    //getting height and width info from input
    const height = document.querySelector('#inputHeight').value;
    const width = document.querySelector('#inputWidth').value;
    //looping over width and height respect to input, and add tr and td accordingly
    for (let i = 1; i <= width; i++) {
      const pixelTd = document.createElement('tr');
      canvas.appendChild(pixelTd);
      for (let j = 1; j <= height; j++) {
        const pixelTr = document.createElement('td');
        pixelTd.appendChild(pixelTr);
      }
    }
    //calling change_pixel_color() function, which colors the pixel grid
    change_pixel_color();
    event.preventDefault();
  },
  false)
};

function change_pixel_color() {
  //change the color of td element, as the user clicks it
  $("#pixelCanvas").on("click", "td", function() {
    $("td").click(function(){
      const pixelColor = document.querySelector('#colorPicker').value;
      $(this).css("background-color", pixelColor);
    });
  })
};
