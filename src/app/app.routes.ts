import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { UpdatedetailComponent } from './updatedetail/updatedetail.component';
import { UpdateimageComponent } from './updateimage/updateimage.component';

export const routes: Routes = [
    {path:"",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"showdata",component:ShowdataComponent},
    {path:"showdata/updatedetail",component:UpdatedetailComponent},
    {path:"showdata/updateimage",component:UpdateimageComponent},
  
];
