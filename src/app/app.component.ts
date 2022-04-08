import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component } from '@angular/core';
import { AppRegistration } from './loader/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  load: AppRegistration = {
    name: 'mfa1',
    bundle: () => loadRemoteModule({
      remoteName: 'mfa1',
      remoteEntry: 'http://localhost:8080/mfa1/remoteEntry.js',
      exposedModule: './Module'
    })
  }
}
