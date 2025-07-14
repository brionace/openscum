import "@testing-library/jest-dom";

// Mock // Mock window.matchMedia for JSDOM (only if window exists)
if (typeof window !== "undefined") {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

// Mock SupabaseUserContext for tests
jest.mock("@/components/SupabaseUserContext", () => ({
  useSupabaseUser: () => ({
    user: null,
    session: null,
    loading: false,
    signIn: jest.fn(),
    signOut: jest.fn(),
  }),
  SupabaseUserProvider: ({ children }: { children: React.ReactNode }) =>
    children,
}));

// Mock toast hook
jest.mock("@/hooks/use-toast", () => ({
  toast: jest.fn(),
}));

// Mock ResizeObserver for JSDOM
global.ResizeObserver =
  global.ResizeObserver ||
  class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

// Mock Next.js App Router for tests that use useRouter
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    pathname: "/",
    query: {},
  }),
  usePathname: () => "/",
  useSearchParams: () => ({ get: jest.fn() }),
}));

// Mock fetch for all tests (for dynamic scam type search in ReportForm)
if (!global.fetch) {
  global.fetch = jest.fn((url) => {
    if (typeof url === "string" && url.includes("/api/scam-types")) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: "1", name: "phishing" }]),
        text: () => Promise.resolve('[{"id":"1","name":"phishing"}]'),
      });
    }
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
      text: () => Promise.resolve("[]"),
    });
  }) as jest.Mock;
}
