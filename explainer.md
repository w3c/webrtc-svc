# WebRTC-SVC Explainer

Updated: July 2019

## Problem and Motivation

Scalable Video Coding (SVC) is increasingly used in realtime communications
applications because of the performance and reliability advantages it offers. 
Today SVC is supported within WebRTC implementations using proprietary
mechanisms and as a result, it is not possible to write web applications
supporting SVC that interoperate on multiple browsers.

We believe that there is a need for a simple mechanism to allow an application
to discover the SVC capabilities of supported video codecs as well as to configure
the encoder to utilize SVC. 

## Goals

- Extend the RTCRtpCodecCapability dictionary to allow an application to discover
the supported SVC modalities (known as scalabiltyModes) for each video codec.

- Extend the RTCRtpEncodings dictionary to enable an application to configure an
RtpSender with the scalabilityMode of each video stream to be sent, as well 
as to retrieve the scalabilityMode of each video stream that is being sent.

## Non-goals

To enable applications to configure arbitrary SVC dependency structures
beyond the scalabilityModes defined in the specification.  For example,
existing scalabilityModes only enable video resolutions to vary by 1.5:1
or 2:1 between layers.

To enable differential robustness, where retransmission, forward error
correction or redundant coding is applied to some scalability layers
but not others.

## Key use-cases

- Use of a centralized video conferencing server.

## Proposed solutions

1. Addition of a scalabilityModes attribute to RTCRtpCodecCapability.
2. Addition of a scalabilityMode attribute to RTCRtpEncodingParameters.

## Example of setting a scalabilityMode

```javascript
// Example of 3 spatial simulcast layers + 3 temporal layers with
// an SSRC and RID for each simulcast layer
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

## Example of discovering the supported scalabilityModes on the sender and receiver

```javascript

```

## Detailed design discussion

This proposal has evolved from the approach to SVC support provided in the ORTC API. 

- Developers utilizing ORTC with SVC indicated that the API was too complex and error-prone.

- Developers utilizing only a subset of SVC dependency structures, known as scalability
modes desired a simple mechanism to configure an RtpSender to use them.

As a result of this feedback, the proposal focused on supporting pre-defined
scalability structures known as scalabilityModes.
