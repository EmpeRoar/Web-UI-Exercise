import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {

  @Input('items') items?: any[];
  constructor() { }

  ngOnInit(): void {
  }

  goLeft() {
    console.log('Left');
  }

  goRight() {
    console.log('Right');
  }

}
