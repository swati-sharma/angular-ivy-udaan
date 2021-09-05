import { Component, VERSION, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private httpClient: HttpClient;
  name = 'Angular ' + VERSION.major;
  ngOnInit() {
    console.log(this.httpClient.get('http:8080/demo/users/namesWithAge'));
  }
}
