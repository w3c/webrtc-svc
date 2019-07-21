# WebRTC-SVC Explainer

Updated: July 2019

## Problem and Motivation

Scalable Video Coding (SVC) is increasingly used in realtime communications
applications because of the performance and reliability advantages it offers. 
Applications such as video conferencing and gaming often need to support
a variety of devices, each receiving video tailored to the available
bandwidth and capabilities of the device, such as the display resolution
or maximum framerate. 

Today SVC is supported within WebRTC implementations using proprietary
mechanisms and as a result, it is not possible to write web applications
supporting SVC that interoperate on multiple browsers.

We believe that there is a need for a simple mechanism to allow an application
to discover the SVC capabilities of supported video codecs as well as to configure
the encoder to utilize SVC. 

## Goals

- Provide a way for an application to discover the supported SVC modes
(known as scalabiltyModes) for each video codec.

- Provide an API to configure an RtpSender with the scalabilityMode of each video
stream to be sent.

- Provide an API to retrieve the scalabilityMode settings for each video 
stream that is being sent.

## Non-goals

To enable applications to configure arbitrary SVC dependency structures
beyond the scalabilityModes defined in the specification.  For example,
current scalabilityModes enable video resolutions to vary by 1.5:1 or
2:1 between layers.  For example if 3 spatial layers of video are
desired with the highest resolution being 1280 x 960, the L3T1
mode would yield 3 layers corresponding to resolution of 
1280 x 960, 640 x 480 and 320 x 240.

## Key use-cases

- Sending video to a centralized video conferencing server or game server.

## Proposed solutions

1. Addition of a scalabilityModes attribute to RTCRtpCodecCapabilities.
2. Additoin of a scalabilityMode attribute to RTCRtpEncodingParameters.

## Example of setting a scalabilityMode

```javascript

```

## Example of discovering the supported scalabilityModes on the sender and receiver

```javascript

```

## Detailed design discussion

This proposal has evolved from the approach to SVC support provided in the ORTC API. 

- Developers utilizing ORTC to send SVC reported that while the API provided
very detailed control over the SVC strucutres, that is was complex and error-prone.

- As a result, developers requested that it be very simple to configure the
RtpSender for the most frequently used SVC modes. 

As a result of this feedback, the WebRTC-SVC API proposal utilizes pre-defined
scalability structures known as scalabilityModes.
