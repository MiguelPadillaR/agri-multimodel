import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAssitantComponent } from './chat-assitant.component';

describe('ChatAssitantComponent', () => {
  let component: ChatAssitantComponent;
  let fixture: ComponentFixture<ChatAssitantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatAssitantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatAssitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
