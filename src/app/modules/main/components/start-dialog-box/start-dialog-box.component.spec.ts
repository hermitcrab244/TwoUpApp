import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { StartDialogBoxComponent } from './start-dialog-box.component';
import { MaterialModule } from 'src/app/modules/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MatDialogRefMock {
  close() {}
}

describe('StartDialogBoxComponent', () => {
  let component: StartDialogBoxComponent;
  let fixture: ComponentFixture<StartDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule],
      declarations: [StartDialogBoxComponent],
      providers: [{ provide: MatDialogRef, useClass: MatDialogRefMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(StartDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
