import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';

import { FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { MediaMatcher } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

interface NavItem {
  name: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'newtone-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
  private subscriptions = new Subscription();

  @ViewChild('snav') snav: MatSidenav | undefined;
  @ViewChild(MatSidenavContainer) sidenavContainer:
    | MatSidenavContainer
    | undefined;
  searchControl = new FormControl();
  isCompact = false;
  isPinned = false;

  navItems: NavItem[] = [
    {
      name: 'Dashboard',
      icon: 'home',
      route: '/base/dashboard',
    },
    {
      name: 'Profile',
      icon: 'account_balance_wallet',
      route: '/base/profile',
    },
    {
      name: 'Notifications',
      icon: 'notifications',
      route: '/base/notification',
    },
  ];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    public dialog: MatDialog,
    private _bottomSheet: MatBottomSheet,
    private router: Router,

    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private _iconRegistry: MatIconRegistry,
    private _overlayContainer: OverlayContainer,
    private _titleService: Title
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);

    this._iconRegistry.setDefaultFontSetClass('material-icons-outlined');
    this._overlayContainer.getContainerElement().classList.add('dark-theme');
    this._titleService.setTitle(
      `shckd`
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    this.subscriptions.unsubscribe();
  }

  toggleSidebar() {
    this.snav?.toggle();
    this.isCompact = true;
    this.isPinned = false;
  }

  toggleSidebarAnimation(): string {
    return this.isCompact ? 'closed' : 'open';
  }

  decodeData(data?: string) {
    return data ? window.atob(data).toString() : '';
  }
}
