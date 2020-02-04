import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenulistComponent } from './menulist.component';
import{ MenulistchildComponent } from './menulistchild.component';



@NgModule({
  declarations: [MenulistComponent,MenulistchildComponent],
  imports: [
    CommonModule
  ],
  // set export component for call in to app module
  exports:[ MenulistComponent,MenulistchildComponent ]
})
export class MenulistModule { 
 
}
