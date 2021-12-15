import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl:string ='https://localhost:3000';
  users: User[]=[];

  constructor( private httpService: HttpClient) { }

  mostrarUser(){
    let url: string = `${this.apiUrl}/users/`;
    return this.httpService.get<[]>(url);
  }
}
