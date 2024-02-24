import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card-area',
  templateUrl: './movie-card-area.component.html',
  styleUrl: './movie-card-area.component.css',
})
export class MovieCardAreaComponent {
  @Input() moviesData!: any;
}
