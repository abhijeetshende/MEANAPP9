import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NetworkService } from '../network.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-network',
  templateUrl: './edit-network.component.html',
  styleUrls: ['./edit-network.component.scss'],
})
export class EditNetworkComponent implements OnInit {
  constructor(
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {}
  form: FormGroup;
  id: string;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log('is id se backend service ko callkaro', this.id);

    this.networkService.find(this.id).subscribe((n) => {
      console.log('backend response', n);
      this.form = new FormGroup({
        title: new FormControl(n.title, Validators.required),
        body: new FormControl(n.body, Validators.required),
        name: new FormControl(n.name, Validators.required),
        type: new FormControl(n.type, Validators.required),
        ipv4: new FormControl(n.ipv4, Validators.required),
        ipv6: new FormControl(n.ipv6, Validators.required),
        comments: new FormControl(n.comments, Validators.required),
        id: new FormControl(n._id, Validators.required),
      });
    });
  }

  Edit(){
    let id =this.form.value.id;
    this.networkService.UpdateNetwork(id,this.form.value)
    .subscribe((data)=>{
      this.router.navigateByUrl('network/index');
    })
    
  }
}
