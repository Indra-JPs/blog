import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSecundarioComponent } from './post-secundario.component';

describe('PostSecundarioComponent', () => {
  let component: PostSecundarioComponent;
  let fixture: ComponentFixture<PostSecundarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSecundarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
