import { Repo } from "@/types";
import Link from "next/link";

export default function Card({repo}: { repo: Repo }) {
  return (
    <Link href={repo.url} className="px-4 py-4 bg-slate-100 hover:bg-slate-50 focus:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:bg-slate-700 rounded-md shadow-md text-left">
      <div className="flex justify-between">
        <span className="text-sky-700 dark:text-sky-300 text-sm font-semibold">{repo.name}</span>
        <div className="flex mt-[2px]">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
            </svg>
            <p className="text-xs mx-1">{repo.stars}</p>
          </div>
          <div className="flex mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"></path>
              <path d="M12 12l0 4"></path>
            </svg>
            <p className="text-xs mx-1">{repo.forks}</p>
          </div>
        </div>
      </div>
      <p className="h-10 mt-3 text-xs">{repo.description}</p>
    </Link>
  );
}