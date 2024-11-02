import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {KeyValuePipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    KeyValuePipe
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  serviceQualityOptions: {[key: string]: number} = {
    "Okay (15%)": 15,
    "Good (18%)": 18,
    "Excellent (20%)": 20
  }

  tipDetails = {
    serviceCost: 0,
    serviceQuality: this.serviceQualityOptions["Okay (15%)"],
    roundTip: false
  }

  onSubmit(form: any): void {
    if (form.valid) {
      console.log(this.tipDetails)
    }
  }
}
