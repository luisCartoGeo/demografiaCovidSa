etiq= ['Chile','Argentina','Uruguay','Perú','Colombia'];
valores= [0.851,0.845,0.817,0.777,0.767];
var data = [{
  labels: etiq,
  values: valores,
  type: "pie",
  textposition: 'Inside',
    textinfo: 'label+value',
    hole:0.4,
  marker: {colors:['rgb(0,51,0)','rgb(0,158,0)','rgb(0,218,0)','rgb(47,255,47)','rgb(197,255,197)'],
line:{color:"black",width:0.5}}
    }];
var layout = {
    paper_bgcolor:'rgb(255,255,255)',
title: '<b>Indice de Desarrollo Humano (IDH)<br>cinco valores más altos</b>', titlefont:{size:12,color:'rgb(0,0,0)'},
      showlegend: true,
      legend:{
          bgcolor:'rgb(255,255,255)',
        orientation: 'v',
          bordercolor: 'rgb(0,0,0)',
          borderwidth: 0.5
          },
     font:{size:9,color:'rgb(0,0,0)'},
     autosize: true,
     margin: { b:0,t: 50, l: 0,r:10, autoexpand: true}};

Plotly.newPlot('idh', data, layout, {displayModeBar: false,responsive: true});
window.onresize = function() {
Plotly.relayout('idh', {
      'autosize': true,
     'margin': { b:0,t: 50, l: 0,r:10, autoexpand: true}}
);
};