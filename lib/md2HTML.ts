import merge from 'deepmerge';
import githubSchema from 'hast-util-sanitize/lib/github.json';
import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import slug from 'rehype-slug';
import link from 'rehype-autolink-headings';
import html from 'rehype-stringify';
import sanitize from 'rehype-sanitize';

async function md2HTML(md: string): Promise<string> {
  const processedMarkdown = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(slug)
    .use(link, {
      behavior: 'wrap',
      properties: {
        'data-link': true
      }
    })
    .use(html)
    .use(
      sanitize,
      merge(githubSchema, {
        attributes: {
          a: ['href', 'data-link']
        }
      })
    )
    .process(md);
  return processedMarkdown.toString();
}

export default md2HTML;
