"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full bg-gray-950/80 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden border border-gray-800"
      >
        {/* Header */}
        <div
          className="h-44 relative bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/background.gif')",
          }}
        >
          {/* Avatar */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-36 h-36 rounded-full border-4 border-gray-950"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Profile Picture"
                    width={140}
                    height={140}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Body */}
        <div className="pt-20 pb-10 px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
            Phạm Gia Huy
          </h1>
          <p className="text-gray-400 mt-2 text-lg font-medium">
            Web Developer
          </p>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            Xin chào mình là <span className="text-white font-semibold">Phạm Gia Huy</span>, 
            một lập trình viên chuyên về <span className="text-pink-400">PHP</span>.  
            Hãy kết nối với mình qua các mạng xã hội bên dưới nhé!
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-8">
            {/* Facebook */}
            <motion.a
              whileHover={{ scale: 1.3, rotate: 5 }}
              href="https://facebook.com/huyngudeochiuduoc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.62 9.88v-6.98H8v-2.9h2.38V9.7c0-2.36 1.4-3.66 3.55-3.66 1.03 0 2.1.18 2.1.18v2.31h-1.18c-1.16 0-1.52.73-1.52 1.48v1.78h2.59l-.41 2.9h-2.18v6.98A10.02 10.02 0 0 0 22 12z"/>
              </svg>
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.3, rotate: -5 }}
              href="https://github.com/hml69"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.74c-2.78.61-3.37-1.34-3.37-1.34-.45-1.13-1.11-1.43-1.11-1.43-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.573 9.573 0 0 1 12 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.83-2.34 4.68-4.57 4.92.36.31.69.93.69 1.88v2.79c0 .26.16.57.68.47C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
              </svg>
            </motion.a>

            {/* Telegram */}
            <motion.a
              whileHover={{ scale: 1.3, rotate: 5 }}
              href="https://t.me/pham_gia_huy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.77 3.37a2.02 2.02 0 0 0-2.25-.22L3.68 10.47c-.88.43-.97 1.3-.17 1.58l3.98 1.42 2.25 6.8c.26.82.68 1.01 1.2.65l3.2-2.32 4.43 3.37c.58.44 1.05.21 1.2-.61l2.45-11.6c.2-.93-.31-1.43-.9-1.17l-10.06 4.3 6.37-6.94c.32-.35.49-.61.47-.8z"/>
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
