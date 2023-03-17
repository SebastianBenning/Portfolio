
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
    
  }
  goToContact(){
    this.scroller.scrollToAnchor("contactStart");
  
  }
}
