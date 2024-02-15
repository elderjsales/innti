import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['../components.component.scss', './services.component.scss']
})
export class ServicesComponent implements OnInit {
  
  constructor( private element : ElementRef) {}

  ngOnInit() {}

}
