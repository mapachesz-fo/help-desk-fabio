import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaIndicador } from './tarjeta-indicador';

describe('TarjetaIndicador', () => {
  let component: TarjetaIndicador;
  let fixture: ComponentFixture<TarjetaIndicador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaIndicador],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaIndicador);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('titulo', 'Tickets abiertos');
    fixture.componentRef.setInput('valor', 3);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
