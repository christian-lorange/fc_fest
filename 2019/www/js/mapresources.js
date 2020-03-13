function map_int() {

////////////////////////////////////////////////////////////////////////////////////////////
//setting up the map//
////////////////////////////////////////////////////////////////////////////////////////////

var map = new L.Map('mapid').setView([-13, -54], 3);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {

}).addTo(map);

////////////////////////////////////////////////////////////////////////////////////////////
//adding the data//
////////////////////////////////////////////////////////////////////////////////////////////

var stations = {
  "type": "FeatureCollection",
  "features": [{"type": "Feature","properties": {
      "STATION": "Aggie Theatre",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07652,40.58527]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Art Lab Fort Collins",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07489,40.58884]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Avogadros Number",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07927,40.57969]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "The Colorado Room",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07657,40.57855]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Crooked Stave",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07653,40.58949]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Downtown Artery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07418,40.58875]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Drunken Monkey",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07762,40.58587]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "The East Coast",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07513,40.58865]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Elliots Martini Bar",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07438,40.58841]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Equinox Brewing",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07585,40.58625]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "The Exchange",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07649,40.58976]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Fort Collins Museum of Discovery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07796,40.59349]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "High Point Bar",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07649,40.58804]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Hodis Half Note",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.0776,40.58839]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Illegal Petes",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07454,40.588]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Magic Rat",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07406,40.58767]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "The Mayor of Old Town",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07406,40.58767]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Metro Urban Food & Booze",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07751,40.58642]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Moes Original Bar B Que",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.0776,40.58862]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "The Music District",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07766,40.57873]
    }
  },
  {"type": "Feature","properties": {
      "STATION": "New Belgium Brewing Co",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.06687,40.59341]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Odell Brewing Co.",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.06025,40.5889]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "The Pizza Press",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07653,40.58949]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Pour Brothers Community Tavern",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07462,40.58829]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Prost Brewing Co. & Biergarten",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.074634,40.5884014]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "R Bar and Lounge",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.0766,40.57789]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "The Rec Room",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07636,40.58758]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "The Rickshaw Live",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.076622,40.5814705]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Scrumpys Hard Cider Bar and Pub",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07749,40.58949]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Sound Off Silent Disco",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07596,40.58799]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Surfside 7",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.0747113,40.5886455]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Tap and Handle",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07763,40.58381]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Tonys Bar & Rooftop",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07653,40.58478]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Washingtons",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07793,40.58944]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "The Whiskey",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07653,40.5849]
    }
  },
 {"type": "Feature","properties": {
      "STATION": "Wolverine Farm",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-105.07334,40.59068]
    }
  }


  ]
};

var markerLayer = L.geoJson(stations, {
    onEachFeature: function (feature, layer)
    {
        layer.bindPopup("<b>" + feature.properties.STATION + "</b><br>");
    }
}).addTo(map);
map.fitBounds(markerLayer.getBounds());

////////////////////////////////////////////////////////////////////////////////////////////
//creating the selector control//
////////////////////////////////////////////////////////////////////////////////////////////

//create Leaflet control for selector
var selector = L.control({
  position: 'topright'
});

selector.onAdd = function(map) {
  //create div container
  var div = L.DomUtil.create('div', 'mySelector');
  //create select element within container (with id, so it can be populated later)
  div.innerHTML = '<select id="marker_select" style="background-color: #fcc60f; color:white"><option value="init">Find Venue</option></select>';
  return div;
};

selector.addTo(map);

//have to use eachFeature (instead of onEachFeature) to create selector options
//because _leaflet_id doesn't exist until after each feature is created
markerLayer.eachLayer(function(layer) {
  //create option in selector element
  //with content set to city name
  //and value set to the layer's internal ID
  var optionElement = document.createElement("option");
  optionElement.innerHTML = layer.feature.properties.STATION;
  optionElement.value = layer._leaflet_id;
  L.DomUtil.get("marker_select").appendChild(optionElement);
});

////////////////////////////////////////////////////////////////////////////////////////////
//setting up event listeners//
////////////////////////////////////////////////////////////////////////////////////////////

var marker_select = L.DomUtil.get("marker_select");

//prevent clicks on the selector from propagating through to the map
//(otherwise popups will close immediately after opening)
L.DomEvent.addListener(marker_select, 'click', function(e) {
  L.DomEvent.stopPropagation(e);
});

L.DomEvent.addListener(marker_select, 'change', changeHandler);

function changeHandler(e) {
  if (e.target.value == "init") {
    map.closePopup();
  } else {
    markerLayer.getLayer(e.target.value).openPopup();
  }
}
};