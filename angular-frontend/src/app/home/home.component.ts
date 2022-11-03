import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public hide: boolean = true;
  public user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.user).pipe(first()).subscribe(data => {
      this.userService.setAuthStatus(true);
      this.router.navigate(['/f1-list']);
      alert("Sikeres bejelentkezés");
    }, err => {
      alert("Hibás adatok");
    });
  }

}
