import RootLayout from "@/components/layouts/root";
import AppHeader from "@/components/layouts/header";
import type { ChildrenProps } from "@/interfaces/component";
import AppFooter from "@/components/layouts/footer";
import type { Metadata } from "next";

export default function Root({ children }: ChildrenProps) {
  return (
    <RootLayout>
      <div className="flex flex-col min-h-screen">
        <AppHeader />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <AppFooter />
      </div>
    </RootLayout>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Law Office KHO & ASSOSITE",
    template: `%s | Law Office KHO & ASSOSITE`,
  },
  description:
    "Law Office KHO & ASSOSITE adalah Kantor hukum profesional yang berdedikasi memberikan layanan hukum berkualitas tinggi kepada individu, perusahaan, dan lembaga publik. Dengan mengedepankan integritas, profesionalisme, dan komitmen penuh kepada klien, kami hadir sebagai mitra strategis dalam penyelesaian permasalahan hukum secara efektif dan efisien.",
  authors: [
    {
      name: "Ananda Fiqri",
      url: "https://ananda-fiqri-personal-website.vercel.app",
    },
  ],
  creator:
    "https://ananda-fiqri-personal-website.vercel.app",
  applicationName: "Law Office KHO & ASSOSITE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  publisher: "Law Office KHO & ASSOSITE",
};
