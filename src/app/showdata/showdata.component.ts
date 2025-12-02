import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showdata',
  imports: [RouterModule,CommonModule],
  templateUrl: './showdata.component.html',
  styleUrl: './showdata.component.css'
})
export class ShowdataComponent implements OnInit{
   user_detail = {
    first_name: "",
    last_name: "",
    email: "",
    dob: "",
    password: "",
    phone: "",
    profile_image: ""
  };

constructor(private dataservice:MyserviceService,private router:Router){}
ngOnInit(): void {
    let id = Number(localStorage.getItem("user_id"));
    console.log(id);
    
  this.dataservice.getProfile(id).subscribe({
    
    next:(res:any)=>{
      this.user_detail=res.profile
      console.log("user",this.user_detail);
       // Build full URL for image
    if (this.user_detail.profile_image) {
      this.user_detail.profile_image = `http://127.0.0.1:8000${this.user_detail.profile_image}`;
    
      
    }
    console.log("i", this.user_detail.profile_image);
    
  },
      error:(err)=>{
      console.log("error",JSON.stringify(err));
      
      }
  }
  )
  
}
logout() {

  this.dataservice.logout_user().subscribe(res => {
    console.log("Logged out successfully");
    localStorage.clear();
   this.router.navigate(['login']);
  });
   
}
}
