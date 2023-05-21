import { GlobalVarsService } from 'src/app/services/global-vars.service';
import { Component, OnInit, effect, signal } from '@angular/core';
import { User } from './../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {
  loggedInUser = signal(null || {} as User)
  isSideNavOpen = signal(false)
  isSideNavOpenStorageKey: string = 'IS_SIDE_NAV_OPEN'

  constructor(
    private globalVarsService: GlobalVarsService,
  ) {}
  
  ngOnInit(): void {
    this.loggedInUser = this.globalVarsService.loggedInUser
    this.isSideNavOpen = this.globalVarsService.isSideNavOpen
  }

  onSideNavToggle() {
    this.globalVarsService.setIsSidenavOpen(!this.isSideNavOpen())
  }

}
