/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CropRecommendComponent } from './crop-recommend.component';

describe('CropRecommendComponent', () => {
  let component: CropRecommendComponent;
  let fixture: ComponentFixture<CropRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
