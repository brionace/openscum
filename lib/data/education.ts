import prisma from "../prisma";

export type ListEducationPostsParams = {
  limit?: number;
  offset?: number;
  query?: string;
  country?: string;
  region?: string;
  city?: string;
  tagIds?: string[];
  scamTypeIds?: string[];
  featuredOnly?: boolean;
};

export async function getEducationPosts(params: ListEducationPostsParams = {}) {
  const {
    limit = 20,
    offset = 0,
    query,
    country,
    region,
    city,
    tagIds,
    scamTypeIds,
    featuredOnly,
  } = params;

  const where: any = {
    status: "PUBLISHED",
  };

  if (featuredOnly) where.featured = true;
  if (query) {
    where.OR = [
      { title: { contains: query, mode: "insensitive" } },
      { excerpt: { contains: query, mode: "insensitive" } },
      { bodyMd: { contains: query, mode: "insensitive" } },
    ];
  }
  if (country) where.country = country;
  if (region) where.region = region;
  if (city) where.city = city;

  if (tagIds?.length) {
    where.tags = { some: { tagId: { in: tagIds } } };
  }
  if (scamTypeIds?.length) {
    where.scamTypes = { some: { scamTypeId: { in: scamTypeIds } } };
  }

  const db: any = prisma as any;
  const [items, total] = await Promise.all([
    db.educationPost.findMany({
      where,
      include: {
        tags: { include: { tag: true } },
        scamTypes: { include: { scamType: true } },
      },
      orderBy: [
        { featured: "desc" },
        { publishedAt: "desc" },
        { createdAt: "desc" },
      ],
      take: limit,
      skip: offset,
    }),
    db.educationPost.count({ where }),
  ]);

  return { items, total, limit, offset };
}

export async function getEducationPostBySlug(slug: string) {
  const db: any = prisma as any;
  const post = await db.educationPost.findUnique({
    where: { slug },
    include: {
      tags: { include: { tag: true } },
      scamTypes: { include: { scamType: true } },
    },
  });
  return post;
}

export async function getRelatedEducationPosts(
  postId: string,
  scamTypeIds: string[] = [],
  limit = 5
) {
  const db: any = prisma as any;
  const items = await db.educationPost.findMany({
    where: {
      status: "PUBLISHED",
      id: { not: postId },
      OR: [
        scamTypeIds.length
          ? { scamTypes: { some: { scamTypeId: { in: scamTypeIds } } } }
          : undefined,
      ].filter(Boolean) as any,
    },
    orderBy: [{ publishedAt: "desc" }],
    take: limit,
  });
  return items;
}
