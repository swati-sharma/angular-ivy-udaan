import { Component, Input } from '@angular/core';
import { CarCrashService } from './app.service';
@Component({
  selector: 'hello',
  templateUrl: 'hello.component.html',
  styleUrls: ['hello.component.css']
})
export class HelloComponent {
  constructor(private crashService: CarCrashService) {}
  details: any;
  getDetails(collision_id: any) {
    this.crashService.getDetails(collision_id).subscribe((data: any[]) => {
      this.details = data;
    });
  }
}
