"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "1", href: "projects", text: "Projects" },
    { id: "2", href: "skills", text: "Skills" },
    { id: "3", href: "experience", text: "Experience" },
    { id: "4", href: "contact", text: "Contact" },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold text-white hover:text-tGreen transition-colors"
        >
          mori
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              asChild
              className="text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <a href={`#${link.href}`}>{link.text}</a>
            </Button>
          ))}
          <Button
            asChild
            size="sm"
            className="ml-2 bg-tGreen hover:bg-emerald-600 text-white"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] bg-slate-950 border-slate-800"
          >
            <div className="flex flex-col gap-4 mt-8">
              <a
                href="#hero"
                onClick={handleLinkClick}
                className="text-2xl font-bold text-white hover:text-tGreen transition-colors mb-4"
              >
                mori
              </a>
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.href}`}
                  onClick={handleLinkClick}
                  className="text-lg text-slate-300 hover:text-white transition-colors py-2"
                >
                  {link.text}
                </a>
              ))}
              <Button
                asChild
                className="mt-4 bg-tGreen hover:bg-emerald-600 text-white"
              >
                <a href="#contact" onClick={handleLinkClick}>
                  Get in Touch
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
