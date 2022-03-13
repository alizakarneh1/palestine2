var wms_layers = [];

var format_palestine_0 = new ol.format.GeoJSON();
var features_palestine_0 = format_palestine_0.readFeatures(json_palestine_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_palestine_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_palestine_0.addFeatures(features_palestine_0);
var lyr_palestine_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_palestine_0, 
                style: style_palestine_0,
                interactive: true,
    title: 'palestine<br />\
    <img src="styles/legend/palestine_0_0.png" /> <br />\
    <img src="styles/legend/palestine_0_1.png" /> Dead Sea<br />\
    <img src="styles/legend/palestine_0_2.png" /> Eygpt<br />\
    <img src="styles/legend/palestine_0_3.png" /> Gaza<br />\
    <img src="styles/legend/palestine_0_4.png" /> Golan Heights<br />\
    <img src="styles/legend/palestine_0_5.png" /> Jordan<br />\
    <img src="styles/legend/palestine_0_6.png" /> Lebanon<br />\
    <img src="styles/legend/palestine_0_7.png" /> Mediteranean Sea<br />\
    <img src="styles/legend/palestine_0_8.png" /> Palestine<br />\
    <img src="styles/legend/palestine_0_9.png" /> Red Sea<br />\
    <img src="styles/legend/palestine_0_10.png" /> Salt Pans<br />\
    <img src="styles/legend/palestine_0_11.png" /> Syria<br />\
    <img src="styles/legend/palestine_0_12.png" /> Tiberias<br />'
        });
var format_Boarders_Lines_1 = new ol.format.GeoJSON();
var features_Boarders_Lines_1 = format_Boarders_Lines_1.readFeatures(json_Boarders_Lines_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boarders_Lines_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boarders_Lines_1.addFeatures(features_Boarders_Lines_1);
var lyr_Boarders_Lines_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boarders_Lines_1, 
                style: style_Boarders_Lines_1,
                interactive: true,
                title: '<img src="styles/legend/Boarders_Lines_1.png" /> Boarders_Lines'
            });
var format_Natural_Reserves_2 = new ol.format.GeoJSON();
var features_Natural_Reserves_2 = format_Natural_Reserves_2.readFeatures(json_Natural_Reserves_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Natural_Reserves_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Natural_Reserves_2.addFeatures(features_Natural_Reserves_2);
var lyr_Natural_Reserves_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Natural_Reserves_2, 
                style: style_Natural_Reserves_2,
                interactive: true,
                title: '<img src="styles/legend/Natural_Reserves_2.png" /> Natural_Reserves'
            });
var format_maincities_3 = new ol.format.GeoJSON();
var features_maincities_3 = format_maincities_3.readFeatures(json_maincities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maincities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maincities_3.addFeatures(features_maincities_3);
var lyr_maincities_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_maincities_3, 
                style: style_maincities_3,
                interactive: true,
    title: 'main cities<br />\
    <img src="styles/legend/maincities_3_0.png" /> Bethlehem<br />\
    <img src="styles/legend/maincities_3_1.png" /> Hebron<br />\
    <img src="styles/legend/maincities_3_2.png" /> Jenini<br />\
    <img src="styles/legend/maincities_3_3.png" /> Jericho<br />\
    <img src="styles/legend/maincities_3_4.png" /> Jerusalem<br />\
    <img src="styles/legend/maincities_3_5.png" /> Nablus<br />\
    <img src="styles/legend/maincities_3_6.png" /> Qalqyliya<br />\
    <img src="styles/legend/maincities_3_7.png" /> Ramallah<br />\
    <img src="styles/legend/maincities_3_8.png" /> Salfit<br />\
    <img src="styles/legend/maincities_3_9.png" /> Tulkarem<br />\
    <img src="styles/legend/maincities_3_10.png" /> <br />'
        });
var format_Israeli_Sattelments_4 = new ol.format.GeoJSON();
var features_Israeli_Sattelments_4 = format_Israeli_Sattelments_4.readFeatures(json_Israeli_Sattelments_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Israeli_Sattelments_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Israeli_Sattelments_4.addFeatures(features_Israeli_Sattelments_4);
var lyr_Israeli_Sattelments_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Israeli_Sattelments_4, 
                style: style_Israeli_Sattelments_4,
                interactive: true,
                title: '<img src="styles/legend/Israeli_Sattelments_4.png" /> Israeli_Sattelments'
            });
var format_districts_5 = new ol.format.GeoJSON();
var features_districts_5 = format_districts_5.readFeatures(json_districts_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_districts_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_districts_5.addFeatures(features_districts_5);
var lyr_districts_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_districts_5, 
                style: style_districts_5,
                interactive: true,
    title: 'districts<br />\
    <img src="styles/legend/districts_5_0.png" /> <br />\
    <img src="styles/legend/districts_5_1.png" /> Bethlehem<br />\
    <img src="styles/legend/districts_5_2.png" /> Hebron<br />\
    <img src="styles/legend/districts_5_3.png" /> Jenin<br />\
    <img src="styles/legend/districts_5_4.png" /> Jericho<br />\
    <img src="styles/legend/districts_5_5.png" /> Jerusalem<br />\
    <img src="styles/legend/districts_5_6.png" /> Nablus<br />\
    <img src="styles/legend/districts_5_7.png" /> Ramallah<br />\
    <img src="styles/legend/districts_5_8.png" /> Tulkarem<br />'
        });

lyr_palestine_0.setVisible(true);lyr_Boarders_Lines_1.setVisible(true);lyr_Natural_Reserves_2.setVisible(true);lyr_maincities_3.setVisible(true);lyr_Israeli_Sattelments_4.setVisible(true);lyr_districts_5.setVisible(true);
var layersList = [lyr_palestine_0,lyr_Boarders_Lines_1,lyr_Natural_Reserves_2,lyr_maincities_3,lyr_Israeli_Sattelments_4,lyr_districts_5];
lyr_palestine_0.set('fieldAliases', {'NAME': 'NAME', });
lyr_Boarders_Lines_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TYPE': 'TYPE', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Natural_Reserves_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PRPNATRS_': 'PRPNATRS_', 'PRPNATRS_I': 'PRPNATRS_I', 'AREA_KM': 'AREA_KM', 'NAME': 'NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_maincities_3.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', });
lyr_Israeli_Sattelments_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'type_colon': 'type_colon', 'class2': 'class2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_districts_5.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'GOVERNORAT': 'GOVERNORAT', 'GOVERNORAT_1': 'GOVERNORAT_1', 'NAME': 'NAME', 'POP2020': 'POP2020', 'POP2010': 'POP2010', 'NEWPCBS_CO': 'NEWPCBS_CO', });
lyr_palestine_0.set('fieldImages', {'NAME': 'TextEdit', });
lyr_Boarders_Lines_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'TYPE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Natural_Reserves_2.set('fieldImages', {'OBJECTID': '', 'AREA': '', 'PERIMETER': '', 'PRPNATRS_': '', 'PRPNATRS_I': '', 'AREA_KM': '', 'NAME': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_maincities_3.set('fieldImages', {'ID': 'Range', 'NAME': 'TextEdit', });
lyr_Israeli_Sattelments_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'type_colon': 'TextEdit', 'class2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_districts_5.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'GOVERNORAT': 'TextEdit', 'GOVERNORAT_1': 'TextEdit', 'NAME': 'TextEdit', 'POP2020': 'TextEdit', 'POP2010': 'TextEdit', 'NEWPCBS_CO': 'TextEdit', });
lyr_palestine_0.set('fieldLabels', {'NAME': 'inline label', });
lyr_Boarders_Lines_1.set('fieldLabels', {'OBJECTID': 'no label', 'TYPE': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Natural_Reserves_2.set('fieldLabels', {'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'PRPNATRS_': 'no label', 'PRPNATRS_I': 'no label', 'AREA_KM': 'no label', 'NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_maincities_3.set('fieldLabels', {'ID': 'no label', 'NAME': 'inline label', });
lyr_Israeli_Sattelments_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'type_colon': 'no label', 'class2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_districts_5.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'no label', 'GOVERNORAT': 'no label', 'GOVERNORAT_1': 'no label', 'NAME': 'inline label', 'POP2020': 'inline label', 'POP2010': 'no label', 'NEWPCBS_CO': 'no label', });
lyr_districts_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});