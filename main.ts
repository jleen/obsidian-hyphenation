import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
	async onload() {
		this.registerMarkdownPostProcessor((element, context) => {
			const divs = element.querySelectorAll("p");

			divs.forEach((div) => {
				div.lang = "en";
			});
		});
	}
}