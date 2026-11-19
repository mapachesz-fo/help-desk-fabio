import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanColumna } from './kanban-columna';

describe('KanbanColumna', () => {
  let component: KanbanColumna;
  let fixture: ComponentFixture<KanbanColumna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanColumna],
    }).compileComponents();

    fixture = TestBed.createComponent(KanbanColumna);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('titulo', 'Abiertos');
    fixture.componentRef.setInput('estado', 'Abierto');
    fixture.componentRef.setInput('tickets', []);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
