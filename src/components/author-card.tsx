import Image from 'next/image';
import Link from 'next/link';

type AuthorCardProps = {
  name: string;
  website: string;
};

export function AuthorCard({ name, website }: AuthorCardProps) {
  return (
    <aside className="rounded-2xl border border-black/10 p-6">
      <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500">About the Author</h3>
      <div className="mt-4 flex items-center gap-4">
        <Image
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=80"
          alt={name}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <p className="font-serif text-2xl text-neutral-900">{name}</p>
          <Link href={website} className="text-sm text-accent hover:underline" target="_blank" rel="noreferrer">
            {website.replace(/^https?:\/\//, '')}
          </Link>
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-neutral-700">
        xyz placeholder author description. You can replace this with your real bio, tone, and social links when
        you are ready.
      </p>
    </aside>
  );
}
