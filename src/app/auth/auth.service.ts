import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {parseHttpResponse} from 'selenium-webdriver/http';

@Injectable()
export class AuthService {
  token: string;
  host = 'http://192.168.43.124:8001';

  constructor(private  router: Router,
              private http: HttpClient) {}

  signupUser(e: string, uName: string, fName: string, lName: string, pass: string, pNum: string) {
    return this.http.post(this.host + '/user/api/v1/customer_signup/', {
      email: e,
      username: uName,
      first_name: fName,
      last_name: lName,
      password: pass,
      phone_number: pNum
    }).subscribe(
      (response: any) => {
        this.token = response.token;
        console.log('signup successful. token is: ' + this.token);
        this.storeToken();
        this.router.navigate(['/']);
      }
    );
  }

  signinUser(uname: string, pass: string) {
    return this.http.post(this.host + '/user/api/v1/customer_login/', {
      username: uname,
      password: pass
    }).subscribe(
      (response: any) => {
        this.token = response.token;
        this.storeToken();
        this.router.navigate(['/']);
      }
    );
  }

  signoutUser() {
    const hs = new HttpHeaders({Authorization: this.getToken()});
    this.token = null;
    localStorage.clear();
    this.router.navigate(['/']);
    return this.http.post(this.host + '/user/api/v1/customer_logout/', {}, {headers: hs})
      .subscribe(
        (response) => {
          console.log('user has been logged out successfully' + response);
        }
      );
  }

  getToken() {
    return localStorage.getItem('token');
  }


  isAuthenticated() {
    return this.getToken() != null;
    // return false; // only for development purposes!
  }

  storeToken() {
    localStorage.setItem('token', this.token);
  }
}
