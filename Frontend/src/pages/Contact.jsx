import { Mail, PhoneCall } from "lucide-react";
import PageShell from "../components/PageShell";
import { contactInfo } from "../data/siteData";

export default function Contact() {
    return (
        <PageShell>
            <main className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
                <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
                    <div className="rounded-[2rem] border border-[#eadfd4] bg-[#1f1a16] p-8 text-white shadow-[0_22px_80px_rgba(31,26,22,0.16)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b29a]">
                            Contact Us
                        </p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                            Reliable railway logistics built for speed, safety, and nationwide movement.
                        </h2>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#ddd2c9] md:text-base">
                            We provide efficient railway parcel transportation with dependable handling,
                            organized dispatch systems, and smooth movement across major railway routes.
                            Our workflow is designed to keep deliveries fast, secure, and professionally managed.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                                <PhoneCall className="h-5 w-5 text-[#d7b29a]" />
                                <p className="mt-3 text-sm font-semibold">Phone</p>
                                <p className="mt-1 text-sm text-[#ddd2c9]">{contactInfo.phone}</p>
                            </div>
                            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                                <Mail className="h-5 w-5 text-[#d7b29a]" />
                                <p className="mt-3 text-sm font-semibold">Email</p>
                                <p className="mt-1 text-sm text-[#ddd2c9]">{contactInfo.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-[#eadfd4] bg-white p-8 shadow-[0_12px_40px_rgba(67,42,18,0.04)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a5b38]">
                            Trusted railway operations
                        </p>
                        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#1f1a16]">
                            Professional parcel transport powered by the Indian railway network.
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-[#5f544b]">
                            From parcel booking to final dispatch, our railway workflow focuses on
                            speed, reliability, and organized cargo movement for businesses and individuals.
                        </p>

                        <div className="mt-8 rounded-[1.75rem] border border-[#eadfd4] bg-[#fcfbf8] p-5">
                            <p className="text-sm font-semibold text-[#1f1a16]">Business details</p>
                            <div className="mt-4 space-y-3 text-sm text-[#5f544b]">
                                <div className="flex items-center justify-between gap-4">
                                    <span>Business</span>
                                    <span className="font-medium text-[#1f1a16]">DK Transport</span>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <span>Founded</span>
                                    <span className="font-medium text-[#1f1a16]">2012</span>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <span>Transport type</span>
                                    <span className="font-medium text-[#1f1a16]">Railway only</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </PageShell>
    );
}