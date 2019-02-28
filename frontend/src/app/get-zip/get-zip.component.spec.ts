import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetZipComponent } from './get-zip.component';

describe('GetZipComponent', () => {
  let component: GetZipComponent;
  let fixture: ComponentFixture<GetZipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetZipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
