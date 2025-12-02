import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updatedetail',
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './updatedetail.component.html',
  styleUrl: './updatedetail.component.css'
})
export class UpdatedetailComponent {
   user_detail = {
    first_name: "",
    last_name: "",
   dob: "",
  phone: "",

   };
  constructor(private dataservice:MyserviceService, private router:Router){}
    ngOnInit(){
       let id = Number(localStorage.getItem("user_id"));

    this.dataservice.getProfile(id).subscribe((res: any) => {
      this.user_detail = res.profile;   // adjust based on backend
    });
    }
   

  


     // Handle file input
    
    onSubmit(form:NgForm){
        let id = Number(localStorage.getItem("user_id"));

     console.log("submit",form.value);
     
     this.dataservice.updateDetail(id,form.value).subscribe({
      next:(res:any)=>{
        this.user_detail=res.profile
        console.log("user",this.user_detail);
        
        alert(res.message)
        this.router.navigate(['showdata'])
      },
      error:(err)=>{
        
        alert(JSON.stringify(err.error.message))
      }
     })
     
    }
}
