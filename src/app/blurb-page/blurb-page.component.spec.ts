import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurbPageComponent } from './blurb-page.component';

describe('BlurbPageComponent', () => {
  let component: BlurbPageComponent;
  let fixture: ComponentFixture<BlurbPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlurbPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
