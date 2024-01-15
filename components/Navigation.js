// components/Navigation.js
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="min-w-screen flex flex-row py-8 px-24 border-b z-5 justify-end gap-8">
      <Link
        href="/"
        className={router.pathname === "/" ? "text-white text-xl" : "text-xl"}
      >
        Home
      </Link>
      <Link
        href="/projects"
        className={
          router.pathname === "/projects" ? "text-white text-xl" : "text-xl"
        }
      >
        Projects
      </Link>
      <Link
        href="/images/files/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={
          router.pathname === "/images/files/resume.pdf"
            ? "text-white text-xl"
            : "text-xl"
        }
      >
        Resume
      </Link>
    </nav>
  );
};

export default Navigation;
