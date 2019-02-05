import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelsFormEditComponent } from './personnels-form-edit.component';

describe('PersonnelsFormEditComponent', () => {
  let component: PersonnelsFormEditComponent;
  let fixture: ComponentFixture<PersonnelsFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelsFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelsFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
