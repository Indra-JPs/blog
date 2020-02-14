import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPrincipalComponent } from './post-principal.component';

describe('PostPrincipalComponent', () => {
  let component: PostPrincipalComponent;
  let fixture: ComponentFixture<PostPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
