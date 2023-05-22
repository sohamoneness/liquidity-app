import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WatchlistFavPage } from './watchlist-fav.page';

describe('WatchlistFavPage', () => {
  let component: WatchlistFavPage;
  let fixture: ComponentFixture<WatchlistFavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlistFavPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WatchlistFavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
