let tabs_nav = document.getElementById('tabs-nav')

const data = [
    {
        title_1: '測試一測試一測試一測試一測試一測試一測試一測試一',
        title_2: '測試二測試二測試二測試二測試二測試二測試二測試二',
    },
]
// 頁籤渲染
function tabRender(){
    let str = '';
    data.forEach((res) => {
        str += `
            <li class="mask mask-1">
                <a href="#tab1">${res.title_1}</a>
            </li>
            <li class="mask mask-2">
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
    $('.mask a').css('color','black');
    $('.tab-content').hide();

    $(this).addClass('active');
    $(this).find('a').css('color','white')
    let activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
})