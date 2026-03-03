import Footer from "@/components/common/Footer";
import NavBlog from "@/components/common/NavBlog";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <NavBlog />
        <main>
            {children}
        </main>
        <Footer />
    </>
  );
}
