import {Operator} from "@common/types";

import WizzAirLogo from '../../public/logos/wizzair.svg';
import RyanAirLogo from '../../public/logos/ryanair.png';

const Logos = {
  [Operator.WIZZAIR]: WizzAirLogo,
  [Operator.RYANAIR]: RyanAirLogo,
  [Operator.TRANSAVIA]: ''
}

export default Logos;