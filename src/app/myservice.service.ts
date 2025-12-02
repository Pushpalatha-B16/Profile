import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
 baseUrl="http://127.0.0.1:8000/api"
  constructor(private http:HttpClient) { }
//register api
register(data:any){
  return this.http.post(`${this.baseUrl}/register/`,data)
}
//login api
login(data:any){
return this.http.post(`${this.baseUrl}/login/`,data)
}
//fetch profile
getProfile(id:number){
  return this.http.get(`${this.baseUrl}/profile/${id}/`)
}
//update detail
updateDetail(id:number,data:any){
  return this.http.put(`${this.baseUrl}/profile/update/${id}/`,data)
}
updateImage(id:number,formdata:FormData){
  return this.http.patch(`${this.baseUrl}/profile/update-image/${id}/`,formdata)

}
//logout
logout_user(){
return this.http.post(`${this.baseUrl}/logout/`,{})
}
}