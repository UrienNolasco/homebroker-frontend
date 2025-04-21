"use client";

import {
  NavbarBrand,
  Navbar as FlowbiteNavbar,
  NavbarToggle,
  NavbarCollapse,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Navbar() {
  const searchParams = useSearchParams();
  const wallet_id = searchParams.get("wallet_id");

  return (
    <FlowbiteNavbar fluid rounded>
      <NavbarBrand>
        <Image
          className="mr-3"
          alt="Full Cicle Invest"
          src="/logo.png"
          width={30}
          height={30}
        />
        <span className="text-xl">FullCycle Invest</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <div className="content-center">
          Olá, {wallet_id?.substring(0, 5)}...
        </div>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link
          href={`/?wallet_id=${wallet_id}`}
          className="block py-2 pl-3 pr-4 md:p-0 text-xl text-gray-700 hover:text-blue-700"
        >
          Carteira
        </Link>

        <Link
          href={`/assets/?wallet_id=${wallet_id}`}
          className="block py-2 pl-3 pr-4 md:p-0 text-xl text-gray-700 hover:text-blue-700"
        >
          Ativos
        </Link>

        <Link
          href={`/orders?wallet_id=${wallet_id}`}
          className="block py-2 pl-3 pr-4 md:p-0 text-xl text-gray-700 hover:text-blue-700"
        >
          Ordens
        </Link>
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
}
