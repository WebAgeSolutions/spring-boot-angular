import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SpringBootAngularSharedModule } from 'app/shared/shared.module';
import { SpringBootAngularCoreModule } from 'app/core/core.module';
import { SpringBootAngularAppRoutingModule } from './app-routing.module';
import { SpringBootAngularHomeModule } from './home/home.module';
import { SpringBootAngularEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SpringBootAngularSharedModule,
    SpringBootAngularCoreModule,
    SpringBootAngularHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SpringBootAngularEntityModule,
    SpringBootAngularAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class SpringBootAngularAppModule {}
