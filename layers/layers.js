var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Zonering_1 = new ol.format.GeoJSON();
var features_Zonering_1 = format_Zonering_1.readFeatures(json_Zonering_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonering_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonering_1.addFeatures(features_Zonering_1);
var lyr_Zonering_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonering_1, 
                style: style_Zonering_1,
                popuplayertitle: "Zonering ",
                interactive: true,
    title: 'Zonering <br />\
    <img src="styles/legend/Zonering_1_0.png" /> Heuvel<br />\
    <img src="styles/legend/Zonering_1_1.png" /> Pad<br />\
    <img src="styles/legend/Zonering_1_2.png" /> Natuurlijk Gedeelte<br />\
    <img src="styles/legend/Zonering_1_3.png" /> Schaduwrijke Helling<br />\
    <img src="styles/legend/Zonering_1_4.png" /> Zonnige Helling<br />'
        });
var format_ResultatenVegetatieonderzoek_2 = new ol.format.GeoJSON();
var features_ResultatenVegetatieonderzoek_2 = format_ResultatenVegetatieonderzoek_2.readFeatures(json_ResultatenVegetatieonderzoek_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResultatenVegetatieonderzoek_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResultatenVegetatieonderzoek_2.addFeatures(features_ResultatenVegetatieonderzoek_2);
var lyr_ResultatenVegetatieonderzoek_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResultatenVegetatieonderzoek_2, 
                style: style_ResultatenVegetatieonderzoek_2,
                popuplayertitle: "Resultaten Vegetatieonderzoek",
                interactive: true,
                title: '<img src="styles/legend/ResultatenVegetatieonderzoek_2.png" /> Resultaten Vegetatieonderzoek'
            });
var group_onlinekaart = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_Zonering_1,lyr_ResultatenVegetatieonderzoek_2,],
                                fold: "open",
                                title: "online kaart"});
var group_Tekenen = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Tekenen"});
var group_Administratievegegevens = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Administratieve gegevens"});
var group_Ecologie = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Ecologie"});
var group_Milieu = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Milieu"});
var group_Bodem = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Bodem"});
var group_Water = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Water"});
var group_IsohypsenUtrecht = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Isohypsen Utrecht"});
var group_Geluid = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Geluid"});
var group_Archeologie = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Archeologie"});
var group_Klimaat = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Klimaat"});
var group_Luchtfotografie = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Luchtfotografie"});
var group_TopoTijdReis = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "TopoTijdReis"});

lyr_GoogleSatellite_0.setVisible(true);lyr_Zonering_1.setVisible(true);lyr_ResultatenVegetatieonderzoek_2.setVisible(true);
var layersList = [group_onlinekaart];
lyr_Zonering_1.set('fieldAliases', {'Naam': 'Type Zone', 'id': 'id', });
lyr_ResultatenVegetatieonderzoek_2.set('fieldAliases', {'id': 'id', 'Resultaat': 'Resultaat', });
lyr_Zonering_1.set('fieldImages', {'Naam': 'TextEdit', 'id': 'Classification', });
lyr_ResultatenVegetatieonderzoek_2.set('fieldImages', {'id': 'TextEdit', 'Resultaat': 'ExternalResource', });
lyr_Zonering_1.set('fieldLabels', {'Naam': 'hidden field', 'id': 'no label', });
lyr_ResultatenVegetatieonderzoek_2.set('fieldLabels', {'id': 'hidden field', 'Resultaat': 'no label', });
lyr_ResultatenVegetatieonderzoek_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});