
//SMOOTH PAGE SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//OWL CAROSEL TESTIMONIAL
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(document).ready(
  function() { 
    const dets = [
      {
      imglink:"images/alexa.png",
      link:"https://www.alexadevsrm.com",
      name:"Alexa developers SRM",
      subtitle:"Community Page"
    },
    {
      imglink:"images/dauntless.png",
      link:"https://www.dauntless.in",
      name:"Be Dauntless NGO",
      subtitle:"NGO Website"
    },
    {
      imglink:"images/iwsc.png",
      link:"https://www.inceptionwave.in",
      name:"IWSC SRM",
      subtitle:"Community Page"
    },
    {
      imglink:"images/dygn.png",
      link:"https://www.dygnmedia.com",
      name:"DYGN Media",
      subtitle:"Digital Agency Portfolio"
    },
    {
      imglink:"images/vaultboard.png",
      link:"https://www.vaultboard.com",
      name:"Vaultboard consulting",
      subtitle:"Educational Project"
    },
    {
      imglink:"images/pen.png",
      link:"https://www.pen.nyxwolves.xyz",
      name:"Pen-Nyxwolves",
      subtitle:"E-learning-App"
    }]
    var works = dets.map((item,index)=> {return `<div class="col-md-4 no_padding">
                    <div class="single_image">
                        <img src="${item.imglink}" alt="">
                        <div class="image_overlay">
                            <a href="${item.link}" target="_blank">View Live</a>
                            <h2>${item.name}</h2>
                            <h4>${item.subtitle}</h4>
                        </div>
                    </div>
                </div>`})
    
    $('#works').html(works);

    $("html").niceScroll({
    	cursorcolor:"#f74d65",
    	scrollspeed :"100",
    	cursorborder:"1px solid #f74d65",
    	horizrailenabled: "false",
    	cursorborderradius: "0px"
    });

  }

);

new WOW().init();


    
/*Preloader*/

$(window).load(function() {
  $('#status').fadeOut(); 
  $('#preloader').delay(350).fadeOut('slow'); 
  $('body').delay(350).css({'overflow':'visible'});
})

//]]>


//ajax
const send = (e) => {
  e.preventDefault();
  var name = document.getElementsByName('name')[0].value
  var email = document.getElementsByName('email')[0].value
  var subject = document.getElementsByName('subject')[0].value
  var message = document.getElementsByName('message')[0].value
  var values = {
    email: email,
    name: name,
    subject: subject,
    message: message
  }
  $.ajax({
    url: 'https://get-send.herokuapp.com/send',
    data: values,
    type: "POST",
    success: function(val) { 
      Swal.fire('Yayyy!',
                'We got your message',
                'success');
    }
  })
}