# Questions and Answers.
## What does this project use?
- [Vite](https://vite.dev/), frontend building tool to make the website easily.
- [TSX](https://react.dev/learn/typescript), which is both Typescript(Strict Javascript for no errors) and HTML in the same file.
- [React](https://react.dev/), this is the framework being used to use modules easily.
- [Shadertoy](https://www.shadertoy.com/), we're using a NPM module of this to use create a background with GLSL.
- [Tailwind](https://tailwindcss.com/), this is a css framework to design websites quickly.

## Important Modules
- [React Router](https://reactrouter.com/), this is what's needed to make a single page application.

### Why is React-router using HashRouter instead of BrowserRouter?
- BrowserRouter isn't supported on GitHub while HashRouter is.
- HashRouter is all client-sided routing instead of server-sided.
- [More information regarding HashRouter vs BrowserRouter](https://stackoverflow.com/questions/51974369/what-is-the-difference-between-hashrouter-and-browserrouter-in-react)

## What sites host websites for free and where you don't need a domain for?
Both GitHub Pages and Cloudflare Pages offer free hosting for Single Page Applications.
Single Page Applications are just websites with only one page with no reloading required to access other content (subpages in this case with routers).
- GitHub Pages requires public GitHub repositories.
- Cloudflare Pages allows private GitHub repositories.
- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Cloudflare Pages](https://pages.cloudflare.com/)

### How do I set it up?
- You'll need to first upload a repository with GitHub.
- I would recommend using GitHub desktop for this.

- Then I would change the package.json to the website domain you're going to use.
- GitHub: "username".github.io
- Cloudflare: "repo-name".pages.dev

GitHub:
- Make sure to head to your repo settings -> Pages.
- Build and deployment should be from branch and root.
- If this doesn't work, then you may need a .github/workflows/deploy.yml
[GitHub Deploy.yml](https://github.com/Intermentality/Intermentality.github.io/blob/main/.github/workflows/deploy.yml)

Cloudflare:
- Build command: yarn build
- Build output directory: /./dist

## What is this based off of?
This whole project is based off of @0b5vr portfolio website.
- [0b5vr Website Repo.](https://github.com/0b5vr/0b5vr.github.io)
- [0b5vr Website.](https://0b5vr.com/)

The background is based off of Shadertoy.
- [Background Website.](https://www.shadertoy.com/)
- [Background being used.](https://www.shadertoy.com/view/4tdSWr)
- [NPM Module of Shadertoy](https://www.npmjs.com/package/shadertoy-react)



# Instillation for this project.
## Local Computer
Either Yarn or NodeJS to install packages.
Use CTRL+C to exit dev mode of each package manager if you ran it.
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) <- What I'm using.
- [NodeJS NPM](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)

### Yarn
Installing the packages with Yarn.
```
yarn install
```
Running dev with Yarn.
```
yarn dev
```
Adding packages from NPM.
```
yarn add [NPM Package-Name with no brackets]
```
### NPM
Installing the packages with NPM.
```
npm install
```
Running dev with NPM.
```
npm run dev
```
Adding packages with NPM.
```
npm i [NPM Package-Name with no brackets]
```
## Visual Studio Plugins
- ESLint
- Prettier


# Development
## How do I add more packages?
- Use [NPM](https://www.npmjs.com/) to get more modules for react!
- Make sure to have see a TS icon on the side of the name as well on NPM website!

### Yarn (Adding/Removing)
```
    yarn add [NPM Package]
    yarn remove [NPM Package]
```

### NPM (Adding/Removing)
```
    npm i [NPM Package]
    npm uninstall [NPM Package]
```