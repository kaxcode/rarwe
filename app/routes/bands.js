import Route from '@ember/routing/route';
import Band from 'rarwe/models/band';
import Song from 'rarwe/models/song';

export default class BandsRoute extends Route {
  model() {
    let blackDog = new Song({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });

    let yellowLedbetter = new Song({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });

    let pretender = new Song({
      title: 'The Pretender',
      band: 'Foo Fighthers',
      rating: 2
    });

    let daughter = new Song({
      title: 'Daughter',
      band: 'Pearl Jam',
      rating: 5
    });

    let ledZeppelin = new Band({
      name: 'Led Zeppelin',
      slug: 'led-zeppelin',
      songs: [blackDog]
    });

    let pearlJam = new Band({
      name: 'Pearl Jam',
      slug: 'pearl-jam',
      songs: [yellowLedbetter, daughter]
    });

    let fooFighters = new Band({
      name: 'Foo Fighters',
      slug: 'foo-fighters',
      songs: [pretender]
    });

    return [ledZeppelin, pearlJam, fooFighters];
  }
}