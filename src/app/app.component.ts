import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';

  city: string = 'Bangladesh'; 
  weatherData: any;

  constructor(private weatherService: WeatherService) {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.weatherService.getWeather(this.city).subscribe(
      (data: any) => {
        this.weatherData = data;
      });
  }

}
