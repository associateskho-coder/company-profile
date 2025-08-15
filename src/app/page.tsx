import ExpertiseCard from "@/components/common/expertise-card";
import ValueCard from "@/components/common/value-card";
import { LOGO_JPEG } from "@/components/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CORE_VALUES,
  EXPERTISE_AREAS,
  MISSIONS,
} from "@/constants/company";
import {
  CheckCircle,
  Eye,
  Mail,
  Phone,
  Target,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen">
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${LOGO_JPEG.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Kantor Hukum
            <br />
            <span className="text-accent dark:text-white">
              KHO & ASSOSITE
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 animate-slide-up">
            Partner Legal Terpercaya
          </p>
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-8 py-3 animate-fade-in"
            style={{ animationDelay: "400ms" }}
            asChild
          >
            <Link href="#contact">
              Kontak Kami Sekarang
            </Link>
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <hgroup className="animate-fade-in">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-8">
              Tentang Kami
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Law Office KHO & ASSOSITE adalah Kantor hukum
              profesional yang berdedikasi memberikan
              layanan hukum berkualitas tinggi kepada
              individu, perusahaan, dan lembaga publik.
              Dengan mengedepankan integritas,
              profesionalisme, dan komitmen penuh kepada
              klien, kami hadir sebagai mitra strategis
              dalam penyelesaian permasalahan hukum secara
              efektif dan efisien.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tim kami terdiri dari advokat dan konsultan
              hukum berpengalaman yang menguasai berbagai
              bidang hukum, mulai dari litigasi,
              non-litigasi, hingga konsultasi bisnis. Kami
              percaya bahwa setiap klien berhak mendapatkan
              solusi hukum yang tepat, cepat, dan dapat
              diandalkan.
            </p>
          </hgroup>
        </div>
      </section>

      <section
        id="vision"
        className="py-20 bg-secondary/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-8 animate-fade-in">
              Visi & Misi
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <Card
              as="article"
              className="hover-lift border-0 shadow-xl bg-card/80 backdrop-blur-sm animate-fade-in"
            >
              <CardContent className="p-8 text-center">
                <Eye className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-3xl font-semibold text-primary mb-6">
                  Visi Kami
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Menjadi kantor hukum terpercaya yang
                  memberikan solusi hukum terbaik dan
                  menjadi pilihan utama klien di tingkat
                  nasional maupun internasional.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="hover-lift border-0 shadow-xl bg-card/80 backdrop-blur-sm animate-slide-up">
              <CardContent className="p-8">
                <Target className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-3xl font-semibold text-primary mb-6 text-center">
                  Misi Kami
                </h3>
                <ul className="space-y-4">
                  {MISSIONS.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="expertise"
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <hgroup className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-8 animate-fade-in">
              Bidang Keahlian
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Layanan hukum kami yang komprehensif mencakup
              semua aspek hukum, memberikan para ahli
              bimbingan dan representasi di berbagai bidang
              praktik.
            </p>
          </hgroup>

          <div className="grid xl:grid-cols-5 gap-8 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {EXPERTISE_AREAS.map((area, index) => (
              <ExpertiseCard
                key={area.title}
                delay={index * 100}
                {...area}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <hgroup className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-8 animate-fade-in">
              Nilai - Nilai Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Prinsip-prinsip dasar ini memandu segalanya
              kami melakukan dan membentuk komitmen kami
              untuk memberikan layanan hukum yang luar
              biasa.
            </p>
          </hgroup>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {CORE_VALUES.map((value, index) => (
              <ValueCard
                key={value.title}
                delay={index * 150}
                {...value}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-8 animate-fade-in">
              Kontak Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Siap mendiskusikan kebutuhan hukum Anda?
              Hubungi tim kami yang berpengalaman untuk
              konsultasi.
            </p>
          </div>
        </div>
        <div className="gap-12 px-4">
          <article className="animate-fade-in">
            <h3 className="font-serif text-3xl font-semibold text-primary mb-8">
              Hubungi Kami
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Siap mendiskusikan kebutuhan hukum Anda?
              Hubungi kami hari ini untuk konsultasi
              rahasia. Kami tim hukum yang berpengalaman
              siap membantu Anda dengan bimbingan dan
              dukungan profesional.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    Whatsapp
                  </h4>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Whatsapp"
                    href={`https://wa.me/6281264636463?${new URLSearchParams(
                      {
                        text: "Halo Saya ingin bertanya tentang layanan hukum",
                      }
                    ).toString()}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +62 812-6463-6463
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    Email
                  </h4>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email"
                    href="mailto:Khomaini1980@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Khomaini1980@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Law Office KHO & ASSOSITE adalah Kantor hukum profesional yang berdedikasi memberikan layanan hukum berkualitas tinggi kepada individu, perusahaan, dan lembaga publik. Dengan mengedepankan integritas, profesionalisme, dan komitmen penuh kepada klien, kami hadir sebagai mitra strategis dalam penyelesaian permasalahan hukum secara efektif dan efisien.",
  openGraph: {
    title: "Beranda",
    description:
      "Law Office KHO & ASSOSITE adalah Kantor hukum profesional yang berdedikasi memberikan layanan hukum berkualitas tinggi kepada individu, perusahaan, dan lembaga publik. Dengan mengedepankan integritas, profesionalisme, dan komitmen penuh kepada klien, kami hadir sebagai mitra strategis dalam penyelesaian permasalahan hukum secara efektif dan efisien.",
    type: "website",
    url: process.env.DOMAIN,
    siteName: "Law Office KHO & ASSOSITE",
    locale: "ID",
    alternateLocale: ["id-ID"],
    countryName: "Indonesia",
    images: {
      url: LOGO_JPEG.src,
      alt: "Law Office KHO & ASSOSITE",
      width: LOGO_JPEG.width,
      height: LOGO_JPEG.height,
      type: "image/jpeg",
    },
    emails: ["Khomaini1980@gmail.com"],
    phoneNumbers: ["+62 812-6463-6463"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: process.env.DOMAIN,
    languages: {
      "id-ID": process.env.DOMAIN,
    },
  },
  icons: LOGO_JPEG.src,
  keywords: [
    "Law Office KHO & ASSOSITE",
    "Kantor Hukum Profesional",
    "Hukum Berkualitas Tinggi",
    "Permasalahan Hukum",
    "Integritas",
    "Profesionalisme",
    "Komitmen",
    "Penyelesaian Permasalahan",
    "Efektif",
    "Efisien",
    "Individu",
    "Perusahaan",
    "Lembaga Publik",
  ],
  applicationName: "Law Office KHO & ASSOSITE",
  publisher: "Law Office KHO & ASSOSITE",
};

export const dynamic = "force-static";

export const revalidate = false;
