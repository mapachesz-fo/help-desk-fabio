import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaTicket } from './tarjeta-ticket';

describe('TarjetaTicket', () => {
  let component: TarjetaTicket;
  let fixture: ComponentFixture<TarjetaTicket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaTicket],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaTicket);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('ticket', {
      id: '1',
      asunto: 'Sin conexión',
      descripcion: 'No hay internet en el piso 2',
      estado: 'Abierto',
      prioridad: 'Alta',
      fechaCreacion: '2026-01-15'
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
