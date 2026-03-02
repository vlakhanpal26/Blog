import Image from 'next/image';

const collage = [
  {
    src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80',
    alt: 'San Francisco bridge'
  },
  {
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    alt: 'Vintage camera'
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    alt: 'Beach water at sunset'
  },
  {
    src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
    alt: 'Floral closeup'
  },
  {
    src: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80',
    alt: 'Fresh strawberries'
  }
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">About Me</p>
      <h1 className="mt-3 font-serif text-5xl text-[#192f78]">Hi, I&apos;m xyz.</h1>
      <div className="mt-7 max-w-3xl space-y-5 text-lg leading-9 text-neutral-700">
        <p>
          xyz placeholder bio. This is where your real intro goes, your story, your personality, and what this blog is
          about.
        </p>
        <p>
          For now, this page is styled as a visual moodboard with places and objects you mentioned: San Francisco,
          cameras, beaches, florals, and strawberries.
        </p>
      </div>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <div className="overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <Image
            src={collage[0].src}
            alt={collage[0].alt}
            width={900}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-2">
          <Image
            src={collage[1].src}
            alt={collage[1].alt}
            width={900}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-2">
          <Image
            src={collage[2].src}
            alt={collage[2].alt}
            width={900}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-2xl sm:col-span-1 lg:col-span-2">
          <Image
            src={collage[3].src}
            alt={collage[3].alt}
            width={900}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-2xl sm:col-span-1 lg:col-span-2">
          <Image
            src={collage[4].src}
            alt={collage[4].alt}
            width={900}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
