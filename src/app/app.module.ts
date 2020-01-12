import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './cmpnt/menu.component';
import { SubmComponent } from './cmpnt/subm.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SubmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,MenuComponent]
})
export class AppModule { }
