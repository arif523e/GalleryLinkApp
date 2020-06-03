import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinktoolComponent } from './linktool.component';

describe('LinktoolComponent', () => {
  let component: LinktoolComponent;
  let fixture: ComponentFixture<LinktoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinktoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinktoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
