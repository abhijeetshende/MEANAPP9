import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NetworkService } from "../network.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-network',
  templateUrl: './create-network.component.html',
  styleUrls: ['./create-network.component.scss'],
})
export class CreateNetworkComponent implements OnInit {
  constructor(private networkService:NetworkService,private route:Router) {}
  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      ipv4: new FormControl('', Validators.required),
      ipv6: new FormControl('', Validators.required),
      comments: new FormControl('', Validators.required),
    });
  }
  create() {
    console.log(this.form.value);
    this.networkService.CreateNetwork(this.form.value)
    .subscribe((networkdata)=>{
      console.log("network created");
      this.form.reset();
      this.route.navigateByUrl('network/index');
      
    })
  }
}
