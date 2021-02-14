import { AfterViewInit, ComponentFactoryResolver, ComponentRef, DebugEventListener, Directive, ElementRef, Input, Renderer2, ViewContainerRef } from '@angular/core';
import { HijriCalenderComponent } from './hijri-calender/hijri-calender.component';

@Directive({
  selector: '[ps-hijri-calender]',
})
export class HijriCalenderDirective implements AfterViewInit {

  private tooltip: ComponentRef<HijriCalenderComponent>;

  constructor(
      private viewContainerRef: ViewContainerRef,
      private resolver: ComponentFactoryResolver,
      private elRef: ElementRef,
      private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    debugger;
    // add trigger class to el
    this.renderer.addClass(this.elRef.nativeElement, 'ps-tooltip-trigger'); // ok

    // factory comp resolver
    let factory = this.resolver.resolveComponentFactory(HijriCalenderComponent);

    // create component
    this.tooltip = this.viewContainerRef.createComponent(factory);
    console.log(this.tooltip);
  }
}