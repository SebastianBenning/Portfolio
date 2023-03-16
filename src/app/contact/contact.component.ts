import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onActivate(event:any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}


