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
            <td>${res.transformerName}</td>
            <td>${res.transformerNumber}</td>
            <td>${res.transformerState}</td>
            <td>${res.mostRecentDate}</td>
            <td>${res.againDate}</td>
        </tr>`
        })
        table_element.innerHTML = titleStr + dataStr
    }
    tableRender();