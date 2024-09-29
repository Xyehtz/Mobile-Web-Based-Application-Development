import {Component} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  imageFiles: string[] = [];

  constructor() {
    const maxCardNum: number = 7;

    for (let i: number = 2; i <= maxCardNum; i++) {
      this.imageFiles.push(`../cards/card_${i}.png`);
    }
  }
}
