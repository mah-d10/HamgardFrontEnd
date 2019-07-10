import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsStartComponent } from './groups-start.component';

describe('GroupsStartComponent', () => {
  let component: GroupsStartComponent;
  let fixture: ComponentFixture<GroupsStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
