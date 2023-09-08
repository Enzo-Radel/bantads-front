import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertManagerComponent } from './insert-manager.component';

describe('InsertManagerComponent', () => {
  let component: InsertManagerComponent;
  let fixture: ComponentFixture<InsertManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertManagerComponent]
    });
    fixture = TestBed.createComponent(InsertManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
