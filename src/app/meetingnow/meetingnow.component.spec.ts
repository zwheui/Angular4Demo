import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingnowComponent } from './meetingnow.component';

describe('MeetingnowComponent', () => {
  let component: MeetingnowComponent;
  let fixture: ComponentFixture<MeetingnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
