import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./ui/Logo";
import { NAV_LINKS, SITE } from "../data/site";
import { useScrollSpy, scrollToId } from "../hooks/useScrollSpy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_8px_30px_-12px_rgba(7,27,54,0.18)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-xl flex h-[72px] items-center justify-between">
        <button
          onClick={() => handleNav("home")}
          aria-label="MSBR & Associates — home"
        >
          <Logo light={!scrolled} />
        </button>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? scrolled
                        ? "text-navy"
                        : "text-white"
                      : scrolled
                        ? "text-navy/60 hover:text-navy"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-[0_6px_20px_-6px_rgba(212,175,55,0.7)] transition-all hover:bg-gold-light hover:shadow-glow sm:inline-flex"
          >
            Book Consultation
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              scrolled ? "text-navy" : "text-white"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-navy/5 bg-white lg:hidden"
          >
            <ul className="container-xl flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium transition-colors ${
                      active === link.id
                        ? "bg-cream text-navy"
                        : "text-navy/70 hover:bg-cream"
                    }`}
                  >
                    {link.label}
                    {active === link.id && (
                      <span className="h-2 w-2 rounded-full bg-gold" />
                    )}
                  </button>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2 px-3">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy"
                >
                  <MessageCircle size={18} /> Book Consultation
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
