import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibComponent, MyLibModule } from 'my-lib';

@NgModule({
  imports: [BrowserModule, MyLibModule],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(MyLibComponent, {
      injector: this.injector,
    });
    customElements.define('my-lib-component-wc', element);
  }
}
