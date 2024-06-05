var chart = null;
var chartType = "bar";
var canvasChartId = "canvasChart"

function createChart(chartType, divId, labels, label, data, backgroundColor, borderColor, borderWidth, fill, responsive, maintainAspectRatio, position, tooltip, tooltipMode, displayTitleX, titleX, titleYBeginAtZero, displayTitleY, titleY) {
  const ctx = document.getElementById(divId);

  chart = new Chart(ctx, {
    type: chartType,
    data: {
        labels: labels,
        datasets: [{
            label: label,
            data: data,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1,
            fill: fill
        }]
    },
    options: {
        responsive: responsive,
        maintainAspectRatio: maintainAspectRatio,
        plugins: {
            legend: {
                position: position
            },
            tooltip: {
                enabled: tooltip,
                mode: tooltipMode
            }
        },
        scales: {
            x: {
                title: {
                    display: displayTitleX,
                    text: titleX
                }
            },
            y: {
                beginAtZero: titleYBeginAtZero,
                title: {
                    display: displayTitleY,
                    text: titleY
                }
            }
        }
    }
});
}

// listener for the chart types
var charts = document.getElementById("chartsType");

if(charts != null) {
    charts.addEventListener("change", function(event) {
        var value = event.target.value.split(" ");
        if(value.length == 2) {
            chartType = value[0].toLowerCase();
        }
        else if(value.length == 3) {
            chartType = value[0].toLowerCase() + value[1];
        }
        
        generateChart();
    });
}


// end


// genrate chart by accessing the values from input fields
function generateChart() {
    var mLabels = document.querySelector(".labels");
    var labels = mLabels == null? " " : mLabels.value.split(" ");
    
    var mTitle = document.querySelector(".title");
    var title = mTitle == null? " " : mTitle.value;
    
    var mData = document.querySelector(".data");
    var data = mData == null? " " : mData.value.split(" ");
    
    
    var mBorderColor = document.querySelector(".border-color");
    var borderColor = mBorderColor == null? " " : mBorderColor.value;
    
    if(chart != null) {
        chart.destroy();
    }
    
    var backgroundColor = generateRandomColors(data.length);
    
    
   createChart(chartType, canvasChartId, labels, title, data, backgroundColor, borderColor);
}

// end


// create a default bar chart at the start
createChart(chartType, canvasChartId, ["No", "Yes"], "Are you doing good ?!", [3, 23]);
function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function generateRandomColors(n) {
            const colors = [];
            for (let i = 0; i < n; i++) {
                colors.push(getRandomColor());
            }
            return colors;
        }
