const path = require("path");
const pnp = require("pnpapi");

module.exports = {
  target: "node",
  node: { __dirname: false },
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  optimization: { minimize: false },
  mode: "production",
  resolve: { extensions: [".ts", ".js"] },
  // Exclude all external imports, e.g. "chalk".
  // Doesn't exclude relative or absolute imports, e.g. "./src", "~/src" or "@myapp/common".
  externals: [
    function ({ request, context }, callback) {
      if (/^[^.][a-zA-Z\-0-9.]+$/.test(request)) {
        const resolution = pnp.resolveToUnqualified(request, context, {
          considerBuiltins: false,
        });

        // Externalize to a commonjs module using the request path
        return callback(null, "commonjs " + resolution);
      }

      // Continue without externalizing the import
      return callback();
    },
  ],
};
