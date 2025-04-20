export type Asset = {
    _id: string;
    name: string;
    symbol: string;
    price: number;
    image_url: string;    

}

export type WalletAssets = {
    _id: string;
    asset: Asset
    shares: number;
}

export type Wallet = {
    _id: string;
    assets: WalletAssets[];

}