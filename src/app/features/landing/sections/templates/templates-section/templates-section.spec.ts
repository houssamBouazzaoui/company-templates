import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesSection } from './templates-section';

describe('TemplatesSection', () => {
  let component: TemplatesSection;
  let fixture: ComponentFixture<TemplatesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
