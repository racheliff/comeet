import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Pipe, PipeTransform} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { KeysPipe, WeatherComponent } from './weather/weather.component';
import { LoaderComponent } from './loader/loader.component';
import { WeatherService } from './weather/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LoaderComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService, KeysPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

