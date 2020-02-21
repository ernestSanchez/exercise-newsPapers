import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetallComponent } from './search-detall.component';

describe('SearchDetallComponent', () => {
  let component: SearchDetallComponent;
  let fixture: ComponentFixture<SearchDetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
