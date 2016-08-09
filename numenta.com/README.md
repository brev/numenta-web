# Numenta Company Website (https://numenta.com)

Content, Source Code, and Static Generator Tooling.


## Environment

* ECMAscript 6 (ES6 aka ES2015 aka New Javascript) and a bit of ES7
  * Node 6 + Npm 3
  * Transpiled with Babel to cross-browser ES5/3 (@TODO which?) for:
    * Mobile & Tablet: Chrome, iOS Safari, Android
    * Desktop: Chrome, Firefox, Safari, Internet Explorer
  * Lint code checking by Babel ESLint
* Gatsby static site generator, a wrapper around:
  * Webpack module loader and static generator plugin
  * React + JSX
  * Composable CSS-Modules component library: Tachyons
    * Icons: react-icons


## Code

### Packages

* Bump version number before each release: `npm version patch -m "%s"`  
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

### Builds

@TODO better define remotes and branches below (upstream/origin,
  master/gh-pages, etc).

Unless otherwise stated below, the `config.toml` file should have the default
empty `linkPrefix` setting:

```shell
# config.toml
linkPrefix = ""
```

#### Development

```shell
npm run dev
# Visit http://localhost:8000
```

#### Integration

Update Gatsby config for GitHub Pages (gh-pages) integration targets. Modify
`config.toml` and set: (not for commit, would break dev/prod.)

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
# @TODO something. Push to certain branch (`upstream/master`?).
# Visit https://staging.numenta.com
```

#### Production

```shell
npm run build
# @TODO something. Push to certain branch (like `upstream/production` etc).
# Visit https://numenta.com
```


## @TODO

Tasks organized by priority below. This is a temporary section, these should be
moved into GitHub Issues ASAP.

### High

* Markdown Styling content wrapper component - and use.
* Section/index.jsx line 48 = google-analtyics manual record url changes!!!
* Migrate: `healthchecks/` `conf/` ... `out/`

### Medium

* document the code, build docs
* put copyright notice at top of source files
* document this file
  * add links to stuff
  * explain react `contexts` available: **config**, etc.
  * watch out for jsx spaces {' '}
  * JSX file order (import external, import internal lib, intenral components,
      image/css)
  * yaml headmatter, quotes, escaping, etc
  * special custom npm modules: tachyons,etc. - howto, updating, etc.
  * Static assets don't load from /static/assets on dev, but do on staging
    and prod after static build
