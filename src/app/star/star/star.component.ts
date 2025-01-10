import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent implements OnChanges{

  @Input()
  rating: number = 0;

  starwidth!: number;

  ngOnChanges(changes: SimpleChanges): void {
      this.starwidth = this.rating * 94 / 5;
  }
}
