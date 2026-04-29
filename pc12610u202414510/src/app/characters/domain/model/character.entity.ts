import {Source} from './source.entity';

export class Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Source;
  location: Source;
  image: string;
  episode: string[];
  url: string;
  created: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.status = '';
    this.species = '';
    this.type = '';
    this.gender = '';
    this.origin = new Source();
    this.location = new Source();
    this.image = '';
    this.episode = [];
    this.url = '';
    this.created = '';
  }
}
