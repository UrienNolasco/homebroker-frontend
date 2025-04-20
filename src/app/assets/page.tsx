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

export async function getAssets(): Promise<Wallet> {
  const response = await fetch(`http://localhost:3000/assets`);
  return response.json();
}

export default async function AssetsListPage({
  searchParams,
}: {
  searchParams: Promise<{ wallet_id: string }>;
}) {
  const { wallet_id } = await searchParams;
  const wallet = await getAssets();
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
            {wallet.assets.map(
              (walletAsset, key) => (
                console.log(walletAsset),
                (
                  <TableRow key={key}>
                    <TableCell>
                      <div className="flex space-x-1">
                        <div className="content-center">
                          <Image
                            src={walletAsset.asset.image_url}
                            alt={walletAsset.asset.symbol}
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="flex flex-col text-sm">
                          <span>{walletAsset.asset.name}</span>
                          <span>{walletAsset.asset.symbol}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>R$ {walletAsset.asset.price}</TableCell>

                    <TableCell>
                      <Button color="light">Comprar/Vender</Button>
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
