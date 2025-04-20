export type Asset = {
  _id: string;
  name: string;
  symbol: string;
  price: number;
  image_url: string;
};

export type WalletAssets = {
  _id: string;
  asset: Asset;
  shares: number;
};

export type Wallet = {
  _id: string;
  assets: WalletAssets[];
};

export type Order = {
  _id: string;
  asset: Asset;
  shares: number;
  price: number;
  type: OrderType;
  status: OrderStatus;
};

export enum OrderType {
  BUY = "BUY",
  SELL = "SELL",
}

export enum OrderStatus {
  PENDING = "PENDING",
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  FAILED = "FAILED",
}
