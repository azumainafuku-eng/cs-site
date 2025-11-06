var List=[
['▲google','http://www.google.co.jp/' ],
['▲','../../html' ]
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
var s=(List[i][1].match(/|/))?'<a href="'+ List[i][1] +'" target="_blank">'+List[i][0]+'</a>':List[i][1];
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

$(document).keypress(function(e){
  // エンターキーだったら無効にする
  if (e.key === 'Enter') {
    return false;
  }

});
