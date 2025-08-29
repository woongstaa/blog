import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
// import { transformerCopyButton } from '@rehype-pretty/transformers';
import remarkToc from 'remark-toc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Image from 'next/image';

export function MDXComponent({ content }: { content?: string }) {
  return (
    <article className='prose mx-auto w-full'>
      <MDXRemote
        source={content || ''}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks, [remarkToc, { heading: 'structure' }]],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  keepBackground: false,
                  theme: { dark: 'plastic', light: 'github-light' }
                  // transformers: [
                  //   transformerCopyButton({
                  //     visibility: 'always',
                  //     feedbackDuration: 3_000
                  //   })
                  // ]
                }
              ],
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  properties: {
                    className: ['anchor']
                  }
                }
              ]
            ]
          }
        }}
        components={{
          a: ({ children, href, ...rest }) => {
            return (
              <a {...rest} target='_blank' href={href?.toString()}>
                {children}
              </a>
            );
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          img: (props: any) => {
            const { src, alt } = props;
            // Next.js Image 컴포넌트 사용하여 최적화
            if (src?.startsWith('/')) {
              return <Image src={src} alt={alt || ''} width={800} height={450} className='rounded-lg bg-warm-gray object-contain' />;
            }
            // 외부 이미지는 기본 img 태그 사용 (eslint 경고 무시)
            // eslint-disable-next-line @next/next/no-img-element
            return <img {...props} alt={alt || ''} className='rounded-lg bg-warm-gray object-contain' />;
          }
        }}
      />
    </article>
  );
}
