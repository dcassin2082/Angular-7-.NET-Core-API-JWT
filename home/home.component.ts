import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private service: UserService) { }

  userDetails;

  ngOnInit() { 
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
        this.service.loggedIn = true; 
      },
      err => {
        console.log(err);
      } 
    )
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
