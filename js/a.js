resizeTo(1100,850);


$(function () {
$(".pop_up").hide();
$('.button').on('click', function() {
$('.pop_up').fadeOut();
if($(this).next().css('display') == 'block') {
$(this).next().fadeOut();
} else {
$(this).next().fadeIn();
}

$(document).on('click', function(e) {
if (!$(e.target).closest('.pop_up').length && !$(e.target).closest('.button').length) {
$('.pop_up').fadeOut();
}
});
});
});



$(document).ready(function(){
    
    $('#input').on('keyup', function(){
        Search($(this).val());
    });
});

 

function Search(keyword) {
    
    var regExp = new RegExp(keyword);
    
    $('#TABLE1').find('tr').hide().each(function(){
        var tr = $(this);
        $(this).find('th').each(function(){
            if ($(this).text().match(regExp)) {
                tr.show();
            }
        })
    });
}

$('#clear').on('click',function(){
$('#input').val("").trigger('keyup');
  });



$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});




