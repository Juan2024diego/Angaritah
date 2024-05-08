import { Component, OnInit } from '@angular/core';

import { ClientServiceService } from '../../services/client-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-climate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './climate.component.html',
  styleUrl: './climate.component.css'
})
export class ClimateComponent implements OnInit{
  cities: any = [];
  availableCities = ["cali", "medellin", "bogota", "cartagena", "barranquilla"]

  constructor(
    private client: ClientServiceService
  ) { }

 ngOnInit() {
    this.availableCities.forEach( city => {
      this.client.getRequest(`http://127.0.0.1:5000/weather?apikey=hu8uj14fsh871h&&city=${city}&&units=celsius`).subscribe(
        (response: any) => { 
          console.log(response.weather);
          this.cities.push(response.weather);
        },
        (error) => console.log(error.status)
      )
     
    });
    
  }

}
