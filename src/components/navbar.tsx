import Link from "next/link";
import Code from "@/components/code";

export default function Navbar() {
  return (
    <nav className="w-full mb-4 lg:mb-12 py-8 text-stone-500 font-medium">
      <Link href={'/'} className="link">
        <Code method="dev" />
      </Link>
    </nav>
  );
}