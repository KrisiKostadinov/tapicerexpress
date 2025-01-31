import { AboutHeader } from "@/app/about/data";

type AboutInfoProps = {
  aboutHeader: AboutHeader;
}

export default function AboutInfo({ aboutHeader }: AboutInfoProps) {
  return (
    <section>
      <div className="bg-white container mx-auto py-10 px-5 border rounded shadow">
        <h2 className="text-3xl font-semibold text-center mb-5">
          {aboutHeader.title}
        </h2>
        <div
          className="max-w-xl mx-auto text-center text-xl space-y-5"
          dangerouslySetInnerHTML={{ __html: aboutHeader.content }}
        ></div>
      </div>
    </section>
  );
}
