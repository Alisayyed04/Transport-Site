import { Sparkles } from "lucide-react";
import PageShell from "../components/PageShell";
import { aboutHighlights } from "../data/siteData";

export default function AboutUs() {
    return (
        <PageShell>
            <main className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a5b38]">
                            About Us
                        </p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1f1a16] md:text-4xl">
                            Designed to feel dependable, refined, and built on strong rails.
                        </h2>

                        <p className="mt-5 text-base leading-8 text-[#5f544b]">
                            Founded in 2012, DK Transport is a railway-focused logistics business dedicated to
                            efficient and secure parcel movement. We operate with a simple philosophy — keep it
                            reliable, keep it transparent, and deliver on time.
                        </p>

                        <p className="mt-5 text-base leading-8 text-[#5f544b]">
                            Over the years, we have built operational experience in handling parcels, coordinating
                            rail routes, and ensuring safe delivery across cities.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {aboutHighlights.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-[1.75rem] border border-[#eadfd4] bg-white p-6 shadow-[0_12px_40px_rgba(67,42,18,0.04)]"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7eee6] text-[#9a5b38]">
                                    <Sparkles className="h-5 w-5" />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-[#1f1a16]">{item.title}</h3>
                                <p className="mt-2 text-sm leading-7 text-[#5f544b]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </PageShell>
    );
}