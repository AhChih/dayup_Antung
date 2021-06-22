let tabs_nav = document.getElementById('tabs-nav')

const data = [
    {
        title_1: '朔石化股份-桃園二廠PVC | 再生案2台',
        title_2: '朔石化股份-桃園二廠PVC | 再生案2台'
    },
]
// 頁籤渲染
function tabRender(){
    let str = '';
    data.forEach((res) => {
        str += `
            <li class="mask-1">
                <a href="#tab1">${res.title_1}</a>
            </li>
            <li class="mask-2">
                <a href="#tab2">${res.title_2}</a>
            </li>
        `
    })
    tabs_nav.innerHTML = str;
}
tabRender();

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