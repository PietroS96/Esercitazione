import { Component, OnInit } from '@angular/core';
import { Genderize } from 'src/app/models/Genderize';
import { GetGenderService } from '../get-gender.service';
@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css'],
})
export class TabellaComponent implements OnInit {
  constructor(private getGender: GetGenderService) {}

  dataGender: Genderize[] = this.getGender.data;

  ngOnInit(): void {}

  deleteRow(i: number) {
    this.dataGender.splice(i, 1);
  }

  deleteAll() {}
}
