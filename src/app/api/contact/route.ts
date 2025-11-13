import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// ensure Node.js runtime (not edge)
export const runtime = 'nodejs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const form = await request.json();
    const { name = 'Anonymous', email = '', message = '' } = form;

    if (!email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('portfolio')
      .insert([{ name, email, message }]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { ok: false, error: 'Database insert failed' },
        { status: 500 }
      );
    }
console.log("✅ API reached end successfully");
console.log("📩 Incoming POST /api/contact");

    return NextResponse.json({ ok: true, message: 'Message saved successfully' },{status:200});
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
