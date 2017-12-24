$('#parallax2').css({
    'font-size': '70px',
    'color': '#3AE2CE',
    'font-weight': 'bold'
});

$(window).scroll(function () {

    var st = $(this).scrollTop();

    $('#parallax2').css({
        'transform': 'translate(0%, ' + st + '%)'
    })
});
