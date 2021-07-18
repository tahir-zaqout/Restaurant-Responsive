$(function () {
    //////// Nice Scroll
    $("body").niceScroll({
        cursorcolor:"#f4c030",
        cursorwidth:"10px",
        scrollspeed: 1,
    });
    //////// Add Active Class To Navbar
    $('.nav-link').on('click',(e)=>{
        let target = e.target
        $('.nav-link').removeClass('active')
        $(target).addClass('active')
    })
    //////// Scroll To Top
    var scrollToTop = $(".scroll-top");
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 600) {
            scrollToTop.css({right:'18px'});}
        else{scrollToTop.css({right:'-45px'});}
    });
    $(".scroll-top").on("click", function () {
        $("html, body").animate({scrollTop: 0,},400);
    });
    //////// Loader
    function loader(){
        $('.loader').addClass('hide');
    }
    function fadeOut(){
        setInterval(loader,500);
    }
    window.onload = fadeOut()
    ////// Scroll Reveal Animation
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 2000,
        reset: true
    })
    srtop.reveal(`.home-content, .box, .steps, .review-box-container, .order-title, .social-links`,{
        interval:200
    })
    const srleft = ScrollReveal({
        origin: 'left',
        distance: '30px',
        duration: 2000,
        reset: true
    })
    srleft.reveal(`.popular-box, .gallery-title, .gallery-box, .review-title, .order-form`,{
        interval:200
    })
});
