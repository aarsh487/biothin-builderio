'use client'

import Link from 'next/link'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

interface ContactFormProps {
  headline?: string
  description?: string
  submitText?: string
}

const ContactForm: React.FC<ContactFormProps> = ({
  headline = 'SCHREIBEN SIE UNS',
  description = 'Egal ob es Ihnen um gesunde Haare oder Nägel geht, unsere Community ist für Sie da.\nIhr BIO-H-TEAM.',
  submitText = 'ABSENDEN',
}) => {
  return (
    <form
      method="POST"
      action="https://builder.io/api/v1/form"
      className="bg-light px-6 sm:px-12 md:px-20 py-12"
    >
      <input type="hidden" name="name" value="Contact Form" />
      <input type="hidden" name="source" value="bio-h-tin.de" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-color mb-4">{headline}</h2>
        <p className="text-dark max-w-2xl whitespace-pre-line mb-8">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <Input
              type="text"
              name="firstName"
              placeholder="Vorname*"
              required
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Name*"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="E-Mail*"
              required
            />
          </div>

          <Textarea
            name="message"
            placeholder="Ihre Anliegen..."
            required
            className="min-h-[180px]"
          />
        </div>

        <div className="text-sm text-medium mb-6 space-y-3">
          <div className="flex items-start gap-2">
            <Checkbox id="newsletter" name="newsletter" />
            <Label htmlFor="newsletter" className="leading-relaxed">
              Ich möchte den BIO-H-TIN Newsletter abonnieren und regelmäßig über
              Themen informiert werden.
            </Label>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox id="privacy" name="privacy" required />
            <Label htmlFor="privacy" className="leading-relaxed">
              Ich habe die{' '}
              <Link href="/datenschutz" className="underline">
                Datenschutzerklärung
              </Link>{' '}
              zur Kenntnis genommen. Ich stimme zu, dass meine Daten und Angaben
              zur Bearbeitung meines Anliegens elektronisch verarbeitet werden. *
            </Label>
          </div>
        </div>

        <Button type="submit" className="bg-orange-color hover:bg-orange-color/90">
          {submitText}
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
