import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
  current:number = 0;
  @Input('items') items?: any[];
  constructor() { }

  ngOnInit(): void {
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
