import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Nesine.com",
      period: "Mayıs 2024 - Günümüz",
      title: "Software Developer in Test",
      responsibilities: [
        "Rest Assured ile API test framework'ü geliştirme ve yönetimi",
        "Java Selenium ile ölçeklenebilir test mimarisi tasarımı ve implementasyonu",
        "Allure reporting entegrasyonu ve Slack API ile raporların otomatik paylaşımı",
        "Appium 2.0 ile mobil test otomasyonu altyapısı geliştirme",
        "QA ve otomasyon ekibine mentorluk",
        "Selenium Grid ve Docker ile dağıtık test ortamı geliştirme",
        "CI/CD pipeline'larının implementasyonu"
      ]
    },
    {
      company: "INTERTECH",
      period: "Haziran 2021 - Nisan 2024",
      title: "Senior Software Test Engineer & QA Engineer",
      responsibilities: [
        "ReactJS ile frontend geliştirme",
        "Swagger ve Postman ile API testleri",
        ".NET Core ile backend geliştirme",
        "Test planlama ve yönetimi"
      ]
    },
    {
      company: "Testinium",
      period: "Haziran 2021 - Ekim 2021",
      title: "Software Automation Engineer",
      responsibilities: [
        "Test otomasyonu geliştirme",
        ".NET teknolojileri ile test framework'ü geliştirme"
      ]
    },
    {
      company: "Anayurt Teknoloji",
      period: "Ağustos 2020 - Mayıs 2021",
      title: "Software Engineer",
      responsibilities: [
        "Python ve Flask Framework ile backend geliştirme",
        "MySQL veritabanı yönetimi",
        "React ile frontend geliştirme",
        "Docker containerization",
        "Python ile yüz tanıma sistemleri geliştirme",
        "AI algoritmaları implementasyonu"
      ]
    },
    {
      company: "NETAŞ",
      period: "Ekim 2019 - Ocak 2020",
      title: "Intern",
      responsibilities: [
        "Angular 8 ile frontend geliştirme",
        "NodeJS ve ExpressJS ile backend geliştirme",
        "RESTful API geliştirme",
        "OOP prensipleri uygulama"
      ]
    },
    {
      company: "Mobirob",
      period: "Haziran 2019 - Eylül 2019",
      title: "Intern",
      responsibilities: [
        "Python ile görüntü işleme projeleri geliştirme"
      ]
    }
  ];

  return (
    <div id="experience" className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h2 className="text-3xl font-bold text-left text-gray-900 mb-12">
            İş Deneyimi
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{exp.company}</h3>
                    <p className="text-gray-700 font-medium">{exp.title}</p>
                  </div>
                  <span className="text-sm text-gray-500 sm:text-right">{exp.period}</span>
                </div>
                <ul className="list-disc ml-4 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-600">
                      {resp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
