vp_data={"10":9.211511422,"11":9.847563998,"12":10.521119674,"13":11.235178698,"14":11.991991256,"15":12.793057472,"16":13.63987747,"17":14.53620156,"18":15.484279928,"19":16.484862636,"20":17.542450056,"21":18.659292374,"22":19.836889714,"23":21.079742448,"24":22.3893507,"25":23.76946478,"26":25.223834998,"27":26.75471154,"28":28.365844716,"29":30.060984836,"30":31.84388221}
function calculate(){empty_tube=parseFloat(document.getElementById("empty_tube").value);tube_sample=parseFloat(document.getElementById("tube_sample").value);p_KClO3=parseFloat(document.getElementById("p_KClO3").value);w_exp_residue=parseFloat(document.getElementById("w_exp_residue").value);water_temp=parseFloat(document.getElementById("water_temp").value);lab_pressure=parseFloat(document.getElementById("lab_pressure").value);sample=(tube_sample-empty_tube).toFixed(2);document.getElementById("sample").value=sample;w_KClO3=(p_KClO3*sample/100).toFixed(3);document.getElementById("w_KClO3").value=w_KClO3;w_MnO2=((1-p_KClO3/100)*sample).toFixed(3);document.getElementById("w_MnO2").value=w_MnO2;w_teo_residue=(empty_tube+parseFloat(w_MnO2)+parseFloat(w_KClO3)*(74.5/122.5)).toFixed(2);document.getElementById("w_teo_residue").value=w_teo_residue;w_exp_O2=(tube_sample-w_exp_residue).toFixed(3);document.getElementById("w_exp_O2").value=w_exp_O2;water_vp=vp_data[water_temp].toFixed(2);document.getElementById("water_vp").value=water_vp;dry_O2_pressure=(lab_pressure-water_vp).toFixed(2);document.getElementById("dry_O2_pressure").value=dry_O2_pressure;volume_dis=parseFloat(document.getElementById("volume_dis").value);v_nc_exp_O2=((dry_O2_pressure/760)*(273/(water_temp+273))*volume_dis).toFixed(1);document.getElementById("v_nc_exp_O2").value=v_nc_exp_O2;v_nc_teo_O2=(w_KClO3*(33.6/122.5)*1000).toFixed(1);document.getElementById("v_nc_teo_O2").value=v_nc_teo_O2;v_error_O2=((v_nc_teo_O2-v_nc_exp_O2)/v_nc_teo_O2*100).toFixed(2);document.getElementById("v_error_O2").value=v_error_O2;w_teo_O2=(w_KClO3*(48/122.5)).toFixed(3);document.getElementById("w_teo_O2").value=w_teo_O2;w_error_O2=((w_teo_O2-w_exp_O2)/w_teo_O2*100).toFixed(2);document.getElementById("w_error_O2").value=w_error_O2;vm_exp_O2=(32*v_nc_exp_O2/w_exp_O2).toFixed(1);document.getElementById("vm_exp_O2").value=vm_exp_O2;vm_error_O2=((1-(vm_exp_O2/22400))*100).toFixed(2);document.getElementById("vm_error_O2").value=vm_error_O2;top_volume=Math.ceil(volume_dis/10)*10;top_mark=top_volume-volume_dis;low_mark=top_volume-10;var water_level={x:['probeta'],y:[volume_dis],width:[0.5],type:'bar',hoverinfo:'none',marker:{color:'rgba(58,200,225,.9)',line:{color:'rgba(8,48,107,.5)',width:1.5}}};var top_height={x:['probeta'],y:[top_mark],width:[0.5],type:'bar',opacity:0.5,marker:{color:'rgb(158,202,225)',line:{color:'rgb(8,48,107)',width:1.5}}};var data=[water_level,top_height];var layout={yaxis:{range:[low_mark,top_volume]},barmode:"stack",width:500,showlegend:!1}
var config={responsive:!0,staticPlot:!0}
Plotly.newPlot('static_graph',data,layout,config);const gas_constant=0.082;i=10;j=0;t_list=[];v_list=[];while(i<35){t_list[j]=i;v_list[j]=parseFloat(((((w_KClO3*1.5/122.5)*gas_constant*(i+273))/(lab_pressure/760))*1000).toFixed(3));j=j+1;i=i+5};height=Math.ceil(v_list[v_list.length-1]/10)*10;low_mark_2=height-30;top_mark_list=[];for(let index=0;index<v_list.length;index++){top_mark_list[index]=parseFloat((height-v_list[index]).toFixed(3))}
var water_level_10={x:['probeta'],y:[v_list[0]],width:[0.5],type:'bar',hoverinfo:'none',marker:{color:'rgba(58,200,225,.9)',line:{color:'rgba(8,48,107,.5)',width:1.5}}};var water_level_15={x:['probeta'],y:[v_list[1]],width:[0.5],type:'bar',hoverinfo:'none',marker:{color:'rgba(58,200,225,.9)',line:{color:'rgba(8,48,107,.5)',width:1.5}}};var water_level_20={x:['probeta'],y:[v_list[2]],width:[0.5],type:'bar',hoverinfo:'none',marker:{color:'rgba(58,200,225,.9)',line:{color:'rgba(8,48,107,.5)',width:1.5}}};var water_level_25={x:['probeta'],y:[v_list[3]],width:[0.5],type:'bar',hoverinfo:'none',marker:{color:'rgba(58,200,225,.9)',line:{color:'rgba(8,48,107,.5)',width:1.5}}};var water_level_30={x:['probeta'],y:[v_list[4]],width:[0.5],type:'bar',hoverinfo:'none',marker:{color:'rgba(58,200,225,.9)',line:{color:'rgba(8,48,107,.5)',width:1.5}}};var top_height_10={x:['probeta'],y:[top_mark_list[0]],width:[0.5],type:'bar',opacity:0.5,marker:{color:'rgb(158,202,225)',line:{color:'rgb(8,48,107)',width:1.5}}};var top_height_15={x:['probeta'],y:[top_mark_list[1]],width:[0.5],type:'bar',opacity:0.5,marker:{color:'rgb(158,202,225)',line:{color:'rgb(8,48,107)',width:1.5}}};var top_height_20={x:['probeta'],y:[top_mark_list[2]],width:[0.5],type:'bar',opacity:0.5,marker:{color:'rgb(158,202,225)',line:{color:'rgb(8,48,107)',width:1.5}}};var top_height_25={x:['probeta'],y:[top_mark_list[3]],width:[0.5],type:'bar',opacity:0.5,marker:{color:'rgb(158,202,225)',line:{color:'rgb(8,48,107)',width:1.5}}};var top_height_30={x:['probeta'],y:[top_mark_list[4]],width:[0.5],type:'bar',opacity:0.5,marker:{color:'rgb(158,202,225)',line:{color:'rgb(8,48,107)',width:1.5}}};Plotly.newPlot('water_vp_influence',{data:[water_level_10,top_height_10],layout:{yaxis:{range:[low_mark_2,height]},barmode:"stack",width:500,showlegend:!1,sliders:[{pad:{t:30},x:0.05,len:0.95,transition:{duration:500},steps:[{label:'10',method:'animate',args:[['10'],{mode:'immediate',frame:{redraw:!1,duration:500},transition:{duration:500}}]},{label:'15',method:'animate',args:[['15'],{mode:'immediate',frame:{redraw:!1,duration:500},transition:{duration:500}}]},{label:'20',method:'animate',args:[['20'],{mode:'immediate',frame:{redraw:!1,duration:500},transition:{duration:500}}]},{label:'25',method:'animate',args:[['25'],{mode:'immediate',frame:{redraw:!1,duration:500},transition:{duration:500}}]},{label:'30',method:'animate',args:[['30'],{mode:'immediate',frame:{redraw:!1,duration:500},transition:{duration:500}}]}]}],updatemenus:[{type:'buttons',showactive:!1,x:0.05,y:0,xanchor:'right',yanchor:'top',pad:{t:60,r:20},buttons:[{label:'Play',method:'animate',args:[null,{fromcurrent:!0,frame:{redraw:!1,duration:1000},transition:{duration:500}}]}]}]},frames:[{name:'10',data:[water_level_10,top_height_10]},{name:'15',data:[water_level_15,top_height_15]},{name:'20',data:[water_level_20,top_height_20]},{name:'25',data:[water_level_25,top_height_25]},{name:'30',data:[water_level_30,top_height_30]}],config:{responsive:!0,staticPlot:!0}})};function resetForm(){document.getElementById("input_data").reset();document.getElementById("ref_data").reset();document.getElementById("calculation").reset()}
