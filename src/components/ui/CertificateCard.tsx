import { FaExternalLinkAlt, FaAward } from "react-icons/fa";
import Link from "next/link";
import { ICertificate } from "@/lib/types";

const CertificateCard = ({ cert }: { cert: ICertificate }) => {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1     transition-all duration-300 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <FaAward size={24} />
        </div>
        <span className="text-sm font-medium text-gray-400">{cert.date}</span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
        {cert.title}
      </h3>
      <p className="text-blue-600 font-medium text-sm mb-4">{cert.issuer}</p>

      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
        {cert.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {cert.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={cert.verifyUrl}
        target="_blank"
        className="inline-flex items-center justify-center space-x-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors pt-4 border-t border-gray-100"
      >
        <span>Verify Credential</span>
        <FaExternalLinkAlt size={12} />
      </Link>
    </div>
  );
};

export default CertificateCard;
