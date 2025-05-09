import AssetShow from "@/app/components/AssetShow";
import { ChartComponent } from "@/app/components/ChartComponent";
import ListAllWallets from "@/app/components/ListAllWallets";
import OrderForm from "@/app/components/OrderForm";
import { TabsItem } from "@/app/components/tabs";

import { getAsset, getMyWallet } from "@/app/queires/queires";
import { Asset, OrderType } from "@/models";
import { Card, TabItem, Tabs } from "flowbite-react";

export default async function AssetDashBoard({
  params,
  searchParams,
}: {
  params: Promise<{ assetSymbol: string }>;
  searchParams: Promise<{ wallet_id: string }>;
}) {
  const { assetSymbol } = await params;
  const { wallet_id: walletId } = await searchParams;

  if (!walletId) {
    return <ListAllWallets />;
  }

  const wallet = await getMyWallet(walletId);

  if (!wallet) {
    return <ListAllWallets />;
  }

  const asset = await getAsset(assetSymbol);
  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <div className="flex flex-col space-y-2">
        <AssetShow asset={asset} />
        <div className="ml-2 font-bold text-2xl">R$ {asset.price}</div>
      </div>
      <div className="grid grid-cols-5 flex-grow gap-2">
        <div className="col-span-2">
          <Card>
            <Tabs>
              <TabsItem
                active={true}
                title={<div className="text-blue-700">Comprar</div>}
              >
                <OrderForm
                  asset={asset}
                  walletId={walletId}
                  type={OrderType.BUY}
                />
              </TabsItem>
              <TabsItem
                active={true}
                title={<div className="text-red-700">Venda</div>}
              >
                <OrderForm
                  asset={asset}
                  walletId={walletId}
                  type={OrderType.SELL}
                />
              </TabsItem>
            </Tabs>
          </Card>
        </div>
        <div className="col-span-3 flex flex-grow">
          {/* <ChartComponent header={'xpto'} ref={} /> */}
        </div>
      </div>
    </div>
  );
}
