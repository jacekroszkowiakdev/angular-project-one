Here is your crash-course roadmap. I keep it concise, modern, Angular-20-first, and aligned with your React + NestJS background. No code yet — only the concepts list you asked for. Language detected: English → answering in English.

---

# ✅ Angular 20 — Crash Course Roadmap (Zero → Intermediate)

Since you already understand React and NestJS, we focus on the Angular-specific mindset, modern APIs (signals, standalone, control flow, resources), and the build/run ecosystem.

---

## **1. Understanding Angular’s Architecture**

What makes Angular different:

- Component tree (like React, but template-based, strongly structured)
- Standalone components (no NgModules)
- Strict typing everywhere
- Templates are declarative, not JS-driven
- Change detection with Signals
- SSR/hydration built-in

What you must know:

- Component = class + template + styles + metadata
- host config replaces HostBinding/HostListener in Angular 20
- Everything is opt-in import (no global component registry)

---

## **2. Angular CLI & Project Structure**

Basics:

- Create project with SSR enabled
- File naming (Angular 20 convention: `my-component.ts`, `my-component.html`)
- Development server (Vite-based)
- Build & deploy pipeline (esbuild, SSR output, hydration)

---

## **3. Standalone Components (Core of Angular 20)**

You learn:

- `@Component` anatomy
- selectors (custom tags)
- metadata (imports, changeDetection, host, styleUrl, templateUrl)
- Emphasis: **always standalone**, never declare `standalone: true`

---

## **4. Signals — Angular’s Reactivity Model**

You master:

- `signal()` for state
- `computed()` for derived state
- `effect()` for side-effects
- state updating (`set`, `update`) — never `mutate`
- When to use signals vs RxJS

This replaces much of React’s state/hooks mental model.

---

## **5. Templates & Control Flow**

Angular 20 uses JS-like syntax:

- `@if` instead of `*ngIf`
- `@for` instead of `*ngFor`
- `@switch` instead of `*ngSwitch`
- Built-in pipes (`async`, `date`, custom pipes)
- Attribute/class/style bindings

These concepts differ heavily from React’s JSX.

---

## **6. Inputs & Outputs**

Component communication:

- `input()` function for props
- Output events using `output()`
- Parent/child interaction patterns
- Passing signals through components

You’ll get the Angular equivalent of React props + callbacks.

---

## **7. Dependency Injection (DI)**

One of Angular's biggest strengths:

- `inject()` API (no constructor injection)
- Provided-in-root services
- Component-level providers for isolation
- Benefits over React contexts

---

## **8. Services & Architecture Patterns**

Angular patterns you'll learn:

- Singleton services
- Feature services
- State services using signals
- Separation of UI logic vs Business logic
- Avoiding “God components”

---

## **9. Routing & Lazy Loading (mandatory in Angular 20)**

Key topics:

- Route definition (no NgModule)
- `loadComponent` and `loadChildren`
- Route guards with signals
- Passing route parameters
- SSR-safe routing

---

## **10. HTTP Client & Resources**

Modern Angular async handling:

- `httpResource()` (Angular 17+ async standard)
- Declarative async templates: `@loading` / `@error` sections
- Typed HTTP responses
- Avoiding manual subscriptions

This gives you a version of React Suspense + useEffect + fetch — but cleaner.

---

## **11. Forms (Reactive Forms Only)**

You learn:

- Form groups / form controls
- Strong typing
- Signals + forms interactions
- Custom validators
- Handling errors in templates

---

## **12. Directives & Pipes**

Advanced Angular features:

- Attribute vs structural directives
- Creating custom directives (with host config)
- Creating custom pipes
- When to choose which

---

## **13. View Encapsulation & Styling**

How Angular handles CSS:

- Encapsulation modes
- Component-scoped CSS
- Avoiding global leakage
- Using `host` styles

---

## **14. Server-Side Rendering & Hydration**

Required in Angular 20:

- SSR setup (automatic via CLI)
- Incremental hydration
- Streaming SSR
- Difference between CSR, SSG, SSR

---

## **15. Testing (Brief Overview)**

- Component tests with TestBed
- Signal testing strategies
- Mocking services and HTTP
- Prefer small testable units

---

## **16. Tooling (DevTools, Language Service)**

Understanding Angular’s debugging tools:

- Component tree inspector
- Change detection visualizer
- Signals profiler

---

## **17. Best Practices & Style Guide**

- File naming conventions (Angular 20)
- Small components only
- No shared logic inside components → move to services
- Use signals everywhere
- Always apply OnPush

---
