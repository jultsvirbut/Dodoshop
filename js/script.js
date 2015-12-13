


function initialize () {
    var mapCanvas = document.getElementById('map');
    var myLatLng = {lat: 53.893900, lng: 27.551298};
    var mapOptions = {
      center: new google.maps.LatLng(53.893900, 27.551298),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'DODO - магазин-студия декора и подарков'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);


lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'showImageNumberLabel': false,
  'fadeDuration': 100
});

