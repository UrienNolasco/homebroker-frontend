import { Asset, Wallet } from "@/models";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import AssetShow from "../components/AssetShow";
import ListAllWallets from "../components/ListAllWallets";

import { getAssets, getMyWallet } from "../queires/queires";



export default async function AssetsListPage({
  searchParams,
}: {
  searchParams: Promise<{ wallet_id: string }>;
}) {
  const { wallet_id } = await searchParams;
  const assets = await getAssets();

  if (!wallet_id) {
    return <ListAllWallets />;
  }

  const wallet = await getMyWallet(wallet_id);

  if (!wallet) {
    return <ListAllWallets />;
  }

  return (
    <div className="flex flex-col space-y-5">
      <article className="format">
        <h1>Ativos</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableRow>
              <TableHeadCell>Ativo</TableHeadCell>
              <TableHeadCell>Cotação</TableHeadCell>
              <TableHeadCell>Comprar/Vender</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map((asset, key) => (
              <TableRow key={key}>
                <TableCell>
                  <AssetShow asset={asset} />
                </TableCell>
                <TableCell>R$ {asset.price}</TableCell>

                <TableCell>
                  <Button color="light">Comprar/Vender</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
