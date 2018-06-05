import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { UsersService } from "../users.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  id: string;
  inscription: Subscription;
  user: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usersService: UsersService,
  ) {
     //this.id = this.route.snapshot.params['id']

  }

  ngOnInit() {
    this.inscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

      //  this.user = usersService.getUser(this.id);

        if (this.user == null){
            this.user.navigate(['/nonExistent']);
        }
      }
    );
  }

  ngOndestroy(){
    this.inscription.unsubscribe();
  }

}
