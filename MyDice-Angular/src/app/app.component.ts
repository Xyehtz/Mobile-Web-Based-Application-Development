import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {RollData} from "./roll-data";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  diceValues: number[] = []
  totalValues: number = 0

  private getRandomDiceValue(): number {
    return 1 + Math.floor(6 * Math.random())
  }

  getRollData(numberOfDice: number) {
    const values: number[] = []
    let total: number = 0

    for (let i: number = 0; i < numberOfDice; i++) {
      let diceValue: number = this.getRandomDiceValue()
      values.push(diceValue)
      total += diceValue
    }

    return {
      numberOfDice: numberOfDice,
      values: values,
      total: total
    }
  }

  onRollDice(numberOfDice: number) {
    let rollData: RollData = this.getRollData(numberOfDice)

    this.diceValues = rollData.values
    this.totalValues = rollData.total
  }

  onReset() {
    this.diceValues = []
    this.totalValues = 0
  }

  protected readonly parseInt = parseInt;
}
