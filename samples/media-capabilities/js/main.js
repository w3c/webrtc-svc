'use strict';

let bitrate = 1000000, configuration, encode = 'true', contentType, preferredResolution, framerate = 29.97, width, height;
let preferredCodec ="VP8";
let modes = ["L1T1","L1T2","L1T3","L2T1","L2T2","L2T3","L3T1","L3T2","L3T3","L2T1h","L2T2h","L2T3h","S2T1","S2T2","S2T3","S2T1h",
            "S2T2h","S2T3h","S3T1","S3T2","S3T3","S3T1h","S3T2h","S3T3h","L2T2_KEY","L2T2_KEY_SHIFT","L2T3_KEY","L2T3_KEY_SHIFT",
            "L3T2_KEY","L3T2_KEY_SHIFT","L3T3_KEY","L3T3_KEY_SHIFT"];

let discoverButton = document.querySelector('#Discover');
let codecButtons = document.querySelector('#codecButtons');
let resButtons = document.querySelector('#resButtons');
let encodeButtons = document.querySelector('#encodeButtons');

discoverButton.disabled = false;

function addToEventLog(text, severity = 'info') {
  let log = document.querySelector('textarea');
  log.value += severity + ': ' + text + '\n';
}

function getResValue(radio) {
  preferredResolution = radio.value;
  addToEventLog('Resolution selected: ' + preferredResolution);
}

function getCodecValue(radio) {
  preferredCodec = radio.value;
  addToEventLog('Codec selected: ' + preferredCodec);
}

function getEncodeValue(radio) {
  encode = radio.value;
  addToEventLog('Encode selected: ' + encode); 
}

function modeProperties(mode, enc, configuration) {
  configuration.video.scalabilityMode = mode;
  if (enc) {
    navigator.mediaCapabilities.encodingInfo(configuration)
    .then((result) => {
      addToEventLog(preferredCodec + ' ' + mode + ' is:'
      + (result.supported ? '' : ' NOT') + ' supported,'
      + (result.smooth ? '' : ' NOT') + ' smooth and'
      + (result.powerEfficient ? '' : ' NOT') + ' power efficient');
    }).catch((e) => {
       addToEventLog(`encodingInfo error: ${e.message}`); 
    });
  } else {
    navigator.mediaCapabilities.decodingInfo(configuration)
    .then((result) => {
      addToEventLog(preferredCodec + ' ' + mode + ' is:'
      + (result.supported ? '' : ' NOT') + ' supported,'
      + (result.smooth ? '' : ' NOT') + ' smooth and'
      + (result.powerEfficient ? '' : ' NOT') + ' power efficient');
    }).catch((e) => {
       addToEventLog(`decodingInfo error: ${e.message}`);
    });
  } 
}

document.addEventListener('DOMContentLoaded', function(event) {
  addToEventLog('DOM Content Loaded');

  if (typeof navigator.mediaCapabilities.encodingInfo === 'undefined' ||
      typeof navigator.mediaCapabilities.decodingInfo === 'undefined') {
        addToEventLog('Your browser does not support the Media Capabilities API.\n');
        return;
  }

  discoverButton.onclick = () => {
    discoverButton.disabled = true;
    codecButtons.style.display = "none";
    resButtons.style.display = "none";
    encodeButtons.style.display = "none";
    rateInput.style.display = "none";
    framerateInput.style.display = "none";
    const rate = document.getElementById('rate').value;
    const framerate = document.getElementById('framerate').value;

    switch(preferredResolution) {
      case "qvga":
        width = 320;
        height = 240;
        addToEventLog('QVGA selected');
        break;
      case "vga":
        width = 640;
        height = 480;
        addToEventLog('VGA selected');
        break;
      case "hd":
        width = 1280;
        height = 720;
        addToEventLog('HD selected');
        break;
      case "full-hd":
        width = 1920;
        height = 1080;
        addToEventLog('Full HD selected');
        break;
      case "tv4K":
        width = 3840;
        height = 2160;
        addToEventLog('4K TV selected');
        break;
      case "cinema4K":
        width = 4096;
        height = 2160;
        addToEventLog('Cinema 4K selected');
        break;
      case "eightK":
        width = 7680;
        height = 4320;
        addToEventLog('8K selected');
        break;
      default:
        width = 320;
        height = 240;
        addToEventLog('Default (QVGA) selected');
        break;
    }

    switch(preferredCodec){
      case "H264":
        contentType = 'video/H264';
        break;      
      case "H265":
        contentType = 'video/H265';
        break;
      case "VP8":
        contentType = 'video/vp8';
        break;
      case "VP9":
        contentType = 'video/vp9';
        break;
      case "AV1":
        contentType = 'video/av1';
        break;
    }

    const configuration = {
       type: 'webrtc',
       video: {
         contentType: contentType,
         width: width,
         height: height,
         bitrate: rate,
         framerate: framerate
       }
    };

    modes.forEach((mode) => {
      modeProperties(mode, encode, configuration);
    });

  }
});
