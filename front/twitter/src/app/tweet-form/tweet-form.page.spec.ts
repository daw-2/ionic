import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TweetFormPage } from './tweet-form.page';

describe('TweetFormPage', () => {
  let component: TweetFormPage;
  let fixture: ComponentFixture<TweetFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TweetFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
