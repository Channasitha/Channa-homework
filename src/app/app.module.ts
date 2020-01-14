import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenulistModule } from './menulist/menulist.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Compenents/menu/menu.component';
import { SubmComponent } from './Compenents/submenu/subm.component';
import { BoolvalueDirective } from './boolvalue.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SubmComponent,
    BoolvalueDirective
  ],
  imports: [
    BrowserModule,
    MenulistModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
