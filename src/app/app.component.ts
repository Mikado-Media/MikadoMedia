import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { FooterComponent } from './footer/footer.component';
import { RotatingIconsComponent } from './rotating-icons/rotating-icons.component';
import { NgFor, NgIf } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { ConnectUsComponent } from './connect-us/connect-us.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';

@Component({
  selector: 'app-root',
  imports: [
    ToolbarComponent,
    MediaPlayerComponent,
    FooterComponent,
    RotatingIconsComponent,
    AboutMeComponent,
    ConnectUsComponent,
    ServiceCategoryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mikado-media';
}
