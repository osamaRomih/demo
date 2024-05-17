import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  @Input('n') name: any;
  @Output() myEvent: any = new EventEmitter();

  bot() {
    this.myEvent.emit(5);
  }
}
