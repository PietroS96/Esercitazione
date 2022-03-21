import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetGenderService } from '../get-gender.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private genderService: GetGenderService) {}
  ngOnInit(): void {}

  submitName(form: NgForm) {
    this.genderService.getStat(form.value.name);
  }
}
