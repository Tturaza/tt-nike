import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenComponentComponent } from './men-component.component';

describe('MenComponentComponent', () => {
  let component: MenComponentComponent;
  let fixture: ComponentFixture<MenComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenComponentComponent]
    });
    fixture = TestBed.createComponent(MenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
