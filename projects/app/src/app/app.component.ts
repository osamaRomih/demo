import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpecialPipe } from './special.pipe';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpecialPipe, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
  text = 'Hello Osama Saber Yuossef Romih';
  show: any;
  add(ref: any) {
    this.show = ref;
  }
}
