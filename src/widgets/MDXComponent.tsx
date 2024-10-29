import { MDXRemote } from 'next-mdx-remote/rsc';
// import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
// import { transformerCopyButton } from '@rehype-pretty/transformers';

export function MDXComponent({ content }: { content: string }) {
  return (
    <div className='prose mx-auto w-full max-w-[750px] px-5 dark:prose-invert sm:px-6'>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [[rehypePrettyCode, { theme: { dark: 'github-dark-dimmed', light: 'github-light' } }], rehypeSlug]
          }
        }}
        // options={{
        //   mdxOptions: {
        //     remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
        //     rehypePlugins: [
        //       [
        //         rehypePrettyCode,
        //         {
        //           theme: { dark: 'github-dark-dimmed', light: 'github-light' }
        //           // transformers: [
        //           //   transformerCopyButton({
        //           //     visibility: 'always',
        //           //     feedbackDuration: 3_000
        //           //   })
        //           // ],
        //         }
        //       ],
        //       rehypeSlug
        //     ]
        //   }
        // }}
      />
    </div>
  );
}
