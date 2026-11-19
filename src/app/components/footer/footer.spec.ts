import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mostrar la versión 1.0.0', () => {
    const version = fixture.nativeElement.querySelector('.footer-version');

    expect(version.textContent).toContain('1.0.0');
  });

  it('should mostrar la imagen del footer', () => {
    const imagen = fixture.nativeElement.querySelector('.footer-imagen');

    expect(imagen.getAttribute('src')).toBe('/img/img-footer.png');
  });
});
