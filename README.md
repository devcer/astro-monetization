<div align="center">
  
[![Twitter Badge](https://img.shields.io/badge/-isantoshv-00acee?style=flat&logo=twitter&logoColor=white&link=https://twitter.com/isantoshv/)](https://www.twitter.com/isantoshv/)

[![GitHub issues](https://img.shields.io/github/issues/devcer/astro-monetization)](https://github.com/devcer/astro-monetization/issues)
[![GitHub forks](https://img.shields.io/github/forks/devcer/astro-monetization)](https://github.com/devcer/astro-monetization/network)
[![GitHub stars](https://img.shields.io/github/stars/devcer/astro-monetization)](https://github.com/devcer/astro-monetization/stargazers)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/devcer/astro-monetization)](https://github.com/devcer/astro-monetization/pulls)
[![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/devcer/astro-monetization)](https://github.com/devcer/astro-monetization/issues?q=is%3Apr+is%3Aclosed)

<br>

[![GitHub license](https://img.shields.io/github/license/devcer/astro-monetization)](https://github.com/devcer/astro-monetization/blob/master/LICENSE)
[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/devcer/astro-monetization)](https://github.com/devcer/astro-monetization/tags)

[![CI](https://github.com/devcer/astro-monetization/actions/workflows/ci.yml/badge.svg)](https://github.com/devcer/astro-monetization/actions/workflows/ci.yml)
[![CodeQL](https://github.com/devcer/astro-monetization/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/devcer/astro-monetization/actions/workflows/github-code-scanning/codeql)

</div>

# 🚀 Astro Monetization

This [Astro](https://astro.build/) component makes it easy to add monetization tag that is used to monetize your web pages.

Pull requests and/or feature requests are very welcome!

## How to run the extension

- Clone the repository
- Run `npm install`
- Run `npm run dev`
- Open the url `http://localhost:3000/monetizationTags`

## Installation

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
