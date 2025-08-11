import { HeaderPages } from "@/components/header-pages";
import { getEducationPosts } from "@/lib/data/education";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function LearnIndexPage() {
  const { items } = await getEducationPosts({ limit: 20, featuredOnly: false });

  if (!items.length) {
    return (
      <main className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-4 text-2xl font-semibold">Learn</h1>
        <p className="text-slate-600">No posts yet.</p>
      </main>
    );
  }

  return (
    <>
      <HeaderPages />
      <main className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-semibold">Learn</h1>
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
      </main>
    </>
  );
}
