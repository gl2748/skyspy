//var sbs1 = require('sbs1');
var Tabletop = require('tabletop');
var request = require('request');
var fs = require('fs');
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1O4UfWT17szjydo5TQrqNYcEDRwm1H-tjv-sriv01Z68/pubhtml';
var request = require('request');
var firehose_url = 'http://global.adsbexchange.com/VirtualRadar/AircraftList.json';
var http = require('http');

var zlib = require('zlib');

    var headers = {
      'Accept-Encoding': 'gzip'
    };

    request({url:'http://global.adsbexchange.com/VirtualRadar/AircraftList.json', 'headers': headers})
        .pipe(zlib.createGunzip()) // unzip
        .pipe(process.stdout); // do whatever you want with the stream




function init() {
  Tabletop.init( {
    key: public_spreadsheet_url,
    callback: showInfo,
    simpleSheet: true } )
}

function showInfo(data, tabletop) {
  hex_ids = [];

  for (var i=0; i < data.length; ++i) {
    hex_ids.push(data[i]["mode_s_code_hex"]);
  };
//If JSON has hex_ids.
//Record all rows.
//Sample JSON.
  console.log(hex_ids);
}

init();
