import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpringBootAngularSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [SpringBootAngularSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent],
})
export class DocsModule {}
