function initMap() {
  var options = {
    zoom: 8,
    center: {lat: 34.9323, lng: -86.5719}
  }
  var map = new.google.maps.Map(document.GetElementByID('map'), options);
}

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrsLVp7g2ozH8j1TOtiI6BIHGjHErAfow&callback=initMap" async defer></script>