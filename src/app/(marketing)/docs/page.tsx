import { notFound } from "next/navigation";
import { allDocs } from "@.contentlayer/generated";
import { Mdx } from "@/components/mdx/mdxComponent";
import MdxHeaderAnimation from "@/components/mdx/mdx-header-animation";
import { DashboardTableOfContents } from "@/components/mdx/toc";
import { getTableOfContents } from "@/lib/toc";
import "@/styles/mdx.css";

async function getpageFromParams(params: { slug: string }) {
  const slug = params.slug;
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }
  return doc;
}

export default async function Documentation() {
  const doc = await getpageFromParams({ slug: "main-doc" });

  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div className="hidden text-sm min-[1790px]:inline-flex">
        <div className="fixed top-28 right-[100px] h-full z-50">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
      <div className="mx-auto w-full min-w-0">
        <MdxHeaderAnimation title={doc.title} description={doc.description} />
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6" />
      </div>
    </article>
  );
}
