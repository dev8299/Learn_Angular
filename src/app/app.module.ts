import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HiComponent } from './components/hi/hi.component';
import { HelloComponent } from './components/hello/hello.component';
import { DataServiceService } from './services/data.service.service';

@NgModule({ //@Deocorator   // metadata
  declarations: [
    AppComponent,
    HiComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
