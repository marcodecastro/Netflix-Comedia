$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



var test = 0;
$(".filme-principal").mouseover(
    function() {        
        $('.filme-principal #video')[0].play(); 
        $('.filme-principal').css({
            height: '110vh',
            transition: '1s ease-in-out'
        }); 
        $('.filme-principal .titulo').css({
            'margin-top': '5%',
            opacity: '0',
            transition: '1s ease'
        });  
        $('.filme-principal .descricao').css({
            opacity: '0',
            transition: '1s ease'
        });  
        $('.filme-principal .botao').css({
            opacity: '0',
            transition: '1s ease'
        });  
    }

);