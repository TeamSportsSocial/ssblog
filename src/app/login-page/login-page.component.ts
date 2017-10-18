import { 
  Component, 
  OnInit,
  ViewChild,
  HostListener
 } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { AuthGuard } from '../services/auth-gaurd.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'SportSocialBlog-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('userName') userName;
  @ViewChild('password') password;
  wrongPassword:boolean=false;
  loading = false;
  returnUrl: string;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    if(event.code=="Enter"){
      this.checkLogin()
    }
  }
  checkLogin(){
    let UserName=this.userName.nativeElement.value
    let Password=this.password.nativeElement.value
    console.log(typeof(UserName),typeof(Password))
    if(UserName=="sportsocial" && Password=="cys"){
      this.wrongPassword=false
      this.authService.login();
      this.router.navigate(['/'+this.returnUrl])
    }
    else{
      this.wrongPassword=true;
    }
   
  }

}
