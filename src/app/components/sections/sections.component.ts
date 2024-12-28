import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { sections } from '../../store/reducers/sections.reducer';
import { News } from '../../model/news';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sectionList: any;

  constructor(
  ) {
  }

  ngOnInit() {
    this.sectionList = [
      'home', 'opinion', 'world', 'national', 'politics', 'business', 'technology',
      'science', 'health', 'sports', 'arts', 'books', 'movies', 'theater', 'fashion',
      'food', 'travel', 'magazine', 'realestate', 'automobiles'
    ];
  }

}
