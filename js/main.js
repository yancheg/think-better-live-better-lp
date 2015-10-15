/**
 * Created by Admin on 08.10.15.
 */
var player;
$(document).ready(function(){
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

    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    $('#Video').on('shown.bs.modal', function(){
        console.log(player);
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
});

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

function onPlayerReady(event) {
    // event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {

    }
}
function stopVideo() {
    player.stopVideo();
}
