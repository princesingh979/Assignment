'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, link} from "@nextui-org/react";
import Login from "@/app/login/page";

const NavBar=()=> {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "customercare",
    "Help & Feedback",
    
  ];

  return (

    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:"
        />
        <NavbarBrand>
        
          <p className=" text-2xl text-blue-900">Facebook</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
        
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" href="register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem >
        <Button as={Link} color="success" href="game" variant="flat">
            Game
          </Button>
        </NavbarItem>
          <NavbarItem >
        <Button as={Link} color="danger" href="calculator" variant="flat">
            Calculator
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    
  );
}
export default NavBar