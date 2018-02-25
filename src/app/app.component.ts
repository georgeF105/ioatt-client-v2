import { Component } from '@angular/core';
import { Device } from '@ioatt/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public device: Device;

  public doThing (): void {
    this.device.name = '123';
  }
}
