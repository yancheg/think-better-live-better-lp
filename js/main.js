/**
 * Created by Admin on 08.10.15.
 */
$('.timer').countdown('2016/01/9', function(event) {
    $('#timer-days').html(event.strftime('<span>%-D</span>'));
    $('#timer-hours').html(event.strftime('<span>%H</span>'));
    $('#timer-minutes').html(event.strftime('<span>%M</span>'));
    $('#timer-seconds').html(event.strftime('<span>%S</span>'));
});
$('.panel-group')
    .on('show.bs.collapse', function(e) {
        $(e.target).parent('.panel').addClass('active');
    })
    .on('hide.bs.collapse', function(e) {
        $(e.target).parent('.panel').removeClass('active');
    });
function initialize() {
    var mapCanvas = document.getElementById('map');

    var mapOptions = {
    center: new google.maps.LatLng(30.265508, -97.747022),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(mapCanvas, mapOptions)
    new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(30.265508, -97.747022)
    });
}
$('#Location').on('shown.bs.modal', function(){
    initialize();
});

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '570',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
   // event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {

    }
}
function stopVideo() {
    player.stopVideo();
}

$('#Video').on('shown.bs.modal', function(){
    player.playVideo();
});
$('#Video').on('hide.bs.modal', function(){
    player.stopVideo();
});

$(document).on('click', '#join-us', function(){
   var subscribeOffset = $('section.subscribe').offset().top;

   $('body,html').animate({
       scrollTop: subscribeOffset
   }, 1000);
});