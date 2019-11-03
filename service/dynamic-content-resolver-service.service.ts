import { 
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicContentResolverServiceService {
  factoryResolver
  rootViewContainer

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver
  }
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  addDynamicComponent(comp) {
    const factory = this.factoryResolver.resolveComponentFactory(comp)
    const component = factory.create(this.rootViewContainer.parentInjector)
    this.rootViewContainer.insert(component.hostView)
  }
}
