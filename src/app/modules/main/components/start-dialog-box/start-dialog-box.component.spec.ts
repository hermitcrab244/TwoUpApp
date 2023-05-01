import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDialogBoxComponent } from './start-dialog-box.component';

describe('StartDialogBoxComponent', () => {
  let component: StartDialogBoxComponent;
  let fixture: ComponentFixture<StartDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartDialogBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
