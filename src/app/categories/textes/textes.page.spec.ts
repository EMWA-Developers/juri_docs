import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextesPage } from './textes.page';

describe('TextesPage', () => {
  let component: TextesPage;
  let fixture: ComponentFixture<TextesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
