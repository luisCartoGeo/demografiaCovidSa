var yv=[343317783,385028397,430756286.0];
var yt=['343.3M','385.0M','430.7M'];
var trace={
  x:['Población<br>2000','Población<br>2010','Población<br>2020'],
  y: yv,
  type:'scatter',
  mode:'lines+markers+text',
  fill:'none',
  text: yt.map(String),
  textposition:'top',
  line:{width:2},
  marker:{size:7},
};
var data=[trace];
var layout = {
   yaxis:{range:[340000000,432000000]},
   xaxis:{range:[-0.2,2.3]},
   title: '<b>Población SurAmérica<br>2000-2020</b>', titlefont:{size:12,color:'rgb(0,0,0)'},
   font:{size:9,color:'rgb(0,0,0)'},
   legend: {y:1.2,font: {size: 8.5},yref:'paper'},
   autosize: true,
   margin: { t: 30, b: 30, l: 40,r:0, autoexpand: true}};

Plotly.newPlot('poy', data, layout, {displayModeBar: false,responsive: true});
window.onresize = function() {
Plotly.relayout('poy', {
'xaxis.autorange': false,
'yaxis.autorange': true,
'margin': { t: 30, b: 30, l: 40, r:0, autoexpand: true}
});
};