import type { NextConfig } from "next";
import { RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config, { isServer }) {
    // 1. Grab the existing rule that handles SVG imports
    //    This rule is typically part of Webpack's default file-loader or asset modules.
    const fileLoaderRule = config.module.rules.find(
      (rule: RuleSetRule) => rule.test instanceof RegExp && rule.test.test(".svg")
    );

    // 2. Add a new rule for SVGR
    //    This rule tells Webpack to use `@svgr/webpack` for SVG files.
    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      // This ensures that if you *still* want to import an SVG as a URL (e.g., for background-image in CSS),
      // you can do so by appending '?url' to the import: `import mySvgUrl from './my.svg?url';`
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components.
      // This is the core of the SVGR integration.
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule?.issuer, // Ensure issuer is handled correctly for TS
        resourceQuery: {
          not: [...(fileLoaderRule?.resourceQuery?.not || []), /url/],
        }, // exclude if *.svg?url
        use: ["@svgr/webpack"], // Use @svgr/webpack to transform SVG into a React component
      }
    );

    // 3. Modify the original SVG rule
    //    We need to prevent the original rule from processing SVGs that we want SVGR to handle.
    //    By excluding `.svg` here, we make sure that our new SVGR rule takes precedence
    //    for all SVG imports that don't end with `?url`.
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
