import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  id:number;
  post:Post;
  form:FormGroup;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.find(this.id).subscribe((data) => {
      this.post = data;
    });
    this.form = new FormGroup({
      title:new FormControl('',Validators.required),
      body:new FormControl('',Validators.required),
    });
  }
}
