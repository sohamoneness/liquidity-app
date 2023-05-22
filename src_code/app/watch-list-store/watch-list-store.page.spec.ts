import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WatchListStorePage } from './watch-list-store.page';

describe('WatchListStorePage', () => {
  let component: WatchListStorePage;
  let fixture: ComponentFixture<WatchListStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchListStorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WatchListStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
