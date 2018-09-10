import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './component/contact.component';
import { SlidShowComponent } from './component/slid-show.component';
import { TravelComponent } from './component/travel.component';

const ROUTES:Routes=[
 /* {path:'',component:},*/
 {path:'', component:SlidShowComponent},
 {path:'home', component:SlidShowComponent},
 {path:'contact', component:ContactComponent},
 {path:'travel', component:TravelComponent},
//Catch all - anything cannot match go to / means to to path ''
 { path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule],
  declarations: []
})
export class ApprouteModule { }
