import React from "react";
import { ShieldCheck, FileCheck, Award } from "lucide-react";

export default function LicensesInsurance() {
  return (
    <div className="bg-black text-white px-6 sm:px-10 py-16 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          Licenses & Insurance
        </h1>

        <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg mb-12">
          Timeline Improvements LLC is a fully licensed and insured General
          Contracting company serving New York, New Jersey, and Pennsylvania.
          We maintain all required certifications and provide documentation to
          building management upon request.
        </p>

        {/* Main Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

          {/* General Contractor Info */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-7 h-7 text-blue-500" />
              <h2 className="text-2xl font-semibold">General Contractor</h2>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li>✔ Fully Licensed General Contractor</li>
              <li>✔ Work Permits Filed as Required</li>
              <li>✔ Lead-Safe Certified Renovator</li>
              <li>✔ EPA Compliance for Renovation Projects</li>
            </ul>
          </div>

          {/* Insurance Info */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-7 h-7 text-blue-500" />
              <h2 className="text-2xl font-semibold">Insurance Coverage</h2>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li>✔ General Liability Insurance</li>
              <li>✔ Workers’ Compensation</li>
              <li>✔ Disability Insurance</li>
              <li>✔ COI (Certificate of Insurance) Provided Upon Request</li>
            </ul>
          </div>
        </div>

        {/* Subcontractor Licenses */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-7 h-7 text-blue-500" />
            <h2 className="text-2xl font-semibold">Subcontractor Licenses</h2>
          </div>

          <p className="text-gray-300 mb-4">
            We work with licensed and insured specialists for projects requiring
            plumbing and electrical work. All subcontractors provide updated
            licenses and COIs before beginning any project.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>
              🔧 <strong>Licensed Plumbers:</strong> Permit filing & inspections
            </li>
            <li>
              ⚡ <strong>Licensed Electricians:</strong> Panel upgrades, rewiring,
              fixture installations
            </li>
            <li>
              📝 <strong>Signed indemnification forms</strong> provided when required by
              building management
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h2 className="text-xl font-semibold mb-4">
            Need a COI or license copy for your building?
          </h2>
          <p className="text-gray-400 mb-6">
            We typically respond within the same day for COI requests.
          </p>

          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition"
          >
            Request Documentation
          </a>
        </div>
      </div>
    </div>
  );
}
