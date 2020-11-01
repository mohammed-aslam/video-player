import { TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'video-player'`, () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('video-player');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('video-player app is running!');
  });
});
