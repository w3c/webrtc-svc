var respecConfig = {
  specStatus: "ED",
  // if there a publicly available Editor's Draft, this is the link
  edDraftURI: "https://w3c.github.io/webrtc-svc/",
  shortName: "webrtc-svc",
  editors:  [
    //              { name: "Your Name", url: "http://example.org/",
    //                company: "Your Company", companyURL: "http://example.com/" },
    { name: "Bernard Aboba", company: "Microsoft Corporation",
      w3cid: "65611"
    }
  ],
  formerEditors: [
    { name: "Peter Thatcher", company: "Microsoft Corporation", w3cid: "68236", retiredDate: "2019-12-31" }
  ],
  authors: [
  ],
  group: "webrtc",
  wgPublicList: "public-webrtc",
  xref: ["webidl", "webrtc", "media-capabilities"],
  github: "https://github.com/w3c/webrtc-svc",
  otherLinks: [
    {
      key: "Participate",
      data: [
        {
          value: "Mailing list",
          href: "https://lists.w3.org/Archives/Public/public-webrtc/"
        },
        {
          "value": "IETF AVTCORE Working Group",
          "href": "https://datatracker.ietf.org/wg/avtcore/documents/"
        }
      ]
    }
  ],
  localBiblio: {
    "IANA-STUN-6": {
      "title": "STUN Error Codes",
      "href": "https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6",
      "publisher": "IANA"
    },
    "AV1-RTP": {
      "title": "RTP Payload Format for AV1",
      "href": "https://aomediacodec.github.io/av1-rtp-spec/",
      "authors": [
        "AV1 RTC SG"
      ],
      "status": "Standard",
      "publisher": "Alliance for Open Media"
    },
    "FRAME-MARKING": {
      "title": "Frame Marking RTP Header Extension",
      "href": "https://datatracker.ietf.org/doc/html/draft-ietf-avtext-framemarking",
      "authors": [
        "M. Zanaty",
        "E. Berger",
        "S. Nandakumar"
      ],
      "status": "10 March 2021. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "RFC7667": {
      "title": "RTP Topologies",
      "href": "https://datatracker.ietf.org/doc/html/rfc7667",
      "authors": [
        "M. Westerlund",
        "S. Wenger"
      ],
      "status": "November 2015. RFC",
      "publisher": "IETF"
   },
   "VP9": {
      "title": "VP9 Bitstream & Decoding Process Specification",
      "href": "https://storage.googleapis.com/downloads.webmproject.org/docs/vp9/vp9-bitstream-specification-v0.6-20160331-draft.pdf",
      "authors": [
        "A. Grange",
        "P. de Rivaz",
        "J. Hunt"
      ],
      "status": "February 2016. Version 0.6",
      "publisher": "Google"
    },
    "VP9-PAYLOAD": {
      "title": "RTP Payload Format for VP9 Video",
      "href": "https://datatracker.ietf.org/doc/html/draft-ietf-payload-vp9",
      "authors": [
        "J. Uberti",
        "S. Holmer",
        "M. Flodman",
        "J. Lennox",
        "D. Hong"
      ],
      "status": "10 June 2021. Internet Draft (work in progress)",
      "publisher": "IETF"
    }
  }
}
