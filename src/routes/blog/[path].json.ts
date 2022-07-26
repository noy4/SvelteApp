import type { RequestHandler } from '@sveltejs/kit'
import fs from 'fs'
import matter from 'gray-matter'

export const GET: RequestHandler = ({ params }) => {
  const { path } = params
  let markdownFileName = fs
    .readdirSync('contents/blog')
    .find((fileName) => fileName.endsWith(`${path}.md`))

  if (!markdownFileName) {
    return {
      status: 404,
    }
  }

  const markdown = fs.readFileSync('contents/blog/' + markdownFileName)
  const { content, data } = matter(markdown)
  const post = {
    meta: data,
    body: content,
  }

  return {
    body: post,
  }
}
