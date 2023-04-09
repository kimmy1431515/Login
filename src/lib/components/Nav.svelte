<script>
  import { user } from "$lib/stores.js"
</script>

<header class="navbar">
  <section class="navbar-section">
    <img src="favicon.png" alt="logo" class="logo"/>
  </section>
  <section class="navbar-section">
    <nav>
      <a href="/about">About</a>
      <a href="/register">Register</a>
    </nav>
  </section>
      <!--
  <span>Welcome {user.username}</span>
  <a href="cart"> Cart
      -->
</header>

<style>
  header.navbar{
    height: 2em;
    background: var(--color-primary)
  }
  header.navbar section{
    height: 100%;
  }
  img.logo {
    height: 100%;
  }
  a {
    color: var(--color-light);
  }

</style>
