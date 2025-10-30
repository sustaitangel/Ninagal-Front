import { Component, EventEmitter, Output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { bootstrapList } from '@ng-icons/bootstrap-icons';
import { LayoutService } from '../../../../../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      bootstrapList,
    }),
  ],
})
export class HeaderComponent {
  // @Output() toggleMenu = new EventEmitter<void>();
  constructor(private layoutService: LayoutService) {}

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }
  goHome() {
    console.log('Ir a Home');
  }
}
