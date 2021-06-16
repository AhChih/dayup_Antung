/* 廠內變壓器廠牌分佈 */
var ctx = document.getElementById('doughnut').getContext("2d");
var doughnut = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
            data: [80, 20, 10, 2],
            backgroundColor: [
                '#0060AF',
                '#EA575E',
                '#F49C00',
                '#9FA0A0',
            ],
            borderColor: [
                '#0060AF',
                '#EA575E',
                '#F49C00',
                '#9FA0A0',
            ],
            borderWidth: 1
        }]
    },
    options: {
        tooltips: {
            enabled: false
        },
    }
});

/* 近 4 次案件量 */
var ctx2 = document.getElementById('right_chart').getContext("2d");
var right_chart = new Chart(ctx2, {
    type: "bar",
    data: {
        labels: ['● 2017/01/01', '● 2018/01/01', '● 2019/01/01', '● 2020/01/01'],
        datasets: [
        {
        data: [2, 8, 10, 5],
        backgroundColor: [
            '#0060AF',
            '#0060AF',
            '#0060AF',
            '#0060AF',
            ],
        },{
        data: [12, 5, 8, 7],
        backgroundColor: [
            '#EA575E',
            '#EA575E',
            '#EA575E',
            '#EA575E', 
            ],
        },{
        data: [4, 9, 7, 5],
        backgroundColor: [
            '#F49C00',
            '#F49C00',
            '#F49C00',
            '#F49C00',      
        ] ,
        }
    ],
    },
    options: {
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false
        },
        scales: {
            yAxes: [
              {
                ticks: {
                  fontSize: 16,
                  beginAtZero: true
                }
              }
            ],
            xAxes: [
                {
                  ticks : {
                    fontSize: 16,
                    beginAtZero: true
                  }
                }
              ],
        }
   }
});

/* 底部圖表 */
var ctx3 = document.getElementById('footerLine').getContext("2d");
var footerLine = new Chart(ctx3, {
    type: 'horizontalBar',
    data: {
        labels: ['● 2017/01/01', '● 2018/01/01', '● 2019/01/01', '● 2020/01/01'],
        datasets: [{
            label: "異常",
            data: [2, 8, 10, 5],
            backgroundColor: [
                '#ec6f76', 
                '#ec6f76', 
                '#ec6f76', 
                '#ec6f76', 
            ],
        },{
        data: [12, 5, 8, 7],
        label: "需注意",
        backgroundColor: [
            '#F49C00',
            '#F49C00',
            '#F49C00',
            '#F49C00', 
            ],
        },{
        data: [4, 9, 7, 5],
        label: "正常",
        backgroundColor: [
            '#84c24e',   
            '#84c24e',   
            '#84c24e',   
            '#84c24e',   
        ] ,
        }],
    },
    options: {
        legend: {
            display: false,
        },
        tooltips: {
            backgroundColor: '#FFF',
            titleFontSize: 30,
            titleFontColor: '#0060AF',
            titleMarginBottom: 30,
            bodyFontColor: '#000',
            bodyFontSize: 30,
            bodySpacing: 30,       
        },
        scales: {
            yAxes:[
                {
                ticks : {
                  fontSize: 28,
                },
                barPercentage: 50,
                barThickness: 40,
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            xAxes: [
              {
                display: false,
                ticks : {
                  fontSize: 28,
                  beginAtZero: true,
                  max: 10,
                  min: 0,
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
              }
            ]
          },
   }
});