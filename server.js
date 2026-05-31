/**
 * Serve HTML
 */
function doGet(e) { 
  const html = HtmlService.createTemplateFromFile("index");
  html.colors = JSON.stringify(getColors());

  return html
    .evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1")
    .setFaviconUrl("https://www.google.com/favicon.ico")
    .setTitle("AlpineJS");
}

/**
 * Include content
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * GET DATA
 */
function getColors() {
  // In a production app you could for example get data from a Google spreadsheet 
  return ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
}
