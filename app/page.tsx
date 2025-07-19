"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Linkedin,
  Mail,
  MapPin,
  Download,
  Menu,
  ArrowDown,
  Pill,
  FileText,
  Award,
  Instagram,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  // Handle resume download
  const handleResumeDownload = () => {
    const resumeContent = `
SHAH KASHIF ABBAS
Bhopal MP • shahkabbas@gmail.com | 7470839068
linkedin.com/in/shah-kashif-abbas

PROFILE SUMMARY
Certified Pharmacovigilance and MedDRA professional with a B.Pharm background and practical exposure in QA, QC, R&D, and Validation at Glenmark Pharmaceuticals. Skilled in ICSR processing, MedDRA coding, and safety data handling, with working knowledge of SQL and Excel.

EDUCATION
Bachelor of Pharmacy (B.Pharm) - CGPA: 7.61
Laxmi Narain College of Pharmacy, Bhopal (Nov 2021 - June 2025)

PROFESSIONAL EXPERIENCE
Intern - Glenmark Life Sciences Ltd., Gujarat (2024)
• Quality assurance, validation processes, and regulatory documentation
• Quality control procedures including sampling, testing, and analysis

CERTIFICATIONS
• QA, QC & R&D Training – Glenmark Life Sciences
• Pharmacovigilance Course – SG Pharma Trainings  
• MedDRA Training – PV Drug Safety Academy
  `

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Shah_Kashif_Abbas_Resume.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background/90 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="#" className="mr-6 flex items-center space-x-2">
              <motion.span
                className="hidden font-bold sm:inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Shah Kashif Abbas
              </motion.span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {["About", "Skills", "Experience", "Education", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="transition-colors hover:text-foreground/80 relative group cursor-pointer"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                  </button>
                </motion.div>
              ))}
            </nav>
          </div>
          <Button variant="outline" size="icon" className="md:hidden bg-transparent">
            <Menu className="h-4 w-4" />
          </Button>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none flex items-center gap-2">
              <ThemeToggle />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Create resume content as PDF download
                    const resumeContent = `
SHAH KASHIF ABBAS
Bhopal MP • shahkabbas@gmail.com | 7470839068
linkedin.com/in/shah-kashif-abbas

PROFILE SUMMARY
Certified Pharmacovigilance and MedDRA professional with a B.Pharm background and practical exposure in QA, QC, R&D, and Validation at Glenmark Pharmaceuticals. Skilled in ICSR processing, MedDRA coding, and safety data handling, with working knowledge of SQL and Excel. Strong communication, team leadership, and adaptability with a keen interest in drug safety, clinical data, and regulatory-focused roles.

EDUCATION
Bachelor of Pharmacy (B.Pharm) - CGPA: 7.61
Laxmi Narain College of Pharmacy, Bhopal (Nov 2021 - June 2025)
Relevant Coursework: Pharmacology, Regulatory Affairs, and Clinical Pharmacy

Senior Secondary Education
St. Xavier's Sr. Sec. Co-Ed. School, Bhopal
Class 12th - CGPA: 8.6 | Class 10th - CGPA: 8.3

PROFESSIONAL EXPERIENCE
Intern - Glenmark Life Sciences Ltd., Gujarat (2024)
• Gained hands-on experience in pharmaceutical quality assurance, validation processes, and regulatory documentation
• Assisted in routine quality control procedures including sampling, testing, and analysis
• Observed R&D formulation development processes and learned data recording compliance
• Contributed to validation documentation and protocol preparation per cGMP standards

CERTIFICATIONS
• Certification Training in QA, QC & R&D – Glenmark Life Sciences
• Certificate Course in Pharmacovigilance – SG Pharma Trainings
• MedDRA Training Certificate Course – PV Drug Safety Academy

SKILLS
• Pharmacovigilance: ICSR Processing, MedDRA Coding, Adverse Event Reporting
• Quality Assurance: QA/QC Procedures, Validation, cGMP, Documentation
• Technical: MS Excel, SQL, Data Analysis, Clinical Data, Research

ACHIEVEMENTS
• Participated in National-Level Case Study Competition on Drug Safety Trends
• Led 3-member academic project team for PV system improvements
• Built and managed Instagram page to 20,000+ followers
• Organized academic seminars on drug safety and industry trends
                    `

                    // Create and download the resume as a text file (you can enhance this to create actual PDF)
                    const blob = new Blob([resumeContent], { type: "text/plain" })
                    const url = window.URL.createObjectURL(blob)
                    const link = document.createElement("a")
                    link.href = url
                    link.download = "Shah_Kashif_Abbas_Resume.txt"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                    window.URL.revokeObjectURL(url)
                  }}
                  className="hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-600/10 transition-all duration-300 bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 relative"
      >
        <motion.div className="absolute inset-0 -z-10 opacity-30" style={{ y: backgroundY }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-blue-950/10 dark:via-purple-950/5 dark:to-pink-950/10" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div className="space-y-4" variants={staggerContainer} animate="animate">
              <motion.span
                className="text-sm font-medium text-muted-foreground bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                variants={fadeInUp}
              >
                Pharmacovigilance Professional
              </motion.span>

              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
                variants={fadeInUp}
              >
                Shah Kashif Abbas
              </motion.h1>

              <motion.p className="text-xl text-muted-foreground font-medium" variants={fadeInUp}>
                B.Pharm Graduate & MedDRA Certified Professional
              </motion.p>

              <motion.p className="max-w-[600px] text-muted-foreground text-lg leading-relaxed" variants={fadeInUp}>
                Certified Pharmacovigilance and MedDRA professional with practical exposure in QA, QC, R&D, and
                Validation. Skilled in ICSR processing, drug safety, and regulatory compliance with a passion for
                improving pharmaceutical safety through technology.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("experience")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  View Experience
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-600/10 bg-transparent"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/shah-kashif-abbas", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/s.kashifabbas", label: "Instagram" },
                { icon: Mail, href: "mailto:shahkabbas@gmail.com", label: "Gmail" },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-600/20 transition-all duration-300"
                  >
                    <Link
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{label}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={isHeroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Shah Kashif Abbas - Professional Headshot"
                  width={400}
                  height={400}
                  className="relative rounded-full object-cover border-4 border-background shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3 shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={isHeroInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 1, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Pill className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-16 md:py-24">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Profile Summary
            </motion.h2>
            <motion.p
              className="mt-4 text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Professional background and core competencies in pharmaceutical sciences.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Certified Pharmacovigilance and MedDRA professional with a B.Pharm background and practical exposure
                  in QA, QC, R&D, and Validation at Glenmark Pharmaceuticals. Skilled in ICSR processing, MedDRA coding,
                  and safety data handling, with working knowledge of SQL and Excel. Strong communication, team
                  leadership, and adaptability with a keen interest in drug safety, clinical data, and
                  regulatory-focused roles.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Bhopal, Madhya Pradesh</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">shahkabbas@gmail.com</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-sm font-medium">📞</span>
                    <span className="text-sm">+91 7470839068</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">linkedin.com/in/shah-kashif-abbas</span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-16 md:py-24 bg-muted/30">
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Skills & Expertise
            </motion.h2>
            <motion.p
              className="mt-4 text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Core competencies and technical skills in pharmaceutical sciences.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pharmacovigilance",
                icon: Pill,
                skills: [
                  "ICSR Processing",
                  "MedDRA Coding",
                  "Adverse Event Reporting",
                  "Safety Data Handling",
                  "Regulatory Guidelines",
                  "ICH/EMA/GCP",
                ],
                description:
                  "Good understanding of ICSR structure, adverse event types, and safety data flow. Trained in MedDRA terminology, coding principles, and navigation.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Quality Assurance",
                icon: Award,
                skills: [
                  "QA/QC Procedures",
                  "Validation",
                  "cGMP",
                  "Documentation",
                  "Quality Control",
                  "Sampling & Testing",
                ],
                description:
                  "Awareness of deviation handling, QA documentation, and core cGMP practices with hands-on training experience.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Technical Skills",
                icon: FileText,
                skills: ["MS Excel", "SQL", "Data Analysis", "Clinical Data", "Research", "Scientific Writing"],
                description:
                  "Learning MS Excel for basic data sorting and entry; introductory knowledge of SQL for handling structured data.",
                gradient: "from-green-500 to-teal-500",
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white/50 to-gray-50/30 dark:from-gray-900/50 dark:to-gray-800/30 group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <motion.div
                        className={`p-2 rounded-lg bg-gradient-to-r ${skill.gradient} text-white`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <skill.icon className="h-5 w-5" />
                      </motion.div>
                      {skill.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skill.skills.map((item, skillIndex) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + skillIndex * 0.05, duration: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-600/20 transition-all duration-300"
                          >
                            {item}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-16 md:py-24">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Professional Experience
            </motion.h2>
            <motion.p
              className="mt-4 text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Training and practical experience in pharmaceutical industry.
            </motion.p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Intern",
                company: "Glenmark Life Sciences Ltd.",
                location: "Gujarat, India",
                period: "2024",
                departments: "QA, QC, R&D, Validation, and PRD",
                achievements: [
                  "Gained hands-on experience in pharmaceutical quality assurance, validation processes, and regulatory documentation",
                  "Assisted in routine quality control procedures including sampling, testing, and analysis of raw materials and finished products",
                  "Observed R&D formulation development processes and learned key aspects of data recording and compliance",
                  "Contributed to validation documentation and protocol preparation in accordance with cGMP standards",
                ],
              },
              {
                title: "Research Project",
                company: "Final Year Major Project",
                location: "Laxmi Narain College of Pharmacy",
                period: "2025",
                departments: "Research & Development",
                achievements: [
                  "Explored 'The Role of Technology in Improving Pharmacovigilance Systems in India'",
                  "Focused on digital tools, data automation, and AI integration to enhance adverse event reporting",
                  "Led a 3-member academic project team to propose improvements in India's PV reporting system",
                  "Contributed to review paper writing on pharmacovigilance topics during academic tenure",
                ],
              },
              {
                title: "Conference Participant",
                company: "International Conference on Drug Development",
                location: "India",
                period: "2024",
                departments: "Professional Development",
                achievements: [
                  "Attended sessions on global regulatory updates, drug safety monitoring, and innovations in pharmacovigilance",
                  "Engaged with industry professionals to understand the evolving landscape of drug development",
                  "Participated in National-Level Case Study Competition on Drug Safety Trends",
                  "Recognized for structured analysis and presentation skills in pharmaceutical safety domain",
                ],
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 bg-gradient-to-br from-white/80 to-blue-50/30 dark:from-gray-900/80 dark:to-blue-950/20">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <CardTitle className="text-xl bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
                            {exp.title}
                          </CardTitle>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-2 mt-1 text-muted-foreground"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <span className="font-medium">{exp.company}</span>
                          <Separator orientation="vertical" className="h-4" />
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                        </motion.div>
                        <p className="text-sm text-muted-foreground mt-1">{exp.departments}</p>
                      </div>
                      <motion.div
                        className="flex items-center gap-1 text-sm text-muted-foreground mt-2 sm:mt-0"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 hover:text-foreground transition-colors duration-200"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + 0.4 + i * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="container py-16 md:py-24 bg-muted/30">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Education & Certifications
            </motion.h2>
            <motion.p
              className="mt-4 text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Academic background and professional certifications.
            </motion.p>
          </div>

          <div className="space-y-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold">Bachelor of Pharmacy (B.Pharm)</h4>
                    <p className="text-sm text-muted-foreground">Laxmi Narain College of Pharmacy, Bhopal</p>
                    <p className="text-sm text-muted-foreground">Nov 2021 - June 2025 • CGPA: 7.61</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Relevant Coursework: Pharmacology, Regulatory Affairs, and Clinical Pharmacy
                    </p>
                  </motion.div>
                  <Separator />
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold">Senior Secondary Education</h4>
                    <p className="text-sm text-muted-foreground">St. Xavier's Sr. Sec. Co-Ed. School, Bhopal</p>
                    <p className="text-sm text-muted-foreground">Class 12th - CGPA: 8.6 • Class 10th - CGPA: 8.3</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-600" />
                    Certifications & Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-1">
                    {[
                      "Certification Training in QA, QC & R&D – Glenmark Life Sciences",
                      "Certificate Course in Pharmacovigilance – SG Pharma Trainings",
                      "MedDRA Training Certificate Course – PV Drug Safety Academy",
                    ].map((cert, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <Award className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{cert}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-gradient-to-br from-green-50/50 to-teal-50/30 dark:from-green-950/20 dark:to-teal-950/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Participated in a National-Level Case Study Competition on Drug Safety Trends, recognized for structured analysis and presentation skills",
                      "Led a 3-member academic project team to propose improvements in India's PV reporting system through digital and tech-driven strategies",
                      "Took initiative in organizing and presenting academic group seminars on drug safety, efficacy and industry trends during college",
                      "Successfully built and managed an Instagram page, growing it to 20,000+ followers through consistent content creation and strategic engagement",
                    ].map((achievement, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-sm">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-16 md:py-24">
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's Connect
            </motion.h2>
            <motion.p
              className="mt-4 text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to discuss opportunities in pharmacovigilance and drug safety? I'd love to hear from you.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20">
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Get in Touch</h3>
                    <p className="text-muted-foreground">
                      I'm always open to discussing opportunities in pharmacovigilance, drug safety, quality assurance,
                      and regulatory affairs.
                    </p>
                    <div className="space-y-3">
                      <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">shahkabbas@gmail.com</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="text-sm font-medium">📞</span>
                        <span className="text-sm">+91 7470839068</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Bhopal, Madhya Pradesh</span>
                      </motion.div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Connect With Me</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/shah-kashif-abbas" },
                        { icon: Instagram, label: "Instagram", href: "https://instagram.com/s.kashifabbas" },
                        { icon: Mail, label: "Gmail", href: "mailto:shahkabbas@gmail.com" },
                      ].map(({ icon: Icon, label, href }, index) => (
                        <motion.div
                          key={label}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <Button
                            variant="outline"
                            className="justify-start hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-600/10 transition-all duration-300 w-full bg-transparent"
                            asChild
                          >
                            <Link
                              href={href}
                              target={href.startsWith("http") ? "_blank" : undefined}
                              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              <Icon className="mr-2 h-4 w-4" />
                              {label}
                            </Link>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="border-t py-6 md:py-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          </div>
          <div className="flex items-center space-x-4">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/shah-kashif-abbas", label: "LinkedIn" },
              { icon: Instagram, href: "https://instagram.com/s.kashifabbas", label: "Instagram" },
              { icon: Mail, href: "mailto:shahkabbas@gmail.com", label: "Gmail" },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-600/20 transition-all duration-300"
                >
                  <Link
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
