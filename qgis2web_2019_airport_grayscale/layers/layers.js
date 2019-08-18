var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_ne_10m_airports_0 = new ol.format.GeoJSON();
var features_ne_10m_airports_0 = format_ne_10m_airports_0.readFeatures(json_ne_10m_airports_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airports_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ne_10m_airports_0.addFeatures(features_ne_10m_airports_0);var lyr_ne_10m_airports_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_airports_0, 
                style: style_ne_10m_airports_0,
    title: 'ne_10m_airports<br />\
    <img src="styles/legend/ne_10m_airports_0_0.png" /> major<br />\
    <img src="styles/legend/ne_10m_airports_0_1.png" /> mid<br />\
    <img src="styles/legend/ne_10m_airports_0_2.png" /> small<br />'
        });

lyr_ne_10m_airports_0.setVisible(true);
var layersList = [baseLayer,lyr_ne_10m_airports_0];
lyr_ne_10m_airports_0.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', });
lyr_ne_10m_airports_0.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'TextEdit', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'WebView', 'natlscale': 'Hidden', });
lyr_ne_10m_airports_0.set('fieldLabels', {'type': 'no label', 'name': 'no label', 'iata_code': 'inline label', 'wikipedia': 'no label', });
lyr_ne_10m_airports_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});