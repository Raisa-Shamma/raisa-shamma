import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedInComponent } from './featured-in.component';

describe('FeaturedInComponent', () => {
  let component: FeaturedInComponent;
  let fixture: ComponentFixture<FeaturedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
