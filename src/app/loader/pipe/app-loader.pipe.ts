import { Injector, NgModuleRef, Pipe, PipeTransform } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppRegistration, LoadableApp } from '../models';
import { AppLoaderService } from '../service/loader/app-loader.service';

@Pipe({
  name: 'createAppNgModuleRef'
})
export class AppLoaderPipe implements PipeTransform {
  constructor(private readonly appLoader: AppLoaderService) {}

  transform(
    appRegistration: AppRegistration,
    parentInjector: Injector
  ): Observable<NgModuleRef<LoadableApp>> {
    return this.appLoader
      .createModule(appRegistration, parentInjector)
      .pipe(
        catchError((error) => {
          console.error('Error when creating app NgModule: ', error);
          return throwError(error);
        })
      );
  }

}
