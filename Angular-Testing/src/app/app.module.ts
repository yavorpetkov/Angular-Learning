import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SizerComponent } from './components/sizer/sizer.component';
import { ViewChildComponent } from './components/view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
