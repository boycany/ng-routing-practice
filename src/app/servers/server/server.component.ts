import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    /** using the resolver in routing module to get data */
    this.route.data.subscribe((data: Data) => {
      console.log('data :>> ', data);
      this.server = data['server'];
    });

    // const id = this.route.snapshot.params['id'];
    // console.log('id :>> ', id);
    // this.route.params.subscribe((params) => {
    //   console.log('params :>> ', params);
    //   this.server = this.serversService.getServer(+params['id']);
    // });
    // this.route.queryParams.subscribe((queryParams) => {
    //   console.log('queryParams :>> ', queryParams);
    // });
  }

  onEdit() {
    console.log('this.server :>> ', this.server);
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
      preserveFragment: true,
    });
  }
}
