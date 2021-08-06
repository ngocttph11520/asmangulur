import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterUnitComponent } from './monster-unit.component';

describe('MonsterUnitComponent', () => {
  let component: MonsterUnitComponent;
  let fixture: ComponentFixture<MonsterUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
