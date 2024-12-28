import {createSelector } from 'reselect';
import { getNewsList, getFilter } from './news.reducer';

export const getNews = createSelector(
    getNewsList,
    getFilter,
    (newsList, filter) => {
      console.trace(filter, newsList)
      if(!filter) return newsList;
      const filteredNews = newsList.filter((news:any) => news.subsection === filter);
      console.trace(filteredNews)
      return filteredNews;
    }
  );
