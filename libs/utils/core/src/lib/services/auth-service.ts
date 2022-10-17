import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    public checkToken(){
        var token = sessionStorage.getItem('token')
        console.log(token)
        return token === null ? false : true
    }
}