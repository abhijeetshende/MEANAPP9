import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNetworkComponent } from './index-network.component';

describe('IndexNetworkComponent', () => {
  let component: IndexNetworkComponent;
  let fixture: ComponentFixture<IndexNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
