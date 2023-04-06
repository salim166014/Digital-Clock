function digitalClock(){
    var digiTime = new Date();
    var hrs = digiTime.getHours();
    var min = digiTime.getMinutes();
    var sec = digiTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs > 12){
        hrs = hrs - 12;
    }

    if (hrs < 10) {
        hrs = '0' + hrs;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    if(hrs >= 12){
        session.innerHTML='am';
    }else{
        session.innerHTML='pm';
    }

    document.getElementById('hour').innerHTML=hrs;
    document.getElementById('minut').innerHTML=min;
    document.getElementById('second').innerHTML=sec;
}
digitalClock()
setInterval(digitalClock, 10);