import { Component, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import '../../../../node_modules/zone.js/dist/zone.js';

import { NewsItemComponent } from './news-item/news-item.component';
import { NewsService } from '../../services/news.service';
import { News } from '../../model/news';
import { NewsActions } from '../../store/actions/news.actions';
import { getNews } from '../../store/reducers/selector';
import { news,getNewsList } from '../../store/reducers/news.reducer';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: []
})
export class NewsComponent implements OnInit, OnDestroy {
  sectionNewsList: News[];
  private routeSub: Subscription;
  private storeSub: Subscription;

  constructor(
    private location: Location,
    private store: Store<any>,
    private newsService: NewsService,
    private newsActions: NewsActions,
    private router: Router
  ) {
    store.select('news').subscribe((news: any) => {
      this.sectionNewsList = getNewsList(news);
    })
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
        this.loadSectionNews(event.url.split("/")[2]);
      }
    });
  }

  private loadSectionNews(sectionName: string): void {
    this.newsService.getSectionNews(sectionName)
      .subscribe((news: News[]) => {
        this.store.dispatch(this.newsActions.LoadSectionNews(news));
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) this.routeSub.unsubscribe();
    if (this.storeSub) this.storeSub.unsubscribe();
  }
}
