import { notFound } from "next/navigation";
import TypeReportList from "./type-report-list";

export default async function TypePage({
  params,
}: {
  params: { typeId: string };
}) {
  // Fetch type info (SSR)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/scam-types/${params.typeId}`
  );
  if (!res.ok) return notFound();
  const { type } = await res.json();
  if (!type) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-2">{type.name}</h1>
      {type.description && (
        <p className="mb-6 text-gray-600">{type.description}</p>
      )}
      <TypeReportList typeId={params.typeId} />
    </div>
  );
}
