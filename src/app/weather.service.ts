import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherData(city: string): Observable<any>{
    //httpclient returns an observable
    return this.httpClient.get(`/api/forecasts/v1/daily/5day/${city}?apikey=ofYwZOo4lf47AeNhvi4mP2yMH7XAStbF`);
    return this.httpClient.get(`/api/currentconditions/v1/${city}?apikey=ofYwZOo4lf47AeNhvi4mP2yMH7XAStbF`);
    return this.httpClient.get(`/api/locations/v1/cities/autocomplete`);
  
  }



}