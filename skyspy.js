var sbs1 = require('sbs1');
var Tabletop = require('tabletop');

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1O4UfWT17szjydo5TQrqNYcEDRwm1H-tjv-sriv01Z68/pubhtml';

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
    //return hex_ids;
  };
  console.log(hex_ids);
}

init();

var client = sbs1.createClient();
client.on('message', function(msg) {
  if (msg.message_type === sbs1.MessageType.TRANSMISSION && msg.transmission_type === sbs1.TransmissionType.ES_AIRBORNE_POS) {
    console.log('transmission_type: ' + msg.transmission_type);
    console.log('session id: ' + msg.session_id);
    console.log('aircraft id: ' + msg.aircraft_id);
    console.log('hex_ident: ' + msg.hex_ident);
    console.log('latitude: ' + msg.lat);
    console.log('longitude: ' + msg.lon);
    console.log('flight: ' + msg.callsign);
    console.log('squawk: ' + msg.squawk);
    console.log('altitude: ' + msg.altitude);

  }
});
