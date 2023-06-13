import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyUserComponent } from './body-user.component';

describe('BodyUserComponent', () => {
  let component: BodyUserComponent;
  let fixture: ComponentFixture<BodyUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyUserComponent]
    });
    fixture = TestBed.createComponent(BodyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
