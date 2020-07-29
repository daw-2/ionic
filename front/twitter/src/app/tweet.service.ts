import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) { }

  getTweets(page: number): Observable<Object[]> {
    return from(this.storage.get('user')).pipe(
      mergeMap(user => {
        return this.http.get<Object[]>(`${environment.apiUrl}/api/tweets?page=${page}`, {
          headers: {
            'Authorization': `Bearer ${user.api_token}`
          }
        });
      })
    );

    /* this.storage.get('user').then(user => {
      return this.http.get<Object[]>(`${environment.apiUrl}/api/tweets`, {
        headers: {
          'Authorization': `Bearer ${user.api_token}`
        }
      }).toPromise();
    }); */
  }

  createTweet(tweet: Object): Observable<Object> {
    return from(this.storage.get('user')).pipe(
      mergeMap(user => {
        return this.http.post(`${environment.apiUrl}/api/tweets`, tweet, {
          headers: {
            'Authorization': `Bearer ${user.api_token}`
          }
        });
      })
    );
  }
}
