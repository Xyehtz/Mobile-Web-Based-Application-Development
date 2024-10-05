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
  cardNum: number = 5;

  constructor() {
    for (let i: number = 0; i <= this.cardNum; i++) {
      this.imageFiles.push(`../cards/card_${i + 2}.png`);
    }
  }

  sortImages(): void {
    this.imageFiles.splice(0, this.cardNum + 1)

    for (let i: number = 0; i <= this.cardNum; i++) {
      this.imageFiles.push(`../cards/card_${i + 2}.png`)
    }
  }

  shuffleImages(): void {
    this.imageFiles.splice(0, this.cardNum + 1)

    for (let i: number = 0; i <= this.cardNum; i++) {
      const randNum: number = Math.floor(Math.random() * (7 - 2) + 2)
      this.imageFiles[i] = `../cards/card_${randNum}.png`
    }
  }

  reverseImages(): void {
    this.imageFiles.reverse()
  }
}
