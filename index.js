// //live timing


function displayTime(){

    var time = new Date();
    var hours =time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var session = document.getElementById('session');

    if(hours > 12){
      hours = hours-12;
    }
    if(hours <10){
      "0" + time.getHours();
    }

    if(minutes < 10){
      "0" + time.getMinutes();
    }
    
    if(seconds < 10){
      "0" + time.getSeconds();
    }
    
    if(hours >= 12){
      session.innerHTML ="AM";
    }
    else{
      session.innerHTML ="PM";
    }
   
   

    document.getElementById('hourM').innerHTML = hours + "<br>hours";
    document.getElementById('minM').innerHTML = minutes + "<br>mins";
    document.getElementById('secM').innerHTML = seconds + "<br>secs";
    
}
setInterval(displayTime, 1000);

displayTime();



 function displayGreeting(){

    var time = new Date();
    var hours = time.getHours();
    

    let waketime = document.getElementById("dropdown-wake").value
    let lunchtime = document.getElementById("dropdown-lunch").value
    let naptime = document.getElementById("dropdown-evening").value
    let nighttime = document.getElementById("dropdown-night").value

    if(waketime == hours){
        document.getElementById("greeting").innerHTML = "GOOD MORNING!! WAKE UP !!";
        document.getElementById("msg").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("pic").style.backgroundImage = "url('./Component\ 30\ –\ 1.png')"

    }
  
    if (lunchtime == hours) {

        document.getElementById("greeting").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById("msg").innerHTML = "LET'S HAVE SOME LUNCH !!";
        document.getElementById("pic").style.backgroundImage = "url('./lunch.png')";
      }
      if (naptime == hours) {
        document.getElementById("greeting").innerHTML = "GOOD EVENING !!";
        document.getElementById("msg").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("pic").style.backgroundImage =  "url('./evening_image.png')";

      }
      if (nighttime == hours) {
        document.getElementById("greeting").innerHTML = "GOOD NIGHT !!";
        document.getElementById("msg").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("pic").style.backgroundImage = "url('./Component\ 32\ –\ 1.png')";
      
      }
    
      displayValue()
}






function displayValue(){
    let waketime = document.getElementById("dropdown-wake").value
    let lunchtime = document.getElementById("dropdown-lunch").value
    let naptime = document.getElementById("dropdown-evening").value
    let nighttime = document.getElementById("dropdown-night").value

    var wakeValue = document.getElementById("dropdown-wake");
    var value1 = wakeValue.options[wakeValue.selectedIndex].text;

    var lunchValue = document.getElementById("dropdown-lunch");
    var value2 = lunchValue.options[lunchValue.selectedIndex].text;

    var napValue = document.getElementById("dropdown-evening");
    var value3 = napValue.options[napValue.selectedIndex].text;

    var nightValue = document.getElementById("dropdown-night");
    var value4 = nightValue.options[nightValue.selectedIndex].text;
    
    if (waketime == "none") {
      document.getElementById("wake").innerHTML = "";
    } else {
      document.getElementById("wake").innerHTML =
        "Wake up time : " + value1;
    }

    if (lunchtime == "none") {
      document.getElementById("lunch").innerHTML = "";
    } else {
      document.getElementById("lunch").innerHTML =
        "Lunch time : " + value2;
    }

    if (naptime == "none") {
      document.getElementById("nap").innerHTML = "";
    } else {
      document.getElementById("nap").innerHTML = "Nap time : " + value3;
    }
    
    if (nighttime == "none") {
        document.getElementById("night").innerHTML = "";
      } else {
        document.getElementById("night").innerHTML = "night time : " + value4;
      }
  }

 