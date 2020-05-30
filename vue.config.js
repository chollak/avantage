// module.exports = {
//     css: {
//         loaderOptions: {
//             sass: {
//                 data: `
//         @import "@/assets/scss/custom.scss";
//         `
//             }
//         }
//     }
// };

module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/scss/custom.scss";`
        }
      }
    }
  };