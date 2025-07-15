import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // Placeholder tags - in a real implementation, these would come from a database
    const tags = [
      {
        id: "1",
        name: "Phone Scam",
        description: "Scams conducted over the phone",
      },
      { id: "2", name: "Email Scam", description: "Scams conducted via email" },
      {
        id: "3",
        name: "Online Shopping",
        description: "Fraudulent online shopping sites",
      },
      {
        id: "4",
        name: "Investment",
        description: "Investment fraud and pyramid schemes",
      },
      {
        id: "5",
        name: "Romance Scam",
        description: "Dating and relationship scams",
      },
    ];

    return NextResponse.json(tags);
  } catch (error) {
    console.error("Error fetching tags:", error);
    return NextResponse.json(
      { error: "Failed to fetch tags" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, description } = await request.json();

    if (!name) {
      return NextResponse.json(
        { error: "Tag name is required" },
        { status: 400 }
      );
    }

    // Placeholder implementation - in a real app, this would save to database
    const newTag = {
      id: Date.now().toString(),
      name,
      description: description || null,
    };

    return NextResponse.json(newTag, { status: 201 });
  } catch (error) {
    console.error("Error creating tag:", error);
    return NextResponse.json(
      { error: "Failed to create tag" },
      { status: 500 }
    );
  }
}
