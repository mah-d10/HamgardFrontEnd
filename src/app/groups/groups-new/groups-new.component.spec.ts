import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsNewComponent } from './groups-new.component';

describe('GroupsNewComponent', () => {
  let component: GroupsNewComponent;
  let fixture: ComponentFixture<GroupsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
