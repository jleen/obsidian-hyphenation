import { Plugin } from "obsidian"
import { hyphenateHTMLSync } from "hyphen/en"

export default class ExamplePlugin extends Plugin {
	async onload() {
		this.registerMarkdownPostProcessor((element, context) => {
			const chunks = element.querySelectorAll("p")

			chunks.forEach((chunk) => {
				chunk.innerHTML = hyphenateHTMLSync(chunk.innerHTML)
			});
		});
	}
}