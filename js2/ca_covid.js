 xv= ['Guyana','Guayana<br>Francesa','Surinam','Venezuela','Paraguay','Ecuador','Uruguay','Bolivia','Chile','Perú','Colombia','Argentina','Brasil'];
 yv= [63090.0,77931.0,78623.0,517164.0,644609.0,843760.0,857635.0,895654.0,3230793.0,3528469.0,6073416.0,8955458.0,29138362.0];
yt=  ['63.0k','77.9k','78.6k','517.1k','644.6k','843.7k','857.6k','895.6k','3.2M','3.5M','6.0M',
'8.9M','29.1M'];

var trace1 = {
  y: xv,
  x: yv,
  opacity:1,
  name:"Data",
  type: "bar",
  orientation:'h',
  text: yt.map(String),
  textposition: 'auto',
  marker: {color:['#ffffe5','#f7fcb9','#d9f0a3','#addd8e','#78c679','#41ab5d','rgb(129,169,63)','rgb(116,153,57)','#238443','rgb(90,144,60)','rgb(73,115,49)','#006837','#004529'],line:{color:"black",width:1}}};var data = [trace1];
var layout = {
    paper_bgcolor:'rgb(255,255,255)',
    plot_bgcolor:'rgb(255,255,255)',
    xaxis: { 
    showgrid: false,
      title: 'Paises',
      titlefont: {
          size:9,
          color: 'rgb(0,0,0)'
                  }
           },
   yaxis: { 
         gridcolor: 'rgb(211,211,211)',
         gridwidth: 1,
        title: 'N° de Casos',
        titlefont: {
           size:9,
           color: 'rgb(0,0,0)'
                  }
           },
title: '<b>Casos Covid19 acumulados<BR>11/3/2022</b>', 
titlefont:{size:10,color:'rgb(0,0,0)'},
font:{size:9,color:'rgb(0,0,0)'},
autosize: true,
margin: { t: 40, b: 30, l: 70,r:20, autoexpand: false}
};
Plotly.newPlot('ca_covid', data, layout, {displayModeBar: false,responsive: true});
window.onresize = function() {
Plotly.relayout('ca_covid', {
'xaxis.autorange': true,
'yaxis.autorange': true,
'margin': { t: 40, b: 30, l: 70,r:20, autoexpand: true}
});
};