document.addEventListener('DOMContentLoaded', function() {
    var gisLink = document.getElementById('gis-link');
    gisLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Replace '#' with the URL of the GIS map page
        window.location.href = 'gis_map.html';
    });
});