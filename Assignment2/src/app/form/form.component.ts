import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {KeyValuePipe, NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    KeyValuePipe,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  text: string = 'Tip Calculator 2'

  constructor(private router: Router) { }

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
      this.router.navigate(['tipResults'], {queryParams: this.tipDetails})
    }
  }
}
