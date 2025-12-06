# 📐 Poly Fluid Sizing

Poly Fluid Sizing is a SASS mixin to linear interpolation size values using calc() across multiple breakpoints. It uses some basic math behind the scenes. You don't need to know the math or understand it to use this mixin.

## 📦 Install via npm as a `devDependency`

`npm install poly-fluid-sizing --save-dev`

## 🚀 Usage

```scss
// Load via SASS Node Package Importer
@use 'pkg:poly-fluid-sizing' as *;

h1 {
  @include poly-fluid-sizing('font-size', ( 320px: 18px, 768px: 26px, 1024px: 38px, 1440px: 46px, ) );
}
```

This outputs the following CSS:

```css
/* The comments are not generated and are only here for clarity */

h1 {
  /* The minimum font-size */
  font-size: 18px;
}
@media (width >= 320px) {
  h1 {
    /* Interpolate the font-size between 18px @ 320px and 26px @ 768px viewport */
    font-size: calc(1.786vw + 12.286px);
  }
}
@media (width >= 768px) {
  h1 {
    /* Interpolate the font-size between 26px @ 768px and 38px @ 1024px viewport */
    font-size: calc(4.6875vw - 10px);
  }
}
@media (width >= 1024px) {
  h1 {
    /* Interpolate the font-size between 38px @ 1024px and 46px @ 1440px viewport */
    font-size: calc(1.923vw + 18.308px);
  }
}
@media (width >= 1440px) {
  h1 {
    /* The maximum font-size */
    font-size: 46px;
  }
}
```

## ⚙️ Options and Syntax

```scss
@include poly-fluid-sizing(property, map, options: (round: true, precision: 3, rangeContext: true));
```

### 🔧 Parameters

- **property** (string): The CSS property to apply fluid sizing to (e.g., `'font-size'`, `'padding'`, `'margin'`)
- **map** (map): A SASS map of breakpoint-value pairs defining the fluid sizing ranges (e.g., `(320px: 18px, 768px: 26px)`)
- **options** (map, optional): A SASS map of configuration options:
  - **round** (boolean, default: `true`): Enable or disable rounding of calculated values
  - **precision** (number, default: `3`): Number of decimal places to round to (when rounding is enabled)
  - **rangeContext** (boolean, default: `true`): Whether to use Media Query Level 4 Range Context syntax (`width >=` vs. `min-width:`) See: https://www.w3.org/TR/mediaqueries-4/#mq-range-context

### 💡 Examples

```scss
// Using default options
@include poly-fluid-sizing('font-size', ( 320px: 18px, 768px: 26px, ) );

// Disabling rounding
@include poly-fluid-sizing('font-size', ( 320px: 18px, 768px: 26px, ), ( round: false, ) );

// Custom precision
// Note: SASS outputs mathematical calculations to a maximum of 10 decimal places
@include poly-fluid-sizing('font-size', ( 320px: 18px, 768px: 26px, ), ( precision: 6, ) );

// Use min-width syntax
@include poly-fluid-sizing('font-size', ( 320px: 18px, 768px: 26px, ), ( rangeContext: false, ) );

// Multiple options
@include poly-fluid-sizing('font-size', ( 320px: 18px, 768px: 26px, ), ( round: true, precision: 5, rangeContext: false, ) );
```

## ✨ It can do more than `font-size`

Using Poly Fluid Sizing on `font-size` is an obvious use case. But it can be used for any CSS property that uses a numeric size value. For example, `padding`, `margin`, `border-width`, `margin-left`, etc...

```scss
section {
  @include poly-fluid-sizing('margin-right', ( 768px: 40px, 1024px: 60px, ) );
}
```

## 📝 It supports properties with lists of values Thanks @jrutheiser (https://github.com/Jakobud/poly-fluid-sizing/pull/3)

```scss
blockquote {
  @include poly-fluid-sizing('padding', ( 768px: 30px 15px, 1024px: 50px 25px, ) );
}
```

## 🔄 SASS map order doesn't matter

The SASS map that is passed into the mixin can be in any order. It doesn't have to be ordered from smallest viewport to largest viewport. The functions will automatically sort it for you.

```scss
// This is perfectly valid syntax
article {
  @include poly-fluid-sizing('font-size', ( 1024px: 22px, 500px: 16px, 1440px: 24px, 768px: 18px, ) );
}
```

## ⚠️ Limitations

- You can't mix value types. For example, trying to use `2em` `font-size` @ `786px` viewport width. SASS just really won't know what to do mathematically when 1 value is using `em` and the other is using `px`.

## 🧪 Unit Tests

Unit tests using [True](https://github.com/oddbird/true) are included. To run tests:

```
npm install
npm test
```

## 📰 Coverage

[Smashing Magazine: Fluid Responsive Typography With CSS Poly Fluid Sizing](https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/)

[Medium.com/@jakobud CSS Poly Fluid Sizing using calc(), vw, breakpoints and linear equations](https://medium.com/@jakobud/css-polyfluidsizing-using-calc-vw-breakpoints-and-linear-equations-8e15505d21ab)

## 📄 MIT License (see LICENSE file)
