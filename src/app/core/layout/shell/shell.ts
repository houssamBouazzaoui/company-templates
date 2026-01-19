import { Component, OnDestroy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './shell.html',
})
export class ShellComponent implements OnDestroy {
  private document = inject(DOCUMENT);

  open = false;

  toggleMenu() {
    this.open = !this.open;
    this.document.body.classList.toggle('no-scroll', this.open);
  }

  closeMenu() {
    this.open = false;
    this.document.body.classList.remove('no-scroll');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('no-scroll');
  }
}
