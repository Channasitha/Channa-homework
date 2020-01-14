import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenulistComponent } from './menulist.component';



@NgModule({
  declarations: [MenulistComponent],
  imports: [
    CommonModule
  ],
  // set export component for call in to app module
  exports:[ MenulistComponent ]
})
export class MenulistModule { }
