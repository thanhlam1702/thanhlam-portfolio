<template>
  <section class="banner">
    <div class="container">
      <div class="banner__title">
        <h2 class="banner__hello">Hello</h2>
        <h2 class="banner__title-text">I'm Thanh Lãm</h2>
        <h2 class="banner__title-text">Front End Web Developer</h2>
      </div>
      <!-- <div class="banner__short">
        <div class="banner__short-item img">1</div>
        <div class="banner__short-item">2</div>
        <div class="banner__short-item">3</div>
        <div class="banner__short-item">4</div>
        <div class="banner__short-item">5</div>
      </div> -->
    </div>
  </section>
</template>

<style lang="scss">
@import 'assets/scss/core/variables.scss';
@import 'assets/scss/core/mixins.scss';
.banner {
  &__title {
    margin-top: 80px;
    font-size: 40px;
    position: relative;

    &-text {
      margin-top: 16px;
      text-align: center;
      font-family: 'glysa';
      color: $cl-main-mix;
      z-index: 2;
      position: relative;
      //   text-shadow: 1px 1px 0 white, 2px 2px 0 black, 3px 3px 0 white, 4px 4px 0 black;
    }
  }
  &__hello {
    font-size: 320px;
    font-family: intersb;
    top: 0;
    color: #252525;
    z-index: 1;
    @include mid-x();
  }
  &__short {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 400px 1fr;
    grid-template-rows: auto;
    &-item {
      &.img {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
      }
    }
  }
}
</style>