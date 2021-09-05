import { Component, VERSION, OnInit } from '@angular/core';
import { CarCrashService } from './app.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private crashService: CarCrashService) {}
  crashes: any;
  totalPages: any;
  currentPage: number;
  ngOnInit() {
    this.crashService.getCrashDetails(0).subscribe((data: any[]) => {
      this.crashes = data;
    });
    this.crashService.getAllCrashes().subscribe((data: any[]) => {
      this.totalPages = data;
    });
  }
}
