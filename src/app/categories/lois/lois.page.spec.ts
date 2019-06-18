import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoisPage } from './lois.page';

describe('LoisPage', () => {
  let component: LoisPage;
  let fixture: ComponentFixture<LoisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
