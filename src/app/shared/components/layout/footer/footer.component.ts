import { Component, inject } from '@angular/core';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-footer',
  imports: [KENDO_BUTTONS, TranslocoModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private translocoService: TranslocoService) {}
  private transloco = inject(TranslocoService);
  year: number = new Date().getFullYear();
  enterprice: string = 'Ninagal Solutions';
}
