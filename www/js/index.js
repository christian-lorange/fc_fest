
//Create Show
function createshow_submit() {

    
  var firebaseRef = firebase.database().ref();
  

  var artist = document.getElementById( "artist" ).value;
  var facebook = document.getElementById( "facebook" ).value;
  var starttime = document.getElementById( "starttime" ).value;
  var endtime = document.getElementById( "endtime" ).value;
  var website = document.getElementById( "website" ).value;
  var music = document.getElementById( "music" ).value;
  var description = document.getElementById( "description" ).value;
  var day = document.getElementById( "day" ).value;
  var venue = document.getElementById( "venue" ).value;
  var style = document.getElementById( "style" ).value;
  var art_image = document.getElementById( "art_image" ).value;
  var locationid = $('#venue option:selected').attr('vid');

  var artistid = Math.random().toString(36).slice(7); //create a random artist id

  var showid = 's-' + Math.random().toString(36).slice(9); //create a random artist id

  var active = 1; //Show starts as being active



  // get date

  if (day === 'Fri'){
    var date = '2020-4-24';
  }
  else {
    var date = '2020-4-24'
  }

  var startepoch = new Date(date +' '+ starttime).valueOf();
  var endepoch = new Date(date +' '+endtime).valueOf();


//Times readable
var temptime = starttime

var temptime2 = temptime.substring(0, 2);

if (parseInt(temptime2, 10) < 12) {
    var temptime3 = temptime + 'AM';

    if (parseInt(temptime2, 10) == 0) {
        starttime = temptime3.replace('00', '12')
    }
} else {
    var starttime = temptime.replace(temptime2, parseInt(temptime2, 10) - 12) + 'PM';
}


var temptime = endtime

var temptime2 = temptime.substring(0, 2);

if (parseInt(temptime2, 10) < 12) {
    var endtime = temptime + 'AM';

    if (parseInt(temptime2, 10) == 0) {
        temptime3 = temptime3.replace('00', '12')
    }
} else {
    var endtime = temptime.replace(temptime2, parseInt(temptime2, 10) - 12) + 'PM';
}
//End of time readable



  
  return firebase.database().ref('recordid').once('value').then(function(snapshot) {
var recordid = snapshot.val() + 1;    //Increase record ID by one

firebaseRef.child('recordid').set(recordid);    //save record ID to database

firebaseRef.child('update').set(Date.now());   //Update tme of last update

  //push new values
firebaseRef.child('artist').child(recordid).set({artist,facebook,starttime,endtime,website,music,description,day,venue,style, startepoch, endepoch, artistid, locationid, showid, active, recordid, art_image})

  // ...
});


  location.reload();
}





//Validate
//Validate Email Address
function validateEmail( email ) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test( email );
}
//End of Email Validation
//Validate Phone
function validatephone( phone ) {
  var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return phoneno.test( phone );
}
//
//Validate Zipcode
function validatezip( zip ) {
  var zipno = /^\d{5}$|^\d{5}-\d{4}$/;
  return zipno.test( zip );
}
//
//Validate User Email
function validate_user() {
  var $result = $( "#useremailresult" );
  var email = $( "#email" ).val();
  $result.text( "" );
  var $zipresult = $( "#userzipresult" );
  var zip = $( "#user_location" ).val();
  $zipresult.text( "" );
  if ( validateEmail( email ) && validatezip( zip ) ) {
    createuser_submit(); /*If both are valid then submit*/
  } else {
    if ( validateEmail( email ) ) {} /*If email is valid move on*/
    else { /*If email isn't valid throw error*/
      $result.text( email + " is not valid email :(" );
      $result.css( "color", "red" );
    }
    if ( validatezip( zip ) ) {} /*If phone is valid move on*/
    else { /*If phone isn't valid throw error*/
      $zipresult.text( zip + " is not valid zip code :(" );
      $zipresult.css( "color", "red" );
    }
  }
  return false;
}
$( "#createuser" ).on( "click", validate_user ); /*Run validation on click*/
//End of Validating User Email
//Validate Venue Email and Phone



//Popultate dropdown for editing venues
    var ref = firebase.database().ref( "artist" ); //Make connection to drinks table
    ref.once( 'value', function( snapshot ) { //Cycle through drinks
      snapshot.forEach( function( childSnapshot ) {
        var partner = document.createElement( 'option' ); //create an option
        partner.appendChild( document.createTextNode( childSnapshot.child( "artist" ).val() ) ); //make that option correspond to a beer
        document.getElementById( 'show_to_edit' ).appendChild( partner ); //add option to select dropdown
        partner.value = childSnapshot.child( "artist" ).val(); //add value to that option
        })
      } 
      );
  // } 


  //populate field to edit

function load_partner_to_edit (){
  d = document.getElementById( "show_to_edit" ).value;
  console.log(d)
  var firebaseRef = firebase.database().ref();
  firebaseRef.child( "artist" ).orderByChild('artist').equalTo(d).once( "value", artistsnapshot => {

  var temp= artistsnapshot.val()

  var key = Object.keys(artistsnapshot.val())[0];


  document.getElementById( "recordid" ).value=temp[key].recordid;
  document.getElementById( "artist_edit" ).value=temp[key].artist;
  document.getElementById( "facebook_edit" ).value=temp[key].facebook;
  document.getElementById( "starttime_edit" ).value=moment(temp[key].starttime, 'HH:mm a').format("HH:mm");
  document.getElementById( "endtime_edit" ).value=moment(temp[key].endtime, 'HH:mm a').format("HH:mm");
  document.getElementById( "website_edit" ).value=temp[key].website;
  document.getElementById( "music_edit" ).value=temp[key].music;
  document.getElementById( "description_edit" ).value=temp[key].description;
  document.getElementById( "day_edit" ).value=temp[key].day;
  document.getElementById( "venue_edit" ).value=temp[key].venue;
  document.getElementById( "style_edit" ).value=temp[key].style;
  document.getElementById("showid_edit").value=temp[key].showid;
  document.getElementById("art_image_edit").value=temp[key].art_image;

  document.getElementById("active_edit").value=temp[key].active;

})
}




//Create Show
function updateshow_submit() {

    
 
  
  var recordid = document.getElementById( "recordid" ).value;
  var artist = document.getElementById( "artist_edit" ).value;
  var facebook = document.getElementById( "facebook_edit" ).value;
  var starttime = document.getElementById( "starttime_edit" ).value;
  var endtime = document.getElementById( "endtime_edit" ).value;
  var website = document.getElementById( "website_edit" ).value;
  var music = document.getElementById( "music_edit" ).value;
  var description = document.getElementById( "description_edit" ).value;
  var day = document.getElementById( "day_edit" ).value;
  var venue = document.getElementById( "venue_edit" ).value;
  var style = document.getElementById( "style_edit" ).value;
  var art_image = document.getElementById( "art_image_edit" ).value;
  var locationid = $('#venue_edit option:selected').attr('vid');
  var active = document.getElementById( "active_edit" ).value; //Show starts as being active



  // get date

  if (day === 'Fri'){
    var date = '2020-4-24';
  }
  else {
    var date = '2020-4-24'
  }

  var startepoch = new Date(date +' '+ starttime).valueOf();
  var endepoch = new Date(date +' '+endtime).valueOf();


//Times readable
var temptime = starttime

var temptime2 = temptime.substring(0, 2);

if (parseInt(temptime2, 10) < 12) {
    var temptime3 = temptime + 'AM';

    if (parseInt(temptime2, 10) == 0) {
        starttime = temptime3.replace('00', '12')
    }
} else {
    var starttime = temptime.replace(temptime2, parseInt(temptime2, 10) - 12) + 'PM';
}


var temptime = endtime

var temptime2 = temptime.substring(0, 2);

if (parseInt(temptime2, 10) < 12) {
    var endtime = temptime + 'AM';

    if (parseInt(temptime2, 10) == 0) {
        temptime3 = temptime3.replace('00', '12')
    }
} else {
    var endtime = temptime.replace(temptime2, parseInt(temptime2, 10) - 12) + 'PM';
}
//End of time readable


 var firebaseRef = firebase.database().ref();


  firebaseRef.child('update').set(Date.now());

  firebaseRef.child('artist').child(recordid).update({artist,facebook,starttime,endtime,website,music,description,day,venue,style, startepoch, endepoch, locationid, active, art_image})

//end update



}


//Sort select options
function sortSelect(selElem) {
    var tmpAry = new Array();
    for (var i=0;i<selElem.options.length;i++) {
        tmpAry[i] = new Array();
        tmpAry[i][0] = selElem.options[i].text;
        tmpAry[i][1] = selElem.options[i].value;
    }
    tmpAry.sort();
    while (selElem.options.length > 0) {
        selElem.options[0] = null;
    }
    for (var i=0;i<tmpAry.length;i++) {
        var op = new Option(tmpAry[i][0], tmpAry[i][1]);
        selElem.options[i] = op;
    }
    return;
    console.log("sorted")
}

setTimeout(function(){
sortSelect(show_to_edit)}, 5000);

