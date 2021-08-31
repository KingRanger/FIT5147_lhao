Highcharts.chart('container', {
    colors: ['#FFD700', '#C0C0C0', '#CD7F32','#33F6FF','#6BFF33','#FF33DD','#4933FF'],
    chart: {
        type: 'column',
        inverted: true,
        polar: true
    },
    title: {
        text: 'Wind Guest speed chart for each state between August and September'
    },
    tooltip: {
        outside: true
    },
    pane: {
        size: '85%',
        innerSize: '20%',
        endAngle: 270
    },
    xAxis: {
        tickInterval: 1,
        labels: {
            align: 'right',
            useHTML: true,
            allowOverlap: true,
            step: 1,
            y: 3,
            style: {
                fontSize: '13px'
            }
        },
        lineWidth: 0,
        categories: [
            '2019-08' +
            '</span></span>',
            '2019-09' +
            '</span></span>',
            '2019-10' +
            '</span></span>',
            '2019-11' +
            '</span></span>',
            '2019-12' +
            '</span></span>',
            '2020-01' +
            '</span></span>'
        ]
    },
    yAxis: {
        crosshair: {
            enabled: true,
            color: '#333'
        },
        lineWidth: 0,
        tickInterval: 25,
        reversedStacks: false,
        endOnTick: true,
        showLastLabel: true
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            borderWidth: 0,
            pointPadding: 0,
            groupPadding: 0.15
        }
    },
    series: [{
        name: 'New south wales',
        data: [41.87, 43.16, 44.9, 44.69, 46.39, 44.66]
    }, {
        name: 'Victoria',
        data: [50.31, 51.0, 49.11, 45.52, 45.05, 45.80]
    }, {
        name: 'Queensland',
        data: [26.82, 28.46, 30.91, 31.29, 30.64, 31.07]
    },
    {
        name: 'South Australia',
        data: [42.29, 42.35, 42.05, 43.23, 43.38, 44.58]
    },
    {
        name: 'Western Australia',
        data: [33.42, 37.62, 35.87, 38.28, 39.14, 39.13]
    },
    {
        name: 'Tasmnia',
        data: [48.29, 50.92, 51.8, 48.5, 49.2, 49.3]
    },
    {
        name: 'Northern Territory',
        data: [40.37, 38.39, 39.87, 39.6, 40.31, 46.78]
    }]

});
