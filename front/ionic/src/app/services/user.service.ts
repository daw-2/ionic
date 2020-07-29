import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomUser } from '../random-user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(page: number = 1): Observable<RandomUser[]> {
    return this.http.get<RandomUser[]>(`https://randomuser.me/api/?page=${page}&results=20&seed=a`).pipe(
      map(response => response['results'])
    );
  }
}
