function tryThis() {
    console.log(document.getElementById('try').hidden);
    
    if (document.getElementById('try').hidden == true) {
        document.getElementById('try').hidden= false;
    } else {
        document.getElementById('try').hidden= true ;
    }
}