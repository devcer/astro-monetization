# 🚀 Astro Monetization

This [Astro](https://astro.build/) component makes it easy to add monetization tag that is used to monetize your web pages.

Pull requests and/or feature requests are very welcome!

## How to run the extension

- Clone the repository
- Run `npm install`
- Run `npm run dev`
- Open the url `http://localhost:3000/monetizationTags`

## Installation (Yet to be published)

To install Astro Monetization, run the following command in your terminal:

```bash
npm install astro-monetization
```

or if you use yarn:

```bash
yarn add astro-monetization
```

## How To Use

In any of your Astro pages, import Astro SEO and then use the component inside
the `<head>` section of your HTML:

```astro
---
import { MONETIZATION } from "astro-monetization";
---

<html lang="en">
  <head>
    <MONETIZATION pointer="$ilp.rafiki.money/isantoshv" />
    // ... rest of
  </head>
  <body> // ... body</body>
</html>
```

## Supported Props

| Propname | Type   | Description          |
| -------- | ------ | -------------------- |
| pointer  | string | Your payment pointer |

## Acknowledgements

Astro Monetization is _heavily_ inspired by [Astro SEO](https://github.com/jonasmerlin/astro-seo)
