import { PlatformLocation } from '@angular/common';
import { Compiler, Injectable, Injector, NgModuleFactory } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AppRegistration, LoadableApp } from '../../models';
import { AppPlatformLocation } from '../platform/app-platform-location';

@Injectable()
export class AppLoaderService {

  constructor(private compiler: Compiler) { }

  private createParentInject(injector: Injector) {
    return Injector.create({
      providers: [
        {
          provide: Router,
          useValue: null
        },
        {
          provide: PlatformLocation,
          useClass: AppPlatformLocation,
          deps: []
        }
      ],
      parent: injector
    })
  }

  createModule(reg: AppRegistration, injector: Injector) {
    return from(
      reg.bundle()
        .then(app => {
          console.log(app);
          return this.compiler.compileModuleAsync(app);
        })
        .then((module: any) => {
          console.log(module);
          const t = Object.keys(module.moduleType);
          const mod = module.moduleType['AppModule'];
          console.log(mod);
          debugger;
          const inj = this.createParentInject(injector);
          console.log((module.moduleType as any)['emod']);
          return module.create(inj);
        }) 
    )
  }
}
