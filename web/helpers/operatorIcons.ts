import { Operator } from "@prisma/client";

export function getOperatorIcon(operator: Operator) {
  return `/logos/${operator}.png`;
}