import { Component, OnInit } from '@angular/core';
import { MacDefinationService } from '../mac-defination.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MacDefination } from '../mac-defination';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id:number;
  mac:MacDefination;
  constructor(private macService:MacDefinationService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location
    ) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.macService.find(this.id)
    .subscribe((res)=>{
      console.log(res);
      
      this.mac = res;
    })
  }
  back(){
    this._location.back();
  }

}
