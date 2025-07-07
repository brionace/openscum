import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Accept 'description' from the request body for compatibility with the frontend
  const { description } = await req.json();
  if (!description || typeof description !== "string") {
    return NextResponse.json(
      { paraphrased: "No description provided." },
      { status: 400 }
    );
  }

  const prompt = `
Paraphrase the following text. Only return the paraphrased version, with no introduction, explanation, or extra words. Do not say "Here is the paraphrased text" or similar. Just output the paraphrased content.

Examples:
Input: "I was contacted by someone claiming to be from my bank."
Output: "Someone pretending to be from my bank reached out to me."

Input: "They asked me to send money to unlock my account."
Output: "They requested that I transfer funds to regain access to my account."

Now paraphrase this:
${description}
`;

  const aiResponse = await fetch(
    "https://api.deepinfra.com/v1/openai/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEEPINFRA_API_KEY}`,
      },
      body: JSON.stringify({
        model: "meta-llama/Meta-Llama-3-70B-Instruct",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant that only paraphrases text as instructed.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 256,
        temperature: 0.7,
      }),
    }
  );

  const data = await aiResponse.json();
  const paraphrased =
    data.choices?.[0]?.message?.content?.trim() ||
    "Sorry, the AI could not paraphrase your text.";

  return NextResponse.json({ paraphrased });
}
