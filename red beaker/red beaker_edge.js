
(function(compId){var _=null,y=true,n=false,x12='break-word',x3='5.0.0',x13='rgba(0,0,0,0)',x11='700',e16='${Forward}',b='block',x='text',x10='Palatino Linotype, Book Antigua, Palatino, serif',x9='9',x6='rgba(243,48,53,1.00)',x5='rgba(255,0,7,1.00)',i='none',x4='6.0.0.400',p='px',rt='right',lf='left',l='normal',e17='${Rectangle}',bt='bottom',w='width',x2='6.0.0',x15='rgba(255,255,255,1)',tp='top',d='display',g='image',h='height',xc='rgba(0,0,0,1)',bg='background-color',x7='solid',m='rect';var g1='jquery-2.0.3.min.js',g14='transparent%20inside%20beaker.png';var s8="<p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 22px;\">Add Red Dye</span></p>";var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'Group',t:'group',r:['-54px','-77px','243px','369px','auto','auto'],tf:[[],[],[],['0.55194','0.55194']],c:[{id:'Rectangle',t:m,r:['auto','auto','199px','250px','22px','74px'],br:["0px","0px","32px 32px","28px 28px"],o:'1',f:[x5],s:[0,xc,i]},{id:'Forward',v:b,t:m,r:['23px','310px','197px','39px','auto','auto'],cu:'pointer',br:["16px 16px","16px 16px","16px 16px","16px 16px"],o:'1',f:[x6],s:[1,"rgb(0, 0, 0)",x7],boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65098)"],c:[{id:'NewText3',t:x,r:['-1px','2px','199px','63px','auto','auto'],cu:'pointer',o:'1',text:s8,align:"left",n:[x10,[x9,p],xc,x11,i,l,x12,""]}]},{id:'transparent_inside_beaker',t:g,r:['0px','0px','243px','298px','auto','auto'],o:'1',f:[x13,im+g14,'0px','0px'],filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]}]}],style:{'${Stage}':{isStage:true,r:['null','null','135px','216px','auto','auto'],overflow:'visible',f:[x15]}}},tt:{d:5250,a:y,l:{"Label1":0,"Label2":500,"Label3":1000,"Label4":1500,"Label5":2000,"label6":2500,"Label7":3000,"Label8":3500,"Label9":4000,"Label10":4500,"Label11":5000},data:[["eid436",bg,750,0,"linear",e16,'rgba(243,48,53,1.00)','rgba(243,48,53,1.00)'],["eid431",lf,750,0,"linear",e16,'23px','23px'],["eid435",bg,750,0,"linear",e17,'rgba(255,0,7,1.00)','rgba(255,0,7,1.00)'],["eid374",lf,415,85,"linear",e17,'23px','auto'],["eid386",tp,415,0,"linear",e17,'auto','auto'],["eid387",tp,500,0,"linear",e17,'auto','auto'],["eid388",h,500,250,"linear",e17,'4px','25px'],["eid391",h,1000,250,"linear",e17,'25px','50px'],["eid393",h,1500,250,"linear",e17,'50px','75px'],["eid395",h,2000,250,"linear",e17,'75px','100px'],["eid397",h,2500,250,"linear",e17,'100px','125px'],["eid399",h,3000,250,"linear",e17,'125px','150px'],["eid401",h,3500,250,"linear",e17,'150px','175px'],["eid403",h,4000,250,"linear",e17,'175px','200px'],["eid408",h,4500,250,"linear",e17,'200px','225px'],["eid410",h,5000,250,"linear",e17,'225px','250px'],["eid338",d,5000,0,"linear",e16,b,b],["eid339",d,5250,0,"linear",e16,b,i],["eid385",bt,500,0,"linear",e17,'74px','74px'],["eid380",rt,500,0,"linear",e17,'22px','22px'],["eid433",w,750,0,"linear",e16,'197px','197px'],["eid434",h,750,0,"linear",e16,'39px','39px'],["eid50",w,0,0,"linear",e17,'199px','199px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-421141281");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var mylabels=['Label1','Label2','Label3','Label4','Label5','Label6','Label7','Label8','Label9','Label10','Label11'];var i=0;sym.$('Forward').click(function(){i++;if(i>=mylabels.length){sym.$('Forward').hide();}else{sym.$('Forward').show();}
sym.play(mylabels[i]);sym.$('Back').show();});sym.$('Back').click(function(){i--;sym.play(mylabels[i]);if(i==0){sym.$('Back').hide();}else{sym.$('Back').show();}
sym.$('Forward').show();});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5250,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-421141281");