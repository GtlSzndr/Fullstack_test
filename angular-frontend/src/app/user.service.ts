import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/login"
  private loginStatus$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {
  }

  public login(user: User): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  public logout() {
    this.loginStatus$.next(false);
    this.router.navigate(['/home']);
  }

  public getAuthStatus(): boolean {
    return this.loginStatus$.value;
  }

  public setAuthStatus(status: boolean): void {
    this.loginStatus$.next(status);
  }

}
