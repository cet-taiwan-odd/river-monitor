function Monitors() {

	var self = this;

	this.monitorLocs = {
		'霄裡橋': { latlng: [24.825113,121.087526] },
		'寶石橋': { latlng: [24.819273,121.077638] },
		'三聖橋': { latlng: [24.8325570,121.0975460] },
		'龍興大橋': { latlng: [24.850537,121.176445] },
		'照東橋': { latlng: [24.844034,121.137782] }
	};

	var mapOptions = {
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var riverBounds = new google.maps.LatLngBounds();

	this.riverMap = new google.maps.Map(document.getElementById("map_canvas"), mapOptions),
	

	$.each( this.monitorLocs, function( locName, info ) {
		var thisLatlng = new google.maps.LatLng( info.latlng[0], info.latlng[1] );

		info.marker = new google.maps.Marker({
				position: thisLatlng,
				map: self.riverMap,
				title: locName
			});

		riverBounds.extend( thisLatlng );	
	});

	this.riverMap.fitBounds( riverBounds );
}

function RiverVM() {

	var self = this;

	this.criteria = {};
	this.log = null;
	this.monitors = new Monitors();
	this.mode = ko.observable('飲用水');
	this.switchMode = function() {
		if( self.mode() == '飲用水' ) {
			self.mode('灌溉用水');
		} else {
			self.mode('飲用水');
		}
	}

	function refreshInfoWindow() {
		$.each( self.monitors, function( name, info ) {
		});
	}
}

function WindowResize() {
	$('#map_canvas').height( 
			$(window).height() - $('#toolbar').height() );
}

$(function() {
	WindowResize();
	ko.applyBindings( new RiverVM() );

	$(window).resize( WindowResize );
});
