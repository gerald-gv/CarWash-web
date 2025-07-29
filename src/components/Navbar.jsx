import React from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Imagen2 from "/images/Logo.png";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Servicios", path: "/servicios" },
    { name: "FAQs", path: "/faqs" },
    { name: "Tus Reservas", path: "/reservas" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="aspect-square object-cover rounded-full w-14 h-auto transition-transform duration-300 hover:scale-105"
            src={Imagen2}
            alt="Logo"
          />
          <span className="text-2xl font-bold text-gray-900">CarWash</span>
        </Link>
        {/* Menu Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4 md:space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="relative group text-lg md:text-xl font-medium text-gray-500 hover:text-blue-900 transition-colors"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-900 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Menú Móvil */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden bg-transparent" >
              <MenuIcon className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            <SheetHeader>
              <SheetTitle>
                <VisuallyHidden>Menu</VisuallyHidden>
                </SheetTitle>
              <SheetDescription>
                <VisuallyHidden>Opciones de Menu</VisuallyHidden>
              </SheetDescription>
            </SheetHeader>
            <nav>
              <ul className="flex flex-col gap-4 py-6">
                {menuItems.map(item => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-lg font-medium">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar