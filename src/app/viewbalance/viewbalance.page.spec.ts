import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewbalancePage } from './viewbalance.page';

describe('ViewbalancePage', () => {
  let component: ViewbalancePage;
  let fixture: ComponentFixture<ViewbalancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbalancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewbalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
