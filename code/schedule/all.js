$('#tabs-nav li:first-child').addClass('active');
$('.mask-1 a').css('color','white')
$('.tab-content').hide();
$('.tab-content:first').show();

// click toggle tab-nav
$('#tabs-nav li').click(function(){
    $('#tabs-nav li').removeClass('active');
    $('.mask-1 a').css('color','black');
    $('.mask-2 a').css('color','black');
    $('.tab-content').hide();

    $(this).addClass('active');
    $(this).find('a').css('color','white')
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
})