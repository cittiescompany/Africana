'use client'
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useAuth } from "@/hooks/use-auth";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Nav() {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
      {
        name:"Send Money",
        href:"/send-money"
      },
      {
        name:"Transfer History",
        href:"/send-money"
      },
      {
        name:"Invest",
        href:"/send-money"
      },
  ];

  return (
    <Navbar isBordered className="h-[60px] bg-white" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">AFRICANA</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden w-[650px] sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Africana</p>
        </NavbarBrand>
        <div className="flex  w-[400px] justify-between">
          {
            menuItems.map((item, index) => (
              <NavbarItem key={`${item.name}-${index}`}>
                <Link className="text-blue-700" href={item.href}>
                  {item.name}
                </Link>
              </NavbarItem>
            ))
          }
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">
         <b>Hi {user?.name}</b>
        </NavbarItem>
       
      </NavbarContent>

      <NavbarMenu className="mt-5">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-blue-700 hover:text-blue-800 font-bold"
              color={ "foreground"  }
              href="#"
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

