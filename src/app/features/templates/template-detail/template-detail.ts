import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TEMPLATES } from '../../../data/templates';

@Component({
  selector: 'app-template-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './template-detail.html',
})
export class TemplateDetailComponent {
  private route = inject(ActivatedRoute);

  slug = this.route.snapshot.paramMap.get('slug');

  template = TEMPLATES.find((t) => t.slug === this.slug);
}
