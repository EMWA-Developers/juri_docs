import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JurisprudencesPage } from './jurisprudences.page';

describe('JurisprudencesPage', () => {
  let component: JurisprudencesPage;
  let fixture: ComponentFixture<JurisprudencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JurisprudencesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JurisprudencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
