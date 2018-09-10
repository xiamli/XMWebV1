import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './component/navigation.component';
import { MaterialModule } from './/material.module';
import { FooterComponent } from './component/footer.component';
import { SlidShowComponent } from './component/slid-show.component';
import { ContactComponent } from './component/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApprouteModule } from './approuter.module';
import { TravelComponent } from './component/travel.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SlidShowComponent,
    ContactComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ApprouteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAp75r0mgKgbh4N6FAIt-6TOszaOIsfS90'
    }),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
