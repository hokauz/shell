import { Type } from '@angular/core';

interface LoadableApp {
  EntryComponent: Type<any>;
}

interface AppRegistration {
  name: string;
  bundle: () => Promise<Type<LoadableApp>>;
  defaultHeightPx?: number;
}

export {
  LoadableApp, 
  AppRegistration
}