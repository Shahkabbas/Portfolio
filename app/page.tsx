<motion.nav
  className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
    isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background/90 backdrop-blur-sm"
  }`}
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <div className="container flex h-16 items-center">
    {/* Logo / Name */}
    <div className="mr-4 hidden md:flex">
      <Link href="#" className="flex items-center space-x-2">
        <motion.span
          className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Shah Kashif Abbas
        </motion.span>
      </Link>
    </div>

    {/* Mobile menu button */}
    <Button variant="outline" size="icon" className="md:hidden bg-transparent">
      <Menu className="h-4 w-4" />
    </Button>

    {/* Desktop links & resume toggle */}
    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
      <div className="flex-1 md:flex-none flex items-center gap-2">
        <ThemeToggle />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="transition-all hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-600/10"
          >
            <a href="/resume.pdf" download className="flex items-center gap-2">
              <Download className="h-4 w-4" /> Resume
            </a>
          </Button>
        </motion.div>
      </div>

      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        {["About", "Skills", "Experience", "Education", "Contact"].map((item, i) => (
          <motion.button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="relative group transition-colors hover:text-foreground/80"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
          </motion.button>
        ))}
      </nav>
    </div>
  </div>
</motion.nav>
