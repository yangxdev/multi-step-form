// jsx file containing prices based on plan and addons
// Path: src/js/resources/pricing.jsx

import React from "react";

const pricing = {
  plans: {
    monthly: {
      arcade: {
        price: 9,
      },
      advanced: {
        price: 12,
      },
      pro: {
        price: 15,
      },
    },
    yearly: {
      arcade: {
        price: 90,
        monthsFree: 2,
      },
      advanced: {
        price: 120,
        monthsFree: 2,
      },
      pro: {
        price: 150,
        monthsFree: 2,
      },
    },
  },
  addons: {
    monthly: {
      "online-service": {
        price: 1,
      },
      "larger-storage": {
        price: 2,
      },
      "customizable-profile": {
        price: 2,
      },
    },
    yearly: {
      "online-service": {
        price: 10,
      },
      "larger-storage": {
        price: 20,
      },
      "customizable-profile": {
        price: 20,
      },
    },
  },
};

export default pricing;
