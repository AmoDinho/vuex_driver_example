import manifest from "@/api/manifest";

export default {
  namespaced: true,
  state: {
    carriers: []
  },
  getters: {},
  mutations: {},
  actions: {
    fetchDrivers({ commit }) {
      return new Promise((resolve, reject) => {
        manifest.getDrivers(drivers => {
          commit("setDrivers", drivers);
          resolve();
        });
      });
    }
  }
};
