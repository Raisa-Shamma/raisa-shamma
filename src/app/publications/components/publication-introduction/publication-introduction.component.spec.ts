import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationIntroductionComponent } from './publication-introduction.component';

describe('PublicationIntroductionComponent', () => {
  let component: PublicationIntroductionComponent;
  let fixture: ComponentFixture<PublicationIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
