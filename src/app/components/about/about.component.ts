import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../components.component.scss', './about.component.scss']
})
export class AboutComponent implements OnInit {
  
  constructor( private element : ElementRef) {}

  ngOnInit() {}

}
