import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  STORAGE_KEY_LOGGEDIN_USER: string = 'LOGGED_IN_USER'

  getLoggedInUser(): User {
    const str = sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER)
    const res = str ?
      JSON.parse(str) :
      null
    return res
  }

  update(user: User): Observable<object> {
    return this.http.put(environment.api_url + `user/${user._id}`, user, { withCredentials: true })
  }

  login(creds: User): Observable<object> {
    return this.http.post(environment.api_url + 'auth/login', creds, { withCredentials: true })
  }

  signup(creds: User): Observable<object> {
    return this.http.post(environment.api_url + 'auth/signup', creds, { withCredentials: true })
  }

  logout(): Observable<object> {
    sessionStorage.removeItem(this.STORAGE_KEY_LOGGEDIN_USER)
    return this.http.post(environment.api_url + 'auth/logout', null)
  }

  getUsers(): Observable<object> {
    return this.http.get(environment.api_url + 'user')
  }

  getUserById(userId: string): Observable<object> {
    return this.http.get(environment.api_url + userId)
  }

  saveLocalUser(user: User): User {
    sessionStorage.setItem(this.STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
  }

}
