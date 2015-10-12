/**
 * Created by Admin on 08.10.15.
 */
$('.timer').countdown('2016/01/9', function(event) {
    $('#timer-days').html(event.strftime('<span>%-D</span>'));
    $('#timer-hours').html(event.strftime('<span>%H</span>'));
    $('#timer-minutes').html(event.strftime('<span>%M</span>'));
    $('#timer-seconds').html(event.strftime('<span>%S</span>'));
});