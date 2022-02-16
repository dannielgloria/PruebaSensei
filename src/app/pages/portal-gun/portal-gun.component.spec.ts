import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalGunComponent } from './portal-gun.component';

describe('PortalGunComponent', () => {
  let component: PortalGunComponent;
  let fixture: ComponentFixture<PortalGunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalGunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalGunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
