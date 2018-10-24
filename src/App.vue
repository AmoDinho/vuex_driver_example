<template>
  <div id="app">
    <DriverList/>
    <hr>
    <Trips/>
  </div>
</template>

<script>
import DriverList from "./components/DriverList";
import Trips from "./components/Trips";

export default {
  name: "App",
  components: {
    DriverList,
    Trips
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
