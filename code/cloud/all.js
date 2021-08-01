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
                <td style="width: 5%">順序</td>
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
            <td style="width: 5%">${index}</td>
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

// datepicker
$("#startDate").flatpickr({
  dateFormat: "Y-m-d"
});

$("#endDate").flatpickr({
  dateFormat: "Y-m-d"
});