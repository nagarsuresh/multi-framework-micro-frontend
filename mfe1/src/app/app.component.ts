import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const require: any;

// import { ClarityIcons, userIcon, cloudIcon, vmBugIcon, folderIcon } from '@cds/core/icon';

// ClarityIcons.addIcons(userIcon, cloudIcon, vmBugIcon, folderIcon);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngVersion = require('../../package.json').dependencies['@angular/core'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl(location.pathname.substr(1));
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(location.pathname.substr(1));
    });
  }
}
