declare var easyrtc: any;

declare module 'easyrtc' {
  export = easyrtc;
}

declare type Easyrtc_PerPeerRoomData = any;
declare type Easyrtc_PerRoomData = {
    [peerEasyrtcId:string]:Easyrtc_PerPeerRoomData;
}
