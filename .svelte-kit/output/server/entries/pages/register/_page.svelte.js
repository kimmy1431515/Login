import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../chunks/index2.js";
import "../../../chunks/createSigningKeyPair.js";
import "toastify-js";
import nacl from "tweetnacl/nacl-fast.js";
import util from "tweetnacl-util";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-1d3defu{display:flex;align-items:center;justify-content:center;height:100%;background:linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("https://wallpapercave.com/wp/wp3980262.jpg");background-size:cover}.card.svelte-1d3defu{min-width:25em;padding:2em;background:var(--color-light);margin:2 auto}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  nacl.util = util;
  let username = "";
  let password = "";
  $$result.css.add(css);
  return `<main class="svelte-1d3defu"><div class="card svelte-1d3defu"><form class="form-horizontal" method="POST"><h1>Register</h1>
  <h2>Welcome ${escape(username)}</h2>

  <div class="form-group"><div class="col-3 col-sm-12"><label class="form-label" for="username">Username</label></div>
    <div class="col-9 col-sm-12"><input class="form-input" type="text" name="username"${add_attribute("value", username, 0)}></div></div>

  <div class="form-group"><div class="col-3 col-sm-12"><label class="form-label" for="password">Password</label></div>
    <div class="col-9 col-sm-12"><input class="form-input" type="password" name="password"${add_attribute("value", password, 0)}></div></div>

  <button type="submit" class="btn btn-primary btn-block">Register</button></form></div></main>`;
});
export {
  Page as default
};
