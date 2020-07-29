import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  authState: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private platform: Platform
  ) {
    this.platform.ready()
      .then(() => this.storage.get('user'))
      .then(user => this.authState.next(user ? true : false))
    ;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isLogged();
  }

  login(user: Object) {
    this.http.post(`${environment.apiUrl}/login`, user).subscribe(
      (response: any) => {
        this.storage.set('user', response);
        this.authState.next(true);
      }
    );
  }

  logout() {
    this.storage.remove('user').then(() => this.authState.next(false));
  }

  isLogged(): Observable<boolean> {
    return this.authState;
  }
}
