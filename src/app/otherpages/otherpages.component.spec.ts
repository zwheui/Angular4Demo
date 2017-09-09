import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherpagesComponent } from './otherpages.component';

describe('OtherpagesComponent', () => {
  let component: OtherpagesComponent;
  let fixture: ComponentFixture<OtherpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
