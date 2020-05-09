import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeBoardComponent } from './node-board.component';

describe('NodeBoardComponent', () => {
  let component: NodeBoardComponent;
  let fixture: ComponentFixture<NodeBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
