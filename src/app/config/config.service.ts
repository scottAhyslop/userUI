import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HammerGestureConfig } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})



export class ConfigService {

  configUrl = "assets/config.json";
  constructor(private http: HttpClient) { }

  
  
  getConfig(){
    return this.http.get<ConfigService>(this.configUrl)
  }

  
}


