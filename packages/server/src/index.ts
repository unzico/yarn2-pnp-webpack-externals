import { error } from "@myapp/common";
import _ from "lodash";

function main() {
  const n = _.sample([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  error(`Oh no, it's number ${n}!`);
}

main();
