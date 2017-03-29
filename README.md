# Mirror<sup>x</sup>

With the prevalence of modern smart devices, the average young person is constantly connected. It's extremely common to see people using their smartphones in every situation. However, due to the risk of water damage and the need to multitask, one location which makes the use of a phone difficult is the bathroom. We hope to ease this problem with the development of a smart mirror called Mirror<sup>x</sup>.

## Running
First, install [Node.js](https://nodejs.org/en/). Then clone this repository and install dependencies:
```
git clone https://github.com/jlave2/mirrorx
cd mirrorx
npm install
```
You can run the development server with `npm run dev` and access the page at http://localhost:3000.

## Editing
Only edit files in the `src` directory (which contains client-side JS, [SASS](http://sass-lang.com/guide), and image files) or `view` directory (which contains [Pug](https://pugjs.org/api/getting-started.html) templates). Watch `src` for changes and re-build it automatically by simply running
```
gulp
```
