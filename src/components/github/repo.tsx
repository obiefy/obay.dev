import { Repo } from "@/types";
import Link from "next/link";

export default function Card({repo}: { repo: Repo }) {
  return (
    <Link href={repo.url} className="px-4 py-4 bg-white hover:bg-stone-100/90 focus:bg-stone-100/90 rounded-md shadow-md text-left">
      <div className="flex justify-between">
        <span className="text-stone-600 text-sm font-semibold">{repo.name}</span>
        <div className="flex text-stone-400 mt-[2px]">
          <div className="flex">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-30"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="relative inline-flex w-4 h-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
              </svg>
            </span>
            <p className="text-xs mx-1">{repo.stars}</p>
          </div>
        </div>
      </div>
      <p className="h-10 mt-3 text-xs text-stone-500">{repo.description}</p>
    </Link>
  );
}