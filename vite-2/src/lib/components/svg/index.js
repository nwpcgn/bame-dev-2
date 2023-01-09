// @index(['./**/*.svelte'], (f, _, e) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}';`)
export { default as NwpLogo } from './_NwpLogo.svelte';
export { default as SvgArchiv } from './SvgArchiv.svelte';
export { default as SvgKat } from './SvgKat.svelte';
export { default as SvgSettings } from './SvgSettings.svelte';
export { default as SvgUser } from './SvgUser.svelte';
// @endindex