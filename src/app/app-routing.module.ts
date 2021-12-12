import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { DeviceComponent } from './components/device/device.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { EditDeviceComponent } from './components/edit-device/edit-device.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'add-device', component: AddDeviceComponent },
  { path: 'device', component: DeviceComponent },
  { path: 'device-list', component: DeviceListComponent },
  { path: 'edit-device', component: EditDeviceComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
