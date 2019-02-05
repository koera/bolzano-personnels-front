import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelsFormAddComponent } from './personnels-form-add.component';

describe('PersonnelsFormEditComponent', () => {
  let component: PersonnelsFormAddComponent;
  let fixture: ComponentFixture<PersonnelsFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelsFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelsFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
