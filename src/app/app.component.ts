import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

interface ComponentRow { name: string; category: string; status: string; }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatBadgeModule, MatButtonModule, MatCardModule,
    MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule,
    MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatMenuModule, MatProgressBarModule,
    MatSelectModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly snackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);
  searchText = '';
  displayName = 'Alex Morgan';
  selectedRole = 'Designer';
  selectedDate: Date | null = new Date(2026, 10, 12);
  notificationsEnabled = true;
  weeklySummaryEnabled = true;
  autoSaveEnabled = true;
  darkMode = false;
  activeNav = 'Overview';
  readonly displayedColumns = ['name', 'category', 'status'];
  readonly rows: ComponentRow[] = [
    { name: 'Buttons', category: 'Actions', status: 'Ready' },
    { name: 'Form fields', category: 'Inputs', status: 'Ready' },
    { name: 'Chips & badges', category: 'Display', status: 'Ready' },
    { name: 'Tabs', category: 'Navigation', status: 'Ready' },
    { name: 'Data table', category: 'Data', status: 'Ready' },
    { name: 'Dialog & snackbar', category: 'Feedback', status: 'Ready' },
    { name: 'Date picker', category: 'Inputs', status: 'Ready' }
  ];
  get filteredRows(): ComponentRow[] {
    const query = this.searchText.trim().toLowerCase();
    return query ? this.rows.filter(row => (row.name + ' ' + row.category).toLowerCase().includes(query)) : this.rows;
  }
  scrollTo(section: string, label: string): void {
    this.activeNav = label;
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-theme', this.darkMode);
  }
  toast(message: string): void {
    this.snackBar.open(message, 'Dismiss', { duration: 2800, horizontalPosition: 'end', verticalPosition: 'bottom' });
  }
  openDialog(): void {
    this.dialog.open(MaterialInfoDialog, { width: '420px', maxWidth: 'calc(100vw - 32px)' });
  }
  addComponent(): void { this.toast('A component was added to your workspace.'); }
}

@Component({
  selector: 'app-material-info-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  template: '<div class="dialog-mark"><mat-icon>widgets</mat-icon></div><h2 mat-dialog-title>Angular Material dialog</h2><mat-dialog-content>This is a real Material dialog opened through MatDialog. It includes focus management, an overlay, and keyboard dismissal.</mat-dialog-content><mat-dialog-actions align="end"><button mat-button mat-dialog-close>Close</button><button mat-flat-button mat-dialog-close>Got it</button></mat-dialog-actions>',
  styles: [':host{display:block}.dialog-mark{width:44px;height:44px;margin:8px 24px 0;border-radius:14px;display:grid;place-items:center;background:var(--mat-sys-secondary-container);color:var(--mat-sys-on-secondary-container)}mat-dialog-content{line-height:1.65}mat-dialog-actions{padding:12px 24px 20px}']
})
export class MaterialInfoDialog {}