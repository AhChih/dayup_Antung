let detailsData = document.querySelector('.detailsData')
let tableBox = document.querySelector('.tableBox')

const data = [{
    testName: '油品特性試驗',
    testNumber: 'ATA20201213',
    sendTestName: '-',
    reportName: '台朔石化股份有限公司 - 桃園PVC二廠',
    receiveDate: '2020/12/21',
    finishDate: '2020/12/28'
}]

const productData = [
  {
    productNumber: '20207887-1',
    productName: 'A棟TR-1',
    createNumber: '831777',
    other: '張晏瑞 34度C 12/21', 
  },
  {
    productNumber: '20207887-1',
    productName: 'A棟TR-1',
    createNumber: '831777',
    other: '張晏瑞 34度C 12/21', 
  },
  {
    productNumber: '20207887-1',
    productName: 'A棟TR-1',
    createNumber: '831777',
    other: '張晏瑞 34度C 12/21', 
  },
  {
    productNumber: '20207887-1',
    productName: 'A棟TR-1',
    createNumber: '831777',
    other: '張晏瑞 34度C 12/21', 
  },
  {
    productNumber: '20207887-1',
    productName: 'A棟TR-1',
    createNumber: '831777',
    other: '張晏瑞 34度C 12/21', 
  },
]

function renderDetailsData(){
    let str = ''
    data.forEach((res) => {
    str += `
        <ul>
          <li><span>試驗名稱 | </span><span>${res.testName}</span></li>
          <li><span>收件編號 | <span></span>${res.testNumber}</span></li>
          <li><span>收件編號 | <span></span>${res.testNumber}</span></li>
          <li><span>收件編號 | <span></span>${res.reportName}</span></li>
        </ul>
        <ul>
          <li><span>試驗名稱 | </span><span>${res.receiveDate}</span></li>
          <li><span>預定完成 | </span><span>${res.finishDate}</span></li>
        </ul>`
    })
    detailsData.innerHTML = str
}

function rendertableBox(){
  let str = ''
  let table_title = ''
  table_title += 
  `<tr>
    <td>識別號碼</td>
    <td>變壓器名稱</td>
    <td>製造號碼</td>
    <td>備註</td>
  </tr>`
  productData.forEach((res) => {
  str += `
<tr>
  <td>${res.productNumber}</td>
  <td>${res.productName}</td>
  <td>${res.createNumber}</td>
  <td>${res.other}</td></td>
</tr>`
})
  tableBox.innerHTML = table_title + str
}

renderDetailsData()
rendertableBox()
console.log(tableBox)