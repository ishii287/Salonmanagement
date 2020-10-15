import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMenComponent } from './services-men.component';

describe('ServicesMenComponent', () => {
  let component: ServicesMenComponent;
  let fixture: ComponentFixture<ServicesMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
