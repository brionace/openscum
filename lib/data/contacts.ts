import prisma from "../prisma";

export type GetLocalContactsParams = {
  scamTypeIds?: string[];
  country?: string | null;
  region?: string | null;
  city?: string | null;
  limitPerLevel?: number;
};

// Returns contacts closest to the user's location: city > region > country > global
export async function getLocalContacts(params: GetLocalContactsParams = {}) {
  const { scamTypeIds = [], country, region, city, limitPerLevel = 5 } = params;

  const db: any = prisma as any;

  const baseWhere = (scope: "city" | "region" | "country" | "global") => {
    const where: any = { status: "PUBLISHED" };
    if (scamTypeIds.length)
      where.scamTypes = { some: { scamTypeId: { in: scamTypeIds } } };
    if (scope === "city" && city) where.city = city;
    if (scope === "region" && region) where.region = region;
    if (scope === "country" && country) where.country = country;
    if (scope === "global") {
      where.country = null;
      where.region = null;
      where.city = null;
    }
    return where;
  };

  const [cityC, regionC, countryC, globalC] = await Promise.all([
    city
      ? db.contact.findMany({
          where: baseWhere("city"),
          take: limitPerLevel,
          orderBy: { verified: "desc" },
        })
      : Promise.resolve([]),
    region
      ? db.contact.findMany({
          where: baseWhere("region"),
          take: limitPerLevel,
          orderBy: { verified: "desc" },
        })
      : Promise.resolve([]),
    country
      ? db.contact.findMany({
          where: baseWhere("country"),
          take: limitPerLevel,
          orderBy: { verified: "desc" },
        })
      : Promise.resolve([]),
    db.contact.findMany({
      where: baseWhere("global"),
      take: limitPerLevel,
      orderBy: { verified: "desc" },
    }),
  ]);

  return { city: cityC, region: regionC, country: countryC, global: globalC };
}
