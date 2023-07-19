import { Subject } from 'rxjs';

export class AuthService {
  loggedIn = false;
  isUserLogin: Subject<boolean> = new Subject();

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });

    return promise;
  }

  // public get isUserLogin() {
  //   return this.loggedIn;
  // }

  login() {
    this.loggedIn = true;
    alert('login works!');
    this.isUserLogin.next(true);
  }

  logout() {
    this.loggedIn = false;
    alert('logout works!');
    this.isUserLogin.next(false);
  }
}
