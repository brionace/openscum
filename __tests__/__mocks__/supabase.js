// Mock Supabase client for tests
const mockSupabaseClient = {
  auth: {
    getUser: jest.fn(() =>
      Promise.resolve({ data: { user: null }, error: null })
    ),
    getSession: jest.fn(() =>
      Promise.resolve({ data: { session: null }, error: null })
    ),
    onAuthStateChange: jest.fn((callback) => {
      // Call the callback immediately with no session
      callback("SIGNED_OUT", null);
      return {
        data: {
          subscription: {
            unsubscribe: jest.fn(),
          },
        },
      };
    }),
    signInWithOAuth: jest.fn(() =>
      Promise.resolve({ data: null, error: null })
    ),
    signOut: jest.fn(() => Promise.resolve({ error: null })),
  },
  from: jest.fn(() => ({
    select: jest.fn(() => ({
      eq: jest.fn(() => ({
        single: jest.fn(() => Promise.resolve({ data: null, error: null })),
      })),
    })),
  })),
};

export const createClient = jest.fn(() => mockSupabaseClient);
export const supabase = mockSupabaseClient;

// Export default for CommonJS compatibility
module.exports = {
  createClient,
  supabase: mockSupabaseClient,
};
