export default function handleRender(req, res, next) {
  res.end(renderHtml());
}

function renderHtml(
  req = {},
  body = "",
  preloadedState = {},
  styleTags = {},
  global = {},
  css,
  scriptTags = ""
) {
  return `
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <script>
        window.__data__ = ${JSON.stringify(preloadedState)};
        window.__global__ = ${JSON.stringify(global)};
        </script>
        </head>
        <body>
        <div id="app"></div>
        </body>
        <script src="/assets/dist/app.js"></script>
    </html>
  `.replace(/\s\s+/g, "");
}
