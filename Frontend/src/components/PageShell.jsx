import Navigation from "./Navigation";

export default function PageShell({ children }) {
    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[#fbfaf7] text-[#1f1a16]">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(180,106,67,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(184,153,122,0.10),transparent_26%),linear-gradient(to_bottom,rgba(255,255,255,0.88),rgba(251,250,247,1))]" />
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] bg-[linear-gradient(rgba(31,26,22,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(31,26,22,0.04)_1px,transparent_1px)] bg-[length:42px_42px]" />
            <Navigation />
            {children}
        </div>
    );
}