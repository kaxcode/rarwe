import { tracked } from '@glimmer/tracking';

export default class Song {
  title = '';
  @tracked rating = 0;
  band = null;

  constructor({title, rating, band}, relationships={}) {
    this.title = title;
    this.rating = rating;
    this.band = band;
    this.relationships = relationships;
  }
}