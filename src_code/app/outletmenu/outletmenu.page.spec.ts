import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutletmenuPage } from './outletmenu.page';

describe('OutletmenuPage', () => {
  let component: OutletmenuPage;
  let fixture: ComponentFixture<OutletmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutletmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
