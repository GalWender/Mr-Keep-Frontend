import { GlobalVarsService } from 'src/app/services/global-vars.service';
import { Component, OnInit, effect, signal } from '@angular/core';
import { User } from './../../interfaces/user';
import { computed } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit{
  loggedInUser = this.globalVarsService.loggedInUser
  isSideNavOpen = this.globalVarsService.isSideNavOpen
  userObjectLength = computed(()=>Object.keys({...this.loggedInUser()}).length)
  isSideNavOpenStorageKey: string = 'IS_SIDE_NAV_OPEN'
  nameArray: Array<string>

  constructor(
    private globalVarsService: GlobalVarsService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    if(this.loggedInUser()) {
      this.nameArray = this.loggedInUser()?.fullname.split(" ") || []
    }
  }

  onSideNavToggle() {
    this.globalVarsService.setIsSidenavOpen(!this.isSideNavOpen())
  }

  onlogout() {
    this.userService.logout()
  }

}
