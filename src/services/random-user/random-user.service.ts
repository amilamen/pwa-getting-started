import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRandomUserRetrieve } from 'src/models/irandom-user/irandom-user';
import { RANDOM_USER_URL } from 'src/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private httpClient: HttpClient) {}

  retrieveUsers(): Observable<IRandomUserRetrieve> {
    return this.httpClient.get<IRandomUserRetrieve>(
      `${RANDOM_USER_URL}?results=16`
    );
  }
}
