import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MacDefinationService } from "../mac-defination.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form:FormGroup;
  constructor(private macService:MacDefinationService,private route:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:new FormControl("",Validators.required),
      type:new FormControl("",Validators.required),
      macaddress:new FormControl("",Validators.required),
      comments:new FormControl("",Validators.required),
    });
  }
  get f (){
    return this.form.controls;
  }
  Submit(){
    console.log(this.form.value);
    this.macService.create(this.form.value)
    .subscribe((res)=>{
      this.form.reset();
        console.log("Mac Created");
        this.route.navigateByUrl('mac/index')
        
      })
    
  }
}
