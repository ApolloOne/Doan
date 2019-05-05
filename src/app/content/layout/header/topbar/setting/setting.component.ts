import {
  Component,
  OnInit,
  HostBinding,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
@Component({
  selector: 'm-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  @HostBinding('class')
  classes = 'm-nav__item m-topbar__user-profile m-topbar__user-profile--img m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light';
  @HostBinding('attr.m-dropdown-toggle') attrDropdownToggle = 'click';
  @ViewChild('mProfileDropdown') mProfileDropdown: ElementRef;
  @Input() avatarBg: SafeStyle = '';
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    if (!this.avatarBg) {
      this.avatarBg = this.sanitizer.bypassSecurityTrustStyle('url(./assets/app/media/img/bg/bg-1.jpg)');
    }
  }
}
