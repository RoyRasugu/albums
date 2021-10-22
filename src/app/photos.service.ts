import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private http: HttpClient
  ) { }

  getusers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
 
  getinfos(userId: any){
    return this.http.get(`https://jsonplaceholder.typicode.com/users?userId=${userId}`);
  }

}
