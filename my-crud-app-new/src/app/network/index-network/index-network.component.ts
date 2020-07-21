import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';
import { Network } from '../network';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-network',
  templateUrl: './index-network.component.html',
  styleUrls: ['./index-network.component.scss'],
})
export class IndexNetworkComponent implements OnInit {
  constructor(private networkService: NetworkService, private route: Router) {}
  networks: Network[];
  ngOnInit(): void {
    console.log('Get All Network rules here');
    this.getAll();
  }

  getAll() {
    this.networkService.getAllNetwork().subscribe((data) => {
      console.log(data);

      this.networks = data;
    });
  }
  create() {
    console.log('Create function called');

    this.route.navigateByUrl('/network/create');
  }
  delete(id) {
    console.log('id to be delete', id);
    this.networkService.DeleteNetwork(id).subscribe((data) => {
      console.log('network deleted');
      this.getAll();
    });
  }
}
