import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  rows: any = {};
  dataUpdated = new EventEmitter<void>();
  dataDeleted = new EventEmitter<void>();
  dataAdded = new EventEmitter<void>();
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('http://localhost:3000/viewall');
  }
  search(query: string) {
    if (isNaN(+query)) {
      return this.http.get('http://localhost:3000/search?id=' + query);
    }
    return this.http.get('http://localhost:3000/search?id=' + query);
  }
  update(body: {}) {
    return this.http.post('http://localhost:3000/update', body);
  }
}
