window.onload = changeTop('rgb(255, 255, 255)');
//document.getElementById('needTop').onresize = console.log('!!!');
function tryThis() {
    console.log(document.getElementById('try').hidden);
    
    if (document.getElementById('try').hidden == true) {
        document.getElementById('try').hidden= false;
    } else {
        document.getElementById('try').hidden= true ;
    }
}
function changeTop(needColor) {
    //console.log(document.getElementById('needTop').style.borderTopColor);
    var color;
    if (needColor == null) {color = document.getElementById('needTop').style.borderTopColor} else {
        //console.log('!!!: '+document.getElementById('needTop').style.borderTopColor);
        color = needColor;
    }

    //console.log(document.getElementById('parentImage').clientHeight);
    var baseHeight = document.getElementById('parentImage').clientHeight; //высота
    //console.log(baseHeight);
    var resultHeight = +baseHeight/100*18.7 +'px solid '+color;
    document.getElementById('needTop').style.borderTop = resultHeight;

    var baseWight = document.getElementById('parentImage').clientWidth;
    document.getElementById('needTop').style.width = baseWight/100*91+'px';
    var resultWight = +baseWight/100*14.3 +'px solid transparent';
    
    document.getElementById('needTop').style.borderRight = resultWight;
}

function mat()  {
    document.getElementById('needTop').style.opacity=1;
}
function glian()  {
    document.getElementById('needTop').style.opacity=0.85;
}
function satin()  {
    document.getElementById('needTop').style.opacity=0.96;
}
  
  setInterval (function(){  //Тестовое изменение размера через 0.1 сек. 
    changeTop(null);
  },100);

  function showLustri() {
    document.getElementById('karnizy').hidden=true;
      document.getElementById('lustri').hidden=false;
  }
  function showKarnizy() {
    document.getElementById('lustri').hidden=true;
      document.getElementById('karnizy').hidden=false;
  }

function changeKarniz(karnizType) {
    var vseKarnizy = document.getElementsByClassName('karnizy');
    for (var i =0; i < vseKarnizy.length; i++) {
        vseKarnizy[i].hidden = true;
        //console.log(i);
    }
    document.getElementById(karnizType).hidden=false;
}
