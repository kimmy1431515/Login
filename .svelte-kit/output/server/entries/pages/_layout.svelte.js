import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const Nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.navbar.svelte-ckhspp.svelte-ckhspp{height:2em;background:var(--color-primary)\n  }header.navbar.svelte-ckhspp section.svelte-ckhspp{height:100%}img.logo.svelte-ckhspp.svelte-ckhspp{height:100%}a.svelte-ckhspp.svelte-ckhspp{color:var(--color-light)}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="navbar svelte-ckhspp"><section class="navbar-section svelte-ckhspp"><img src="favicon.png" alt="logo" class="logo svelte-ckhspp"></section>
  <section class="navbar-section svelte-ckhspp"><nav><a href="/about" class="svelte-ckhspp">About</a>
      <a href="/register" class="svelte-ckhspp">Register</a></nav></section>
      
</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
