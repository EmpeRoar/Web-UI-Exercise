import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit, AfterViewInit {
  current:number = 0;
  @Input('items') items?: any[];
  constructor() { }
  
  ngAfterViewInit(): void {
   
  }

  ngOnInit(): void {
  }

  getStage() {
    const item = this.items ? this.items[this.current] : [];
    return item;
  }
  getLeftStage() {
    if(this.items) {
      let leftItem = this.items?.length - 1;
      if(this.current > 0) {
        leftItem = this.current - 1;
      } 
      return this.items[leftItem];
    } else {
     return  {}
    }
  }

  getRightStage() {
    if(this.items) {
      let rightItem = this.current + 1;
      console.log(this.current);
      if(this.current >= this.items.length - 1) {
        rightItem = 0;
      }   
      return this.items[rightItem];
      
    } else {
      return {};
    }
  }

  goLeft() {
    if(this.items) {
      if(this.current > 0) {
        this.current--;
      } else {
        this.current=this.items?.length-1;
      }
    }
  }

  goRight() {
    if(this.items) {
      if(this.current < this.items?.length-1) {
        this.current++;
      } else {
        this.current=0;
      }
    }
  }

}
