import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPeopleComponent } from './modal-people.component';

describe('ModalPeopleComponent', () => {
  let component: ModalPeopleComponent;
  let fixture: ComponentFixture<ModalPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
