const apiCallsCtx = document.getElementById('apiCallsChart').getContext('2d');
const apiCallsChart = new Chart(apiCallsCtx, {
    type: 'line',
    data: {
        labels: ['10:30 AM', '11:30 AM', '12:30 PM', '01:30 PM', '02:30 PM', '03:30 PM'],
        datasets: [{
            label: 'API Calls',
            data: [3000, 5000, 4000, 7000, 8000, 7500],
            borderColor: '#8e5ea2',
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'API Calls'
                }
            }
        }
    }
});

const plCtx = document.getElementById('plChart').getContext('2d');
const plChart = new Chart(plCtx, {
    type: 'doughnut',
    data: {
        labels: ['Re-used APIs', 'Webhooks', 'API Calls'],
        datasets: [{
            label: 'P&L',
            data: [36, 38, 25],
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
        }]
    },
    options: {
        responsive: true
    }
});
