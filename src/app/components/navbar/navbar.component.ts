import { News } from './../../model/news';
import { NewsState } from './../../store/reducers/news.reducer';
import { NewsActions } from '../../store/actions/news.actions';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subsections: string[];
  response: Object[];
  constructor(
    private store: Store<any>,
    private newsActions: NewsActions
  ) {
    this.subsections = ['home', 'world', 'politics', 'business', 'technology', 'sports', 'science', 'health', 'arts', 'books', 'style', 'food', 'travel', 'magazine', 'realestate'];
   }

  ngOnInit() {
  }

  dispatchAction($event: string) {
    if(!$event){
      return
    }
    this.store.dispatch(this.newsActions.FilterSubsection($event))
  }

}
