import { HttpClient } from '@angular/common/http';
import { UserModel } from './../core/models/user.model';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
 public listUser:Array<UserModel>;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.loadUser();
  }
  public loadUser():void{
  this.userService.getUser().subscribe(res=>
    {
    this.listUser=res;
    }
  );

  }
}
