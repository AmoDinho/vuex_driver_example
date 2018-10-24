<template>

<div>
  <h1>Driver List </h1>

  <ul>
  <li v-for="driver in drivers">
    {{driver.name}} - {{  driver.route}} - {{driver.seats}}- 
    {{driver.price}}
     
  </li>
  </ul>
  </div>
</template>


<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      drivers: state => state.drivers.carriers
    })
  },
  methods: {
    ...mapActions({
      fetchDrivers: "drivers/fetchDrivers"
    })
  }
};
</script>
