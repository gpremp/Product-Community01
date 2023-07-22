import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductDashboardComponent } from './admin-product-dashboard.component';

describe('AdminProductDashboardComponent', () => {
  let component: AdminProductDashboardComponent;
  let fixture: ComponentFixture<AdminProductDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
