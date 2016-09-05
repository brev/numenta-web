# Numenta Company Website (https://numenta.com)

Source code, generator and tooling, and content.


## Environment

* Javascript ES6
  * [Node 6](https://nodejs.org) + Npm 3
  * Transpiled with [Babel](https://babeljs.io/) to cross-browser Javascript
  * Lint code checking by Babel [ESLint](http://eslint.org/)
* [Gatsby](https://github.com/gatsbyjs/gatsby) static site generator, a wrapper
  around:
  * [Webpack](https://webpack.github.io/) module loader and
    [Static Generator Plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin)
  * [React](https://facebook.github.io/react/) + JSX view components
  * [Tachyons](http://tachyons.io/) style library, composed via
    [CSS Modules](https://github.com/css-modules/css-modules)
  * CSS Lint by [stylelint](https://github.com/stylelint/stylelint)
  * [React Icon Library](http://gorangajic.github.io/react-icons/)

### Browser and Platform Support

|             | Chrome | Firefox | Safari | Edge | IE/11 | IE/10 | Android |
| ----------- |:------:|:-------:|:------:|:----:|:-----:|:-----:|:-------:|
| **Mac/OSX** |    ✓   |    ✓    |    ✓   |      |       |       |         |
| **iOS**     |        |         |    ✓   |      |       |       |         |
| **Android** |    ✓   |         |        |      |       |       |    ✓    |
| **Win/10**  |    ✓   |    ✓    |        |   ✓  |       |       |         |
| **Win/8**   |        |         |        |      |   ✓   |       |         |
| **Win/7**   |        |         |        |      |       |   ✓   |         |
| **Linux**   |    ✓   |    ✓    |        |      |       |       | &nbsp;  |

**Note:** *All versions are "Latest Stable" unless otherwise noted.*


## Code

### Packages

* Bump version number before each release: `npm version patch`
* Keep packages as up-to-date as possible
* Update and test 1 package at a time

### React Components

* Each `React` Component should return 1 small element.
* Make sure to use `prefixLink('/')` helper function on all internal links,
  image source paths, etc. If you do not, GitHub Pages integration/staging sites
  will be full of bad paths! Some common React components take care of this for
  you already (`TextLink`, `ImageLink`, `Image`, etc).

#### CSS Modules

Composition order:

1. Compose from Tachyons classes
1. Compose from Site Theme classes (Numenta colors)
1. Compose from \_local_file_custom classes
1. Specific custom CSS overrides

Example:
```css
._visited:visited {
  color: #1aa0db;
}

.iconlink {
  composes: dim from 'tachyons';
  composes: link from 'tachyons';
  composes: color-blue from '../../assets/css/theme.css';
  composes: _visited;
  opacity: 0.5;
}
```


## Technical

### Repository

```shell
.                       # https://github.com/NumentaCorp/numenta.com
├── .babelrc            # Babel ES6/7 transpiler configuration file
├── .eslintrc.json      # ES lint rules, mostly AirBnB defaults + few tweaks
├── LICENSE.txt         # AGPLv3, more at: http://numenta.org/licenses/
├── components/         # React.js View Components and UI modules (HTML/CSS/JS)
├── config.toml         # Configuration setings for Gatsby static site generator
├── gatsby-browser.js   # Browser-specific code, tied to React Router by Gatsby
├── gatsby-node.js      # Build-time, Node.js, Webpack & Server specific code
├── html.jsx            # Main HTML Document Component
├── node_modules/       # `npm` module install target (not in git)
├── package.json        # Project scripts, settings, and `npm` dependency lists
├── pages/              # Webpage Documents and URL Tree Structure
├── public/             # STATIC OUTPUT. Static website generated built files
├── utils/              # Local Helpers, utils, client, and misc code
└── wrappers/           # Document-type (.html, .md, etc.) wrapper Components
```

### Scripts

| Function | `<command>` | Notes |
| -------- | ----------- | ----- |
| Build | `npm run build` | Generate static production files |
| Clean | `npm run clean` | Clean build |
| Deploy (gh-pages) | `npm run deploy:gh-pages` | Deploy branch `public/` build to `origin:gh-pages` |
| Develop | `npm run dev` | Develop site interactively on http://localhost:8000 |
| Lint | `npm run lint` | Check code for meeting conventions (see `.eslintrc.json`) |
| Serve | `npm run serve` | Builds, then Serves static output |

### Setup

```shell
git clone git@github.com:numenta/numenta-web.git
cd numenta-web/numenta.com
npm install
```

### Build

Unless otherwise stated below, the `config.toml` file should have the default
empty `linkPrefix` setting:

```shell
# config.toml
linkPrefix = ""
```

#### Development

##### Dynamic

```shell
npm run dev
# Visit http://localhost:8000
```

##### Static

```shell
npm run serve
# Visit http://localhost:8000
```

#### Integration

Update Gatsby config for GitHub Pages (gh-pages) integration targets. Modify
`config.toml` and set (but DO NOT commit):

```shell
# config.toml
linkPrefix = "/numenta-web"
```

And then run an integration build:

```shell
npm run build
```

##### Personal

Push build to personal fork `origin:gh-pages` integration hosting branch:

(Note: This will remove any other gh-pages site staged on that branch).

```shell
npm run deploy:gh-pages
npm run deploy:gh-pages -- --remote origin  # same thing
# Visit http://fork.github.io/numenta-web/
```

##### Shared

Push build to shared `upstream:gh-pages` integration hosting branch:

(Note: This will remove any other gh-pages site staged on that branch).

```shell
# Deploy master branch public/ to upstream:gh-pages branch
npm run deploy:gh-pages -- --remote upstream

# Visit http://numenta.github.io/numenta-web/
```

#### Staging

```shell
npm run build
# Push output to `master` branch of `NumentaCorp/numenta.com:out/` repo-path.
# Wait a few minutes for build to happen.
# Visit https://staging.numenta.com
```

#### Production

```shell
npm run build
# Push output to `production` branch of `NumentaCorp/numenta.com:out/` repopath.
# Wait a few minutes for build to happen.
# Visit https://numenta.com
```


## Link Types and Examples

| Host     | Type              | .jsx Source    | .md Source     |
| -------- | ----------------- | -------------- | -------------- |
| Internal | Path              | [View][link1]  | [View][link7]  |
| Internal | Anchor            | [View][link2]  | [View][link8]  |
| Internal | Asset (/assets/*) | [View][link3]  | [View][link9]  |
| Internal | Asset (*/.pdf)    | N/A            | [View][link13] |
| External | Path              | [View][link4]  | [View][link10] |
| External | Anchor            | [View][link5]  | [View][link11] |
| External | Protocol          | [View][link6]  | [View][link12] |

[link1]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/open-source-community/_Section.jsx#L58
[link2]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/applications/_Section.jsx#L178
[link3]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/applications/_Section.jsx#L248
[link4]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/applications/_Section.jsx#L207
[link5]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/applications/_Section.jsx#L213
[link6]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/partners/_Section.jsx#L48
[link7]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2016/02/11/numenta-anomaly-benchmark-contest-ieee-wcci-2016.md
[link8]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2016/06/16/can-neuroscientists-understand-the-brain.md
[link9]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2014/08/18/progress-at-numenta.md
[link10]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2014/09/17/increasing-research-transparency.md
[link11]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2013/02/11/super-bowl-neuroscience.md
[link12]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2016/02/11/numenta-anomaly-benchmark-contest-ieee-wcci-2016.md#numenta-anomaly-benchmark-nab-competition
[link13]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2016/03/30/numenta-at-computational-and-systems-neuroscience-conference.md

**Note:** *Make sure Google Analtyics is tracking `pages` and `events` for
  the above.*


## @TODO

* SHOW search after index loads, X clear button? no server-side search actually allowed!
* search on dev? build index. copy public/_searchIndex.json to pages/ after dev `npm run build`
* document the code, build docs
* put copyright notice at top of source files
* markdown content image no hover effect

* explain react `contexts` available: **config**, etc.
* watch out for jsx spaces {' '}
* JSX file order (import external, import internal lib, intenral components,
    image/css)
* yaml headmatter, quotes, escaping, etc
* special custom npm modules: tachyons,etc. - howto, updating, etc.
* Static assets don't load from /static/assets on dev, but do on staging
  and prod after static build
* markdown links - no bare internals i.e. http://numenta.com/htm-studio/ -
  need to wrap as square brackets link so it'll get prefixed correctly to Work
  on staging.
* `npm run dev -- --host 192.168.1.112`
* markdown links like \[this]("spaces in filename")
