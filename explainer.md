# WebRTC-SVC Explainer

Updated: July 2019

## Problem and Motivation

Scalable Video Coding (SVC) is increasingly used in realtime communications
applications because of the performance and reliability advantages it offers. 
Today SVC is supported within WebRTC implementations using proprietary
mechanisms and as a result, it is not possible to write web applications
supporting SVC that interoperate on multiple browsers.

We believe that there is a need for a simple mechanism to extend the WebRTC API
to allow an application to discover the SVC capabilities of supported video
codecs as well as to configure an encoder to utilize SVC. 

## Goals

- To extend WebRTC's RTCRtpCodecCapability dictionary to allow an application
to discover the supported SVC modalities (known as scalabiltyModes) for each
video codec.

- To extend WebRTC's RTCRtpEncodingParameters dictionary to enable an
application to configure an RTCRtpSender with the scalabilityMode of each
video stream to be sent, as well as to retrieve the scalabilityMode of
each video stream that is being sent.

## Non-goals

- To enable differential robustness, where retransmission, forward error
correction or redundant coding is applied to some scalability layers
but not others.

## Outstanding issues

- Whether to enable spatial scalability to utilize encoding parameters so
to achieve feature parity with simulcast, as explained in Issue 
https://github.com/w3c/webrtc-svc/issues/14

## Key use-cases

- Centralized video conferencing.

## Proposed solutions

1. Addition of a scalabilityModes attribute to the RTCRtpCodecCapability dictionary.
2. Addition of a scalabilityMode attribute to the RTCRtpEncodingParameters dictionary.

## Example of setting a scalabilityMode

```javascript
// Example of 3 spatial simulcast layers + 3 temporal layers
var encodings = [
  {rid: 'f', scalabilityMode: 'L1T3'},
  {rid: 'h', scaleResolutionDownBy: 2.0, scalabilityMode: 'L1T3'},
  {rid: 'q', scaleResolutionDownBy: 4.0, scalabilityMode: 'L1T3'}
];

// Example of 2 spatial layers (with 2:1 ratio) + 3 temporal layers
var encodings = [
  {scalabilityMode: 'L2T3'}
];

```

## Example of discovering the scalabilityModes on a Scalable Forwarding Unit (SFU)

```javascript
// RTCRtpReceiver.getCapabilities('video').codecs[] returned by 
// SFU that can only forward VP8 and VP9 temporal scalability modes
 "codecs": [
    {
      "clockRate": 90000,
      "mimeType": "video/VP8",
      "scalabilityModes": ["L1T2","L1T3"]
    },
    {
      "clockRate": 90000,
      "mimeType": "video/VP9",
      "scalabilityModes": ["L1T2","L1T3","L1T2h","L1T3h"]
    }
]
```

## Example of discovering the scalabilityModes on a sender
```javascript

// Capabilities returned by RTCRtpSender.getCapabilities('video').codecs[]
  "codecs": [
    {
      "clockRate": 90000,
      "mimeType": "video/VP8",
      "scalabilityModes": ["L1T2","L1T3"]
    },
    {
      "clockRate": 90000,
      "mimeType": "video/rtx",
      "sdpFmtpLine": "apt=96"
    },
    {
      "clockRate": 90000,
      "mimeType": "video/VP9",
      "scalabilityModes": ["L1T2","L1T3","L2T1","L2T2","L2T3","L3T1","L3T2","L3T3","L1T2h","L1T3h","L2T1h","L2T2h","L2T3h","L3T1h","L3T2h","L3T3h"]
    },
    {
      "clockRate": 90000,
      "mimeType": "video/rtx",
      "sdpFmtpLine": "apt=98"
    },
    {
      "clockRate": 90000,
      "mimeType": "video/AV1",
      "scalabilityModes": ["L1T2","L1T3","L2T1","L2T2","L2T3","L3T1","L3T2","L3T3","L1T2h","L1T3h","L2T1h","L2T2h","L2T3h","L3T1h","L3T2h","L3T3h","S2T1","S2T2","S2T3","S3T1","S3T2","S3T3","S2T1h","S2T2h","S2T3h","S3T1h","S3T2h","S3T3h"]
    },
    {
      "clockRate": 90000,
      "mimeType": "video/rtx",
      "sdpFmtpLine": "apt=100"
    }
]
```

## WPT tests
A sample WPT test is here: https://chromium.googlesource.com/chromium/src/+/f2e338d626fbb80ac9cd10d0d8200a4323d15c4d/third_party/blink/web_tests/external/wpt/webrtc-svc/RTCRtpParameters-scalability.html

## Detailed design discussion

This proposal has evolved from the approach to SVC support provided in the ORTC API. 

- Developers utilizing ORTC with SVC indicated that the API was too complex and error-prone.

- Developers utilizing only a subset of SVC dependency structures, known as scalability
modes desired a simple mechanism to configure an RtpSender to use them.

As a result of this feedback, the proposal focused on supporting pre-defined
scalability structures known as scalabilityModes.
