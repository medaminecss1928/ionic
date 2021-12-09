import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email:any;
  public password:any;

  constructor(
    public router:Router,
    public fireService:FireserviceService
  ) { }

  ngOnInit() {
  }

//validation de user si email et pwd sont correct en redirect to  todo(page acceuil apres login  )
  login(){
    this.fireService.loginWithEmail({email:this.email,password:this.password}).then(res=>{
      console.log(res);
      if(res.user.uid){
        this.fireService.getDetails({uid:res.user.uid}).subscribe(res=>{
          console.log(res);
          this.router.navigate(['todo']) ;
          
        },err=>{
          console.log(err);
        });
      }
    },err=>{
      alert(err.message)
      console.log(err);
    })
  }

//redirect vers la page inscription
  signup(){
    this.router.navigateByUrl('signup');
  }
}
