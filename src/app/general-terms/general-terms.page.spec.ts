import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneralTermsPage } from './general-terms.page';

describe('GeneralTermsPage', () => {
  let component: GeneralTermsPage;
  let fixture: ComponentFixture<GeneralTermsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTermsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralTermsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
