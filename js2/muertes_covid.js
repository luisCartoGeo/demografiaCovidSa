 xv= ['Guayana<br> Francesa','Guyana','Surinam','Venezuela','Uruguay','Ecuador','Paraguay','Bolivia','Chile','Argentina','Colombia','Perú','Brasil'];
 yv= [394.0,1224.0,1319.0,5655.0,7075.0,7544.0,18517.0,21472.0,43659.0,127051.0,139220.0,211364.0,654086.0];
yt= [394,'1.2k','1.3k','5.6k','7.0k','7.5k','18.5k','21.4k','43.6k','12.7k','13.9k','211.3k','654.0k'];
var trace1 = {
  x: yv,
  y: xv,
  opacity:1,
  name:"Data",
  type: "bar",
  orientation:'h',
  text: yt.map(String),
  textposition: 'auto',
  marker: {color:['rgb(255,255,255)','rgb(255,230,240)','rgb(255,179,209)','rgb(255,179,209)','rgb(255,153,194)','rgb(255,128,179)','rgb(255,102,163)','rgb(255,77,148)','rgb(255,51,133)','rgb(255,26,117)','rgb(255,0,102)','rgb(230,0,92)','rgb(rgb(204,0,82)'],line:{color:"black",width:1}}
};
var data = [trace1];
var layout = {
    paper_bgcolor:'rgb(255,255,255)',
    plot_bgcolor:'rgb(255,255,255)',
    xaxis: { 
    showgrid: false,
           },
      yaxis: { 
         gridcolor: 'rgb(211,211,211)',
         gridwidth: 1,
           },
title: '<b>Muertes Covid19 acumulados<br>11/3/2022</b>', 
titlefont:{size:10,color:'rgb(0,0,0)'},
font:{size:9,color:'rgb(0,0,0)'},
autosize: true,
margin: { t: 40, b: 30, l: 70,r:20, autoexpand: false}};

Plotly.newPlot('d_covid', data, layout, {displayModeBar: false,responsive: true});
window.onresize = function() {
Plotly.relayout('d_covid', {
'xaxis.autorange': true,
'yaxis.autorange': true,
'margin': { t: 40, b: 30, l: 70,r:20, autoexpand: true}
});
};