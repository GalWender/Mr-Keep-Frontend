import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { GlobalVarsService } from './global-vars.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  STORAGE_KEY_LOGGEDIN_USER: string = 'LOGGED_IN_USER'

  constructor(
    private http: HttpClient,
    private globalVarsService: GlobalVarsService
  ) { }

  update(user: User): Observable<object> {
    return this.http.put(environment.api_url + `user/${user._id}`, user, { withCredentials: true })
  }

  async login(creds: User) {
    const subscription = this.http.post(environment.api_url + 'auth/login', creds, { withCredentials: true }).subscribe(loggedInUser => {
      if (loggedInUser) {
        this.globalVarsService.setLoggedinUser(loggedInUser as User)
        subscription.unsubscribe()
      }
    })
  }

  async signup(creds: User) {
    const subscription = this.http.post(environment.api_url + 'auth/signup', creds, { withCredentials: true }).subscribe(loggedInUser => {
      if (loggedInUser) {
        this.globalVarsService.setLoggedinUser(loggedInUser as User)
        subscription.unsubscribe()
      }
    })
  }
  
  logout(): Observable<object> {
    sessionStorage.removeItem(this.STORAGE_KEY_LOGGEDIN_USER)
    this.globalVarsService.loggedInUser.set(null)
    return this.http.post(environment.api_url + 'auth/logout', null)
  }

  getUsers(): Observable<object> {
    return this.http.get(environment.api_url + 'user')
  }

  getUserById(userId: string): Observable<object> {
    return this.http.get(environment.api_url + userId)
  }

}
