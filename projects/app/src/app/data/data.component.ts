import { Component, inject } from '@angular/core';
import { AddService } from '../add/add.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss',
  providers: [AddService],
})
export class DataComponent {
  data: any;
  Di = inject(AddService);
  masseg: any = null;

  ngOnInit() {
    this.Di.getData().subscribe((daRes) => {
      this.data = daRes;
    }),
      (error: any) => {
        if (error.ok === false) {
          // this.masseg = ' Not Data From Server ';
          console.log(' Not Data From Server ');
        }
      };
  }
}
