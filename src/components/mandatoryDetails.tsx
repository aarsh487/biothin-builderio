import { About } from "@/data/about";
import RichText from "./ui/Richtext";

export type MandatoryDetailsProps = {
  about: About;
};

export default function MandatoryDetails({ about }: MandatoryDetailsProps) {
  const mandatoryDetails = about?.data?.mandatoryDetails

  return (
    <section className="not-prose container py-12 px-20 lg:py-16">
      {mandatoryDetails && (
        <RichText
          className="text-muted-foreground lg:prose-lg prose-p:my-0 prose-p:text-[1rem]/[1.875]"
          content={mandatoryDetails}
        />
      )}
    </section>
  );
}
