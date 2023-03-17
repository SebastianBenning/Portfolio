import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  goToAboutMe(){
    this.scroller.scrollToAnchor("aboutMe");
  }
  goToSkillSet(){
    this.scroller.scrollToAnchor("skillSet");
  }

  goToMyWork(){
    this.scroller.scrollToAnchor("myWork");
  }
}
