import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InfoDialogData } from '../info-dialog/info-dialog-data';

@Component({
  selector: 'app-info-dialog',
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './info-dialog.html',
  styleUrl: './info-dialog.css',
})
export class InfoDialog {
  data = (inject<InfoDialogData>(MAT_DIALOG_DATA, { optional: true }) ?? {}) as InfoDialogData;
  private dialogRef = inject(MatDialogRef<InfoDialog, boolean>, { optional: true });

  cerrar(): void {
    this.dialogRef?.close(false);
  }
}
