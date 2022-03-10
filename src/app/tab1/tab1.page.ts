import { Component, OnInit } from '@angular/core';
import { RandomUserService } from 'src/services/random-user/random-user.service';
import {
  IRandomUserRetrieve,
  Result,
} from 'src/models/irandom-user/irandom-user';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  results: Result[] = [];
  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.randomUserService
      .retrieveUsers()
      .subscribe((randomUserResponse: IRandomUserRetrieve) => {
        this.results = randomUserResponse.results;
      });
  }
}
