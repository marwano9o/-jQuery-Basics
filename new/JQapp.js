// document.getElementById("content").innerHTML='<h1 id header1> The Happy Rasturant </h1<section id="header">'+
//     '<button "./img/log.jpg " class="logo" alt="" /></button>'+'<div> <ul id="navbar"><li><button class="active" l">Home</button></li><li><button id="moh" ">offer for today</button></li>'+
// ' <li><button Blog</button></li> <li><button >About</button></li>  <li><button l">Contect</button></li> <li>  <button ="./img/shop-cart.png " class="logo" alt=""/>     </button>'+
// ' </li></ul>  </section>  ';
// document.getElementById("content").style.backgroundImage =' "background.jpg" 

$("#content" ).append( '<section id="header">'+
' <ul id="navbar"><li><button class="buttonhome" l">Home</button></li><li><button class="button1" ">main foods for today</button></li>'+
' <li><button  class="button2">Blog</button></li> <li><button  class=""button3>About</button></li>  <li><button class="button4">Contect</button></li> <li>  <button class="button5" >Job Offers   </button>'+
' </li></ul>  </section> ' );   $('.imgEl').css('background-image', 'url(./assets/image.png)');
$('body').css('background-image', 'url(./background.jpg)');
$('body').css('background-image', 'url(./img/background.jpg)'); 
// $("#content").append("<h2>Welcome to our company! We're so excited to have <br>you as part of our team <br> We're glad "+
// "you've chosen us,<br> and we want to show our appreciation by<br> giving you a special incentive.</h2>");
$('.buttonhome').on('click',function(){
    $('body').css('background-image', 'url(./img/background.jpg)'); 
    $("#content").append("<h2 class='homepage'>Welcome to our company! We're so excited to have you as part of our team <br> We're glad "+
    "you've chosen us,<br> and we want to show our appreciation by giving you a special incentive.</h2>");
})

$('.button1').on('click',function(){
    $("h2").hide();
    $('body').css('background-image', 'url(./img/1.jpg)'); 
    $("#content").append("");
})
$('.button2').on('click',function(){
    $("h2").hide();
    $('body').css('background-image', 'url(./img/2.jpg)'); 
    $("#content").append("");
})
$('.button3').on('click',function(){
    $("h2").hide();
    $('body').css('background-image', 'url(./img/3.jpg)'); 
    $("#content").append("");
})
$('.button4').on('click',function(){
    $("h2").hide();
    $('body').css('background-image', 'url(./img/4.jpg)'); 
    $("#content").append("");
})
$('.button5').on('click',function(){
    $("h2").hide();
    $('body').css('background-image', 'url(./img/5.jpg)'); 
    $("#content").append("");
})



