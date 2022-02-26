import { useCallback } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { RPC_URL, CHAIN_ID, CHAIN_ID_TESTNET } from 'constants/common';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

export default () => {
  const { chainId } = useWeb3React();

  const getContract = useCallback(
    async (address, abi) => {
      if (chainId) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        return new ethers.Contract(address, abi, signer);
      } else {
        const provider = new ethers.providers.JsonRpcProvider(
          isMainnet
            ? RPC_URL[CHAIN_ID]
            : RPC_URL[CHAIN_ID_TESTNET],
          isMainnet ? CHAIN_ID : CHAIN_ID_TESTNET
        );

        return new ethers.Contract(address, abi, provider);
      }
    },
    [chainId]
  );

  return { getContract };
};
