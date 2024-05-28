import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  text = '';
  imageAlt = 'Not Picatar';
  imageUrl =
    'https://png.pngtree.com/thumb_back/fw800/background/20231007/pngtree-a-3d-rendering-of-blue-matrix-background-with-digital-illustrations-representing-image_13565167.png';

  data = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  datObj = 105;

  // firstName = new FormControl();

  // gitData() {
  //   this.firstName.setValue('Angular As Programming');
  // }

  // myModel = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   sunInfo: new FormGroup({
  //     adress: new FormControl(),
  //     ZipCode: new FormControl(),
  //   }),
  // });
  constructor(private fb: FormBuilder) {}

  myModel = this.fb.group({
    firstName: [''],
    lastName: [''],
    sunInfo: this.fb.group({
      adress: [''],
      ZipCode: [''],
    }),
  });

  gitData() {
    this.myModel.patchValue({
      firstName: 'Angular',
      lastName: 'Html',
      sunInfo: {
        adress: 'Egypt',
        ZipCode: '101',
      },
    });
  }
  git() {
    console.log(this.myModel.value);
  }
}
