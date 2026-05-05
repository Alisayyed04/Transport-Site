import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowRight, Menu, Truck, X } from "lucide-react";

const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/tracking", label: "Tracking" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
];

function linkClass({ isActive }) {
    return [
        "transition",
        isActive ? "text-[#9a5b38]" : "text-[#5f544b] hover:text-[#9a5b38]",
    ].join(" ");
}

export default function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-[#e8dfd6] bg-[rgba(251,250,247,0.86)] backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
                <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#b46a43]/20 bg-white shadow-sm">
                        <Truck className="h-5 w-5 text-[#9a5b38]" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold tracking-wide text-[#1f1a16]">DK Transport</p>
                        <p className="text-xs text-[#7d6f65]">Safe transport and seamless parcel flow</p>
                    </div>
                </Link>

                <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
                    {navItems.map((item) => (
                        <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-[#b46a43]/20 bg-[#fffdfb] px-4 py-2 text-sm font-semibold text-[#2a231e] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        Book Now
                        <ArrowRight className="h-4 w-4 text-[#9a5b38]" />
                    </Link>

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e6dad0] bg-white text-[#2a231e] shadow-sm md:hidden"
                        aria-label="Toggle menu"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {open ? (
                <div className="border-t border-[#eee4db] bg-[rgba(251,250,247,0.96)] px-5 py-4 md:hidden">
                    <nav className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-medium">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                className={linkClass}
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            ) : null}
        </header>
    );
}