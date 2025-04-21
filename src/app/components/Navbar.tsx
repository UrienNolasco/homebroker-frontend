"use client";

import {
  NavbarBrand,
  Navbar as FlowbiteNavbar,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
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
        <Link href={`/?wallet_id=${wallet_id}`} passHref legacyBehavior>
          <NavbarLink className="text-xl">Carteira</NavbarLink>
        </Link>

        <Link href={`/assets/?wallet_id=${wallet_id}`} passHref legacyBehavior>
          <NavbarLink className="text-xl">Ativos</NavbarLink>
        </Link>

        <Link href={`/orders?wallet_id=${wallet_id}`} passHref legacyBehavior>
          <NavbarLink className="text-xl" href="#">
            Ordens
          </NavbarLink>
        </Link>
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
}
