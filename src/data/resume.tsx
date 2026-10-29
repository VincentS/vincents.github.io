import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Grafana } from "@/components/ui/svgs/grafana";
import { Prometheus } from "@/components/ui/svgs/prometheus";
import { GoogleCloud } from "@/components/ui/svgs/google-cloud";
import { OpenTelemetry } from "@/components/ui/svgs/opentelemetry";
import { Terraform } from "@/components/ui/svgs/terraform";
import { ArgoCD } from "@/components/ui/svgs/argocd";
import { Azure } from "@/components/ui/svgs/azure";

export const DATA = {
  name: "Vincent Schwarzer - Software Engineer",
  initials: "VS",
  url: "https://www.vincentschwarzer.com",
  location: "Berlin, Germany",
  description:
    "Software engineer with 10+ years of experience in platform engineering, site reliability and observability.",
  summary:
    "Most recently I worked at CARIAD (Volkswagen Group) helping build and operate a global Azure Kubernetes platform and develop observability solutions across multiple regions.\n\nI hold a master's degree in IT Systems Engineering from the Hasso Plattner Institute. I'm particularly interested in distributed systems, platform architecture and AI/ML infrastructure.\n\nOutside of technology I enjoy salsa dancing, calisthenics, hiking and board games.",
  avatarUrl: "/me.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Let's connect",
      text: "Interested in discussing engineering challenges, sharing ideas or exploring opportunities to work together?\\\n \\\nFeel free to reach out at [contact@vincentschwarzer.com](contact@vincentschwarzer.com).",
    },
  },
  skills: [
  { name: "Python", icon: Python },
  { name: "Go", icon: Golang },
  { name: "Docker", icon: Docker },
  { name: "Kubernetes", icon: Kubernetes },
  { name: "Grafana", icon: Grafana },
  { name: "Prometheus", icon: Prometheus },
  { name: "Google Cloud", icon: GoogleCloud },
  { name: "OpenTelemetry", icon: OpenTelemetry },
  { name: "Terraform", icon: Terraform },
  { name: "Argo CD", icon: ArgoCD },
  { name: "Azure", icon: Azure },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "contact@vincentschwarzer.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vincents",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vincentschwarzer/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:contact@vincentschwarzer.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CARIAD SE",
      href: "https://cariad.technology",
      badges: [],
      location: "Berlin, Germany",
      title: "Senior Platform Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=cariad.technology&sz=128",
      start: "November 2022",
      end: "November 2025",
      description:
        "Engineered and operated Azure Kubernetes infrastructure across multiple regions. Collaborated on a Grafana-based observability platform covering monitoring, logging and distributed tracing. Provided cross-team technical guidance and contributed to platform architecture, reliability and technology evaluations.",
    },
    {
      company: "CARIAD SE",
      href: "https://cariad.technology",
      badges: [],
      location: "Berlin, Germany",
      title: "Senior System Architect",
      logoUrl: "https://www.google.com/s2/favicons?domain=cariad.technology&sz=128",
      start: "September 2021",
      end: "November 2022",
      description:
        "Guided the technical evolution of Volkswagen Group's identity, consent and user data management services serving millions of users. Worked across development teams to translate business requirements into technical solutions and contributed to reliability and incident management initiatives.",
    },
    {
      company: "Metro.digital",
      href: "https://metro.digital",
      badges: [],
      location: "Berlin, Germany",
      title: "Senior Site Reliability Engineer",
      logoUrl: "/metro-digital.svg",
      darkLogoUrl: "/metro-digital-dark.svg",
      start: "May 2019",
      end: "August 2021",
      description:
        "Managed Kubernetes infrastructure on Google Cloud with a focus on reliability, scalability and security. Improved CI/CD pipelines and deployment automation while supporting incident response and root cause analysis. Contributed to security initiatives and knowledge sharing across engineering teams.",
    },
    {
      company: "Endocode AG",
      href: "https://endocode.com",
      badges: [],
      location: "Berlin,Germany",
      title: "Cloud Architect",
      logoUrl: "/endocode.svg",
      start: "January 2017",
      end: "April 2019",
      description:
        "Worked as a software engineer and DevOps consultant on cloud-native projects for startups and enterprise customers. Conducted cloud architecture reviews and technical workshops. Contributed to open-source projects in the Kubernetes ecosystem including Calico and Kubespray.",
    },
  ],
  education: [
    {
      school: "Hasso Plattner Institute (HPI) - University of Potsdam",
      href: "https://hpi.de/",
      degree: "Master of Science (M.Sc.) in IT System Engineering",
      logoUrl: "https://www.google.com/s2/favicons?domain=hpi.de&sz=128",
      start: "2013",
      end: "2016",
    },
    {
      school: "HTW Dresden - University of Applied Sciences",
      href: "https://www.htw-dresden.de/",
      degree: "Diplom in Business Information Systems",
      logoUrl: "https://www.google.com/s2/favicons?domain=htw-dresden.de&sz=128",
      start: "2008",
      end: "2013",
    },
  ],
} as const;
