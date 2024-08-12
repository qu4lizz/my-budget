import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFooterComponent } from './transaction-footer.component';

describe('TransactionFooterComponent', () => {
  let component: TransactionFooterComponent;
  let fixture: ComponentFixture<TransactionFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
