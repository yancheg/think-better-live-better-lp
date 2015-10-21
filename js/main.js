/**
 * Created by Admin on 08.10.15.
 */
var player;
$(document).ready(function(){
    $('#menu').affix({
        offset: {
            top: function () {
                return (this.top = $('#header').outerHeight(true))
            }
        }
    });
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
        player.playVideo();
    });
    $('#Video').on('hide.bs.modal', function(){
        player.stopVideo();
    });

    $(document).on('click', '.scroll-bnt', function(){
        var targetOffset = $($(this).data('target')).offset().top;

        $('body,html').animate({
            scrollTop: targetOffset
        }, 1000);
    });
});

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '100%',
        videoId: 'sRc84AZ0efY',
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
        console.log($('#Video'));
        $('#Video').modal('toggle');
    }
}
function stopVideo() {
    player.stopVideo();
}
