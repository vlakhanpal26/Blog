import Image from 'next/image';

export const mdxComponents = {
  h4: (props) => (
    <h4
      {...props}
      className="mt-14 border-t border-black/10 pt-8 font-serif text-2xl leading-tight text-neutral-900"
    />
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="my-10 border-l-2 border-accent pl-5 font-serif text-xl italic text-neutral-700"
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      className="my-8 list-decimal space-y-5 pl-8 marker:font-serif marker:text-xl marker:text-accent"
    />
  ),
  p: (props) => <p {...props} className="my-6 text-[1.05rem] leading-[1.9] text-neutral-800" />,
  img: ({ src = '', alt = '' }: { src?: string; alt?: string }) => (
    <span className="my-10 block overflow-hidden rounded-2xl">
      <Image
        src={String(src)}
        alt={alt}
        width={1400}
        height={900}
        className="h-auto w-full object-cover"
      />
    </span>
  )
};
