import { Clock3, MapPin, Package, BadgeCheck } from "lucide-react";
import PageShell from "../components/PageShell";
import { trackingSteps } from "../data/siteData";

export default function Tracking() {
    return (
        <PageShell>
            <main className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
                <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                    <div className="rounded-[2rem] border border-[#eadfd4] bg-white p-8 shadow-[0_12px_40px_rgba(67,42,18,0.04)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a5b38]">
                            Tracking
                        </p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1f1a16] md:text-4xl">
                            Live tracking view for shipments in transit.
                        </h2>
                        <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f544b]">
                            This page matches the same premium system styling as the home page, but is now focused
                            on tracking, ETA, and parcel movement status.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-[1.75rem] border border-[#eadfd4] bg-[#fcfbf8] p-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7eee6] text-[#9a5b38]">
                                        <Package className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-[#1f1a16]">Shipment DK10293</p>
                                        <p className="text-xs text-[#7d6f65]">Rail parcel</p>
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
                    </div>

                    <div className="rounded-[2rem] border border-[#eadfd4] bg-[linear-gradient(180deg,#ffffff,#f8f4ee)] p-8 shadow-[0_12px_40px_rgba(67,42,18,0.04)]">
                        <p className="text-sm font-semibold text-[#1f1a16]">Tracking steps</p>
                        <div className="mt-5 space-y-4">
                            {trackingSteps.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-start gap-3 rounded-2xl border border-[#eadfd4] bg-white p-4"
                                >
                                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#f7eee6] text-[#9a5b38]">
                                        <BadgeCheck className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-[#1f1a16]">{item.label}</h3>
                                        <p className="mt-1 text-sm leading-6 text-[#534a42]">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 rounded-2xl border border-[#eadfd4] bg-white p-4 text-sm leading-7 text-[#5f544b]">
                            <div className="flex items-center gap-2 font-semibold text-[#1f1a16]">
                                <Clock3 className="h-4 w-4 text-[#9a5b38]" />
                                ETA and status can later connect to your backend.
                            </div>
                            <p className="mt-2">
                                The layout is already ready for live API data, so you can replace the sample values
                                without changing the design.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </PageShell>
    );
}