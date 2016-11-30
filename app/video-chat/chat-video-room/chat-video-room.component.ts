import { Component, OnInit } from '@angular/core';



@Component({
  moduleId: module.id,
  selector: 'chat-video-room',
  templateUrl: 'chat-video-room.component.html',
  styleUrls: ['chat-video-room.component.css']
})

export class ChatVideoRoomComponent implements OnInit{
  private vid1: HTMLVideoElement;
  private vid2: HTMLVideoElement;
  private btn1: HTMLButtonElement;
  private btn2: HTMLButtonElement;
  private btn3: HTMLButtonElement;
  private pc1 = null;
  private pc2 = null;
  private localstream: any;
  private offerOptions = {
    offerToReceiveAudio: 1,
    offerToReceiveVideo: 1
  };

  constructor() {
    console.log('chat-video-room')
  }

  ngOnInit() {
    this.vid1 = <HTMLVideoElement>document.querySelector('#vid1');
    this.vid2 = <HTMLVideoElement>document.querySelector('#vid2');
    this.btn1 = <HTMLButtonElement>document.querySelector('#btn1');
    this.btn2 = <HTMLButtonElement>document.querySelector('#btn2');
    this.btn3 = <HTMLButtonElement>document.querySelector('#btn3');
    this.btn1.disabled = true;
    this.btn2.disabled = true;
    this.btn3.disabled = true;

    navigator.mediaDevices.getUserMedia({
      audio: true,
      //video: true
      video: {width: {exact: 320}, height: {exact: 240}}
    })
    .then(this.gotStream.bind(this))
    .catch(e => {
      alert('getUserMedia() error: ' + e);
    });
  }

  gotStream(stream) {
    console.log('Received local stream');
    this.vid1.srcObject = stream;
    this.localstream = stream;
    this.btn1.disabled = false;
  }

  gotRemoteStream(e) {
    this.vid2.srcObject = e.stream;
    console.log('Received remote stream');
  }

  onCreateSessionDescriptionError(error) {
    console.log('Failed to create session description: ' + error.toString());
    this.stop();
  }

  onSetLocalDescriptionSuccess() {
    console.log('localDescription success.');
  }

  onSetLocalDescriptionError(error) {
    console.log('Failed to set setLocalDescription: ' + error.toString());
    this.stop();
  }

  onCreateAnswerError(error) {
    console.log('Failed to set createAnswer: ' + error.toString());
    this.stop();
  }

  onAddIceCandidateSuccess() {
    console.log('AddIceCandidate success.');
  }

  onAddIceCandidateError(error) {
    console.log('Failed to add Ice Candidate: ' + error.toString());
  }

  gotDescription1(desc) {
    this.pc1.setLocalDescription(desc, this.onSetLocalDescriptionSuccess,
        this.onSetLocalDescriptionError);
    console.log('Offer from pc1 \n' + desc.sdp);
    this.pc2.setRemoteDescription(desc);
    // Since the 'remote' side has no media stream we need
    // to pass in the right constraints in order for it to
    // accept the incoming offer of audio and video.
    this.pc2.createAnswer(this.gotDescription2.bind(this), this.onCreateSessionDescriptionError);
  }

  gotDescription2(desc) {
    // Provisional answer, set a=inactive & set sdp type to pranswer.
    desc.sdp = desc.sdp.replace(/a=recvonly/g, 'a=inactive');
    desc.type = 'pranswer';
    this.pc2.setLocalDescription(desc, this.onSetLocalDescriptionSuccess,
        this.onSetLocalDescriptionError);
    console.log('Pranswer from pc2 \n' + desc.sdp);
    this.pc1.setRemoteDescription(desc);
  }

  gotDescription3(desc) {
    // Final answer, setting a=recvonly & sdp type to answer.
    desc.sdp = desc.sdp.replace(/a=inactive/g, 'a=recvonly');
    desc.type = 'answer';
    this.pc2.setLocalDescription(desc, this.onSetLocalDescriptionSuccess,
        this.onSetLocalDescriptionError);
    console.log('Answer from pc2 \n' + desc.sdp);
    this.pc1.setRemoteDescription(desc);
  }

  iceCallback1(event) {
    if (event.candidate) {
      this.pc2.addIceCandidate(new RTCIceCandidate(event.candidate),
                          this.onAddIceCandidateSuccess, this.onAddIceCandidateError);
      console.log('Local ICE candidate: \n' + event.candidate.candidate);
    }
  }

  iceCallback2(event) {
    if (event.candidate) {
      this.pc1.addIceCandidate(new RTCIceCandidate(event.candidate),
                          this.onAddIceCandidateSuccess, this.onAddIceCandidateError);
      console.log('Remote ICE candidate: \n ' + event.candidate.candidate);
    }
  }

  start = () => {
    this.btn1.disabled = true;
    this.btn2.disabled = false;
    this.btn3.disabled = false;
    console.log('Starting Call');
    var videoTracks = this.localstream.getVideoTracks();
    var audioTracks = this.localstream.getAudioTracks();
    if (videoTracks.length > 0) {
      console.log('Using Video device: ' + videoTracks[0].label);
    }
    if (audioTracks.length > 0) {
      console.log('Using Audio device: ' + audioTracks[0].label);
    }

    var servers = null;
    this.pc1 = new RTCPeerConnection(servers);
    console.log('Created local peer connection object pc1');
    this.pc1.onicecandidate = this.iceCallback1.bind(this);
    this.pc2 = new RTCPeerConnection(servers);
    console.log('Created remote peer connection object pc2');
    this.pc2.onicecandidate = this.iceCallback2.bind(this);
    this.pc2.onaddstream = this.gotRemoteStream.bind(this);

    this.pc1.addStream(this.localstream);
    console.log('Adding Local Stream to peer connection');

    this.pc1.createOffer(this.gotDescription1.bind(this), this.onCreateSessionDescriptionError,
        this.offerOptions);
  }

  stop = () => {
    console.log('Ending Call' + '\n\n');
    this.pc1.close();
    this.pc2.close();
    this.pc1 = null;
    this.pc2 = null;
    this.btn2.disabled = true;
    this.btn1.disabled = false;
    this.btn3.disabled = true;
  }

  accept = () => {
    this.pc2.createAnswer(this.gotDescription3.bind(this), this.onCreateAnswerError);
    this.btn2.disabled = true;
    this.btn1.disabled = false;
  }

}
