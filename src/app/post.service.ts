import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  pushData(userData:any)
  {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", userData)
  }

  putData(userData:any,id:any)
  {
    return this.http.put("https://jsonplaceholder.typicode.com/posts/"+id, userData)
  }

  patchData(userData:any,id:any)
  {
    return this.http.patch("https://jsonplaceholder.typicode.com/posts/"+id, userData)
  }

  DeleteData(userData:any,id:any)
  {
    return this.http.delete("https://jsonplaceholder.typicode.com/posts/"+id, userData)
  }
}
