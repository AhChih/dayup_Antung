const newData = [
    {
        area: 'BSS1',
        transformerName: 'TR 4001A',
        transformerNumber: '865203',
        transformerState: '正常',
        mostRecentDate: '2012/12/28',
        againDate: '2012/12/28',
        manufacturer: '士林',
        createDate: '1996/02',
        kVA: '9000',
        onec: '114',
        twice: '0.3',
        oil: '1000',
        coil: '55',
        seal: '氣封式',
        oilPort: '法蘭(大)',
        oilOutlet: '法蘭(大)',
    },
]


function dataRender(){
    let titleStr = '';
    let dataStr = '';
    titleStr += `<tr style="color: white";>
    <td>區域篩選</td>
    <td>變壓器名稱</td>
    <td>變壓器序號</td>
    <td>變壓器狀況</td>
    <td>最近取樣送試日期</td>
    <td>建議再送試日期</td>
    <td>製造廠商</td>
    <td>製造日期</td>
    <td>容量(kVA)</td>
    <td>一次側</td>
    <td>二次側</td>
    <td>油量</td>
    <td>線圈溫升</td>
    <td>密封方式</td>
    <td>進油口</td>
    <td>出油口</td>
</tr>`
newData.forEach((res) => {
    dataStr += `
    <tr class="data-table">
        <td>${res.area}</td>
        <td>${res.transformerName}</td>
        <td>${res.transformerNumber}</td>
        <td>${res.transformerState}</td>
        <td>${res.mostRecentDate}</td>
        <td>${res.againDate}</td>
        <td>${res.manufacturer}</td>
        <td>${res.createDate}</td>
        <td>${res.kVA}</td>
        <td>${res.onec}</td>
        <td>${res.twice}</td>
        <td>${res.oil}</td>
        <td>${res.coil}</td>
        <td>${res.seal}</td>
        <td>${res.oilPort}</td>
        <td>${res.oilOutlet}</td>
    </tr>`
})
    data_element.innerHTML = titleStr + dataStr;
}

function chartRednder1() {
    let str = ''
    str+= `<tr>
    <td colspan="2"><span class="gray">油品特性/試驗編號</span></td>
    <td><span>ATA2020100</span></td>
    <td><span>ATA2020100</span></td>
    <td><span>ATA2020100</span></td>
    <td><span class="br-none">ATA2020100</span></td>
  </tr>
  <tr>
    <td class="rowspan" rowspan="2">
      <span class="gray">建議值(舊油)</span>
    </td>
    <td><span class="gray">取樣日期</span></td>
    <td><span>2019/7/25</span></td>
    <td><span>2019/9/26</span></td>
    <td><span>2019/11/25</span></td>
    <td><span class="br-none">2020/1/31</span></td>
  </tr>
  <tr>
    <td><span class="gray">取樣油溫</span></td>
    <td><span>22°C</span></td>
    <td><span>22°C</span></td>
    <td><span>22°C</span></td>
    <td><span class="br-none">22°C</span></td>
  </tr>
  <tr>
    <td><span><=1.5</span></td>
    <td><span class="gray">色度</span></td>
    <td><span><0.5</span></td>
    <td><span><0.5</span></td>
    <td><span><0.5</span></td>
    <td><span class="br-none"><0.5</span></td>              
  </tr>
  <tr>
    <td><span><=35</span></td>
    <td><span class="gray">酸價</span></td>
    <td><span>0.005</span></td>
    <td><span>0.005</span></td>
    <td><span>0.005</span></td>
    <td><span class="br-none">0.005</span></td>
  </tr>
  <tr>
    <td><span><=0.2</span></td>
    <td><span class="gray">水份</span></td>
    <td><span>30</span></td>
    <td><span>20</span></td>
    <td><span>10</span></td>
    <td><span class="br-none">1</span></td>
  </tr>
  <tr>
    <td><span><=30</span></td>
    <td><span class="gray">電介質強度</span></td>
    <td><span>20</span></td>
    <td><span>30</span></td>
    <td><span>20</span></td>
    <td><span class="br-none">1</span></td>
  </tr>
  <tr>
    <td><span><=25</span></td>
    <td><span class="gray">界面張力</span></td>
    <td><span>44</span></td>
    <td><span>70</span></td>
    <td><span>50</span></td>
    <td><span class="br-none">40</span></td>
  </tr>
  <tr class="last">
    <td colspan="2"><span class="gray">試驗種類</span></td>
    <td><span class="gray">-</span></td>
    <td><span class="gray">-</span></td>
    <td><span class="gray">-</span></td>
    <td><span class="br-none gray">-</span></td>
  </tr>
  `
  chart_1.innerHTML = str;
}

function chartRednder2() {
    let str = ''
    str+= `<tr>
    <td colspan="3"><span class="gray">油品特性/試驗編號</span></td>
    <td><span>ATA2020100</span></td>
    <td><span>ATA2020100</span></td>
    <td><span>ATA2020100</span></td>
    <td><span class="br-none">ATA2020100</span></td>
  </tr>
  <tr>
    <td colspan="3"><span class="gray">取樣日期</span></td>
    <td><span>2019/3/25</span></td>
    <td><span>2019/7/25</span></td>
    <td><span>2019/9/26</span></td>
    <td><span class="br-none">2020/1/31</span></td>
  </tr>
  <tr>
    <td colspan="3"><span class="gray">取樣油溫</span></td>
    <td><span>22°C</span></td>
    <td><span>22°C</span></td>
    <td><span>22°C</span></td>
    <td><span class="br-none">22°C</span></td>
  </tr>
  <tr>
    <td><span class="gray">需注意</span></td>
    <td><span class="gray">異常</span></td>
    <td><span class="gray">取樣油溫</span></td>
    <td><span>22°C</span></td>
    <td><span>22°C</span></td>
    <td><span>22°C</span></td>
    <td><span class="br-none">22°C</span></td>              
  </tr>
  <tr>
    <td><span class="gray">-</span></td>
    <td><span class="gray">-</span></td>
    <td><span class="gray">氧氣(O2)</span></td>
    <td><span>10245</span></td>
    <td><span>10245</span></td>
    <td><span>10245</span></td>
    <td><span class="br-none">10245</span></td>
  </tr>
  <tr>
    <td><span class="gray">-</span></td>
    <td><span class="gray">-</span></td>
    <td><span class="gray">氮氣(N2)</span></td>
    <td><span>57495</span></td>
    <td><span>57495</span></td>
    <td><span>57495</span></td>
    <td><span class="br-none">57495</span></td>
  </tr>
  <tr>
    <td><span class="gray">400</span></td>
    <td><span class="gray">-</span></td>
    <td><span class="gray">氫氣(H2)</span></td>
    <td><span>10</span></td>
    <td><span>20</span></td>
    <td><span>30</span></td>
    <td><span class="br-none">40</span></td>
  </tr>
  <tr>
    <td><span class="gray">-</span></td>
    <td><span class="gray">-</span></td>
    <td><span class="gray">二氧化碳(CO2)</span></td>
    <td><span>12610</span></td>
    <td><span>12610</span></td>
    <td><span>12610</span></td>
    <td><span class="br-none">12610</span></td>
  </tr>
  <tr>
    <td><span class="gray">300</span></td>
    <td><span class="gray">-</span></td>
    <td><span class="gray">一氧化碳(CO)</span></td>
    <td><span>70</span></td>
    <td><span>71</span></td>
    <td><span>72</span></td>
    <td><span class="br-none">73</span></td>
  </tr>
  <tr>
    <td><span class="gray">100</span></td>
    <td><span class="gray">-</span></td>
    <td><span class="gray">甲烷(CH4)</span></td>
    <td><span>44</span></td>
    <td><span>70</span></td>
    <td><span>50</span></td>
    <td><span class="br-none">40</span></td>
  </tr>
  <tr>
    <td><span class="gray">150</span></td>
    <td><span class="gray">-</span></td>
    <td><span class="gray">乙烷(C2H6)</span></td>
    <td><span>20</span></td>
    <td><span>30</span></td>
    <td><span>20</span></td>
    <td><span class="br-none">1</span></td>
  </tr>
  <tr>
    <td><span class="gray">10</span></td>
    <td><span class="gray">5</span></td>
    <td><span class="gray">乙烯(C2H4)</span></td>
    <td><span>19</span></td>
    <td><span>12</span></td>
    <td><span>20</span></td>
    <td><span class="br-none">40</span></td>
  </tr>
  <tr>
    <td><span class="gray">0.5</span></td>
    <td><span class="gray">100</span></td>
    <td><span class="gray">乙炔(C2H2)</span></td>
    <td><span>ND</span></td>
    <td><span>ND</span></td>
    <td><span>ND</span></td>
    <td><span class="br-none">ND</span></td>
  </tr>
  <tr>
    <td><span class="gray">500</span></td>
    <td><span class="gray">700</span></td>
    <td><span class="gray" style="font-size: 15px">可燃性氣體總量(TDCG)</span></td>
    <td><span>610</span></td>
    <td><span>640</span></td>
    <td><span>670</span></td>
    <td><span class="br-none">700</span></td>
  </tr>
  <tr class="last">
    <td colspan="3"><span class="gray">試驗種類</span></td>
    <td><span class="gray"></span></td>
    <td><span class="gray"></span></td>
    <td><span class="gray"></span></td>
    <td><span class="br-none gray"></span></td>
  </tr>
  `
  chart_2.innerHTML = str;
}

function chartRednder3() {
  let str = ''
  str+= `<tr>
  <td><span class="gray">油品特性/試驗編號</span></td>
  <td><span>ATA2020100</span></td>
  <td><span>ATA2020100</span></td>
  <td><span>ATA2020100</span></td>
  <td><span class="br-none">ATA2020100</span></td>
</tr>
<tr>
  <td><span class="gray">取樣日期</span></td>
  <td><span>2019/5/5</span></td>
  <td><span>2019/6/5</span></td>
  <td><span>2020/9/20</span></td>
  <td><span class="br-none">2021/1/11</span></td>
</tr>
<tr>
  <td><span class="gray">試驗日期</span></td>
  <td><span>2019/5/5</span></td>
  <td><span>2019/6/5</span></td>
  <td><span>2020/9/20</span></td>
  <td><span class="br-none">2021/1/11</span></td>
</tr>
<tr>
  <td><span class="gray">取樣油溫</span></td>
  <td><span>22°</span></td>
  <td><span>22°C</span></td>
  <td><span>22°C</span></td>
  <td><span class="br-none">22°C</span></td>         
</tr>
<tr>
  <td><span class="gray">2-糠醛(2-FAL)</span></td>
  <td><span>25</span></td>
  <td><span>26</span></td>
  <td><span>27</span></td>
  <td><span class="br-none">28</span></td>         
</tr>
<tr>
  <td><span class="gray">2-糠醇(2-FOL)</span></td>
  <td><span>ND</span></td>
  <td><span>ND</span></td>
  <td><span>ND</span></td>
  <td><span class="br-none">ND</span></td> 
</tr>
<tr>
  <td><span class="gray">5-氫氧甲基-2-糠醛（5HMF)</span></td>
  <td><span>ND</span></td>
  <td><span>ND</span></td>
  <td><span>ND</span></td>
  <td><span class="br-none">ND</span></td> 
</tr>
<tr>
  <td><span class="gray">2-乙呋喃(2ACF)</span></td>
  <td><span>ND</span></td>
  <td><span>ND</span></td>
  <td><span>ND</span></td>
  <td><span class="br-none">ND</span></td> 
</tr>
<tr>
  <td><span class="gray">5-甲基-2-糠醛(5MEF)</span></td>
  <td><span>ND</span></td>
  <td><span>ND</span></td>
  <td><span>ND</span></td>
  <td><span class="br-none">ND</span></td> 
</tr>
<tr>
  <td><span class="gray">油中糠醛總濃度</span></td>
  <td><span>25</span></td>
  <td><span>25</span></td>
  <td><span>25</span></td>
  <td><span class="br-none">25</span></td> 
</tr>
<tr class="last">
  <td><span class="gray">試驗種類</span></td>
  <td><span class="gray"></span></td>
  <td><span class="gray"></span></td>
  <td><span class="gray"></span></td>
  <td><span class="br-none gray"></span></td>
</tr>
`
chart_3.innerHTML = str;
}

dataRender();
chartRednder1();
chartRednder2();
chartRednder3();

// 圖表 1
const ctx = document.getElementById('myChart');
const mylineGraph = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2019/7/25", "2019/9/26", "2019/11/25", "2020/1/31"],
      datasets: [
        {
          label: "酸價顯示*100",
          data: [45, 59, 68, 45],
          fill: false,
          borderColor: "#0cd19c",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
        {
          label: "水份",
          data: [44, 70, 50, 40],
          fill: false,
          borderColor: "#ff0000",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
        {
          label: "電介質強度",
          data: [32, 40, 45, 33],
          fill: false,
          borderColor: "#ff7200",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
        {
            label: "界面張力",
            data: [22, 30, 25, 35],
            fill: false,
            borderColor: "#3f00ff",
            lineTension: 0,
            pointBorderWidth: 4,
            pointStyle: "cross"
          },
      ]
    },
    options: {
        scales: {
            xAxes:[{
                ticks: {
                    fontSize: 20,
                    padding	: 20,
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
            }],
            yAxes:[{
                ticks: {
                    fontSize: 20,
                },
            }]
        },
        legend: {
            position: 'right',
            labels: {
                padding: 20,
            }
        },
        title: {
            display: false,
            text: "Gráfico de ventas - Ejemplo de Título"
        },
        plugins: {
            datalabels: {
            display: false
        }
      }
    }
});


// 圖表 2
const ctx2 = document.getElementById('myChart2');
const mylineGraph2 = new Chart(ctx2, {
    type: "line",
    data: {
      labels: ["2019/7/25", "2019/9/26", "2019/11/25", "2020/1/31"],
      datasets: [
        {
          label: "氫氣",
          data: [45, 59, 68, 45],
          fill: false,
          borderColor: "#0cd19c",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
        {
          label: "一氧化碳",
          data: [44, 70, 50, 40],
          fill: false,
          borderColor: "#ff0000",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
        {
          label: "甲烷",
          data: [32, 40, 45, 33],
          fill: false,
          borderColor: "#ff7200",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
        {
          label: "乙烷",
          data: [22, 30, 25, 35],
          fill: false,
          borderColor: "#3f00ff",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
        {
          label: "乙炔",
          data: [12, 40, 35, 23],
          fill: false,
          borderColor: "#7293b5",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
        {
          label: "乙烯",
          data: [42, 50, 35, 35],
          fill: false,
          borderColor: "#94bc60",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
      ]
    },
    options: {
        legend: {
          position: 'right',
          labels: {
            padding: 20,
          }
        },
        scales: {
            xAxes:[{
                ticks: {
                    fontSize: 20,
                    padding	: 20,
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
            }],
            yAxes:[{
                ticks: {
                    fontSize: 20,
                },
            }]
        },
        title: {
            display: false,
            text: "Gráfico de ventas - Ejemplo de Título"
        },
        plugins: {
            datalabels: {
            display: false
        }
      }
    }
});

// 圖表 3
const ctx3 = document.getElementById('myChart3');
const mylineGraph3 = new Chart(ctx3, {
    type: "line",
    data: {
      labels: ["2019/7/25", "2019/9/26", "2019/11/25", "2020/1/31"],
      datasets: [
        {
          label: "2-糠醛",
          data: [0, 0, 0, 0],
          fill: false,
          borderColor: "#0cd19c",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
        {
          label: "2-糠醇",
          data: [0, 0, 0, 0],
          fill: false,
          borderColor: "#ff0000",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
        {
          label: "5-氫氧甲基-2-糠醛",
          data: [0, 0, 0, 0],
          fill: false,
          borderColor: "#ff7200",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
        {
          label: "2-乙呋喃",
          data: [0, 0, 0, 0],
          borderColor: "#3f00ff",
          fill: false,
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
        {
          label: "5-甲基-2-糠醛",
          data: [0, 0, 0, 0],
          fill: false,
          borderColor: "#7293b5",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
        {
          label: "油中糠醛總濃度",
          data: [0, 0, 0, 0],
          fill: false,
          borderColor: "#94bc60",
          lineTension: 0,
          pointBorderWidth: 4,
          pointStyle: "cross"
        },
      ]
    },
    options: {
        legend: {
          position: 'right',
          labels: {
            padding: 20,
          }
        },
        scales: {
            xAxes:[{
                ticks: {
                    fontSize: 20,
                    padding	: 20,
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
            }],
            yAxes:[{
                ticks: {
                  min: 0,
                  fontSize: 20,
                },
            }]
        },
        title: {
            display: false,
            text: "Gráfico de ventas - Ejemplo de Título"
        },
        plugins: {
            datalabels: {
            display: false
        }
      }
    }
});

// datepicker
$("#startDate-top").flatpickr({
  dateFormat: "Y-m-d"
});

$("#endDate-top").flatpickr({
  dateFormat: "Y-m-d"
});

$("#startDate-middle").flatpickr({
  dateFormat: "Y-m-d"
});

$("#endDate-middle").flatpickr({
  dateFormat: "Y-m-d"
});

$("#startDate-bottom").flatpickr({
  dateFormat: "Y-m-d"
});

$("#endDate-bottom").flatpickr({
  dateFormat: "Y-m-d"
});