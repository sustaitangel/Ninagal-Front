import { RouterOutlet } from '@angular/router';
import { Component, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutService } from '../../../../services/layout.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  constructor(private layoutService: LayoutService) {
    this.onResize();
    this.layoutService.sidebarVisible$.subscribe((value) => {
      this.visible = value;
    });
  }
  private _sidebarOpen = signal(true);
  sidebarOpen = this._sidebarOpen.asReadonly();
  visible: boolean = true;

  private _isMobile = signal(false);
  isMobile = this._isMobile.asReadonly();

  overlayVisible = computed(() => this.isMobile() && this.sidebarOpen());

  @HostListener('window:resize')
  onResize() {
    const mobile = window.innerWidth < 1024; // < lg
    this._isMobile.set(mobile);
    this._sidebarOpen.set(!mobile); // abierto en desktop, cerrado en móvil
  }

  toggleSidebar() {
    this._sidebarOpen.update((v) => !v);
  }
  closeSidebar() {
    if (this.isMobile()) this._sidebarOpen.set(false);
  }
}
