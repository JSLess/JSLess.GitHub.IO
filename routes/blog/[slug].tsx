import { Handlers, PageProps } from "$fresh/server.ts";
import * as gfm from "$gfm";
import { Container } from "../../components/Container.tsx";
import { loadPost, Post } from "../../utils/posts.ts";
import { Header } from "../../components/Header.tsx";
import { ServerCodePage } from "../_404.tsx";

interface Data {
  post: Post | null;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const post = await loadPost(ctx.params.slug);
    return ctx.render({ ...ctx.state, post });
  },
};


import markdownit from 'markdown-it'
import hljs from 'highlight' // https://highlightjs.org


// Actual default values
const md = markdownit({

  html : true ,
  xhtmlOut : true ,
  breaks : true ,

  highlight (str : any, lang : any){ 
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});

export default function PostPage(props: PageProps<Data>) {
  const { post } = props.data;
  return post
    ? (
      <>
        <link rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css"
        />
        <Header />
        <Container>
          <h1 class="font-bold text-5xl pt-20 text-balance">
            {post.title}
            </h1>

          <div class="inline-block mt-4 flex flex-col" >
          <span>
              <b>Published : </b>

              <time>
            {new Date(post.publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
              </span>
          
          { ( post.updatedAt.getMilliseconds() !== post.publishedAt.getMilliseconds() ) && <>
            
              <span>
              <b>Updated : </b>

              <time>
{new Date(post.updatedAt).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
              </span>
          
          </>}
          </div>

          
          <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
          <article
            class="mt-12 markdown-body"
            dangerouslySetInnerHTML={{ __html: md.render(post.content) }}
          />
        </Container>
      </>
    )
    : (
      <ServerCodePage
        serverCode={404}
        codeDescription={"We couldn't find the post you're looking for."}
      />
    );
}
