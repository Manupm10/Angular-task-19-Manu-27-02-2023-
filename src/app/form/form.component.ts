import { PostService } from './../post.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {

  public userData= {
    title:'',
    body:'',
    id:'',
  };


  constructor(private service:PostService){}  

  OnSubmit(){

    this.service.pushData(this.userData).subscribe(res=>{
      console.log('post',res);
      
    })
    
  }

  OnPut(){

    this.service.putData(this.userData,this.userData.id).subscribe(res=>{
      console.log('put',res);
      
    })
  }

  OnPatch(){

    this.service.patchData(this.userData,this.userData.id).subscribe(res=>{
      console.log('patch',res);
      
    })
  }

  OnDelete(){

    this.service.DeleteData(this.userData,this.userData.id).subscribe(res=>{
      console.log('Delete',res);
      
    })
  }

  

}
