import { PostService } from './post.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'httpMethods';

  constructor(private service:PostService){}
  
  isloading=this.service.isLoading;
}
