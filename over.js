var x=0;var onscr=false;

function obox(){if(input[x]){setTimeout(obox1,3000);
document.getElementById('slde').style.visibility='hidden';
document.getElementById('slde').style.webkitTransform='none';
document.getElementById('slde').style.MozTransform='none';
document.getElementById('slde').style.msTransform='none';
document.getElementById('slde').style.OTransform='none';
document.getElementById('slde').style.transform='none';
document.getElementById('text').innerHTML=input[x];x+=1;
document.getElementById('metr').innerHTML=Array(x).join('_')+'&#9973\;'+Array(input.length-x+1).join('_')+'&#9875\;';}
else{window.location.href="http://arbaat.awardspace.us/";}}

function obox1(){var ey=document.body.scrollTop+500;
document.getElementById('slde').style.visibility='visible';
document.getElementById('slde').style.webkitTransform='translateY('+ey+'px)';
document.getElementById('slde').style.MozTransform='translateY('+ey+'px)';
document.getElementById('slde').style.msTransform='translateY('+ey+'px)';
document.getElementById('slde').style.OTransform='translateY('+ey+'px)';
document.getElementById('slde').style.transform='translateY('+ey+'px)';
onscr=true;}

function cbox(){onscr=false;
document.getElementById('slde').style.webkitTransform='translate3d(-2300px,500px,-4000px)';
document.getElementById('slde').style.MozTransform='translate3d(-2300px,500px,-4000px)';
document.getElementById('slde').style.msTransform='translate3d(-2300px,500px,-4000px)';
document.getElementById('slde').style.OTransform='translate3d(-2300px,500px,-4000px)';
document.getElementById('slde').style.transform='translate3d(-2300px,500px,-4000px)';
setTimeout(obox,2000);}

window.onscroll=function(){if(onscr){var ey=document.body.scrollTop+500;
document.getElementById('slde').style.webkitTransform='translateY('+ey+'px)';
document.getElementById('slde').style.MozTransform='translateY('+ey+'px)';
document.getElementById('slde').style.msTransform='translateY('+ey+'px)';
document.getElementById('slde').style.OTransform='translateY('+ey+'px)';
document.getElementById('slde').style.transform='translateY('+ey+'px)';}}
