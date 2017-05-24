# Poly Fluid Sizing

Poly Fluid Sizing is a SASS mixin to linear interpolation size values using calc() across multiple breakpoints. It uses some basic math behind the scenes. You don't need to know the math or understand it to use this mixin.

## Usage

```scss
// Import Poly Fluid Sizing mixin
@import 'poly-fluid-sizing';

h1 {
  @include poly-fluid-sizing('font-size', (320px:18px, 768px:26px, 1024px:38px, 1440px:46px));
}
```

This outputs the following CSS (The comments are not generated and are only here for clarity)

```css
h1 {
  /* The minimum font-size */
  font-size: 18px;
}
@media (min-width: 320px) {
  h1 {
    /* Interpolate the font-size between 18px @ 320px and 26px @ 768px viewport */
    font-size: calc(1.78571429vw + 12.28571429px);
  }
}
@media (min-width: 768px) {
  h1 {
    /* Interpolate the font-size between 26px @ 768px and 38px @ 1024px viewport */
    font-size: calc(4.6875vw - 10px);
  }
}
@media (min-width: 1024px) {
  h1 {
    /* Interpolate the font-size between 38px @ 1024px and 46px @ 1440px viewport */
    font-size: calc(1.92307692vw + 18.30769231px);
  }
}
@media (min-width: 1440px) {
  h1 {
    /* The maximum font-size */
    font-size: 46px;
  }
}
```

## It can do more than `font-size`

Using Poly Fluid Sizing on `font-size` is an obvious use case. But it can be used for any CSS property that uses a numeric size value. For example, `padding`, `margin`, `border-width`, `margin-left`, etc...

```sass
section {
  @include poly-fluid-sizing('margin-right', (768px:40px, 1024px:60px));
}
```

## SASS map order

The SASS map that is passed into the mixin can be in any order. It doesn't have to be ordered from smallest viewport to largest viewport. The functions will automatically sort it for you. This is perfectly valid syntax:

```sass
article {
  @include poly-fluid-sizing('font-size', (1024px:22px, 500px:16px, 1440px:24px, 768px:18px));
}
```

## Limitations

* You can't mix value types. For example, trying to use `2em` `font-size` @ `786px` viewport width. SASS just really won't know what to do mathematically when 1 value is using `em` and the other is using `px`.
* You can't pass a CSS list of values. For example when specifying `padding: 50px 20px 30px 20px`. If you want different values like this, you need to break it out into individual properties `padding-top`, `padding-right`, etc... I'm pretty sure this could be solved.

## Coverage

[Smashing Magazine: Fluid Responsive Typography With CSS Poly Fluid Sizing](https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/)

[Medium.com/@jakobud CSS Poly Fluid Sizing using calc(), vw, breakpoints and linear equations](https://medium.com/@jakobud/css-polyfluidsizing-using-calc-vw-breakpoints-and-linear-equations-8e15505d21ab)

## MIT License (see LICENSE file)