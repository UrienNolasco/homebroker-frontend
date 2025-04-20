import AssetShow from "@/app/components/AssetShow";
import { Asset } from "@/models";

export async function getAsset(symbol: string): Promise<Asset> {
  const response = await fetch(`http://localhost:3000/assets/${symbol}`);
  return response.json();
}

export default async function AssetDashBoard({
  params,
}: {
  params: Promise<{ assetSymbol: string }>;
}) {
    const {assetSymbol} = await params;

    const asset = await getAsset(assetSymbol)
  return ( 
    <div>
      <div>
        <AssetShow asset={asset} />
      </div>
    </div>
  );
}
