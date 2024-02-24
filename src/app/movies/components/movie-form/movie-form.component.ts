import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieFilter } from '../../models/movie-filter.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css',
})
export class MovieFormComponent implements OnInit {
  @Output()
  formSubmitEvent: EventEmitter<MovieFilter> = new EventEmitter();
  movieForm!: FormGroup;
  ngOnInit(): void {
    this.movieForm = new FormGroup({
      search: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.movieForm.value);
    this.formSubmitEvent.emit(this.movieForm.value as MovieFilter);
  }
}
