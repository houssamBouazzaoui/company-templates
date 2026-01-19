import { Component } from '@angular/core';
import { HomeSectionComponent } from '../sections/home/home-section/home-section';
import { ServicesSectionComponent } from '../sections/services/services-section/services-section';
import { TemplatesSectionComponent } from '../sections/templates/templates-section/templates-section';
import { ContactSectionComponent } from '../sections/contact/contact-section/contact-section';

@Component({
  selector: 'app-landing',
  imports: [
    HomeSectionComponent,
    ServicesSectionComponent,
    TemplatesSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class LandingComponent {}
