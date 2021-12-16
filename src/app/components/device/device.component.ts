import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  devices: any[] = [];

  modalTitle="";
  DeviceId=0;
  DeviceName="";
  DeviceType="";
  DeviceOS="";
  DeviceStatus="";
  TimeInUse="";
  DeviceIconPath="";
  DeviceOSIconPath="";

  
  

  constructor(private http:HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshDevice();
  }

  refreshDevice(){
    this.http.get<any>(environment.API_URL+'device-list').subscribe(data=>{
      this.devices=data;
    });
  }

  addClick(){
    this.modalTitle = "Add Device";
    this.DeviceId = 0;
    this.DeviceName = "";
    this.DeviceType="";
    this.DeviceOS="";
  
  }
  editClick(device:any){
    this.modalTitle = "Edit Device";
    this.DeviceId=device.DeviceId;
    this.DeviceName=device.DeviceName;
    this.DeviceType=device.DeviceType;
    this.DeviceOS=device.DeviceOS;
  }//end editClick
  
  createClick(){
    var fields = {
      DeviceName: this.DeviceName,
      DeviceType: this.DeviceType,
      DeviceOS: this.DeviceOS,
    };
    this.http.post(environment.API_URL+'Devices', fields)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshDevice();
    });
  }//end createClick

  updateClick(){
    var updatedDevice={
      DeviceName: this.DeviceName,
      DeviceType: this.DeviceType,
      DeviceOS: this.DeviceOS,
    };

    this.http.put(environment.API_URL+'device', updatedDevice)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshDevice();
    });
  }//end updateClick

  deleteClick(DeviceId:any){
   if (confirm('Are you sure?')) {
    this.http.delete(environment.API_URL+'device/'+ DeviceId)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshDevice();
    }); 
   }
    
  }//end deleteClick

  

}
