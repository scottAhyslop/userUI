import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  constructor(private http:HttpClient, private route: ActivatedRoute) { }

  devices: any = [];

  modalTitle="";
  DeviceId=0;
  DeviceName="";
  DeviceOS="";
  DeviceType="";
  Temperature=0.0;
  DeviceStatus="";
  TimeInUse="";
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.DeviceId = params[this.DeviceId];
    });
    this.refreshDevices();
  }
/* GetAllDevices*/

  refreshDevices(){
    this.http.get(environment.API_URL+"Devices", {responseType: 'text'})
    .subscribe(data=>{
      this.devices=data;
    });
  }
  addClick(){
    this.modalTitle = "Add Device";
    this.DeviceId=0;
    this.DeviceName="";
    this.DeviceName="";
    this.DeviceOS="";


  }//end addClick
  
  editClick(device:any){
    this.modalTitle = "Edit Device";
    this.DeviceId=device.DeviceId;
    this.DeviceName=device.DeviceName;
    this.DeviceType=device.DeviceType;
    this.DeviceOS=device.DeviceOS;

  }//end editClick
  
  createClick(){
    var field={
      DeviceName: this.DeviceName
    };
    this.http.post(environment.API_URL+'Devices', field)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshDevices();
    });
  }//end createClick

  updateClick(){
    var val={
      DeviceId: this.DeviceId
    };
    this.http.put(environment.API_URL+'Devices', val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshDevices();
    });
  }//end updateClick

  deleteClick(DeviceId:any){
   if (confirm('Are you sure?')) {
    this.http.delete(environment.API_URL+'Devices/'+ DeviceId)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshDevices();
    }); 
   }
    
  }//end deleteClick
}
