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
export class LoginSignupComponent implements OnInit {
  isSideNavOpen = signal(false)
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
  ) {}
  
  
  ngOnInit(): void {
    this.isSideNavOpen = this.globalVarsService.isSideNavOpen
  }

  onToggleSignup() {
    this.isSignup = true
  }

  onLogin() {
    this.isSubmitted = true
    if (this.loginForm.invalid === false) {
      const user = this.loginForm.value
      this.userSubscription = this.userService.login(user as User).subscribe(res => {
        if (res) {
          this.userService.saveLocalUser(res as User)
          this.userSubscription.unsubscribe()
          this.router.navigateByUrl("/")
        }
      })
    }
  }

  onSignup() {
    console.log(this.registerForm.value, this.registerForm.invalid)
    this.isSubmitted = true
    if (this.registerForm.invalid === false) {
      const user = this.registerForm.value
      this.userSubscription = this.userService.signup(user as User).subscribe(res => {
        if (res) {
          this.userService.saveLocalUser(res as User)
          this.userSubscription.unsubscribe()
          this.router.navigateByUrl("/")
        }
      })
    }
  }

}
