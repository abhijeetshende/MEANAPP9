import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from "@angular/forms";
import { PostService } from '../post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  constructor(
    private postService:PostService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title:new FormControl('',Validators.required),
      body: new FormControl('',Validators.required)
    });
  }
  submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/post/index");
      
    })
    
  }
  get f(){
    return this.form.controls;
  }
}
