import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  user_info!:detail;
  constructor(private dataservice:MyserviceService, private router:Router){}
  ngOnInit(){
    this.user_info={
      first_name:"",
      last_name:"",
      email:"",
      password:"",
      phone:"",
      dob:"",
      profile_image:null
    }
  }
   // Handle file input
  selectedImage: File | null = null;
fieldError: string = "";
onFileSelected(event: any) {
  this.selectedImage = event.target.files[0];
  console.log("Selected file:", this.selectedImage);
}

onSubmit(form: NgForm) {
  console.log("submit", form.value);

  const formData = new FormData();

  formData.append("first_name", this.user_info.first_name);
  formData.append("last_name", this.user_info.last_name);
  formData.append("email", this.user_info.email);
  formData.append("password", this.user_info.password);
  formData.append("phone", this.user_info.phone);
  formData.append("dob", this.user_info.dob);

  if (this.selectedImage) {
    formData.append("profile_image", this.selectedImage);
  }

  this.dataservice.register(formData).subscribe({
    next: (res: any) => {
      alert(res.message);
      this.router.navigate(['login']);
    },
    error: (err) => {
       const fieldName = Object.keys(err.error.errors)[0];
       this.fieldError = err.error.errors[fieldName][0];
      alert(this.fieldError);
    }
  });
}

}
class detail{
  first_name!:string;
  last_name!:string;
  email!:string;
  password!:string;
  phone!:string;
  dob!:string;
  profile_image!:File|null
}