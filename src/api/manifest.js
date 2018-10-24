const _drivers = [
  { id: 1, name: "Riyaad Smith", route: "CPT Main Road", seats: 15, price: 16 },
  {
    id: 2,
    name: "Simthembisa Mabuza",
    route: "Constaniaburg",
    seats: 10,
    price: 20
  },
  { id: 3, name: "Dylan De Bryun", route: "Airport", seats: 20, price: 50 },
  { id: 4, name: "Thompson Nkonzo", route: "Gugulethu", seats: 15, price: 13 }
];

export default {
  getDrivers(cb) {
    setTimeout(() => cb(_drivers), 100);
  },

  bookDrivers(drivers, cb, errorCB) {
    setTimeout(() => {
      Math.random() > 0.5 || navigator.userAgent.indexOf("PhantomJS") > -1
        ? cb()
        : errorCB();
    }, 100);
  }
};
