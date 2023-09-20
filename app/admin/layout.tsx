import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <div className="border-b">
          <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <Aside />
            <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid">
              {children}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
