import {Operator} from "../../common/types";

export function getOperatorIcon(operator: Operator) {
  return `/logos/${operator.toLowerCase()}.png`;
}