import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelsDeletedComponent } from './personnels-deleted.component';

describe('LoadingComponent', () => {
  let component: PersonnelsDeletedComponent;
  let fixture: ComponentFixture<PersonnelsDeletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelsDeletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelsDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
