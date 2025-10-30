import { Component, inject } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapMinecartLoaded,
  bootstrapMotherboard,
  bootstrapTools,
  bootstrapGearWideConnected,
  bootstrapCalendar2Plus,
  bootstrapWrenchAdjustableCircle,
  bootstrapConeStriped,
} from '@ng-icons/bootstrap-icons';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { LayoutService } from '../../../../../services/layout.service';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, RouterLink, TranslocoModule, NgIcon, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  viewProviders: [
    provideIcons({
      bootstrapMinecartLoaded,
      bootstrapMotherboard,
      bootstrapTools,
      bootstrapGearWideConnected,
      bootstrapCalendar2Plus,
      bootstrapWrenchAdjustableCircle,
      bootstrapConeStriped,
    }),
  ],
  animations: [
    trigger('slideToggle', [
      state('void', style({ height: '0', opacity: 0, overflow: 'hidden' })),
      state('*', style({ height: '*', opacity: 1, overflow: 'hidden' })),
      transition('void <=> *', animate('100ms ease-in-out')),
    ]),
  ],
})
export class SidebarComponent {
  constructor(private translocoService: TranslocoService) {}
  private transloco = inject(TranslocoService);

  submenuOpen: { [key: string]: boolean } = {
    equipment: false,
  };

  toggleSubmenu(menu: string) {
    this.submenuOpen[menu] = !this.submenuOpen[menu];
  }
}
