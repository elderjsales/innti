import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../components.component.scss', './home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor( private element : ElementRef) {}

  ngOnInit() {}

}
