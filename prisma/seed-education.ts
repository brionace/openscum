import prismaDefault from "../lib/prisma";
const prisma: any = prismaDefault as any;

async function main() {
  const slug = "how-to-spot-phishing";

  // Ensure tags
  const tagNames = ["Phishing", "Email", "Security"];
  await prisma.tag.createMany({
    data: tagNames.map((name: string) => ({ name })),
    skipDuplicates: true,
  });
  const tags = await prisma.tag.findMany({ where: { name: { in: tagNames } } });

  // Try to locate a scam type
  const st = await prisma.scamType.findUnique({
    where: { name: "Phishing (Email/SMS)" },
  });

  // Upsert post
  const post = await prisma.educationPost.upsert({
    where: { slug },
    update: {
      title: "How to spot phishing messages",
      excerpt:
        "Simple checks to avoid clicking on malicious links in emails and texts.",
      bodyMd:
        "Phishing messages try to trick you into clicking links or sharing personal info.\n\nLook for: suspicious senders, urgent language, misspellings, mismatched URLs, and attachments you didn't expect.",
      status: "PUBLISHED",
      category: "PREVENTION",
      featured: true,
      publishedAt: new Date(),
    },
    create: {
      slug,
      title: "How to spot phishing messages",
      excerpt:
        "Simple checks to avoid clicking on malicious links in emails and texts.",
      bodyMd:
        "Phishing messages try to trick you into clicking links or sharing personal info.\n\nLook for: suspicious senders, urgent language, misspellings, mismatched URLs, and attachments you didn't expect.",
      status: "PUBLISHED",
      category: "PREVENTION",
      featured: true,
      publishedAt: new Date(),
    },
  });

  // Link tags
  for (const t of tags) {
    await prisma.postTag.upsert({
      where: { postId_tagId: { postId: post.id, tagId: t.id } },
      update: {},
      create: { postId: post.id, tagId: t.id },
    });
  }

  // Link scam type if present
  if (st) {
    await prisma.educationPostScamType.upsert({
      where: { postId_scamTypeId: { postId: post.id, scamTypeId: st.id } },
      update: {},
      create: { postId: post.id, scamTypeId: st.id },
    });
  }

  console.log("Seeded education post:", post.slug);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
