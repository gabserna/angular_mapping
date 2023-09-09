import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DoggyComponent } from './doggy.component';

@NgModule({
  declarations: [DoggyComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
})
export class DoggyModule {}
