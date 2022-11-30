import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG } from '@menokws/core';
import { MessageService } from 'primeng/api';
import { catchError, retry, throwError } from 'rxjs';

@Component({
  selector: 'menokws-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() isFullScreen: boolean = true
  email: string | undefined
  password: string | undefined

  constructor(@Inject(APP_CONFIG) private appConfig: any, private http: HttpClient, private router : Router, private messageService : MessageService) { }

  ngOnInit(): void {}
  
  signIn() {
    sessionStorage.setItem('token', 'token')
    this.router.navigateByUrl("")
    this.http.post(`${this.appConfig.baseUrl}login?email=${this.email}&password=${this.password}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    ).pipe(retry(1), catchError(this.handleError)).subscribe(res => {
      console.log(res)
      sessionStorage.setItem('token', 'token')
      this.router.navigateByUrl("dashboard")
    })
  }

  handleError(error: any) {

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
   // this.messageService.add({severity:'warn', summary:`Login Failed`, detail:`${errorMessage}`});
    return throwError(() => {
      return errorMessage;
    });
  }

}
