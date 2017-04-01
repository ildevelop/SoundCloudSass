import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MamoryComponent } from './mamory.component';

describe('MamoryComponent', () => {
  let component: MamoryComponent;
  let fixture: ComponentFixture<MamoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MamoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MamoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
