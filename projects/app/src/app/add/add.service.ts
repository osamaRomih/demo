import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  url = 'https://jsonplaceholder.typicode.com/users';
  http = inject(HttpClient);

  getData() {
    return this.http.get(this.url);
  }
}
