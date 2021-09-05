import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarCrashService {
  constructor(private http: HttpClient) {}
  api: any;

  data: any;
  totalCount: any;
  public getCrashDetails(page: number): Observable<any> {
    this.api =
      'https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=2014-01-21T00:00:00.000&vehicle_type_code2=PASSENGER%20VEHICLE&$offset=' +
      page +
      '&$limit=10';
    this.data = this.http.get(this.api);
    return this.data;
  }
  public getAllCrashes(): Observable<any> {
    this.api = 'https://data.cityofnewyork.us/resource/h9gi-nx95.json';
    this.data = this.http.get(this.api);
    return this.data;
  }
  public getDetails(collisionId: number): Observable<any> {
    this.api =
      'https://data.cityofnewyork.us/resource/h9gi-nx95.json?collision_id=' +
      collisionId;
    this.data = this.http.get(this.api);
    return this.data;
  }
}
