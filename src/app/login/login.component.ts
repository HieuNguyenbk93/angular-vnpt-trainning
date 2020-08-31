import { Component, OnInit } from '@angular/core';
import {AccountService} from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn(){
    var result: any;
    this.accountService.login(this.username, this.password)
    .subscribe(
      (res) => {
        result = res;
      }, err => {
        console.log('co loi dang nhap');
        console.log(err);
        this.message = err.console.message;

      }, () => {
        console.log('dang nhap thanh cong');
        console.log(result);
        this.message = "Dang nhap thanh cong";

        this.accountService.setToken(result.object.accessToken);

        this.router.navigateByUrl('/Admin');
      }
    );
  }

}
