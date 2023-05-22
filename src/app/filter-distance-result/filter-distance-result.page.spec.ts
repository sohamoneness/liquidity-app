import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterDistanceResultPage } from './filter-distance-result.page';

describe('FilterDistanceResultPage', () => {
  let component: FilterDistanceResultPage;
  let fixture: ComponentFixture<FilterDistanceResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDistanceResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterDistanceResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
