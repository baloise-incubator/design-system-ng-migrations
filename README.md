# Baloise Design System Migrations with Angular

## Run Project

Install all node packages.

```
npm install
```

To start the angular project on [http://localhost:4200/](http://localhost:4200/).

```
npm start
```

## Migration Guide

The complete [Migration Guide for v12 can be found here.](https://baloise-design-system.vercel.app/?path=/story/development-migration-migration-from-11-x-to-12-x--page)

### Minimal changes Required

To update the Design System to version 12 run the following command

```
npm add @baloise/design-system-components-angular@12.x
```

#### Did you use icons?

[Full documentation](https://baloise-design-system.vercel.app/?path=/story/development-migration-migration-from-11-x-to-12-x--page#load-custom-icons)

Open your `app.module.ts` and import all the icons.

```typescript
import * as balIcons from '@baloise/design-system-icons'

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    BalCoreModule.forRoot({
      defaults: {
        region: 'CH',
        language: 'en',
        allowedLanguages: ['de', 'fr', 'it', 'en'],
        icons: { ...balIcons },
      },
    }),
  ],
  ...
})
export class AppModule {}
```

#### Did you customize components styles with SASS variables?

[Full documentation](https://baloise-design-system.vercel.app/?path=/story/development-migration-migration-from-11-x-to-12-x--page#lazy-loading-component-styles)

The prop mode="sass" informs the Design System to not lazy-load the component styles.

```html
<bal-app mode="sass"> ...content </bal-app>
```

Next we need to load the missing SASS styles manually.

```scss
$font-path: '~assets/fonts';

@import '@baloise/design-system-components/src/styles/global';
@import '@baloise/design-system-components/src/styles/global.components';
```

#### Did you use spacing CSS helper classes like `mt-6`?

[Full documentation](https://baloise-design-system.vercel.app/?path=/story/development-migration-migration-from-11-x-to-12-x--page#spacing)

To reactivate the spacing with numbers set the variable `$spacing-legacy-numbering`.

```scss
$font-path: '~assets/fonts';
$spacing-legacy-numbering: true;

@import 'node_modules/@baloise/design-system-components/src/styles/global';
```

#### Did you use other CSS helper classes like `has-shadow`, `has-radius` or `has-background-primary-light`?

Then please have a look at the [Full documentation](https://baloise-design-system.vercel.app/?path=/story/development-migration-migration-from-11-x-to-12-x--page#lazy-loading-component-styles).
