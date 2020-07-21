import { Component, OnInit } from '@angular/core';
import { MacDefinationService } from "../mac-defination.service";
import { MacDefination } from '../mac-defination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  macList:MacDefination[] = [];
  constructor(private macService:MacDefinationService,private route:Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.macService.getAll().subscribe(list=>this.macList =list);

  }
  createNew(){
    this.route.navigateByUrl('mac/create')
  }
  delete(id){
    this.macService.delete(id)
      .subscribe(()=>{
        console.log('mac deleted');
        this.getAll();
      });
  }

}
