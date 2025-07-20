import { NgIf } from '@angular/common';
import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'media-player',
  imports: [NgIf],
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements AfterViewInit {
  @Input() mediaSrc: string = '';
  @Input() youtubeSrc: string = '';
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    if (!this.isYouTubeLink()) {
      const video = this.videoPlayer.nativeElement;
      video.muted = true;
      video.play().catch((err) => console.warn('Autoplay failed:', err));
    }
  }

  toggleMute(): void {
    if (!this.isYouTubeLink()) {
      const video = this.videoPlayer.nativeElement;
      video.muted = !video.muted;
    }
  }

  onError(event: any) {
    console.error('Media error:', event);
  }

  isYouTubeLink(): boolean {
    return (
      this.youtubeSrc.includes('youtube.com') ||
      this.youtubeSrc.includes('youtu.be')
    );
  }

  getSafeYouTubeUrl(): SafeResourceUrl {
    let videoId = '';
    if (this.youtubeSrc.includes('youtube.com')) {
      const url = new URL(this.youtubeSrc);
      videoId = url.searchParams.get('v') || '';
    } else if (this.youtubeSrc.includes('youtu.be')) {
      videoId = this.youtubeSrc.split('/').pop() || '';
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&loop=1&playlist=${videoId}`
    );
  }
}
