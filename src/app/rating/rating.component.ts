import { NgStyle } from '@angular/common';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  previousButtonObject = {
    label: 1,
    selected: false
  };
  buttonList = [{
    label: 1,
    selected: false
  }, {
    label: 2,
    selected: false
  }, {
    label: 3,
    selected: false
  }, {
    label: 4,
    selected: false
  }, {
    label: 5,
    selected: false
  }, {
    label: 6,
    selected: false
  }, {
    label: 7,
    selected: false
  }, {
    label: 8,
    selected: false
  }, {
    label: 9,
    selected: false
  }, {
    label: 10,
    selected: false
  }];
  buttonList2 = [{
    label: 1,
    selected: false
  }, {
    label: 2,
    selected: false
  }, {
    label: 3,
    selected: false
  }, {
    label: 4,
    selected: false
  }, {
    label: 5,
    selected: false
  }, {
    label: 6,
    selected: false
  }, {
    label: 7,
    selected: false
  }, {
    label: 8,
    selected: false
  }, {
    label: 9,
    selected: false
  }, {
    label: 10,
    selected: false
  }];

  ratingView(currentButtonObaject: any) {
    this.previousButtonObject.selected = false;
    console.log(currentButtonObaject);
    currentButtonObaject.selected = true;
    this.previousButtonObject = currentButtonObaject;
  }

  ratingView2(currentButtonObaject: any) {
    this.buttonList2.forEach(btn => currentButtonObaject.label >= btn.label ? btn.selected = true : btn.selected = false);
    // this.buttonList2.forEach(btn =>{
    //   if(currentButtonObaject.label >= btn.label){
    //     btn.selected=true;
    //   }else{
    //     btn.selected=false;
    //   }
    // })
  }
}
  