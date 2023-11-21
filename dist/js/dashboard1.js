$(function() {
    "use strict";
    // Dashboard 1 Morris-chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2023-03-24 06:00',
            Paciente: 0,
            Esperado: 0,
            itouch: 0
        }, {
            period: '2023-03-24 08:00',
            Paciente: 110,
            Esperado: 100,
            itouch: 80
        }, {
            period: '2023-03-24 10:00',
            Paciente: 80,
            Esperado: 60,
            itouch: 70
        }, {
            period: '2023-03-24 12:00',
            Paciente: 70,
            Esperado: 80,
            itouch: 140
        }, {
            period: '2023-03-24 14:00',
            Paciente: 100,
            Esperado: 100,
            itouch: 140
        }, {
            period: '2023-03-24 16:00',
            Paciente: 65,
            Esperado: 70,
            itouch: 80
        }, {
            period: '2023-03-24 18:00',
            Paciente: 105,
            Esperado: 94,
            itouch: 200
        }],
        xkey: 'period',
        ykeys: ['Paciente', 'Esperado'],
        labels: ['Paciente', 'Esperado'],
        pointSize: 0,
        fillOpacity: 0,
        pointStrokeColors: ['#f62d51', '#7460ee', '#009efb'],
        behaveLikeLine: true,
        gridLineColor: '#f6f6f6',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#009efb', '#7460ee', '#009efb'],
        resize: true
    });

});