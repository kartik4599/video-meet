import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const layout = ({ children }: { children: JSX.Element }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default layout;
