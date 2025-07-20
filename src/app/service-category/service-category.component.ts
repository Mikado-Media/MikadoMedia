import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'service-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.css'],
  animations: [
    trigger('slideInHorizontal', [
      transition(':enter', [
        query(
          '.category',
          [
            style({ transform: 'translateX(-100%)', opacity: 0 }),
            stagger(200, [
              animate(
                '800ms ease-out',
                style({ transform: 'translateX(0)', opacity: 1 })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ServiceCategoryComponent {
  categories = [
    'Corporate AVs',
    '3D Animation Videos & AD',
    'Fiction Videos',
    'Award Shows',
    'TV Promos',
    'Educational Videos',
    'Infographics',
    'Social Media',
  ];

  gradients = [
    'hsl(45, 98%, 57%)', // original yellow
    'hsl(45, 98%, 53%)',
    'hsl(45, 98%, 49%)',
    'hsl(45, 98%, 45%)',
    'hsl(45, 98%, 37%)',
    'hsl(45, 98%, 33%)',
    'hsl(45, 98%, 29%)',
    'hsl(45, 98%, 25%)',
  ];
}
