import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../chunks/index2.js";
import "../../../chunks/createSigningKeyPair.js";
import "toastify-js";
import nacl from "tweetnacl/nacl-fast.js";
import util from "tweetnacl-util";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-skwoza{display:flex;align-items:center;justify-content:center;height:100vh;background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://wallpapercave.com/wp/wp3980262.jpg");background-size:cover}.card.svelte-skwoza{min-width:25em;padding:2em;background:var(--color-light);margin:2 auto;border:0.3em solid var(--color-primary);border-radius:0.2em}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  nacl.util = util;
  let username = "";
  let password = "";
  let confirmPassword = "";
  let acceptTOU = false;
  $$result.css.add(css);
  return `<main class="svelte-skwoza"><div class="card svelte-skwoza"><form class="form-horizontal" method="POST"><h1>Register</h1>
  <h2>Welcome ${escape(username)}</h2>

  <div class="form-group"><div class="col-3 col-sm-12"><label class="form-label" for="username">Username</label></div>
    <div class="col-9 col-sm-12"><input class="form-input" type="text" name="username"${add_attribute("value", username, 0)}></div></div>

  <div class="form-group"><div class="col-3 col-sm-12"><label class="form-label" for="password">Password</label></div>
    <div class="col-9 col-sm-12"><input class="form-input" type="password" name="password"${add_attribute("value", password, 0)}></div></div>

  <div class="form-group"><div class="col-3 col-sm-12"><label class="form-label" for="confirmPassword">Confirm Password</label></div>
    <div class="col-9 col-sm-12"><input class="form-input" type="password" name="confirmPassword"${add_attribute("value", confirmPassword, 0)}></div></div>

  <div class="form-group"><label class="form-checkbox" for="input-acceptTOU">I accept the Terms of Use &amp; Privacy Policy
      <input type="checkbox" id="input-acceptTOU" name="acceptTOU"${add_attribute("checked", acceptTOU, 1)}>
      <i class="form-icon"></i></label></div>
  

  <button type="submit" class="btn btn-primary btn-block">Register</button></form></div></main>`;
});
export {
  Page as default
};
