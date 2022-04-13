import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  private place = [
    {
      id: '1',
      title: 'Eigth',
      comments: ['Aweisome place']
    }, {
      id: '2',
      title: 'Eigth',
      comments: ['Aweisome place']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
