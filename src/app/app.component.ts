import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  loginSub: Subscription;
  isUserLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.loginSub = this.authService.isUserLogin.subscribe((isUserLoggedIn) => {
      console.log('isUserLoggedIn :>> ', isUserLoggedIn);
      this.isUserLoggedIn = isUserLoggedIn;
    });
  }

  ngOnDestroy(): void {
    this.loginSub.unsubscribe();
  }
}
