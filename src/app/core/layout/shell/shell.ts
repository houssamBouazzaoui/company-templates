import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiClient } from '../../api/api-client.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell implements OnInit {
  apiStatus: 'idle' | 'ok' | 'error' = 'idle';
  apiError: string | null = null;

  constructor(
    private readonly api: ApiClient,
    private readonly zone: NgZone,
  ) {}

  ngOnInit(): void {
    this.api.healthDb().subscribe({
      next: (res) => {
        console.log('healthDb ok:', res);
        this.zone.run(() => {
          this.apiStatus = 'ok';
          this.apiError = null;
        });
      },
      error: (err) => {
        console.log('healthDb error:', err);
        this.zone.run(() => {
          this.apiStatus = 'error';
          this.apiError = err?.message ?? (typeof err === 'string' ? err : JSON.stringify(err));
        });
      },
    });
  }
}
