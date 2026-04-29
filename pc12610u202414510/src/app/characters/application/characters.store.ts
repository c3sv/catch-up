import {Character} from '../domain/model/character.entity';
import {computed, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharacterAssembler} from '../infrastructure/character.assembler';
@Injectable({
  providedIn: 'root'
})
export class CharactersStore {
  private readonly baseUrl = 'https://rickandmortyapi.com/api/character';
  private readonly characterSignal = signal<Character[]>([]);

  public readonly characters = computed(() => this.characterSignal());

  constructor(private http: HttpClient) {
  }

  public fetchCharacters(): void {
    this.http.get<any>(this.baseUrl).subscribe({
      next: (response) => {
        //Use Assembler to transformate Data
        const domainCharacters = response.results.map((resource: any) =>
          CharacterAssembler.toEntityFromResource(resource));
        this.characterSignal.set(domainCharacters);
      },
      error: (error) => console.error('Error fetching characters.', error)
    });
  }
}
