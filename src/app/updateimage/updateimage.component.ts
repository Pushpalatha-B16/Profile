import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateimage',
  imports: [FormsModule],
  templateUrl: './updateimage.component.html',
  styleUrl: './updateimage.component.css'
})
export class UpdateimageComponent  {
  constructor(private dataservice:MyserviceService,private router:Router){}
selectedImage: File | null = null;

onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedImage = file;
  }
}

onSubmit(form: any) {
  const formData = new FormData();
 let id = Number(localStorage.getItem("user_id"));
  if (this.selectedImage) {
    formData.append("profile_image", this.selectedImage);
  }

  this.dataservice.updateImage(id,formData).subscribe( {
    next:(res:any)=>{
   alert(JSON.stringify(res.message))
   this.router.navigate(['showdata'])
    },
    error:(err)=>{
      alert(JSON.stringify(err.error.message)) ;
      this.router.navigate(['showdata'])
    }
    
  });
}

}
