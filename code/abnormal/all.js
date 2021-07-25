// 日曆
new Calendar({
    id: '#start-calendar',
    calendarSize: 'small',
    primaryColor: '#036eb8',
    headerColor: '#036eb8',
  })
  
new Calendar({
  id: '#end-calendar',
  calendarSize: 'small',
  primaryColor: '#036eb8',
  headerColor: '#036eb8',
})
  
$(function() {
  $('.toggle-calendar-start').click(function(){
    $('#start-calendar').toggle();
  })
  
  $('.toggle-calendar-start-end').click(function(){
    $('#end-calendar').toggle();
  })
  
  $('#start-calendar').hide();
  $('#end-calendar').hide()
});

const data = [
  {
    area: '生一部',
    dateOil: '油品特性：2020/08/15',
    dateC5H4O2: '油品糠醛：2020/08/15',
    transformerName: 'TR 4001A',
    transformerNumber: '865203',
    oil: '1000',
    transformerabnormal: '酸價：0.208 ｜ 水分：110 ｜ 電介質強度：17 ｜ 界面張力：18',
    transformerState: '含水量、酸價偏高且界面張力、電介質強度等偏低。變壓器油絕緣強度不佳且嚴重劣化',
    suggest: '再生'
  },
  {
    area: '生一部',
    dateOil: '油品特性：2020/08/15',
    dateC5H4O2: '油品糠醛：2020/08/15',
    transformerName: 'TR 4001A',
    transformerNumber: '865203',
    oil: '1000',
    transformerabnormal: '酸價：0.208 ｜ 水分：110 ｜ 電介質強度：17 ｜ 界面張力：18',
    transformerState: '含水量、酸價偏高且界面張力、電介質強度等偏低。變壓器油絕緣強度不佳且嚴重劣化',
    suggest: '再生'
  },
  {
    area: '生一部',
    dateOil: '油品特性：2020/08/15',
    dateC5H4O2: '油品糠醛：2020/08/15',
    transformerName: 'TR 4001A',
    transformerNumber: '865203',
    oil: '1000',
    transformerabnormal: '酸價：0.208 ｜ 水分：110 ｜ 電介質強度：17 ｜ 界面張力：18',
    transformerState: '含水量、酸價偏高且界面張力、電介質強度等偏低。變壓器油絕緣強度不佳且嚴重劣化',
    suggest: '再生'
  },
  {
    area: '生一部',
    dateOil: '油品特性：2020/08/15',
    dateC5H4O2: '油品糠醛：2020/08/15',
    transformerName: 'TR 4001A',
    transformerNumber: '865203',
    oil: '1000',
    transformerabnormal: '酸價：0.208 ｜ 水分：110 ｜ 電介質強度：17 ｜ 界面張力：18',
    transformerState: '含水量、酸價偏高且界面張力、電介質強度等偏低。變壓器油絕緣強度不佳且嚴重劣化',
    suggest: '再生'
  },
  {
    area: '生一部',
    dateOil: '油品特性：2020/08/15',
    dateC5H4O2: '油品糠醛：2020/08/15',
    transformerName: 'TR 4001A',
    transformerNumber: '865203',
    oil: '1000',
    transformerabnormal: '酸價：0.208 ｜ 水分：110 ｜ 電介質強度：17 ｜ 界面張力：18',
    transformerState: '含水量、酸價偏高且界面張力、電介質強度等偏低。變壓器油絕緣強度不佳且嚴重劣化',
    suggest: '再生'
  },
  {
    area: '生一部',
    dateOil: '油品特性：2020/08/15',
    dateC5H4O2: '油品糠醛：2020/08/15',
    transformerName: 'TR 4001A',
    transformerNumber: '865203',
    oil: '1000',
    transformerabnormal: '酸價：0.208 ｜ 水分：110 ｜ 電介質強度：17 ｜ 界面張力：18',
    transformerState: '含水量、酸價偏高且界面張力、電介質強度等偏低。變壓器油絕緣強度不佳且嚴重劣化',
    suggest: '再生'
  },
  {
    area: '生一部',
    dateOil: '油品特性：2020/08/15',
    dateC5H4O2: '油品糠醛：2020/08/15',
    transformerName: 'TR 4001A',
    transformerNumber: '865203',
    oil: '1000',
    transformerabnormal: '酸價：0.208 ｜ 水分：110 ｜ 電介質強度：17 ｜ 界面張力：18',
    transformerState: '含水量、酸價偏高且界面張力、電介質強度等偏低。變壓器油絕緣強度不佳且嚴重劣化',
    suggest: '再生'
  },
]
  
  function tableRender() {
      let titleStr = '';
      let dataStr = '';
      titleStr += `
      <thead>
          <tr class="table-header";>
              <td>區域篩選</td>
              <td class="data-date">取樣日期</td>
              <td>變壓器名稱</td>
              <td>變壓器序號</td>
              <td>油量</td>
              <td style="width: 45%">檢驗報告異常</td>
              <td>建議施作</td>
          </tr>
      </thead>`
      data.forEach((res) => { 
      dataStr +=`
      <tbody>
        <tr class="data-table">
          <td>${res.area}</td>
          <td class="data-date">${res.dateOil}<br>${res.dateC5H4O2}</td>
          <td>${res.transformerName}</td>
          <td>${res.transformerNumber}</td>
          <td>${res.oil}</td>
          <td class="data-state"><span>${res.transformerabnormal}</span><br>${res.transformerState}</td>
          <td>${res.suggest}</td>
        </tr>
      </tbody>
      `
      })
      table_element.innerHTML = titleStr + dataStr
  }
  tableRender();

    // sidebar toggle 解決日期顯示在上面問題
    let change = true;
    $('.menu__btn').click(function(){
        if (change == false) {
          change = true;
          $('.date-start').css('z-index', '1')
          return
        }
        $('.date-start').css('z-index', '-1')
        
        change = false;
    })