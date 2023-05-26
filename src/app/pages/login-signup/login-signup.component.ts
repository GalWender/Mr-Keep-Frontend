import { Router } from '@angular/router';
import { User } from './../../interfaces/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit, signal } from '@angular/core';
import { GlobalVarsService } from 'src/app/services/global-vars.service';
import { FormBuilder, Validators } from '@angular/forms'
import { Subscription } from 'rxjs';


@Component({
  selector: 'login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent {
  isSideNavOpen = this.globalVarsService.isSideNavOpen
  isSignup: boolean = false
  isSubmitted: boolean = false

  userSubscription: Subscription

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    fullname: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  })
  constructor(
    private globalVarsService: GlobalVarsService,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  onToggleSignup() {
    this.isSignup = true
  }

  async onLogin() {
    this.isSubmitted = true
    if (this.loginForm.invalid === false) {
      const user = this.loginForm.value
      await this.userService.login(user as User)
      this.router.navigateByUrl("/")
    }
  }

  async onSignup() {
    console.log(this.registerForm.value, this.registerForm.invalid)
    this.isSubmitted = true
    if (this.registerForm.invalid === false) {
      const user = this.registerForm.value
      await this.userService.signup(user as User)
      this.router.navigateByUrl("/")
    }
  }

}
