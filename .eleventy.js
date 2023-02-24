const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/admin");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.setBrowserSyncConfig({
		files: './public/css/**/*.css'
	});
    

    return {
        dir: {
            input: "src",
            output: "public"
        },
        url: process.env.URL || "http://localhost:8080",
        "siteName": "asd",
        "siteDescription": ""
    };
}