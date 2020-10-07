import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  videoUrl: string;

  @Input()
  set videoId(youTubeVideoId) {
    this.videoUrl = new URL(youTubeVideoId, 'https://www.youtube-nocookie.com/embed/').toString();
  }

  ngOnInit(): void {
  }
}
