'use client';
import Link from 'next/link';
import React from 'react';

const ContactForm = ({
  headline = 'SCHREIBEN SIE UNS',
  description = 'Egal ob es Ihnen um gesunde Haare oder Nägel geht, unsere Community ist für Sie da.\nIhr BIO-H-TEAM.',
  submitText = 'ABSENDEN',
}: {
  headline?: string;
  description?: string;
  submitText?: string;
}) => {
  return (
    <form
      method="POST"
      action="https://builder.io/api/v1/form"
      className="bg-gray-100 px-20 py-12"
    >
      <input type="hidden" name="name" value="Contact Form" />
      <input type="hidden" name="source" value="bio-h-tin.de" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#F59B00] mb-4">{headline}</h2>
        <p className="text-gray-700 max-w-2xl whitespace-pre-line mb-8">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="Vorname*"
              required
              className="w-full p-3 border border-gray-300 rounded bg-white text-black placeholder-gray-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Name*"
              required
              className="w-full p-3 border border-gray-300 rounded bg-white text-black placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail*"
              required
              className="w-full p-3 border border-gray-300 rounded bg-white text-black placeholder-gray-500"
            />
          </div>

          <textarea
            name="message"
            placeholder="Ihre Anliegen..."
            required
            className="w-full p-3 border border-gray-300 rounded bg-white text-black placeholder-gray-500 min-h-[180px]"
          />
        </div>

        <div className="text-sm text-gray-600 mb-6 space-y-3">
          <label className="flex items-start gap-2">
            <input type="checkbox" name="newsletter" className="mt-1" />
            <span>
              Ich möchte den BIO-H-TIN Newsletter abonnieren und regelmäßig über Themen
              informiert werden.
            </span>
          </label>

          <label className="flex items-start gap-2">
            <input type="checkbox" name="privacy" required className="mt-1" />
            <span>
              Ich habe die <Link href="/datenschutz" className="underline">Datenschutzerklärung</Link> zur Kenntnis genommen.
              Ich stimme zu, dass meine Daten und Angaben zur Bearbeitung meines Anliegens
              elektronisch verarbeitet werden. *
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-[#F59B00] text-white px-6 py-3 rounded font-semibold"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
