<template>
  <nav id="navbar" class="navbar is-fixed-top  is-primary ">
    <div id="specialShadow" class="bd-special-shadow" style="opacity: 0; transform: scaleY(1);"></div>
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          Vue.js Quiz
        </a>
        <a class="navbar-item is-hidden-desktop" href="https://github.com/JuliaShypat" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fa fa-lg fa-github"></i>
          </span>
        </a>

        <a class="navbar-item is-hidden-desktop" href="https://twitter.com/shypaj" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fa fa-lg fa-twitter"></i>
          </span>
        </a>
      </div>

      <div id="navMenuDocumentation" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item" active-class="is-active" exact>Home</router-link>
          <router-link to = "/quizes" class="navbar-item"  active-class="is-active">Quizes</router-link>
        </div>

        <div class="navbar-end">
          <a class="navbar-item is-hidden-desktop-only" href="https://github.com/JuliaShypat" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fa fa-lg fa-github"></i>
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/shypaj" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fa fa-lg fa-twitter"></i>
            </span>
          </a>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style>

</style>
