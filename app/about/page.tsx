import { HeaderPages } from "@/components/header-pages";

export default async function About() {
  return (
    <>
      <HeaderPages />
      <main className="container mx-auto max-w-3xl px-4 py-8 mb-12">
        <h1 className="mb-6 text-2xl font-semibold">About Openscum</h1>
        <p className="mb-4 emphasis">
          Expose Scammers. Protect Yourself. Protect Others.{" "}
          <span role="img" aria-label="search and shield">
            🔍🛡️
          </span>
        </p>

        <p className="mb-4 text-gray-800">
          At <span className="font-semibold">OpenScum</span>, we believe
          scammers thrive in the dark — so we built a platform to shine a light
          on them.{" "}
          <span role="img" aria-label="lightbulb">
            💡
          </span>
        </p>

        <p className="mb-2 text-gray-800">
          We’re a community-powered scam reporting and lookup site where anyone
          can:
        </p>
        <ul className="list-disc list-inside mb-6 pl-4 text-gray-700 space-y-2">
          <li>
            🔎 <span className="font-medium">Search scams</span> by scammer
            details or content
          </li>
          <li>
            📝 <span className="font-medium">Report scams</span> to help expose
            con artists
          </li>
          <li>
            💬{" "}
            <span className="font-medium">Comment and share your insights</span>
          </li>
          <li>
            🔗{" "}
            <span className="font-medium">
              Share with friends and family to raise awareness
            </span>
          </li>
          <li>
            👍 <span className="font-medium">Vote on useful reports</span> and
            🚩 <span className="font-medium">flag suspicious posts</span> to
            keep our database clean
          </li>
        </ul>

        <p className="mb-4 text-gray-800">
          Whether it’s a phishing email, fake online store, romance scam, or
          crypto fraud, OpenScum gives you the tools to protect yourself, your
          friends, and your community — locally and worldwide.{" "}
          <span role="img" aria-label="globe">
            🌍
          </span>
        </p>

        <p className="mb-4 text-gray-800">
          We’re not just a website. We’re a movement to end silent suffering and
          turn the tables on fraudsters. The more we share, the harder it
          becomes for scammers to operate.
        </p>

        <p className="mb-4 text-lg font-semibold">
          Together, we can drag scams out of the shadows and into the open.{" "}
          <span role="img" aria-label="fist">
            ✊
          </span>
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="mb-2 text-blue-900 font-medium">
            📧 Contact us:{" "}
            <a
              href="mailto:contact@openscum.org"
              className="underline text-blue-700"
            >
              contact@openscum.org
            </a>
          </p>
          <p className="text-blue-900 font-medium">
            🌐 Bluesky:{" "}
            <a
              href="https://bsky.app/profile/openscum.bsky.social"
              target="_blank"
              className="underline text-blue-700"
            >
              @openscum
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
