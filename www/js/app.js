$(function() {
   function moveRow(row, targetTable, newLinkText){
       $(row)
           .appendTo(targetTable)
           .find("A")
             .text(newLinkText);

   }
   
   $("#FIRST").on("click",'a', function(){
       moveRow($(this).parents("tr"), $("#SECOND").clone(), "Add to My List");
   });

   $("#SECOND").on("click",'a', function(){
       moveRow($(this).parents("tr").clone(), $("#FIRST"), "X");

  /* Look for and remove duplicate rows */
       var seen = {};
        $('table tr').each(function() {
          var txt = $(this).text();
          if (seen[txt])
            $(this).remove();
          else
            seen[txt] = true;
        });
      /*End - Look for and remove duplicate rows */



       sortTable();
       document.getElementById('favorites').scrollIntoView();
   });
   $('#FIRST,#SECOND').on('click','a',function() {
     localStorage.setItem('FIRST',$('#FIRST').html());
     localStorage.setItem('SECOND',$('#SECOND').html());
   });
   var first = localStorage.getItem('FIRST');
   var second = localStorage.getItem('SECOND');
   !first || $('#FIRST').html(first);
   !second || $('#SECOND').html(second);


});




function sortTable(){
    var tbl = document.getElementById("FIRST").tBodies[0];
    var store = [];
    for(var i=0, len=tbl.rows.length; i<len; i++){
        var row = tbl.rows[i];
        var sortnr = parseFloat(row.cells[0].textContent || row.cells[0].innerText);
        if(!isNaN(sortnr)) store.push([sortnr, row]);
    }
    store.sort(function(x,y){
        return x[0] - y[0];
    });
    for(var i=0, len=store.length; i<len; i++){
        tbl.appendChild(store[i][1]);
    }
    store = null;
}





function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/* Card Layout for Table */

var tables = $('.cards-table');

// Create an array containing all table headers
var table_headers = [];
tables.each(function() {
  var th = [];
  $(this).find('thead th').each(function() {
    th.push($(this).text());
  });
  table_headers.push(th);
});

// Add a data-label attribute to each cell with the value of the corresponding column header
// Iterate through each table
tables.each(function(table) {
  var table_index = table;
  // Iterate through each row
  $(this).find('tbody tr').each(function() {
    // Finally iterate through each column/cell
    $(this).find('td').each(function(column) {
      $(this).attr('data-label', table_headers[table_index][column]);
    });
  });
});




/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function nav_function() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/* Show and hide sections*/
function foco() {
hide();
document.getElementById('foco').style.display = 'block';
}

function schedule() {
hide();
document.getElementById('schedule').style.display = 'block';
}

function my_favs() {
hide();
document.getElementById('fav').style.display = 'block';
}

function loadmap() {
hide();
document.getElementById('mapdiv').style.display = 'block';
}

function sponsors() {
hide();
document.getElementById('sponsors').style.display = 'block';
}

function social() {
hide();
document.getElementById('social').style.display = 'block';
}



function hide () {
   var divsToHide = document.getElementsByClassName("navLinks"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
}