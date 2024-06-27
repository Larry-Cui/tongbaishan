const map = L.map("map").setView([51.061885, -114.062091], 13);

const marker = L.marker([51.061885, -114.062091]).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

marker.bindPopup("<b>Jade Sunrise Law</b>").openPopup();
