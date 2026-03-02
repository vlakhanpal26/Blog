import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-12 px-6 pb-24 pt-16 md:grid-cols-[300px_1fr] md:items-start">
      <Image
        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80"
        alt="Portrait of the author"
        width={700}
        height={950}
        className="w-full rounded-2xl object-cover"
      />

      <section>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">About</p>
        <h1 className="mt-3 font-serif text-5xl">Hi, I&apos;m Elena.</h1>
        <div className="mt-7 space-y-5 text-lg leading-9 text-neutral-700">
          <p>
            I started Morning Pages as a place to document the quiet parts of life: mornings before work, awkward
            first dates, seasonal routines, and everything I learn in between.
          </p>
          <p>
            This blog is part diary, part field notes. If you like editorial storytelling with honest details, you
            will probably feel at home here.
          </p>
          <p>When I am not writing, I am collecting vintage magazines, walking in new cities, and making soup.</p>
        </div>
      </section>
    </div>
  );
}
