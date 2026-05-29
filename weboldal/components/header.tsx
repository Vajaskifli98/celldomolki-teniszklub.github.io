"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"

const navItems = [
    { name: "Pályák", href: "/courts" },
    { name: "Szolgáltatások", href: "#services" },
    { name: "Edzők", href: "#coaches" },
    { name: "Tagság", href: "#membership" },
    { name: "Kapcsolat", href: "#contact" },
];

export default function Header() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border text-white p-4">
            <div className="container mx-auto px-6 ">
                <div className="flex items-center justify-between gap-4 h-20">
                    <Link href="/" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center text-primary-foreground justify-center font-serif text-2xl">
                            C
                        </div>
                        <h1 className="text-xl md:text-2xl xl:text-3xl    font-serif text-black">Celldömölki Tenisz Klub</h1>
                    </Link>

                    <nav className="hidden xl:flex items-center gap-6">
                        {
                            navItems.map((item) => (
                                <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                                    {item.name}
                                </Link>
                            ))
                        }
                    </nav>
                    <div className="hidden xl:flex items-center gap-5">
                        <Button variant="outline" className="text-black rounded-xl">Bejelentkezés</Button>
                        <Button className="rounded-xl">Pályafoglalás</Button>
                    </div>

                    <Button variant={"outline"} className="xl:hidden p-2 text-muted-foreground hover:text-foreground transition-colors duration-300  rounded-lg"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label="Menu"

                    >
                        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>

                   
                </div>
            </div>

             {isMobileOpen && (
                        <div className="xl:hidden bg-background  ">
                            <nav className="container  mx-auto  px-6 py-6 flex flex-col gap-6">
                                {
                                    navItems.map((item) => (
                                        <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                                            {item.name}
                                        </Link>
                                    ))
                                }
                            </nav>
                            <div className="flex flex-col gap-6 px-6 mx-auto border-t border-border pt-4">
                                <Button variant="outline" className="text-black rounded-xl">Bejelentkezés</Button>
                                <Button className="rounded-xl">Pályafoglalás</Button>
                            </div>
                        </div>
                    )}
        </header>
    );
}
