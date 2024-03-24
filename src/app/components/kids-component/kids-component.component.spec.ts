import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsComponentComponent } from './kids-component.component';

describe('KidsComponentComponent', () => {
  let component: KidsComponentComponent;
  let fixture: ComponentFixture<KidsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidsComponentComponent]
    });
    fixture = TestBed.createComponent(KidsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
