/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Home, Calendar } from "lucide-react";


type NavItem = {
    href: string;
    label: string;
    icon: any;
};

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navItems: NavItem[] = [
        { href: "/", label: "Home", icon: Home },
        { href: "/marketplace", label: "Marketplace", icon: ShoppingCart },
        { href: "/booking", label: "Booking", icon: Calendar },
    ];
    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/70 backdrop-blur border-b">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="font-bold text-lg">
                    Global MarketX
                </Link>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-2 hover:text-blue-500 transition"
                            >
                                <Icon size={18} />
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <button className="relative p-2 rounded-full border">
                        <ShoppingCart size={18} />
                        <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
                            0
                        </span>
                    </button>

                    {/* Mobile button */}
                    <button className="md:hidden" onClick={() => setOpen(!open)}>
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden px-4 pb-4 space-y-3 border-t">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 py-2"
                            >
                                <Icon size={18} />
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </header>
    );
}