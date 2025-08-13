import { getEducationPosts } from "@/lib/data/education";
import Link from "next/link";

export const dynamic = "force-dynamic";

const TITLE_MAP: Record<string, string> = {
  PREVENTION: "Common Scam Tactics",
  GUIDE: "How to Verify Contacts",
  REPORT_TO_AUTHORITIES: "Report to Authorities",
};

export default async function LearnCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const cat = params.category?.toUpperCase();
  const { items } = await getEducationPosts({ category: cat });

  const heading = TITLE_MAP[cat] ?? cat;

  return (
    <main className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold">{heading}</h1>
      {items.length === 0 ? (
        <p className="text-slate-600">No posts in this category yet.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((p: any) => (
            <li key={p.id} className="rounded-md border p-4">
              <Link
                href={`/learn/${p.slug}`}
                className="text-lg font-medium hover:underline"
              >
                {p.title}
              </Link>
              {p.excerpt && <p className="text-slate-600">{p.excerpt}</p>}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
