const presets = [
  [
    "@babel/env",
    {
      targets: {
        ie: "8",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };