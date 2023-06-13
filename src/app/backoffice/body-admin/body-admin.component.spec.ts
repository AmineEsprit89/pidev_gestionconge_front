import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAdminComponent } from './body-admin.component';

describe('BodyAdminComponent', () => {
  let component: BodyAdminComponent;
  let fixture: ComponentFixture<BodyAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyAdminComponent]
    });
    fixture = TestBed.createComponent(BodyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
