import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['../components.component.scss', './contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  
  constructor( private element : ElementRef) {}

  ngOnInit() {}

}
