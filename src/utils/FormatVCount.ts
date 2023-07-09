// const formatViewCount = (count: number) => {
//   if (count >= 1000000) {
//     return (
//       (count / 1000000).toLocaleString(undefined, {
//         maximumFractionDigits: 1,
//       }) + "M"
//     );
//   } else if (count >= 1000) {
//     return (
//       (count / 1000).toLocaleString(undefined, { maximumFractionDigits: 1 }) +
//       "K"
//     );
//   } else {
//     return count.toLocaleString();
//   }
// };

import numeral from "numeral";

const formatCount = (count: number) => {
  if (count >= 1000000000) {
    return numeral(count / 1000000000).format("0.0a") + "B";
  } else if (count >= 1000000) {
    return numeral(count / 1000000).format("0.0a") + "M";
  } else if (count >= 1000) {
    return numeral(count / 1000).format("0a") + "K";
  } else {
    return numeral(count).format("0,0");
  }
};

export { formatCount };
