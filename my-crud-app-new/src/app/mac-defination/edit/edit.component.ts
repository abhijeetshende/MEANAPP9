import { Component, OnInit } from '@angular/core';
import { MacDefinationService } from '../mac-defination.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MacDefination } from '../mac-defination';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  form: FormGroup;
  id: number;
  mac: MacDefination;
  constructor(
    private macService: MacDefinationService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.macService.find(this.id).subscribe((res) => {
      console.log(res);

      this.mac = res;
      this.form = new FormGroup({
        name:new FormControl(this.mac.name,Validators.required),
        type:new FormControl(this.mac.type,Validators.required),
        macaddress:new FormControl(this.mac.macaddress,Validators.required),
        comments:new FormControl(this.mac.comments,Validators.required),
      });
    });
  }
  Submit(){
    console.log(this.form.value);
    this.macService.update(this.id,this.form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/mac/index");
      
    })
  }
}
