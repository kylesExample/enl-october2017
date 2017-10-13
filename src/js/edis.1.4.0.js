import sample from './platinum-enl';

var EDIS = EDIS || {};
EDIS.get = function(options, callback) {
  var args = Array.prototype.slice.call(arguments);

  callback = args.pop();
  options = args[0] || {};

  if (EDIS.sample_data || CD.param('sample_data')) {
    callback(JSON.stringify(sample));
    // var sampleDataUrl = 'http://projects.movableink.com/production/amex-sample-data/' + (EDIS.sample_data || CD.param('sample_data')) + '.json';
    // CD.get(sampleDataUrl, callback);
    return;
  }

  var token = CD.param('token');
  var rsvp = CD.param('rsvp');
  if (!token || !rsvp) {
    throw "Error: both RSVP and token must be merged in (?rsvp=XXXXX&token=XXXXX)"
  }

  var ports = {
    'e3': '3006',
    'e2': '4006',
    'e1': '5006'
  };

  var env = CD.param('mi_env') || CD.param('env') || 'e3';
  var port = ports[env.toLowerCase()] || '3006';
  var urlBase;

  var suspensionTime = 4000;
  if (options.maxSuspension) {
    suspensionTime = options.maxSuspension;
  }
  if (port == '3006') {
    urlBase = 'http://edis-api.movableink-templates.com:8080/shared/services/digitalcontent/EnterpriseDigitalInformationService/RetrieveDigitalInformation?email=';
  } else {
    suspensionTime = 10000;
    urlBase = [
      'http://cors.movableink.com/edis-api-nonprod.movableink-templates.com:',
      port,
      '/shared/services/digitalcontent/EnterpriseDigitalInformationService/RetrieveDigitalInformation?email=',
    ].join('');
  }

  var queryString = '';
  if (options.requestParams) {
    var parts = [];
    for (var i in options.requestParams) {
      if (options.requestParams.hasOwnProperty(i)) {
        parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(options.requestParams[i]));
      }
    }
    queryString = '&' + parts.join("&");
  }

  var url = [
    urlBase,
    CD.param('token'),
    '&rsvp=',
    CD.param('rsvp'),
    queryString
  ].join('');

  CD.get(url, {maxSuspension: suspensionTime}, callback);
}

export default EDIS;
