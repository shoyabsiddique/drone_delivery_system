import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  rows: any = {};
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('http://localhost:3000/viewall');
  }
  search(query: string) {
    if (isNaN(+query)) {
      return this.http.get('http://localhost:3000/search?id='+query);
    }
    return this.http.get('http://localhost:3000/search?id='+query);
  }
}
