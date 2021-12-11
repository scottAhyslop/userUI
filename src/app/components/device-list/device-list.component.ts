import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  constructor(private http:HttpClient) { }

  devices: any = [];

  ngOnInit(): void {
    this.refreshDevices();
  }
/* GetAllDevices*/

  refreshDevices(){
    this.http.get<any>(environment.API_URL+"Devices/")
    .subscribe(data=>{
      this.devices=data;
    });
  }
}
