import CertificateCard from "../ui/CertificateCard";
import { certifications } from "@/lib/certifications";

const Certifications = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognized credentials from industry leaders verifying my technical
            proficiency.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm"
            >
              <CertificateCard cert={cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
