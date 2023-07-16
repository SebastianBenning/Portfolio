import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapoliceComponent } from './datapolice.component';

describe('DatapoliceComponent', () => {
  let component: DatapoliceComponent;
  let fixture: ComponentFixture<DatapoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapoliceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatapoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
