import Controller from '@ember/controller';
import { action } from '@ember/object';
import { dasherize } from '@ember/string';
import { inject as service } from '@ember/service';
import Band from 'rarwe/models/band';

export default class BandsNewController extends Controller {
  @service catalog;
  @service router;

  @action
  saveBand() {
    let band = new Band({
      name: this.name,
      slug: dasherize(this.name)
    })

    this.catalog.add('band', band);
    this.router.transitionTo('bands.band.songs', band.slug)
  }
}
