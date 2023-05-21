import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from './user.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {
  // private isSideNavOpenSubject = new BehaviorSubject<boolean>(false);
  // public isSideNavOpen$ = this.isSideNavOpenSubject.asObservable();
  // private loggedInUserSubject = new BehaviorSubject<User>({} as User);
  // public loggedInUser$ = this.loggedInUserSubject.asObservable();
  isSideNavOpen = signal(false)
  loggedInUser = signal(null || {} as User)

  constructor(
    private userService: UserService,
    private storageService: StorageService
    ) {
    const isOpen = this.storageService.loadFromStorage('IS_SIDE_NAV_OPEN') || false
    if(isOpen) {
      this.isSideNavOpen.set(isOpen)
    }
    
    const user = this.userService.getLoggedInUser()
    if(user) {
      this.loggedInUser.set(user)
    }
  }

  setIsSidenavOpen(isOpen: boolean) {
    this.isSideNavOpen.set(isOpen)
    this.storageService.saveToStorage('IS_SIDE_NAV_OPEN', isOpen)
  }

  setLoggedinUser(user: User) {
    this.loggedInUser.set(user)
    this.userService.saveLocalUser(user)
  }

}
