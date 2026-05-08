import {
    ChevronRight,
    Clock3,
    MapPin,
    Package,
    ShieldCheck,
    Truck,
    Warehouse,
} from "lucide-react";
import PageShell from "../components/PageShell";

const services = [
    {
        icon: Package,
        title: "Parcel Booking",
        desc: "Quick and reliable railway parcel booking with structured pickup and delivery coordination.",
    },
    {
        icon: Clock3,
        title: "Live ETA Updates",
        desc: "Accurate time estimates based on rail schedules and real shipment progress.",
    },
    {
        icon: Truck,
        title: "City-to-City Transport",
        desc: "Railway-based intercity transport designed for consistent and cost-effective movement.",
    },
    {
        icon: Warehouse,
        title: "Warehouse Handling",
        desc: "Organized parcel handling, storage, and dispatch aligned with railway logistics flow.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Deliveries",
        desc: "Careful handling and verified delivery processes to ensure parcel safety.",
    },
    {
        icon: MapPin,
        title: "Rail Route Coverage",
        desc: "Strong presence across major railway routes connecting key cities.",
    },
];

export default function Services() {
    return (
        <PageShell>
            <main className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a5b38]">
                        Services
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1f1a16] md:text-4xl">
                        Everything about railway transport.
                    </h2>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group rounded-[1.9rem] border border-[#eadfd4] bg-white p-6 shadow-[0_12px_40px_rgba(67,42,18,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(67,42,18,0.08)]"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7eee6] text-[#9a5b38]">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-[#1f1a16]">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-[#5f544b]">{item.desc}</p>
                                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#9a5b38] transition group-hover:gap-3">
                                    Learn more
                                    <ChevronRight className="h-4 w-4" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </PageShell>
    );
}