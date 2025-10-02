var List=[
['▲google','http://www.google.co.jp/' ],
['▲ヤマダデンキの社員なのか','../../denki management/syain/1.html' ],
['▲シフト','../../ほかん-taiyou.denki-/sift/6.html' ],
['▲会員','kaiin/0.html' ],
['▲会員 携帯アプリ','kaiin/keitai/keitai.html' ],
['▲Q&A','kensyu/rule/yd/q&a.html' ],
['▲ヤマダのでんきトークスクリプト','kensyu/rule/yd/talk.html' ],
['▲解約トークスクリプト','kensyu/econo-crea/7/talkkai.html' ],
['▲他社乗り換えトークスクリプト(発信)','kensyu/econo-crea/7/talknori.html' ],
['▲アンペア数変更トークスクリプト','kensyu/econo-crea/6/talk.html' ],
['▲スイッチングエラー-トークスクリプト-(発信)','kensyu/econo-crea/3/talk.html' ],
['▲身だしなみ 派遣社員','syuchi/data/pdf/身だしなみ 派遣社員.pdf' ],
['▲ECONO-CREA(econo-crea)','https://htbenergy-portal.econo-crea.com/absClient/' ],
['▲YaESS(yaess)','http://menu.yairmobile.jp:8080/YmdRetailElectric/login' ],
['▲全体マニュアル','http://filesv-o04:9000/' ],
];

function chk() {
var tmID; document.getElementById('key').value;
var ht='';
var key=document.getElementById('key').value.replace(/(\s+)/g,' ').replace(/^ | $/g,'');
if(!key) {
document.getElementById('n').innerHTML='';return;
}


var Arkey = key.split(' ');

for(var i=0,mx=List.length,c=1;i<mx;i++){
for(var j=0,f=0,mx2=Arkey.length;j<mx2;j++) if(List[i][0].match(new RegExp(Arkey[j]))) f++;
if(f==mx2) {
var s=(List[i][0].match(/|/))?'<a href="'+ List[i][1] +'" target="_blank">'+List[i][0]+'</a>':List[i][0];
ht+=c+'.  '+s+' <br>';
if(++c>999) break;
}
}
document.getElementById('n').innerHTML=(ht=='')?'該当なし':ht;
}


$(function(){
// ボックスを表示する
$('#key').on('focus',function(e){
$('#n').addClass('show');
});

// ボックス内をクリックした際ボックスを非表示にしない
$('#n').on('click',function(event){
event.stopPropagation();
});

// ボックス外をクリックした際ボックスを非表示にする
$(document).on('click',function(e){
if(e.target.id!=='key'){
$('#n').removeClass('show');
}
});
});
