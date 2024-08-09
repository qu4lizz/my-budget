import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserContextService implements OnInit {
  constructor() {}

  public availableBalance: number = 0;
  public defaultCurrency: string = 'eur';

  ngOnInit(): void {
    // TODO: get balance
  }
}
