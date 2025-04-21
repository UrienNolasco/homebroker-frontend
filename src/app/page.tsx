import { Wallet } from "@/models";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Image from "next/image";
import AssetShow from "./components/AssetShow";
import ListAllWallets from "./components/ListAllWallets";
import Link from "next/link";

export async function getMyWallet(walletId: string): Promise<Wallet> {
  const response = await fetch(`http://localhost:3000/wallets/${walletId}`);
  return response.json();
}

export default async function MyWalletList({
  searchParams,
}: {
  searchParams: Promise<{ wallet_id: string }>;
}) {
  const { wallet_id } = await searchParams;

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
        <h1>Minha Carteira</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableRow>
              <TableHeadCell>Ativo</TableHeadCell>
              <TableHeadCell>Cotação</TableHeadCell>
              <TableHeadCell>Quantidade</TableHeadCell>
              <TableHeadCell>Comprar/Vender</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wallet.assets.map(
              (walletAsset, key) => (
                console.log(walletAsset),
                (
                  <TableRow key={key}>
                    <TableCell>
                      <AssetShow asset={walletAsset.asset} />
                    </TableCell>
                    <TableCell>R$ {walletAsset.asset.price}</TableCell>
                    <TableCell>{walletAsset.shares}</TableCell>
                    <TableCell>
                      <Button
                        color="light"
                        as={Link}
                        href={`/assets/${walletAsset.asset.symbol}`}
                      >
                        Comprar/Vender
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
