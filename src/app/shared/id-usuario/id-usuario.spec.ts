import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdUsuario } from './id-usuario';

describe('IdUsuario', () => {
  let component: IdUsuario;
  let fixture: ComponentFixture<IdUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(IdUsuario);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('id', '1');

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar el id recibido', async () => {
    fixture.componentRef.setInput('id', '12');
    await fixture.whenStable();

    const texto = (fixture.nativeElement.textContent ?? '').trim();

    expect(texto).toContain('12');
    expect(texto).not.toContain('Input Signal');
  });
});
