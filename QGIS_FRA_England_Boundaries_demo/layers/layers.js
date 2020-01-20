var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_Fire_and_Rescue_Authorities_December_2017_EW_BUC_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ons-inspire.esriuk.com/arcgis/services/Other_Boundaries/Fire_and_Rescue_Authorities_December_2017_Boundaries/MapServer/WMSServer?",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fire_and_Rescue_Authorities_(December_2017)_EW_BUC",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Fire_and_Rescue_Authorities_December_2017_EW_BUC_0, 0]);var lyr_Fire_and_Rescue_Authorities_December_2017_EW_BSC_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ons-inspire.esriuk.com/arcgis/services/Other_Boundaries/Fire_and_Rescue_Authorities_December_2017_Boundaries/MapServer/WMSServer?",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fire_and_Rescue_Authorities_(December_2017)_EW_BSC",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Fire_and_Rescue_Authorities_December_2017_EW_BSC_1, 0]);var lyr_Fire_and_Rescue_Authorities_December_2017_EW_BGC_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ons-inspire.esriuk.com/arcgis/services/Other_Boundaries/Fire_and_Rescue_Authorities_December_2017_Boundaries/MapServer/WMSServer?",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fire_and_Rescue_Authorities_(December_2017)_EW_BGC",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Fire_and_Rescue_Authorities_December_2017_EW_BGC_2, 0]);var lyr_Fire_and_Rescue_Authorities_December_2017_EW_BFE_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ons-inspire.esriuk.com/arcgis/services/Other_Boundaries/Fire_and_Rescue_Authorities_December_2017_Boundaries/MapServer/WMSServer?",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fire_and_Rescue_Authorities_(December_2017)_EW_BFE",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Fire_and_Rescue_Authorities_December_2017_EW_BFE_3, 0]);var lyr_Fire_and_Rescue_Authorities_December_2017_EW_BFC_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ons-inspire.esriuk.com/arcgis/services/Other_Boundaries/Fire_and_Rescue_Authorities_December_2017_Boundaries/MapServer/WMSServer?",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "4",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fire_and_Rescue_Authorities_(December_2017)_EW_BFC",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Fire_and_Rescue_Authorities_December_2017_EW_BFC_4, 0]);

lyr_Fire_and_Rescue_Authorities_December_2017_EW_BUC_0.setVisible(true);lyr_Fire_and_Rescue_Authorities_December_2017_EW_BSC_1.setVisible(true);lyr_Fire_and_Rescue_Authorities_December_2017_EW_BGC_2.setVisible(true);lyr_Fire_and_Rescue_Authorities_December_2017_EW_BFE_3.setVisible(true);lyr_Fire_and_Rescue_Authorities_December_2017_EW_BFC_4.setVisible(true);
var layersList = [baseLayer,lyr_Fire_and_Rescue_Authorities_December_2017_EW_BUC_0,lyr_Fire_and_Rescue_Authorities_December_2017_EW_BSC_1,lyr_Fire_and_Rescue_Authorities_December_2017_EW_BGC_2,lyr_Fire_and_Rescue_Authorities_December_2017_EW_BFE_3,lyr_Fire_and_Rescue_Authorities_December_2017_EW_BFC_4];
