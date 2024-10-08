import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonListResponse } from './pokemon.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class PokemonService {
  private readonly apiURL = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  list(
    limit: number = 20,
    offset: number = 0
  ): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(
      `${this.apiURL}/pokemon?limit=${limit}&offset=${offset}`
    );
  }

  get(name: string): Observable<any> {
    return this.http.get(`${this.apiURL}/pokemon/${name}`);
  }
}
