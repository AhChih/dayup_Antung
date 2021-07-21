const data = [
    {
        area: '',
        transformerName: 'ATA2020300',
        transformerNumber: 'ATA2020300',
        transformerState: 'ATA2020300',
        mostRecentDate: '-',
        againDate: '-',
    },
    {
        area: '',
        transformerName: 'ATA2020300',
        transformerNumber: 'ATA2020300',
        transformerState: 'ATA2020300',
        mostRecentDate: '-',
        againDate: '-',
    },
    {
        area: '',
        transformerName: 'ATA2020300',
        transformerNumber: 'ATA2020300',
        transformerState: 'ATA2020300',
        mostRecentDate: '-',
        againDate: '-',
    }]
    
    function tableRender() {
        let titleStr = '';
        let dataStr = '';
        titleStr += `
        <thead>
            <tr class="table-header";>
                <td>順序</td>
                <td>油品特性報告編號</td>
                <td>油中氣體報告編號</td>
                <td>油品糠醛報告編號</td>
                <td>油中抗氧化劑報告編號</td>
                <td>油中腐蝕流報告編號</td>
            </tr>
        </thead>`
        data.forEach((res, index) => { 
        index += 1
        dataStr +=`
        <tr class="data-table">
            <td>${index}</td>
            <td><a href="#">${res.transformerName}</a></td>
            <td><a href="#">${res.transformerNumber}</a></td>
            <td><a href="#">${res.transformerState}</a></td>
            <td>${res.mostRecentDate}</td>
            <td>${res.againDate}</td>
        </tr>`
        })
        table_element.innerHTML = titleStr + dataStr
    }
    tableRender();

// 日曆一
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