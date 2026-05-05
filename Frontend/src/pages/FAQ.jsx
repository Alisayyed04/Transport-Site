import PageShell from "../components/PageShell";
import { faqs } from "../data/siteData";

export default function Faq() {
    return (
        <PageShell>
            <main className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a5b38]">FAQ</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1f1a16] md:text-4xl">
                    Common questions, answered cleanly.
                </h2>

                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                    {faqs.map((item) => (
                        <div
                            key={item.q}
                            className="rounded-[1.9rem] border border-[#eadfd4] bg-white p-6 shadow-[0_12px_40px_rgba(67,42,18,0.04)]"
                        >
                            <h3 className="text-lg font-semibold text-[#1f1a16]">{item.q}</h3>
                            <p className="mt-3 text-sm leading-7 text-[#5f544b]">{item.a}</p>
                        </div>
                    ))}
                </div>
            </main>
        </PageShell>
    );
}