import { GlobalVarsService } from 'src/app/services/global-vars.service';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isSideNavOpen = this.globalVarsService.isSideNavOpen

  constructor(
    private globalVarsService: GlobalVarsService
  ) {}

}
