import { Component } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss',
})
export class CarrosselComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1200/500`);
}
