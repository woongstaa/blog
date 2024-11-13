import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
// import { transformerCopyButton } from '@rehype-pretty/transformers';
import remarkToc from 'remark-toc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

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
          img: (imageComponent) => {
            return <img {...imageComponent} className='aspect-video rounded-lg bg-warm-gray object-contain' />;
          }
        }}
      />
    </article>
  );
}
