ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([461115.786574, 9274760.502048, 462372.357641, 9275555.306867]);
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
var format_Pemukiman_1 = new ol.format.GeoJSON();
var features_Pemukiman_1 = format_Pemukiman_1.readFeatures(json_Pemukiman_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Pemukiman_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_1.addFeatures(features_Pemukiman_1);
var lyr_Pemukiman_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_1, 
                style: style_Pemukiman_1,
                popuplayertitle: 'Pemukiman',
                interactive: false,
                title: '<img src="styles/legend/Pemukiman_1.png" /> Pemukiman'
            });
var format_JaringanJalan_2 = new ol.format.GeoJSON();
var features_JaringanJalan_2 = format_JaringanJalan_2.readFeatures(json_JaringanJalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JaringanJalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_2.addFeatures(features_JaringanJalan_2);
var lyr_JaringanJalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_2, 
                style: style_JaringanJalan_2,
                popuplayertitle: 'Jaringan Jalan',
                interactive: false,
                title: '<img src="styles/legend/JaringanJalan_2.png" /> Jaringan Jalan'
            });
var format_Hotel_3 = new ol.format.GeoJSON();
var features_Hotel_3 = format_Hotel_3.readFeatures(json_Hotel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Hotel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotel_3.addFeatures(features_Hotel_3);
var lyr_Hotel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotel_3, 
                style: style_Hotel_3,
                popuplayertitle: 'Hotel',
                interactive: true,
                title: '<img src="styles/legend/Hotel_3.png" /> Hotel'
            });
var format_Dermaga_4 = new ol.format.GeoJSON();
var features_Dermaga_4 = format_Dermaga_4.readFeatures(json_Dermaga_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Dermaga_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dermaga_4.addFeatures(features_Dermaga_4);
var lyr_Dermaga_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dermaga_4, 
                style: style_Dermaga_4,
                popuplayertitle: 'Dermaga',
                interactive: true,
                title: '<img src="styles/legend/Dermaga_4.png" /> Dermaga'
            });
var format_Taman_5 = new ol.format.GeoJSON();
var features_Taman_5 = format_Taman_5.readFeatures(json_Taman_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Taman_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taman_5.addFeatures(features_Taman_5);
var lyr_Taman_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taman_5, 
                style: style_Taman_5,
                popuplayertitle: 'Taman',
                interactive: true,
                title: '<img src="styles/legend/Taman_5.png" /> Taman'
            });
var format_GedungSerbaguna_6 = new ol.format.GeoJSON();
var features_GedungSerbaguna_6 = format_GedungSerbaguna_6.readFeatures(json_GedungSerbaguna_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_GedungSerbaguna_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GedungSerbaguna_6.addFeatures(features_GedungSerbaguna_6);
var lyr_GedungSerbaguna_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GedungSerbaguna_6, 
                style: style_GedungSerbaguna_6,
                popuplayertitle: 'Gedung Serbaguna',
                interactive: true,
                title: '<img src="styles/legend/GedungSerbaguna_6.png" /> Gedung Serbaguna'
            });
var format_TouristInformationCentre_7 = new ol.format.GeoJSON();
var features_TouristInformationCentre_7 = format_TouristInformationCentre_7.readFeatures(json_TouristInformationCentre_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TouristInformationCentre_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TouristInformationCentre_7.addFeatures(features_TouristInformationCentre_7);
var lyr_TouristInformationCentre_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TouristInformationCentre_7, 
                style: style_TouristInformationCentre_7,
                popuplayertitle: 'Tourist Information Centre',
                interactive: true,
                title: '<img src="styles/legend/TouristInformationCentre_7.png" /> Tourist Information Centre'
            });
var format_Mushola_8 = new ol.format.GeoJSON();
var features_Mushola_8 = format_Mushola_8.readFeatures(json_Mushola_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Mushola_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mushola_8.addFeatures(features_Mushola_8);
var lyr_Mushola_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mushola_8, 
                style: style_Mushola_8,
                popuplayertitle: 'Mushola',
                interactive: true,
                title: '<img src="styles/legend/Mushola_8.png" /> Mushola'
            });
var format_TokoOlehOleh_9 = new ol.format.GeoJSON();
var features_TokoOlehOleh_9 = format_TokoOlehOleh_9.readFeatures(json_TokoOlehOleh_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TokoOlehOleh_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TokoOlehOleh_9.addFeatures(features_TokoOlehOleh_9);
var lyr_TokoOlehOleh_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TokoOlehOleh_9, 
                style: style_TokoOlehOleh_9,
                popuplayertitle: 'Toko Oleh-Oleh',
                interactive: true,
                title: '<img src="styles/legend/TokoOlehOleh_9.png" /> Toko Oleh-Oleh'
            });
var format_Lapangan_10 = new ol.format.GeoJSON();
var features_Lapangan_10 = format_Lapangan_10.readFeatures(json_Lapangan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Lapangan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_10.addFeatures(features_Lapangan_10);
var lyr_Lapangan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_10, 
                style: style_Lapangan_10,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_10.png" /> Lapangan'
            });
var format_PasarSeni_11 = new ol.format.GeoJSON();
var features_PasarSeni_11 = format_PasarSeni_11.readFeatures(json_PasarSeni_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PasarSeni_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PasarSeni_11.addFeatures(features_PasarSeni_11);
var lyr_PasarSeni_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PasarSeni_11, 
                style: style_PasarSeni_11,
                popuplayertitle: 'Pasar Seni',
                interactive: true,
                title: '<img src="styles/legend/PasarSeni_11.png" /> Pasar Seni'
            });
var format_TempatMakan_12 = new ol.format.GeoJSON();
var features_TempatMakan_12 = format_TempatMakan_12.readFeatures(json_TempatMakan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TempatMakan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatMakan_12.addFeatures(features_TempatMakan_12);
var lyr_TempatMakan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatMakan_12, 
                style: style_TempatMakan_12,
                popuplayertitle: 'Tempat Makan',
                interactive: true,
                title: '<img src="styles/legend/TempatMakan_12.png" /> Tempat Makan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pemukiman_1.setVisible(true);lyr_JaringanJalan_2.setVisible(true);lyr_Hotel_3.setVisible(true);lyr_Dermaga_4.setVisible(true);lyr_Taman_5.setVisible(true);lyr_GedungSerbaguna_6.setVisible(true);lyr_TouristInformationCentre_7.setVisible(true);lyr_Mushola_8.setVisible(true);lyr_TokoOlehOleh_9.setVisible(true);lyr_Lapangan_10.setVisible(true);lyr_PasarSeni_11.setVisible(true);lyr_TempatMakan_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pemukiman_1,lyr_JaringanJalan_2,lyr_Hotel_3,lyr_Dermaga_4,lyr_Taman_5,lyr_GedungSerbaguna_6,lyr_TouristInformationCentre_7,lyr_Mushola_8,lyr_TokoOlehOleh_9,lyr_Lapangan_10,lyr_PasarSeni_11,lyr_TempatMakan_12];
lyr_Pemukiman_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'brand': 'brand', 'website': 'website', 'tourism': 'tourism', 'phone': 'phone', 'name': 'name', 'internet_a': 'internet_a', 'air_condit': 'air_condit', 'addr_full': 'addr_full', 'building': 'building', });
lyr_JaringanJalan_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'access': 'access', 'oneway': 'oneway', 'motorcycle': 'motorcycle', 'import': 'import', 'layer': 'layer', 'bridge': 'bridge', 'surface': 'surface', 'smoothness': 'smoothness', 'name': 'name', 'highway': 'highway', });
lyr_Hotel_3.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', });
lyr_Dermaga_4.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', });
lyr_Taman_5.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', });
lyr_GedungSerbaguna_6.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', });
lyr_TouristInformationCentre_7.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', });
lyr_Mushola_8.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', });
lyr_TokoOlehOleh_9.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', 'Deskripsi': 'Deskripsi', });
lyr_Lapangan_10.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', 'Deskripsi': 'Deskripsi', });
lyr_PasarSeni_11.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', 'Deskripsi': 'Deskripsi', });
lyr_TempatMakan_12.set('fieldAliases', {'NO': 'NO', 'NAMA': 'Nama Tempat', 'X': 'X', 'Y': 'Y', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', 'Deskripsi': 'Deskripsi', });
lyr_Pemukiman_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'brand': 'TextEdit', 'website': 'TextEdit', 'tourism': 'TextEdit', 'phone': 'TextEdit', 'name': 'TextEdit', 'internet_a': 'TextEdit', 'air_condit': 'TextEdit', 'addr_full': 'TextEdit', 'building': 'TextEdit', });
lyr_JaringanJalan_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'access': '', 'oneway': '', 'motorcycle': '', 'import': '', 'layer': '', 'bridge': '', 'surface': '', 'smoothness': '', 'name': '', 'highway': '', });
lyr_Hotel_3.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', });
lyr_Dermaga_4.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', });
lyr_Taman_5.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', });
lyr_GedungSerbaguna_6.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', });
lyr_TouristInformationCentre_7.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', });
lyr_Mushola_8.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', });
lyr_TokoOlehOleh_9.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', 'Deskripsi': 'TextEdit', });
lyr_Lapangan_10.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', 'Deskripsi': 'TextEdit', });
lyr_PasarSeni_11.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', 'Deskripsi': 'TextEdit', });
lyr_TempatMakan_12.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PATH_FOTO': 'ExternalResource', 'LINK_FOTO': 'TextEdit', 'Deskripsi': 'TextEdit', });
lyr_Pemukiman_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'brand': 'no label', 'website': 'no label', 'tourism': 'no label', 'phone': 'no label', 'name': 'no label', 'internet_a': 'no label', 'air_condit': 'no label', 'addr_full': 'no label', 'building': 'no label', });
lyr_JaringanJalan_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'access': 'no label', 'oneway': 'no label', 'motorcycle': 'no label', 'import': 'no label', 'layer': 'no label', 'bridge': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'name': 'no label', 'highway': 'no label', });
lyr_Hotel_3.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', });
lyr_Dermaga_4.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', });
lyr_Taman_5.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', });
lyr_GedungSerbaguna_6.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', });
lyr_TouristInformationCentre_7.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', });
lyr_Mushola_8.set('fieldLabels', {'NO': 'no label', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', });
lyr_TokoOlehOleh_9.set('fieldLabels', {'NO': 'no label', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', 'Deskripsi': 'no label', });
lyr_Lapangan_10.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', 'Deskripsi': 'no label', });
lyr_PasarSeni_11.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', 'Deskripsi': 'no label', });
lyr_TempatMakan_12.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'PATH_FOTO': 'no label', 'LINK_FOTO': 'hidden field', 'Deskripsi': 'no label', });
lyr_TempatMakan_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});