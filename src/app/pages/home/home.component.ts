import { GlobalVarsService } from 'src/app/services/global-vars.service';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isSideNavOpen = signal(false)

  constructor(
    private globalVarsService: GlobalVarsService
  ) {}

  ngOnInit(): void {
    this.isSideNavOpen = this.globalVarsService.isSideNavOpen
  }

}
