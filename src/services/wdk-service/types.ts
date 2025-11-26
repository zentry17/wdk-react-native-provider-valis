export enum AssetTicker {
  BTC = 'btc',
  USDT = 'usdt',
  XAUT = 'xaut',
  VNET = 'vnet',
}

export enum NetworkType {
  ETHEREUM = 'ethereum',
  VALIS = 'valis',
}

// export const AssetAddressMap = {

//   [AssetTicker.USDT]: {
//     [NetworkType.ETHEREUM]: 'ethereum',
//   },
//   [AssetTicker.XAUT]: {
//     [NetworkType.ETHEREUM]: 'ethereum',
//   },
//   [AssetTicker.VNET]: {
//     [NetworkType.VALIS]: 'valis',
//   },
// };

export const AssetAddressMap: Partial<
  Record<AssetTicker, Partial<Record<NetworkType, string>>>
> = {
  [AssetTicker.USDT]: {
    [NetworkType.ETHEREUM]: 'ethereum',
  },
  [AssetTicker.XAUT]: {
    [NetworkType.ETHEREUM]: 'ethereum',
  },
  [AssetTicker.VNET]: {
    [NetworkType.VALIS]: 'valis',
  },
};

export const AssetBalanceMap: Partial<
  Record<AssetTicker, Partial<Record<NetworkType, string>>>
> = {
  [AssetTicker.USDT]: {
    [NetworkType.ETHEREUM]: 'ethereum',
  },
  [AssetTicker.XAUT]: {
    [NetworkType.ETHEREUM]: 'ethereum',
  },
};

export interface Amount {
  denomination: AssetTicker;
  value: string;
  networkType: NetworkType;
}

export interface Wallet {
  id: string;
  name: string;
  enabledAssets: AssetTicker[];
}

export type AddressMap = Partial<Record<NetworkType, string>>;
export type BalanceMap = Record<
  string,
  { balance: number; asset: AssetTicker }
>;
export type TransactionMap = Partial<Record<NetworkType, Transaction[]>>;

export interface Transaction {
  blockchain: string;
  blockNumber: number;
  transactionHash: string;
  transferIndex: number;
  token: string;
  amount: string;
  timestamp: number;
  transactionIndex: number;
  logIndex: number;
  from: string;
  to: string;
}

export interface PaymasterToken {
  address: string;
}

export interface EVMChainConfig {
  chainId: number;
  blockchain: string;
  provider: string;
  bundlerUrl: string;
  paymasterUrl: string;
  paymasterAddress: string;
  entrypointAddress: string;
  transferMaxFee: number;
  swapMaxFee: number;
  bridgeMaxFee: number;
  paymasterToken: PaymasterToken;
  safeModulesVersion?: string;
}

export interface ValisChainConfig {
  provider: string; // WebSocket URL
}
export interface ChainsConfig {
  ethereum?: EVMChainConfig;
  valis?: ValisChainConfig;
}
