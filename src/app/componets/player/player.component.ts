import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  myVideo: any;

  ngOnChanges(): void {
    if(!this.myVideo)
      this.myVideo = document.getElementById("video-player");

    this.myVideo.load();
  }

  @Input() url:string;

  playPause() {
    if (this.myVideo.paused) this.myVideo.play();
    else this.myVideo.pause();
  }

  makeBig() {
    this.myVideo.width = 560;
  }

  makeSmall() {
    this.myVideo.width = 320;
  }

  makeNormal() {
    this.myVideo.width = 420;
  }

  skip(value) {
    this.myVideo.currentTime += value;
  }

  restart() {
    this.myVideo.currentTime = 0;
  }
}
