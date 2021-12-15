import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private servicio:UsersService) { }

  users: User[]=[]

  ngOnInit(): void {
  }

  getUser(){
    return this.servicio.mostrarUser().subscribe((resp) => {
      this.users = resp
  })}


}
