import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInterface } from "../interfaces/user.inteface";

const API_URL = "localhost:4200/"

@Injectable()
export class UsersService {

constructor(
  private http: HttpClient
  ) { }

  async createUser (user: UserInterface){
    const arrayPost = {
      username: user.username,
      email: user.email,
      senha: user.senha
    };
    console.log(arrayPost);
    return await this.http.post<UserInterface>(API_URL + "create-user", arrayPost);
  }
}
