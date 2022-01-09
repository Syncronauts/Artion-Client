import { ChainId } from '@sushiswap/sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { NetworkConnector } from './NetworkConnector';

import NEONRAIN_LOGO_URL from '../assets/svgs/logo_blue.svg';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const RPC = isMainnet
  ? {
      [ChainId.FANTOM]: 'https://rpc.ftm.tools',
      [ChainId.MAINNET]: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
    }
  : {
      [ChainId.FANTOM_TESTNET]: 'https://rpc.testnet.fantom.network',
      [ChainId.RINKEBY]: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
    };

export const network = new NetworkConnector({
  defaultChainId: ChainId.FANTOM,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
        250, // fantom
        1, // mainnet
      ]
    : [
        4002, // fantom testnet
        4, // rinkeby
      ],
});

export const walletlink = new WalletLinkConnector({
  url: 'https://rpc.ftm.tools', // TODO: change later
  appName: 'NeonRain',
  appLogoUrl: NEONRAIN_LOGO_URL,
  supportedChainIds: [1, 4, 250, 4002],
});
