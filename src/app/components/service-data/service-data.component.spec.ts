import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDataComponent } from './service-data.component';

describe('ServiceDataComponent', () => {
  let component: ServiceDataComponent;
  let fixture: ComponentFixture<ServiceDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDataComponent]
    });
    fixture = TestBed.createComponent(ServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
