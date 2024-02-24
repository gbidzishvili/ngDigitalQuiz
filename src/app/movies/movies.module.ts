import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './containers/movie-card-area/movie-card/movie-card.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieMaterialModule } from './material/movie-material.module';
import { MoviesComponent } from './movies.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MovieCardAreaComponent } from './containers/movie-card-area/movie-card-area.component';
import { PaginationComponent } from './containers/movie-card-area/pagination/pagination.component';
import { ImageValidatorDirective } from './directives/image-validator.directive';

const routes: Routes = [{ path: 'movies', component: MoviesComponent }];

@NgModule({
  declarations: [
    MoviesComponent,
    MovieFormComponent,
    MovieCardComponent,
    MovieCardAreaComponent,
    PaginationComponent,
    ImageValidatorDirective,
  ],
  imports: [
    CommonModule,
    MovieMaterialModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class MoviesModule {}
