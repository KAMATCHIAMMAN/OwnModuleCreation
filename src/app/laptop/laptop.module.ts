import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatingSystemComponent } from '../operating-system/operating-system.component';



@NgModule({
  declarations: [
    OperatingSystemComponent
  ],
  imports: [
    CommonModule
  ]
  exports:[
    OperatingSystemComponent
  ]
})
export class LaptopModule { }
