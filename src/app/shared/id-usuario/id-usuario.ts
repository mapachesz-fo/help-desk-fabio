import { Component, input } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-id-usuario',
  imports: [],
  templateUrl: './id-usuario.html',
  styleUrl: './id-usuario.css',
})
export class IdUsuario {
  id = input.required<Usuario['id']>();
}
