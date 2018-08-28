import { UserModel } from './../core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*
  public listUser:Array<UserModel>
  constructor(private http:HttpClient) {   }

  public getUser():Array<UserModel>
  {
    this.http.get("http://localhost:8080/springapp/viewstudents").subscribe(res=>
    {
    this.listUser=res as UserModel[];
    console.log(this.listUser);
    });
    return this.listUser;
  }
  */

 constructor(private http:HttpClient) {   }
 public getUser():Observable<UserModel[]>
 {
   return this.http.get<UserModel[]>("http://localhost:8080/springapp/viewstudents");
 }
}
