import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import remarkToc from 'remark-toc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export function MDXComponent({ content }: { content: string }) {
  return (
    <article className='prose dark:prose-invert mx-auto w-full'>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks, [remarkToc, { heading: 'structure' }]],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                
                  keepBackground: false,
                  theme: { dark: 'github-dark-dimmed', light: 'github-light' },
                  transformers: [
                    transformerCopyButton({
                      visibility: 'always',
                      feedbackDuration: 3_000
                    })
                  ]
                }
              ],
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  properties: {
                    className: ['anchor'],
                  },
                },
              ],
            ]
          }
        }}
        components={{
          h1: ({children}) => {
            return <h1 className='text-warm-gray'>{children}</h1>
          },
          h2: ({children}) => {
            return <h2 className='text-warm-gray'>{children}</h2>
          },
          h3: ({children}) => {
            return <h3 className='text-warm-gray'>{children}</h3>
          },   
          h4: ({children}) => {
            return <h4 className='text-warm-gray'>{children}</h4>
          },
          blockquote: ({ children, ...rest }) => (
            <div className="bg-cool-gray rounded-lg py-2 px-6">
              {children}
            </div>
          ),
          p: ({children, ...rest}) => {
            console.log("REST ::", rest)
            return <p>{children}</p>
          },
          ul: ({children})=> {
            return (
              <ul className='text-warm-gray'>{children}</ul>
            )
          },
          ol: ({children})=> {
            return (
              <ol className='text-warm-gray'>{children}</ol>
            )
          },
          li: ({children})=> {
            return (
              <li className='m-0 text-warm-gray marker:text-warm-gray'>{children}</li>
            )
          },
          a: ({children, href, ...rest}) => {
            return (
              <a {...rest}       
              target='_blank'
              href={href?.toString()} className='text-[#f3aa51]'>{children}</a>
            )
          }
        }}
      />
    </article>
  );
}
