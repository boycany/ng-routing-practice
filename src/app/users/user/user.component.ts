import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };
  ParamsSub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // console.log('this.route :>> ', this.route);
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };

    //subscribe router url change
    this.ParamsSub = this.route.params.subscribe((params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }

  ngOnDestroy() {
    this.ParamsSub.unsubscribe();
  }
}
