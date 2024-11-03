import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {CurrencyPipe, NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    HeaderComponent,
    CurrencyPipe,
    NgIf,
    FooterComponent
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit {
  serviceDetails = {
    serviceCost: 0,
    serviceQualityType: '',
    serviceQuality: 0,
    roundTip: false,
    totalTip: 0,
    totalServiceCost: 0,
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(param => {
      this.serviceDetails.serviceCost = parseFloat(param['serviceCost'])
      this.serviceDetails.serviceQuality = parseFloat(param['serviceQuality'])
      this.serviceDetails.roundTip = param['roundTip'].toLowerCase() == 'true'

      if (this.serviceDetails.serviceQuality == 15) {
        this.serviceDetails.serviceQualityType = 'Okay (15%)'
      } else if (this.serviceDetails.serviceQuality == 18) {
        this.serviceDetails.serviceQualityType = 'Good (18%)'
      } else if (this.serviceDetails.serviceQuality == 20) {
        this.serviceDetails.serviceQualityType = 'Excellent (20%)'
      }
    })
  }

  ngOnInit() {
    const cost = this.serviceDetails.serviceCost || 0
    const quality = this.serviceDetails.serviceQuality || 0

    if (this.serviceDetails.roundTip) {
      this.serviceDetails.totalTip = Math.round(cost * (quality / 100))
      this.serviceDetails.totalServiceCost = this.serviceDetails.totalTip + this.serviceDetails.serviceCost
    } else {
      this.serviceDetails.totalTip = parseFloat((cost * (quality / 100)).toFixed(2))
      this.serviceDetails.totalServiceCost = this.serviceDetails.totalTip + this.serviceDetails.serviceCost
    }
  }
}
