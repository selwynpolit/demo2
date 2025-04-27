---
title: Contribute to Democracy 2.0
---

# Contributing to Democracy 2.0

![visits](https://visit-counter.vercel.app/counter.png?page=https%3A%2F%2Fselwynpolit.github.io%2Fdemo2%2Fcontribute&s=16&c=030303&bg=00000000&no=5&ff=electrolize&tb=&ta=+Views)

This website is meant to be a living document. It is a work in progress and I would love your help in making it better. If you have suggestions for changes, please feel free to make them. The site is hosted on the github platform which is also home to many open source projects. 

Github has a very convenient set of tools which allow you to easily make changes via the web interface. You can use its web interface to directly. The easiest way to suggest changes is to use the "Edit this page on GitHub" link at the bottom of each page. This will take you to the source file for the page you are on. You can then click the pencil icon to edit the file.

![Edit this page on GitHub](/images/edit-this-page.png)

You can then make your changes and create a pull request. Please make sure that the target branch is `gh-pages`. This is the branch that is used to build the site.

For the more extensive changes by those more technically proficient, you could start with forking the repo using the button at the top right of the page. Then you can make changes to your fork and create a pull request.

![Forking the repo](/images/fork-me.png)

When you create a pull request, please make sure that the target branch is `gh-pages`. This is the branch that is used to build the site. I will review the changes and merge them into the site if they are appropriate.

# Setting up and running a local copy of the site on your mac

This will let you make edits and see them in real time. It is useful for testing changes before submitting a pull request especially if you want to try some of the cool magic that [Vitepress](https://vitepress.dev/) can do. Check out the [Vitepress Markdown Extensions](https://vitepress.dev/guide/markdown#markdown-extensions) for more.

1. Clone the repo to your local e.g. demo2
2. Install all the requirements with:

```sh
nvm install node
npm install -g pnpm
pnpm install
```

3. Start local dev server with:

```sh
pnpm run book:dev
```

This shows a local URL: `http://localhost:5173/`. You can click on the link or press the letter `o` to open it in your browser.  Use `h` for help.

To build your site and check for broken links  (which also generates static files in the dist directory), you can use the following:


```sh
pnpm run book:build
```

To update the dependencies, you can use the following:

```sh
pnpm update
```

## Resources
- [Markdown Guide](https://www.markdownguide.org/) - A comprehensive guide to Markdown.
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) - A quick reference to the Markdown syntax.
- [First contributions](https://github.com/firstcontributions/first-contributions) is a great place to start if you are new to contributing to open source projects.
- [Vitepress Markdown Extensions](https://vitepress.dev/guide/markdown) - Vitepress has some cool markdown extensions that are usedin this book to make the content more interesting and interactive.
