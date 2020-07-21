import { Component, OnInit } from '@angular/core';
import { PostService } from "../post.service";
import { Post } from "../post";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  posts:Post[]= [];
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getAll()
    .subscribe(posts=>this.posts = posts)
  }
  deletePost(id:number){
    this.postService.delete(id)
    .subscribe((res)=>{
      console.log(res);
         
      console.log('Post deleted successfully!');
    })
  }
}
