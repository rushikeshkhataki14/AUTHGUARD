import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken(token:string){
    localStorage.setItem("token",token);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  isLoggedIn(){
    if (localStorage.getItem("token") !=null)
    return true;
    else
    return false;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

  login(data:any):any{
    if(data.email == "admin@gmail.com" && data.password == "admin"){
      this.setToken("rtrtrtrtrtrtrtrtrtrdfgdfggfhfstrtrt");
       return{status:"success",data:{name:"rushi",email:"admin@gmail.com",usertype:"Admin"}};
    }
    else if(data.email == "manager@gmail.com" && data.password == "admin"){
      this.setToken("rtrtrtrtrtrtrtrtrtrdfgdfggfhfstrtrt");
       return{status:"success",data:{name:"manager",email:"manager@gmail.com",usertype:"Manager"}};
    }
    else{
       return{status:"failed"};
    }
  }
}
