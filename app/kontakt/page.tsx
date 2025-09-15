"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const contactInfo = {
    emails: ["odavic.zorica@gmail.com", "lekovitikoucing@gmail.com"],
    phone: "+381 60 000 000",
    location: "Lazarevac, Srbija",
    workingHours: "Pon-Pet: 9:00-17:00, Sub: 9:00-13:00"
  };

  const services = [
    "Oporavak od tuge",
    "Logoterapija", 
    "NLP koučing",
    "Individualno savetovanje",
    "Partnersko savetovanje",
    "Medijacija"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero sekcija */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-slate-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Kontakt
            </motion.h1>
            <motion.p
              className="text-xl text-slate-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Spremni da napravite prvi korak? Kontaktirajte me za konsultaciju
            </motion.p>
          </div>
        </div>
      </section>

      {/* Kontakt informacije i forma */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Kontakt informacije */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-8">
                  Kontakt informacije
                </h2>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <Mail className="w-6 h-6 text-primary mr-4" />
                        <div>
                          <h3 className="font-semibold mb-2">Email adrese</h3>
                          {contactInfo.emails.map((email, index) => (
                            <a
                              key={index}
                              href={`mailto:${email}`}
                              className="block text-slate-600 hover:text-primary transition-colors"
                            >
                              {email}
                            </a>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <Phone className="w-6 h-6 text-primary mr-4" />
                        <div>
                          <h3 className="font-semibold mb-2">Telefon</h3>
                          <a
                            href={`tel:${contactInfo.phone}`}
                            className="text-slate-600 hover:text-primary transition-colors"
                          >
                            {contactInfo.phone}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <MapPin className="w-6 h-6 text-primary mr-4" />
                        <div>
                          <h3 className="font-semibold mb-2">Lokacija</h3>
                          <p className="text-slate-600">{contactInfo.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <Clock className="w-6 h-6 text-primary mr-4" />
                        <div>
                          <h3 className="font-semibold mb-2">Radno vreme</h3>
                          <p className="text-slate-600">{contactInfo.workingHours}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Kontakt forma */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">
                      Pošaljite poruku
                    </h2>
                    
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">Ime</Label>
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="Vaše ime"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Prezime</Label>
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Vaše prezime"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="vas@email.com"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+381 60 000 000"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="service">Usluga</Label>
                        <select
                          id="service"
                          className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Izaberite uslugu</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message">Poruka</Label>
                        <Textarea
                          id="message"
                          placeholder="Opišite vašu situaciju ili pitanje..."
                          className="mt-1 min-h-[120px]"
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="w-5 h-5 mr-2" />
                        Pošaljite poruku
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Usluge */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center text-slate-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Usluge koje pružam
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg">{service}</h3>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA sekcija */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Spremni da napravite prvi korak?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Ako čekate da bolji život dođe do vas to se neće desiti bez vas.<br />
                Kreirajte svoj život po svojoj meri.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="tel:+38160000000">
                    <Phone className="w-5 h-5 mr-2" />
                    Pozovite odmah
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="mailto:odavic.zorica@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Pošaljite email
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
