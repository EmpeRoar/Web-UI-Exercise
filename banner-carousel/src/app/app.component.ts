import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'banner-carousel';

  items: any[] = [
    { title: 'banner 01' },
    { title: 'banner 02' },
    { title: 'banner 03' },
    { title: 'banner 04' },
    { title: 'banner 05' }
  ];
}
