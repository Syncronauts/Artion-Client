import { ChainId } from '@sushiswap/sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { NetworkConnector } from './NetworkConnector';
import { RPC_URL } from 'constants/common';
import NEONRAIN_LOGO_URL from '../assets/svgs/logo_blue.svg';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const RPC = isMainnet
  ? {
      [ChainId.FANTOM]: RPC_URL[ChainId.FANTOM],
      [ChainId.MAINNET]: RPC_URL[ChainId.MAINNET],
    }
  : {
      [ChainId.FANTOM_TESTNET]: RPC_URL[ChainId.FANTOM_TESTNET],
      [ChainId.RINKEBY]: RPC_URL[ChainId.RINKEBY],
    };

export const network = new NetworkConnector({
  defaultChainId: ChainId.FANTOM,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
        ChainId.FANTOM, // fantom
        ChainId.MAINNET, // mainnet
      ]
    : [
        ChainId.FANTOM_TESTNET, // fantom testnet
        ChainId.RINKEBY, // rinkeby
      ],
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URL[ChainId.FANTOM], // TODO: change later
  appName: 'NeonRain',
  appLogoUrl: NEONRAIN_LOGO_URL,
  supportedChainIds: [ChainId.MAINNET, ChainId.RINKEBY, ChainId.FANTOM, ChainId.FANTOM_TESTNET],
});
