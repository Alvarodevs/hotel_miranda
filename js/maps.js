let map, infoWindow;

function initMap() {

	//Initial position (Main Miranda Hotel, located in Madrid)
	const initialPosition = { lat: 36.45682937705407, lng: - 6.201146471030667 }
	map = new google.maps.Map(document.getElementById("map"), {
		zoom: 6,
		center: initialPosition,
	});

	//Custom Pin
	const svgMarker = {
		path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
		fillColor: "green",
		fillOpacity: 1,
		strokeWeight: 0,
		rotation: 0,
		scale: 2,
		anchor: new google.maps.Point(12, 22),
	};
	//Add makers to map
	const markers = hotels.map((position, i) => {
		const marker = new google.maps.Marker({
			position: position,
			map: map,
			icon: svgMarker,
		});
		marker.addListener("click", () => {
			infoWindow.setContent(label);
			infoWindow.open(map, marker);
		});
		return marker;
	});

	//Cluster
	new markerClusterer.MarkerClusterer({ map, markers });

	/** POSICION DEL USUARIO */
	let pos = {};
	infoWindow = new google.maps.InfoWindow();

	const locationButton = document.createElement("button");
	locationButton.textContent = "Your position";
	locationButton.classList.add("custom-map-control-button");
	map.controls[google.maps.ControlPosition.LEFT_CENTER].push(locationButton);
	locationButton.addEventListener("click", () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};
				infoWindow.setPosition(pos);
				infoWindow.setContent("Your are here.");
				infoWindow.open(map);
				map.setCenter(pos);
			},
				() => {
					handleLocationError(true, infoWindow, map.getCenter());
				}
			);
		} else {
			// Browser doesn't support Geolocation
			handleLocationError(false, infoWindow, map.getCenter());
		}

	});
	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
		infoWindow.setPosition(pos);
		infoWindow.setContent(
			browserHasGeolocation
				? "Error: The Geolocation service failed."
				: "Error: Your browser doesn't support geolocation."
		);
		infoWindow.open(map);
	}


	/** DISTANCIAS desde posicion del usuario*/
	const distancesButton = document.createElement("button");

	distancesButton.textContent = "SHOW DISTANCES ";
	distancesButton.classList.add("custom-map-control-button");
	map.controls[google.maps.ControlPosition.TOP_CENTER].push(distancesButton);

	distancesButton.addEventListener("click", () => {
		const service = new google.maps.DistanceMatrixService();
		const origin = pos;
		const destinations = hotels;
		const request = {
			origins: [origin],
			destinations: destinations,
			travelMode: google.maps.TravelMode.DRIVING,
			unitSystem: google.maps.UnitSystem.METRIC,
			avoidHighways: false,
			avoidTolls: false,
		}

		service.getDistanceMatrix(request).then((response) => {

			const distancesToOrder = response.rows[0].elements.map((item, index) => {
				return [destinations[index].name, ((item.distance.value / 1000).toFixed(2) * 1)];
			});
			distancesToOrder.sort((a, b) => {
				return a[1] - b[1];
			})


			let listDistances = '';

			distancesToOrder.map((element, i) => {
				listDistances += '<div>' + `Distance to ${element[0]} ${element[1]} kms` + '</div>';
			});

			document.getElementById("distances").innerHTML = listDistances;
		});


	});

	/** GEOCODING INPUT */
	const geocoder = new google.maps.Geocoder();
	const btnSend = document.getElementById('send-address');
	const address = document.getElementById('input-address');
	btnSend.addEventListener('click', () => {
		geocode({ address: address.value })
	});

	function geocode(request) {
		geocoder
			.geocode(request)
			.then((result) => {
				const { results } = result;
				const lat_address = results[0].geometry.location.lat();
				const lng_address = results[0].geometry.location.lng();
				distanceList(lat_address, lng_address);
			})
			.catch((error) => {
				alert("Geocode not successful by: " + error);
			});
	}

	function distanceList(lat_address, lng_address) {
		const service = new google.maps.DistanceMatrixService();
		const origin = { lat: lat_address, lng: lng_address };
		const destinations = hotels;

		const request = {
			origins: [origin],
			destinations: destinations,
			travelMode: google.maps.TravelMode.DRIVING,
			unitSystem: google.maps.UnitSystem.METRIC,
			avoidHighways: false,
			avoidTolls: false,
		}

		service.getDistanceMatrix(request).then((response) => {
			const distancesToOrder = response.rows[0].elements.map((item, index) => {
				return [destinations[index].name, ((item.distance.value / 1000).toFixed(2) * 1)];
			});
			distancesToOrder.sort((a, b) => {

				return a[1] - b[1];
			})

			let listDistances = '';
			distancesToOrder.map((element, i) => {
				listDistances += '<div class="distance">' + `Distance to ${element[0]} - ${element[1]} kms` + '</div>';
			});

			document.getElementById("distances").innerHTML = listDistances;
		});

	}

	/** FRONTERA COMUNIDADES */
	const selectComunidades = document.getElementById('regions');
	let regionNum = 0;
	let regionArea;

	for (let region of regions) {
		selectComunidades.options[selectComunidades.options.length] = new Option(region, regionNum);
		regionNum++;
	}

	selectComunidades.addEventListener('change', function () {
		const regionCords = this.value;
		regionArea && regionArea.setMap(null);

		regionArea = new google.maps.Polygon({
			paths: borders[regionCords],
			strokeColor: "#FF0000",
			strokeOpacity: 0.8,
			strokeWeight: 3,
			fillColor: "#FF0000",
			fillOpacity: 0.35,
		});

		regionArea.setMap(map);
	});

}

window.initMap = initMap;