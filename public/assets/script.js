updateClock();
function updateClock(){
    let now = new Date();
    time = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
    document.getElementById('timp').innerHTML = "&copy;. 2020. E-math &nbsp;&nbsp;"+time; 
    setTimeout(updateClock,1000);
}
function hs1(){
    let x = document.getElementById("hs1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function hs2(){
    let x = document.getElementById("hs2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function hs3(){
    let x = document.getElementById("hs3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function hs4(){
    let x = document.getElementById("hs4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function hs5(){
    let x = document.getElementById("hs5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function hs6(){
    let x = document.getElementById("hs6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}