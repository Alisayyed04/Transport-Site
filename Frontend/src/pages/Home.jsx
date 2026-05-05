import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    BadgeCheck,
    ChevronRight,
    MapPin,
    Package,
    Sparkles,
} from "lucide-react";
import PageShell from "../components/PageShell";
import { homeStats, trustPoints } from "../data/siteData";

export default function Home() {
    const [entered, setEntered] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add("scroll-smooth");
        document.body.style.overflow = entered ? "auto" : "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [entered]);

    return (
        <PageShell>
            <div
                className={`fixed inset-0 z-50 transition-all duration-700 ${entered ? "pointer-events-none opacity-0" : "opacity-100"
                    }`}
                aria-hidden={entered}
            >
                <button
                    type="button"
                    onClick={() => setEntered(true)}
                    className="absolute inset-0 h-full w-full cursor-pointer overflow-hidden"
                    aria-label="Enter site"
                >
                    <img
                        src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=2000&q=80"
                        alt="Train on railway"
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/72 via-white/55 to-[#f2e8dc]/62 backdrop-blur-[10px]" />
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white/92 to-transparent" />
                </button>

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
                    <div className="max-w-3xl rounded-[2rem] border border-white/50 bg-white/22 px-8 py-10 text-center shadow-[0_20px_80px_rgba(80,50,20,0.18)] backdrop-blur-xl md:px-12 md:py-14">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#b46a43]/20 bg-white/80 shadow-sm">
                            <Sparkles className="h-7 w-7 text-[#9a5b38]" />
                        </div>
                        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.38em] text-[#8c6a52]">
                            DK Transport
                        </p>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#1c1714] md:text-6xl">
                            A refined and trustworthy transport experience.
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#4f443d] md:text-base">
                            Click anywhere to enter the site.
                        </p>
                        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#b46a43]/20 bg-white/80 px-5 py-3 text-sm font-medium text-[#2f2722] shadow-sm">
                            Enter the platform
                            <ChevronRight className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </div>

            <main className={`transition-all duration-700 ${entered ? "blur-0 opacity-100" : "blur-md opacity-60"}`}>
                <section id="home" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#d8c2ad] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8c6a52] shadow-sm">
                            <Sparkles className="h-3.5 w-3.5" />
                            Reliable rail transport since 2012
                        </div>

                        <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-[#191512] md:text-7xl">
                            Built like a premium platform.
                            <span className="block text-[#9a5b38]">Run like a railway.</span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-[#5d5249] md:text-lg">
                            DK Transport is a railway-focused logistics business built around secure parcel movement,
                            clear coordination, and reliable delivery flow.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 rounded-full bg-[#1f1a16] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1f1a16]/10 transition hover:-translate-y-0.5 hover:bg-[#2b241f]"
                            >
                                Explore Services
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 rounded-full border border-[#d8c2ad] bg-white px-6 py-3 text-sm font-semibold text-[#2a231e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b46a43]/30"
                            >
                                About the brand
                                <ChevronRight className="h-4 w-4 text-[#9a5b38]" />
                            </Link>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {homeStats.map(([value, label]) => (
                                <div
                                    key={label}
                                    className="rounded-[1.75rem] border border-[#eadfd4] bg-white p-5 shadow-[0_10px_30px_rgba(75,45,18,0.04)]"
                                >
                                    <p className="text-2xl font-semibold text-[#1f1a16]">{value}</p>
                                    <p className="mt-1 text-sm text-[#7b6e64]">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(154,91,56,0.14),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(180,106,67,0.10),transparent_35%)] blur-2xl" />

                        <div className="relative overflow-hidden rounded-[2rem] border border-[#e9ddd2] bg-white shadow-[0_20px_80px_rgba(67,42,18,0.08)]">
                            <div className="border-b border-[#eee4db] px-6 py-5">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a5b38]">
                                    Dispatch Overview
                                </p>
                                <p className="mt-2 text-2xl font-semibold text-[#1f1a16]">
                                    A smooth system for freight and parcels
                                </p>
                            </div>

                            <div className="grid gap-4 p-6 sm:grid-cols-2">
                                <div className="rounded-[1.75rem] border border-[#eadfd4] bg-[#fcfbf8] p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7eee6] text-[#9a5b38]">
                                            <Package className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-[#1f1a16]">Shipment PKR10293</p>
                                            <p className="text-xs text-[#7d6f65]">Intercity parcel</p>
                                        </div>
                                    </div>

                                    <div className="mt-5 space-y-3 text-sm text-[#5f544b]">
                                        <div className="flex items-center justify-between">
                                            <span>Pickup</span>
                                            <span className="font-medium text-[#1f1a16]">Pickup City</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Destination</span>
                                            <span className="font-medium text-[#1f1a16]">Destination City</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Status</span>
                                            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                                                In Transit
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-[1.75rem] border border-[#eadfd4] bg-[#fcfbf8] p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7eee6] text-[#9a5b38]">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-[#1f1a16]">Route progress</p>
                                            <p className="text-xs text-[#7d6f65]">Live tracking state</p>
                                        </div>
                                    </div>

                                    <div className="mt-5 rounded-2xl border border-[#eadfd4] bg-white p-4">
                                        <div className="flex items-center justify-between text-xs font-medium text-[#7d6f65]">
                                            <span>Line status</span>
                                            <span>84%</span>
                                        </div>
                                        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#ece3da]">
                                            <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-[#9a5b38] to-[#c48a64]" />
                                        </div>
                                        <p className="mt-4 text-sm text-[#5f544b]">ETA: 2 hours 15 minutes</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-[#eee4db] px-6 py-5">
                                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {trustPoints.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3 rounded-2xl bg-[#fcfbf8] p-4 text-sm text-[#534a42]"
                                        >
                                            <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#9a5b38]" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </PageShell>
    );
}