import { Component, Injector, Input, NgModuleRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppRegistration, LoadableApp } from '../models';
import { AppLoaderService } from '../service/loader/app-loader.service';

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.scss']
})
export class InstanceComponent implements OnInit {
  @Input() app!: AppRegistration;

  module$?: Observable<NgModuleRef<LoadableApp>>; 

  constructor(
    public injector: Injector,
    private service: AppLoaderService
  ) { }

  ngOnInit(): void {
    this.module$ = this.service.createModule(this.app, this.injector);
  }

}
