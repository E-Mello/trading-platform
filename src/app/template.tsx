import SideNavLeftComponent from "@/components/SideNavLeft";

export default function Template({ children }: { children: React.ReactNode }) {

    return (
        <section className="flex flex-col justify-between">
            <nav className=" items-center">
                <SideNavLeftComponent />
            </nav>
            <main className="flex justify-center z-0">
                {children}
            </main>
        </section>
    );
}