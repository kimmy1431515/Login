<script>
  import createSigningKeyPair from "$lib/createSigningKeyPair.js"
  import { toast } from "$lib/toast.js"
	import { onMount } from 'svelte'
  import { user } from "$lib/stores.js"
  import pick from 'ramda/src/pick'
  import pipe from 'ramda/src/pipe'
  import andThen from 'ramda/src/andThen'
  import { goto } from '$app/navigation'
 // import registerOnServer from "../../../api/user/register.js"
import nacl from "tweetnacl/nacl-fast.js"
import util from  "tweetnacl-util"
  import post from "$lib/post.js"
nacl.util = util
  let username = ""
    let password = ""
    let confirmPassword = ""
    let infoMessage = ""
    let acceptTOU = false
  const baseUrl = "https://add-mo-na-yan.vercel.app"
  const url = "https://add-mo-na-yan.vercel.app/api/user/register"

  const register = 
    async () => {

      if ( username.length < 5) {
        toast("your username must be at least 5 characters")
        return
      } else if ( password.length < 6) {
        toast("your password must be at least 6 characters")
        return
      } else if (password !== confirmPassword) {
        toast("Passwords are not the same.")
        return
      } else if (!acceptTOU){
        toast("Please accept the Terms of Usage")
        return
      }

      //const passwordHash = nacl.util.encodeBase64(nacl.hash(nacl.util.decodeUTF8(password)))
      const keyPair = await createSigningKeyPair({username, password})
        toast(JSON.stringify(keyPair))
      const response = await post(url,{username: username, publicKeyBase64: keyPair.publicKeyBase64 })

        /*
      const key = await createSigningKeyPair({username, password})
      const response = await pipe
      ( createSigningKeyPair
      , andThen( x => post(url, pick(["username","publicKeyBase64"],x)))
      )({username, password})
      */
      console.log('response')
      console.log(response)
      if(response.status === 201) {
          goto(baseUrl)
          toast("Registration Successful, logged in as " + username) 
        }
      if(response.status !== 201) toast("Registration failed, perhaps the user account is already registered.") 
    }

    onMount(async () => {})

</script>


<main><div class="card">
  
<form class="form-horizontal" method="POST" on:submit|preventDefault={register}>
  <h1>Register</h1>
  <h2>Welcome {username}</h2>

  <div class="form-group">
    <div class="col-3 col-sm-12">
      <label class="form-label" for="username">Username</label>
    </div>
    <div class="col-9 col-sm-12">
      <input class="form-input" type="text" name="username" bind:value={username}>
    </div>
  </div>

  <div class="form-group">
    <div class="col-3 col-sm-12">
      <label class="form-label" for="password">Password</label>
    </div>
    <div class="col-9 col-sm-12">
      <input class="form-input" type="password" name="password" bind:value={password}>
    </div>
  </div>

  <div class="form-group">
    <div class="col-3 col-sm-12">
      <label class="form-label" for="confirmPassword">Confirm Password</label>
    </div>
    <div class="col-9 col-sm-12">
      <input class="form-input" type="password" name="confirmPassword" bind:value={confirmPassword}>
    </div>
  </div>

  <div class="form-group">
    <label class="form-checkbox" for="input-acceptTOU">I accept the Terms of Use & Privacy Policy
      <input type="checkbox" id="input-acceptTOU" name="acceptTOU" bind:checked={acceptTOU} />
      <i class="form-icon"></i>
    </label>
  </div>
  <!--
  <div class="form-group">
    <div class="col-3 col-sm-12">
      <label class="form-label" for="acceptTOU">I accept the Terms of Use & Privacy Policy</label>
    </div>
    <div class="">
      <input class="form-input" type="checkbox" name="acceptTOU" bind:value={acceptTOU}>
    </div>
  </div>
  -->

  <button type="submit" class="btn btn-primary btn-block">Register</button>

</form>
</div></main>

<style lang="scss">
  main{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient( rgba(0,0,0,.5),rgba(0,0,0,.5) ), url("https://wallpapercave.com/wp/wp3980262.jpg");
    background-size: cover;
  }
  .card{
    min-width: 25em;
    padding: 2em;
    background: var(--color-light);
    margin: 2 auto;
    border: .3em solid var(--color-primary);
    border-radius: .2em;
  }
</style>
