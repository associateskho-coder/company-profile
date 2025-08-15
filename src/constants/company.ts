import type { ExpertiseCardProps } from "@/components/common/expertise-card";
import type { ValueCardProps } from "@/components/common/value-card";
import {
  Building,
  Scale,
  Users,
  Heart,
  FileText,
  CheckCircle,
  Award,
  Handshake,
  Lightbulb,
} from "lucide-react";

export const MISSIONS = [
  "Memberikan layanan hukum yang profesional, transparan, dan berorientasi pada hasil terbaik.",
  "Menyediakan solusi hukum yang kreatif dan inovatif sesuai kebutuhan klien.",
  "Menjunjung tinggi etika profesi, keadilan, dan supremasi hukum.",
  "Membangun hubungan jangka panjang dengan klien berdasarkan kepercayaan dan integritas.",
];

export const EXPERTISE_AREAS: ExpertiseCardProps[] = [
  {
    icon: Scale,
    title: "Litigasi & Penyelesaian Sengketa",
    description:
      "Perdata, Pidana, Tata Usaha Negara, Arbitrase & Mediasi",
  },
  {
    icon: Building,
    title: "Hukum Bisnis & Korporasi",
    description:
      "Pendirian & Pengelolaan Badan Usaha, Kontrak & Perjanjian Bisnis, Akuisisi & Merger",
  },
  {
    icon: Users,
    title: "Hukum Ketenagakerjaan",
    description:
      "Penyelesaian Perselisihan Hubungan Industrial, Penyusunan PKB & Peraturan Perusahaan",
  },
  {
    icon: Heart,
    title: "Hukum Keluarga",
    description:
      "Perceraian & Hak Asuh Anak, Waris & Hibah",
  },
  {
    icon: FileText,
    title: "Hukum Administrasi & Perizinan",
    description: "Perizinan Usaha & Kepatuhan Regulasi",
  },
];

export const CORE_VALUES: ValueCardProps[] = [
  {
    icon: CheckCircle,
    title: "Integritas",
    description:
      "Menjunjung tinggi kejujuran dan etika profesi.",
  },
  {
    icon: Award,
    title: "Profesionalisme",
    description:
      "Memberikan pelayanan sesuai standar hukum yang tinggi.",
  },
  {
    icon: Handshake,
    title: "Komitmen",
    description:
      "Memastikan kepentingan klien menjadi prioritas utama.",
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    description:
      "Menghadirkan solusi hukum yang kreatif dan adaptif.",
  },
];
