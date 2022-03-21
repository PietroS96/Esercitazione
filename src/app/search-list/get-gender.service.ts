import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genderize } from '../models/Genderize';
@Injectable({
  providedIn: 'root',
})
export class GetGenderService {
  constructor(private http: HttpClient) {}

  data: Genderize[] = [];

  getStat(name: string) {
    return this.http
      .get<Genderize>(`https://api.genderize.io/?name=${name}`)
      .subscribe((x) => this.data.push(x));
  }
}
