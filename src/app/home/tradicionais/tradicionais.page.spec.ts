import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradicionaisPage } from './tradicionais.page';

describe('TradicionaisPage', () => {
  let component: TradicionaisPage;
  let fixture: ComponentFixture<TradicionaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradicionaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradicionaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
