import { Component, OnInit } from '@angular/core';
import { slide_show } from '../model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  link_List:string[]=[];
  total_slide=21;
  basel="/assets/home_slide/";
  end=".jpg";
  


  constructor() { }

  ngOnInit() {   
  }

}
