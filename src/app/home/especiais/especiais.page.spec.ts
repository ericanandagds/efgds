import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeciaisPage } from './especiais.page';

describe('EspeciaisPage', () => {
  let component: EspeciaisPage;
  let fixture: ComponentFixture<EspeciaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspeciaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeciaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
