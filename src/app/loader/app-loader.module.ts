import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoaderPipe } from './pipe/app-loader.pipe';
import { AppLoaderService } from './service/loader/app-loader.service';
import { AppLoaderDirective } from './directive/app-loader.directive';
import { InstanceComponent } from './instance/instance.component';

@NgModule({
  declarations: [
    AppLoaderPipe,
    AppLoaderDirective,
    InstanceComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AppLoaderService
  ],
  exports: [
    InstanceComponent
  ]
})
export class AppLoaderModule { }
