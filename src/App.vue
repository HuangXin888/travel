<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="less">
#app {
  max-width:640px;
  min-width:320px;
  position: relative;
  margin: auto;
}
</style>
