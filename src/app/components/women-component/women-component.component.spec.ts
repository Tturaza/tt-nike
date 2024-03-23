import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenComponentComponent } from './women-component.component';

describe('WomenComponentComponent', () => {
  let component: WomenComponentComponent;
  let fixture: ComponentFixture<WomenComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenComponentComponent]
    });
    fixture = TestBed.createComponent(WomenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
