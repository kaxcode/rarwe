import { tracked } from '@glimmer/tracking';

export default class Band {
  @tracked name;

  constructor({name, slug, songs}) {
    this.name = name;
    this.slug = slug;
    this.songs = songs;
  }
}