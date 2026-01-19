import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TEMPLATES } from '../../../../../data/templates';

@Component({
  selector: 'app-templates-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './templates-section.html',
})
export class TemplatesSectionComponent {
  templates = TEMPLATES;
}
