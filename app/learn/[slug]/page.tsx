import {
  getEducationPostBySlug,
  getRelatedEducationPosts,
} from "@/lib/data/education";
import { getLocalContacts } from "@/lib/data/contacts";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function LearnPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getEducationPostBySlug(params.slug);
  if (!post) {
    return (
      <main className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-4 text-2xl font-semibold">Post not found</h1>
        <Link href="/learn" className="text-blue-600 hover:underline">
          Back to Learn
        </Link>
      </main>
    );
  }

  const scamTypeIds = (post.scamTypes ?? []).map((st: any) => st.scamTypeId);
  const related = await getRelatedEducationPosts(post.id, scamTypeIds, 5);

  const { city, region, country } = post;
  const contacts = await getLocalContacts({
    scamTypeIds,
    city,
    region,
    country,
    limitPerLevel: 3,
  });

  return (
    <main className="container mx-auto max-w-3xl px-4 py-8 space-y-8">
      <article className="prose dark:prose-invert">
        <h1>{post.title}</h1>
        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        {/* Basic markdown: in the future, render MDX */}
        <pre className="whitespace-pre-wrap text-sm">{post.bodyMd}</pre>
      </article>

      <section>
        <h2 className="mb-2 text-xl font-semibold">
          Where to report or get help
        </h2>
        {Object.values(contacts).every((arr) => (arr as any[]).length === 0) ? (
          <p className="text-slate-600">No contacts available yet.</p>
        ) : (
          <div className="space-y-6">
            {(["city", "region", "country", "global"] as const).map((level) => {
              const list = (contacts as any)[level] as any[];
              if (!list?.length) return null;
              return (
                <div key={level}>
                  <h3 className="mb-2 font-medium capitalize">{level}</h3>
                  <ul className="space-y-2">
                    {list.map((c: any) => (
                      <li
                        key={`${level}-${c.id}`}
                        className="rounded-md border p-3"
                      >
                        <div className="font-medium">{c.orgName}</div>
                        {c.description && (
                          <div className="text-sm text-slate-600">
                            {c.description}
                          </div>
                        )}
                        <div className="mt-1 flex flex-wrap gap-3 text-sm">
                          {c.website && (
                            <a
                              href={c.website}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              Website
                            </a>
                          )}
                          {c.submitUrl && (
                            <a
                              href={c.submitUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              Report form
                            </a>
                          )}
                          {c.phone && <span>📞 {c.phone}</span>}
                          {c.email && <span>✉️ {c.email}</span>}
                          {c.verified && (
                            <span className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-700">
                              Verified
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {!!related.length && (
        <section>
          <h2 className="mb-2 text-xl font-semibold">Related posts</h2>
          <ul className="space-y-2">
            {related.map((r: any) => (
              <li key={r.id}>
                <Link
                  href={`/learn/${r.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
