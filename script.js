window.onload = changeTop('rgb(255, 255, 255)');
window.onload = hideMenu();

var timerId = setInterval(function() { //запускаем проверку на меню
    //console.log( "тик" );
    checkMenu();
  }, 10);


//document.getElementById('needTop').onresize = console.log('!!!');

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
function hideMenu() {
    console.log('Высота окна: '+document.documentElement.clientHeight);
    console.log('Высота прокрутки: '+window.pageYOffset);

    var fullView = document.documentElement.clientHeight;
    var curentScroll = window.pageYOffset
    var fullWidth = document.documentElement.clientWidth;

    if (curentScroll < fullView) {
        if(fullWidth >= 992) {
            document.getElementById('menu').hidden= true;
        }
    } else {
        document.getElementById('menu').hidden= false ;
    }
}

function showMenu() {
    setInterval(function() {
    //////Выводим меню:
        var menu = document.getElementById('menu');
        menu.style.position = 'fixed';
        menu.style.width = '100%';
        var tryIt = menu.style.top;
        document.getElementById('menu').hidden= false ;
        if(tryIt == '') { // задали top
            
            menu.style.top = '-66px';
        } else {
            //console.log(parseInt(menu.style.top, 10));
            menu.style.top = parseInt(menu.style.top, 10)+1+'px';
        }
        if (parseInt(menu.style.top, 10) >= 0) {
            //console.log('!!!');
            clearInterval();
        } 
    }, 20);
    //////прячем меню
}

function checkMenu() {
    var fullView = document.documentElement.clientHeight;
    var curentScroll = window.pageYOffset;
    var fullWidth = document.documentElement.clientWidth;
    
    if(fullView <= curentScroll) { //проверяем прокрутку
        console.log('nado!!!');
        clearInterval(timerId);
    } else {
        console.log('net!!!');
    }
}
