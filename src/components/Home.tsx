import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div id="home" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-0 bg-primary rounded-full opacity-10"></div>
              <img
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                src="https://media.licdn.com/dms/image/v2/D4D03AQGt6lE89T2V3Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706995059751?e=1737590400&v=beta&t=b0tjoJHnEYOzhQn1vFYJAf5ad3NB-EcmV8AUyj_g5rE"
                alt="Hakan GÜL"
              />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hakan GÜL
          </h1>
          <h2 className="text-2xl text-primary mb-6">
            Software Developer in Test & Software Engineer
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <article className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Test Otomasyonunda Yapay Zeka Entegrasyonu
              </h3>
              <p className="text-gray-600">
                Modern test otomasyonu süreçlerinde yapay zeka teknolojilerinin 
                kullanımı, test verimliliğini ve kapsamını önemli ölçüde artırıyor. 
                Makine öğrenimi algoritmaları, test senaryolarının otomatik 
                oluşturulması ve hata tespitinde devrim yaratıyor.
              </p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Çoklu Platform Test Stratejileri
              </h3>
              <p className="text-gray-600">
                Farklı platformlar ve cihazlar için esnek test stratejileri 
                geliştirmek, modern yazılım geliştirme süreçlerinde kritik öneme 
                sahip. Selenium, Appium gibi araçlarla çapraz platform test 
                otomasyonu mümkün hale geliyor.
              </p>
            </article>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://github.com/hakanngul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/hhakangul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:hakangul@gmail.com"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
