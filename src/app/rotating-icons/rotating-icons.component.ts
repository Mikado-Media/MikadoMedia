import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';

@Component({
  selector: 'rotating-icons',
  imports: [NgFor, NgClass, NgxFastMarqueeModule],
  templateUrl: './rotating-icons.component.html',
  styleUrl: './rotating-icons.component.css',
})
export class RotatingIconsComponent {
  icons = [
    'hungama.png',
    'artist.png',
    'discovery.png',
    'publicise.png',
    'group.png',
    'zee.png',
  ];
}
