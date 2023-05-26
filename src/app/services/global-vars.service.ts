import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {
  STORAGE_KEY_LOGGEDIN_USER: string = 'LOGGED_IN_USER'
  isSideNavOpen = signal(false)
  loggedInUser = signal<User | null>(null)

  constructor(
    private storageService: StorageService
  ) {
    const isOpen = this.storageService.loadFromStorage('IS_SIDE_NAV_OPEN') || false
    if (isOpen) {
      this.isSideNavOpen.set(isOpen)
    }

    const user = this.getLoggedInUser()
    if (user) {
      console.log(Object.keys(user));
      this.loggedInUser.set(user)
    }
  }

  setIsSidenavOpen(isOpen: boolean) {
    this.isSideNavOpen.set(isOpen)
    this.storageService.saveToStorage('IS_SIDE_NAV_OPEN', isOpen)
  }

  setLoggedinUser(user: User) {
    this.loggedInUser.set(user)
    this.saveLocalUser(user)
  }

  saveLocalUser(user: User): User {
    sessionStorage.setItem(this.STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
  }

  getLoggedInUser(): User {
    const str = sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER)
    const res = str ?
      JSON.parse(str) :
      null
    return res
  }

}
