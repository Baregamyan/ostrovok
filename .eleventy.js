const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");
const svgSprite = require("eleventy-plugin-svg-sprite");


async function imageShortcode(src, alt, sizes, className) {
  const metadata = await Image(`./src/images/${src}`, {
    widths: [400, 800, null],
    formats: ["webp", "jpeg"],
    urlPath: '/images/',
    outputDir: './_site/images/'
  })
  const imageAttributes = {
    alt,
    sizes,
    class: className,
    loading: "lazy",
    decoding: "async",
  }
  return Image.generateHTML(metadata, imageAttributes)
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./tailwind.config.js')
  eleventyConfig.addWatchTarget('./src/css/tailwind.css')
  eleventyConfig.addWatchTarget('./src/images**/*')
  eleventyConfig.addWatchTarget('./src/js/**/*.js')
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/images/icons');
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(svgSprite, {
    path: "./src/images/", // relative path to SVG directory
  });
  eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);
  eleventyConfig.addShortcode("SvgIcon", function (name, width, height, className) {
    return `<svg class="${className}" viewBox="0 0 ${width} ${height}"><use xlink:href="#svg-${name}" width="${width}" height="${height}"></use></svg>`;
  });

  return {
    dir: {
      input: 'src', output: '_site',
    },
    markdownTemplateEngine: "njk"
  }
}
