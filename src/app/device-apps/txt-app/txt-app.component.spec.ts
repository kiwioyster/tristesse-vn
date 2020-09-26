import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtAppComponent } from './txt-app.component';

describe('TxtAppComponent', () => {
  let component: TxtAppComponent;
  let fixture: ComponentFixture<TxtAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxtAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
