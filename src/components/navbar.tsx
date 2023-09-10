import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full mt-4 mb-4 lg:mb-12 py-4 text-stone-400 font-medium">
      <Link href={'/'} className="link">
        <span className="text-stone-600">obay</span>.<span className="text-stone-600">dev</span>();
      </Link>
    </nav>
  );
}