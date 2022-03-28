function getDate(){

    var days = ['일', '월', '화', '수', '목', '금', '토'];

    var today = new Date();   
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var date = today.getDate();
    var day = days[today.getDay()];

    
    today = '오늘은~?  ' + year + `년 ` + month + `월 ` + date + `일 ` + day + `요일🐶`;
    document.getElementById('today').innerText = today;

}

function init(){
    getDate();
    setInterval(getDate(), 1000);
}

init();
