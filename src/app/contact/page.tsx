import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-16">
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Contact</p>
      <h1 className="mt-3 font-serif text-5xl">Reach Out</h1>
      <p className="mt-6 text-lg leading-8 text-neutral-700">
        For collaborations, questions, or just a note, email me anytime. I read every message.
      </p>

      <div className="mt-10 space-y-4 rounded-2xl border border-black/10 p-8">
        <p className="text-sm uppercase tracking-[0.14em] text-neutral-500">Email</p>
        <Link href="mailto:hello@morningpages.blog" className="font-serif text-3xl text-accent hover:underline">
          hello@morningpages.blog
        </Link>
        <p className="pt-3 text-neutral-600">You can also find me on Instagram at @morningpagesjournal.</p>
      </div>
    </div>
  );
}
