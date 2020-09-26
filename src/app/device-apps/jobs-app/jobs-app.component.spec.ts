import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsAppComponent } from './jobs-app.component';

describe('JobsAppComponent', () => {
  let component: JobsAppComponent;
  let fixture: ComponentFixture<JobsAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
