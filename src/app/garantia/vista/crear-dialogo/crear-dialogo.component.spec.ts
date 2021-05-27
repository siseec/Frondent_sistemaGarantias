import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDialogoComponent } from './crear-dialogo.component';

describe('CrearDialogoComponent', () => {
  let component: CrearDialogoComponent;
  let fixture: ComponentFixture<CrearDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDialogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
