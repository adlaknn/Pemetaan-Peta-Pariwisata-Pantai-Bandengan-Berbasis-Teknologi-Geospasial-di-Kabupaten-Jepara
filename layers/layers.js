ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([460332.291248, 9274716.735029, 462805.622322, 9276037.807897]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Pemukiman_2 = new ol.format.GeoJSON();
var features_Pemukiman_2 = format_Pemukiman_2.readFeatures(json_Pemukiman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Pemukiman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_2.addFeatures(features_Pemukiman_2);
var lyr_Pemukiman_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_2, 
                style: style_Pemukiman_2,
                popuplayertitle: 'Pemukiman',
                interactive: false,
                title: '<img src="styles/legend/Pemukiman_2.png" /> Pemukiman'
            });
var format_JaringanJalan_3 = new ol.format.GeoJSON();
var features_JaringanJalan_3 = format_JaringanJalan_3.readFeatures(json_JaringanJalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JaringanJalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_3.addFeatures(features_JaringanJalan_3);
var lyr_JaringanJalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_3, 
                style: style_JaringanJalan_3,
                popuplayertitle: 'Jaringan Jalan',
                interactive: false,
                title: '<img src="styles/legend/JaringanJalan_3.png" /> Jaringan Jalan'
            });
var format_Hotel_4 = new ol.format.GeoJSON();
var features_Hotel_4 = format_Hotel_4.readFeatures(json_Hotel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Hotel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotel_4.addFeatures(features_Hotel_4);
var lyr_Hotel_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotel_4, 
                style: style_Hotel_4,
                popuplayertitle: 'Hotel',
                interactive: true,
                title: '<img src="styles/legend/Hotel_4.png" /> Hotel'
            });
var format_Dermaga_5 = new ol.format.GeoJSON();
var features_Dermaga_5 = format_Dermaga_5.readFeatures(json_Dermaga_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Dermaga_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dermaga_5.addFeatures(features_Dermaga_5);
var lyr_Dermaga_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dermaga_5, 
                style: style_Dermaga_5,
                popuplayertitle: 'Dermaga',
                interactive: true,
                title: '<img src="styles/legend/Dermaga_5.png" /> Dermaga'
            });
var format_Taman_6 = new ol.format.GeoJSON();
var features_Taman_6 = format_Taman_6.readFeatures(json_Taman_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Taman_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taman_6.addFeatures(features_Taman_6);
var lyr_Taman_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taman_6, 
                style: style_Taman_6,
                popuplayertitle: 'Taman',
                interactive: true,
                title: '<img src="styles/legend/Taman_6.png" /> Taman'
            });
var format_GedungSerbaguna_7 = new ol.format.GeoJSON();
var features_GedungSerbaguna_7 = format_GedungSerbaguna_7.readFeatures(json_GedungSerbaguna_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_GedungSerbaguna_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GedungSerbaguna_7.addFeatures(features_GedungSerbaguna_7);
var lyr_GedungSerbaguna_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GedungSerbaguna_7, 
                style: style_GedungSerbaguna_7,
                popuplayertitle: 'Gedung Serbaguna',
                interactive: true,
                title: '<img src="styles/legend/GedungSerbaguna_7.png" /> Gedung Serbaguna'
            });
var format_TouristInformationCentre_8 = new ol.format.GeoJSON();
var features_TouristInformationCentre_8 = format_TouristInformationCentre_8.readFeatures(json_TouristInformationCentre_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TouristInformationCentre_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TouristInformationCentre_8.addFeatures(features_TouristInformationCentre_8);
var lyr_TouristInformationCentre_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TouristInformationCentre_8, 
                style: style_TouristInformationCentre_8,
                popuplayertitle: 'Tourist Information Centre',
                interactive: true,
                title: '<img src="styles/legend/TouristInformationCentre_8.png" /> Tourist Information Centre'
            });
var format_Mushola_9 = new ol.format.GeoJSON();
var features_Mushola_9 = format_Mushola_9.readFeatures(json_Mushola_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Mushola_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mushola_9.addFeatures(features_Mushola_9);
var lyr_Mushola_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mushola_9, 
                style: style_Mushola_9,
                popuplayertitle: 'Mushola',
                interactive: true,
                title: '<img src="styles/legend/Mushola_9.png" /> Mushola'
            });
var format_TokoOlehOleh_10 = new ol.format.GeoJSON();
var features_TokoOlehOleh_10 = format_TokoOlehOleh_10.readFeatures(json_TokoOlehOleh_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TokoOlehOleh_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TokoOlehOleh_10.addFeatures(features_TokoOlehOleh_10);
var lyr_TokoOlehOleh_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TokoOlehOleh_10, 
                style: style_TokoOlehOleh_10,
                popuplayertitle: 'Toko Oleh-Oleh',
                interactive: true,
                title: '<img src="styles/legend/TokoOlehOleh_10.png" /> Toko Oleh-Oleh'
            });
var format_Lapangan_11 = new ol.format.GeoJSON();
var features_Lapangan_11 = format_Lapangan_11.readFeatures(json_Lapangan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Lapangan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_11.addFeatures(features_Lapangan_11);
var lyr_Lapangan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_11, 
                style: style_Lapangan_11,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_11.png" /> Lapangan'
            });
var format_PasarSeni_12 = new ol.format.GeoJSON();
var features_PasarSeni_12 = format_PasarSeni_12.readFeatures(json_PasarSeni_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PasarSeni_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PasarSeni_12.addFeatures(features_PasarSeni_12);
var lyr_PasarSeni_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PasarSeni_12, 
                style: style_PasarSeni_12,
                popuplayertitle: 'Pasar Seni',
                interactive: true,
                title: '<img src="styles/legend/PasarSeni_12.png" /> Pasar Seni'
            });
var format_TempatMakan_13 = new ol.format.GeoJSON();
var features_TempatMakan_13 = format_TempatMakan_13.readFeatures(json_TempatMakan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TempatMakan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatMakan_13.addFeatures(features_TempatMakan_13);
var lyr_TempatMakan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatMakan_13, 
                style: style_TempatMakan_13,
                popuplayertitle: 'Tempat Makan',
                interactive: true,
                title: '<img src="styles/legend/TempatMakan_13.png" /> Tempat Makan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Pemukiman_2.setVisible(true);lyr_JaringanJalan_3.setVisible(true);lyr_Hotel_4.setVisible(true);lyr_Dermaga_5.setVisible(true);lyr_Taman_6.setVisible(true);lyr_GedungSerbaguna_7.setVisible(true);lyr_TouristInformationCentre_8.setVisible(true);lyr_Mushola_9.setVisible(true);lyr_TokoOlehOleh_10.setVisible(true);lyr_Lapangan_11.setVisible(true);lyr_PasarSeni_12.setVisible(true);lyr_TempatMakan_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_Pemukiman_2,lyr_JaringanJalan_3,lyr_Hotel_4,lyr_Dermaga_5,lyr_Taman_6,lyr_GedungSerbaguna_7,lyr_TouristInformationCentre_8,lyr_Mushola_9,lyr_TokoOlehOleh_10,lyr_Lapangan_11,lyr_PasarSeni_12,lyr_TempatMakan_13];
lyr_Pemukiman_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'brand': 'brand', 'website': 'website', 'tourism': 'tourism', 'phone': 'phone', 'name': 'name', 'internet_a': 'internet_a', 'air_condit': 'air_condit', 'addr_full': 'addr_full', 'building': 'building', });
lyr_JaringanJalan_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'access': 'access', 'oneway': 'oneway', 'motorcycle': 'motorcycle', 'import': 'import', 'layer': 'layer', 'bridge': 'bridge', 'surface': 'surface', 'smoothness': 'smoothness', 'name': 'name', 'highway': 'highway', });
lyr_Hotel_4.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', });
lyr_Dermaga_5.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', });
lyr_Taman_6.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', });
lyr_GedungSerbaguna_7.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', });
lyr_TouristInformationCentre_8.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', });
lyr_Mushola_9.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', });
lyr_TokoOlehOleh_10.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', 'Deskripsi': 'Deskripsi', });
lyr_Lapangan_11.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', 'Deskripsi': 'Deskripsi', });
lyr_PasarSeni_12.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', 'Deskripsi': 'Deskripsi', });
lyr_TempatMakan_13.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', 'Deskripsi': 'Deskripsi', });
lyr_Pemukiman_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'brand': 'TextEdit', 'website': 'TextEdit', 'tourism': 'TextEdit', 'phone': 'TextEdit', 'name': 'TextEdit', 'internet_a': 'TextEdit', 'air_condit': 'TextEdit', 'addr_full': 'TextEdit', 'building': 'TextEdit', });
lyr_JaringanJalan_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'access': '', 'oneway': '', 'motorcycle': '', 'import': '', 'layer': '', 'bridge': '', 'surface': '', 'smoothness': '', 'name': '', 'highway': '', });
lyr_Hotel_4.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', });
lyr_Dermaga_5.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', });
lyr_Taman_6.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', });
lyr_GedungSerbaguna_7.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', });
lyr_TouristInformationCentre_8.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', });
lyr_Mushola_9.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', });
lyr_TokoOlehOleh_10.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', 'Deskripsi': 'TextEdit', });
lyr_Lapangan_11.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', 'Deskripsi': 'TextEdit', });
lyr_PasarSeni_12.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', 'Deskripsi': 'TextEdit', });
lyr_TempatMakan_13.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', 'Deskripsi': 'TextEdit', });
lyr_Pemukiman_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'brand': 'no label', 'website': 'no label', 'tourism': 'no label', 'phone': 'no label', 'name': 'no label', 'internet_a': 'no label', 'air_condit': 'no label', 'addr_full': 'no label', 'building': 'no label', });
lyr_JaringanJalan_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'access': 'no label', 'oneway': 'no label', 'motorcycle': 'no label', 'import': 'no label', 'layer': 'no label', 'bridge': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'name': 'no label', 'highway': 'no label', });
lyr_Hotel_4.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', });
lyr_Dermaga_5.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', });
lyr_Taman_6.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', });
lyr_GedungSerbaguna_7.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', });
lyr_TouristInformationCentre_8.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', });
lyr_Mushola_9.set('fieldLabels', {'NO': 'no label', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', });
lyr_TokoOlehOleh_10.set('fieldLabels', {'NO': 'no label', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', 'Deskripsi': 'no label', });
lyr_Lapangan_11.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', 'Deskripsi': 'no label', });
lyr_PasarSeni_12.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'header label - visible with data', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', 'Deskripsi': 'no label', });
lyr_TempatMakan_13.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', 'Deskripsi': 'no label', });
lyr_TempatMakan_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});