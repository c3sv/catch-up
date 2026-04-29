import {Character} from '../domain/model/character.entity';
import {Source} from '../domain/model/source.entity';

export class CharacterAssembler {
  static toEntityFromResource(resource:any):Character{
    const character=new Character();//create the instance
    character.id=resource.id; //identified by id
    character.name=resource.name;
    character.gender=resource.gender;
    character.status=resource.status;
    character.species=resource.species;
    character.image=resource.image;
    character.url=resource.url;
    //Create an instance from Source for the properties
    character.origin=new Source(resource.origin.name, resource.origin.url);
    character.location=new Source(resource.location.name, resource.location.url);

    return character;
  }
}
