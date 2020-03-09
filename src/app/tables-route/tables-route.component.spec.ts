import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesRouteComponent } from './tables-route.component';

describe('TablesRouteComponent', () => {
  let component: TablesRouteComponent;
  let fixture: ComponentFixture<TablesRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
