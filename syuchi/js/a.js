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
if (!$(e.target).closest('.pop').length && !$(e.target).closest('.button').length) {
$('.pop').fadeOut();
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
$(this).find('td').each(function(){
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
    //�X�N���[����100�ɒB������{�^���\��
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //�X�N���[�����ăg�b�v
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});