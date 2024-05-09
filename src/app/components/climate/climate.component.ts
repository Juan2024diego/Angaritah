import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-climate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './climate.component.html',
  styleUrl: './climate.component.css'
})
export class ClimateComponent implements OnInit {
  cities: any = [];
  availableCities = ["cali", "medellin", "bogota", "cartagena", "barranquilla"]

  constructor(
    private client: ClientServiceService,
    private route: Router
  ) { }


  ngOnInit() {
    this.availableCities.forEach(city => {
      let token = localStorage.getItem("token")
      if (token) {
        this.client.getRequest(`http://127.0.0.1:5000/weather?apikey=${token}&&city=${city}&&units=celsius`).subscribe(
          (response: any) => {
            this.cities.push(response.weather);
          },
          (error) => console.log(error.status)
        )
      } else {
        this.route.navigate(['/']);
      }
    });
  }
}
