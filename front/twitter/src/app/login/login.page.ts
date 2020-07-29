import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.user);

    /* this.http.get(`${environment.apiUrl}/api/user`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).subscribe(user => console.log(user)); */
  }

}
