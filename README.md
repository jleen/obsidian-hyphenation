# Obsidian Hyphenation Plugin

This is a plugin for Obsidian (https://obsidian.md)
that enables word hyphenation in the Preview.

It uses the `hyphen` package to perform hyphenation.
Tested on desktop and iOS.

## Known limitations

- Currently all text will be hyphenated according to English-language rules.
  (The `hyphen` library supports many languages. This plugin can support
  configurable languages in the future.)

- Hyphenation is not supported in the Editor. It’s not actually clear whether
  this would be desirable, but it would be nice to at least have it as an option.
