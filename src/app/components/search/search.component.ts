import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http:HttpClient, private route: ActivatedRoute) { }

  searchItem: any;
  searchEntry = "";
  device:any;
  DeviceIdFilter="";
  DeviceNameFilter="";
  DeviceOSFilter="";
  DeviceTypeFilter="";
  devicesWithoutFilter:any=[];

  allDevices:any=[];

  ngOnInit(): void {
    this.refreshDevice();
  }
  //on Init refreshes current device and gets a list of all other devices to perform searches   
  refreshDevice(){
    this.http.get<any>(environment.API_URL+'device-list').subscribe(data=>{
      this.device=data;
      this.allDevices=data;  
    });
  }//end refreshDevice()

  FilterDevice(){

    var DeviceIdFilter=this.DeviceIdFilter;
    var DeviceNameFilter=this.DeviceNameFilter;
    var DeviceOSFilter=this.DeviceOSFilter;
    var DeviceTypeFilter=this.DeviceTypeFilter;

    this.allDevices = this.devicesWithoutFilter.filter(
      function(el:any){
        return el.DeviceId.toString().toLowerCase.includes(
          DeviceIdFilter.toString().trim().toLowerCase()
        )&&
        el.DeviceName.toString().toLowerCase.includes(
          DeviceNameFilter.toString().trim().toLowerCase()
        )&& 
        el.DeviceType.toString().toLowerCase.includes(
          DeviceTypeFilter.toString().trim().toLowerCase()
        )&&
        el.DeviceOS.toString().toLowerCase.includes(
          DeviceOSFilter.toString().trim().toLowerCase()
        );
      }
    );

  }//end FilterDevice

  sortResult(prop:any, asc:any){
    this.allDevices=this.devicesWithoutFilter.sort(
      function(a:any, b:any){
        if (asc) {
          return(a[prop]>b[prop])?1:((a[prop]<b[prop])?1:0);
        } else {
          return(b[prop]>a[prop])?1:((b[prop]<a[prop])?1:0);
        }
      });
  }//end sortResult
  
}
