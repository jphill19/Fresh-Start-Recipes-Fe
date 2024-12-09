self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "rootMainFilesTree": {},
  "pages": {
    "/[[...filters]]": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/[[...filters]].js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/location/[[...filters]]": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/location/[[...filters]].js"
    ],
    "/recipe/[recipeId]": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/recipe/[recipeId].js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];