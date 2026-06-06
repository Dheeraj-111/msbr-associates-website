import { useMemo, useState } from "react";
import { ShieldCheck, ShieldX, Download, Printer, Search } from "lucide-react";
import { certificates } from "../data/certificates";

export default function CertificateVerification() {
  const searchParams = new URLSearchParams(window.location.search);

  const certificateId = searchParams.get("id") || "";

  const [searchValue, setSearchValue] = useState(certificateId);

  const certificate = useMemo(() => {
    return certificates.find(
      (item) => item.id.toLowerCase() === certificateId.toLowerCase(),
    );
  }, [certificateId]);

  const handleSearch = () => {
    const value = searchValue.trim();

    if (!value) return;

    window.location.href = `/verify?id=${value}`;
  };

  return (
    <section className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#071B36] mb-2">
            Certificate Verification
          </h1>

          <p className="text-gray-600">
            Verify internship certificates issued by
            <span className="font-medium"> M S B R & ASSOCIATES LLP</span>
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl p-4 shadow mb-8 flex flex-col sm:flex-row gap-3">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Enter Certificate ID"
            className="flex-1 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />

          <button
            onClick={handleSearch}
            className="bg-[#D4AF37] hover:bg-[#c8a32f] transition-colors text-black px-6 rounded-lg flex items-center justify-center gap-2"
          >
            <Search size={18} />
            Verify
          </button>
        </div>

        {/* VERIFIED */}
        {certificate ? (
          <div className="bg-white rounded-3xl shadow-xl border border-green-200 p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-8">
              <ShieldCheck size={64} className="text-green-600 shrink-0" />

              <div>
                <h2 className="text-3xl font-bold text-green-700">
                  Certificate Successfully Verified
                </h2>

                <p className="text-gray-600 mt-2">
                  This certificate has been officially issued by M S B R &
                  ASSOCIATES LLP.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard label="Student Name" value={certificate.studentName} />
              <InfoCard label="Father Name" value={certificate.fatherName} />
              <InfoCard
                label="Enrollment No."
                value={certificate.enrollmentNo}
              />
              <InfoCard label="College" value={certificate.college} />
              <InfoCard label="University" value={certificate.university} />
              <InfoCard label="Department" value={certificate.department} />
              <InfoCard label="Start Date" value={certificate.startDate} />
              <InfoCard label="End Date" value={certificate.endDate} />
              <InfoCard label="Duration" value={certificate.totalDuration} />
              <InfoCard label="Issue Date" value={certificate.issueDate} />
              <InfoCard label="Partner" value={certificate.partnerName} />
              <InfoCard label="Status" value={certificate.status} />
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {/* {certificate.certificateImage && (
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-4">
                    Certificate Preview
                  </h3>

                  <img
                    src={certificate.certificateImage}
                    alt={certificate.studentName}
                    className="w-full rounded-2xl border shadow-lg"
                  />
                </div>
              )} */}
              {/* <a
                href={certificate.pdfUrl}
                download
                className="bg-[#071B36] text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <Download size={18} />
                Download Certificate
              </a> */}

              <button
                onClick={() => window.print()}
                className="border border-[#071B36] text-[#071B36] hover:bg-slate-100 transition-colors px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <Printer size={18} />
                Print Verification
              </button>
            </div>
          </div>
        ) : (
          /* NOT FOUND */
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <ShieldX size={64} className="text-red-600 mx-auto mb-4" />

            <h2 className="text-3xl font-bold text-red-600 mb-2">
              Certificate Not Found
            </h2>

            <p className="text-gray-600 max-w-xl mx-auto">
              The certificate you are trying to verify does not exist in our
              records.
            </p>

            <button
              onClick={() => {
                window.location.href = "/";
              }}
              className="mt-6 bg-[#071B36] text-white px-6 py-3 rounded-lg"
            >
              Return to Homepage
            </button>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-10 text-center text-sm text-slate-500">
          Certificate information displayed on this page is intended solely for
          verification purposes.
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
      <p className="text-sm text-gray-500">{label}</p>

      <p className="font-semibold text-[#071B36] mt-1 break-words">{value}</p>
    </div>
  );
}
