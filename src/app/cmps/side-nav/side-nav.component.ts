import { StorageService } from './../../services/storage.service';
import { GlobalVarsService } from 'src/app/services/global-vars.service';
import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  storageRouteKey:string = 'CURRENT_ROUTE'
  currRoute!: string
  isSideNavOpen = signal(false)

  constructor(
    private router: Router,
    private globalVarsService: GlobalVarsService,
    private storageService: StorageService
  ) { }


  ngOnInit(): void {
    this.isSideNavOpen = this.globalVarsService.isSideNavOpen
    this.currRoute = this.storageService.loadFromStorage(this.storageRouteKey) || '/'
  }

  onRouteChange(ev: any) {
    this.currRoute = this.router.url
    this.storageService.saveToStorage(this.storageRouteKey,this.currRoute)
  }



}
