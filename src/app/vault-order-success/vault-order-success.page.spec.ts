import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VaultOrderSuccessPage } from './vault-order-success.page';

describe('VaultOrderSuccessPage', () => {
  let component: VaultOrderSuccessPage;
  let fixture: ComponentFixture<VaultOrderSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultOrderSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VaultOrderSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
