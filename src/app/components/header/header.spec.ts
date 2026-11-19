import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mostrar el nombre del portal', () => {
    const titulo = fixture.nativeElement.querySelector('.header-titulo');

    expect(titulo.textContent).toContain('SISTEMA HELP DESK');
  });

  it('should mostrar el logo de la SIE', () => {
    const logo = fixture.nativeElement.querySelector('.header-logo');

    expect(logo.getAttribute('src')).toBe('/img/logo_SIE_blanco.png');
  });
});
