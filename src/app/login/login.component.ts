import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
login_data={email:"",password:""}
constructor(private dataservice:MyserviceService,private route:Router){}
ngOnInit(): void {
  this.login_data={
    email:"",
    password:""
  }
  
}
onSubmit(form:NgForm){
   console.log(form.value);
   this.dataservice.login(form.value).subscribe({
    next:(res:any)=>{
      localStorage.setItem("user_id", res.user.id);
      alert(res.message)
      this.route.navigate(['showdata'])
    },
    error:(err:any)=>{
      alert(JSON.stringify(err.error.message))
    
    }
   })
   }

}
