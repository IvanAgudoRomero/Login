import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Login-Front';
  public isAuthenticated: boolean = false;
  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private _authService: AuthService) {}

  public ngOnInit(): void {
    this._authService.isAuthenticated$.pipe(
      takeUntil(this._destroy$)
      ).subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
  }

  public logout(): void {
    this._authService.logout('/').pipe(take(1));
  }
}
