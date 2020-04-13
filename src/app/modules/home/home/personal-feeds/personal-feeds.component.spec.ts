import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalFeedsComponent } from './personal-feeds.component';

describe('PersonalFeedsComponent', () => {
  let component: PersonalFeedsComponent;
  let fixture: ComponentFixture<PersonalFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
