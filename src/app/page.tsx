import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-gray-900 shadow-2xl rounded-lg overflow-hidden relative">
        {/* Header */}
        <div
          className="h-40 relative bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/background.gif')", // Đường dẫn ảnh nền
          }}
        >
          {/* Avatar với hiệu ứng gradient border */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="relative w-32 h-32 rounded-full border-4 border-gray-900">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center transform hover:scale-105 transition duration-300">
                  <Image
                    src="/images/avatar.jpg" // Thay bằng ảnh avatar
                    alt="Profile Picture"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="pt-20 pb-8 px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white glow">
            Phạm Gia Huy
          </h1>
          <p className="text-gray-400 mt-2 text-lg">Web Developer</p>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
          Xin chào mình là Phạm Gia Huy, là một lập trình viên chuyên về php. Để liên hệ với mình hãy vào các trang mạng xã hội của mình qua đường link phía dưới nha.
          </p>

          {/* Social Links */}
<div className="flex justify-center gap-6 mt-6">
  {/* Facebook */}
  <a
    href="https://facebook.com/huyngudeochiuduoc"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-600 transition duration-300 transform hover:scale-125 hover:shadow-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22 12a10 10 0 1 0-11.62 9.88v-6.98H8v-2.9h2.38V9.7c0-2.36 1.4-3.66 3.55-3.66 1.03 0 2.1.18 2.1.18v2.31h-1.18c-1.16 0-1.52.73-1.52 1.48v1.78h2.59l-.41 2.9h-2.18v6.98A10.02 10.02 0 0 0 22 12z" />
    </svg>
  </a>
  {/* GitHub */}
  <a
    href="https://github.com/hml69"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-gray-200 transition duration-300 transform hover:scale-125 hover:shadow-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.74c-2.78.61-3.37-1.34-3.37-1.34-.45-1.13-1.11-1.43-1.11-1.43-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.573 9.573 0 0 1 12 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.83-2.34 4.68-4.57 4.92.36.31.69.93.69 1.88v2.79c0 .26.16.57.68.47C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  </a>
  {/* Telegram */}
  <a
    href="https://t.me/pham_gia_huy"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-125 hover:shadow-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21.77 3.37a2.02 2.02 0 0 0-2.25-.22L3.68 10.47c-.88.43-.97 1.3-.17 1.58l3.98 1.42 2.25 6.8c.26.82.68 1.01 1.2.65l3.2-2.32 4.43 3.37c.58.44 1.05.21 1.2-.61l2.45-11.6c.2-.93-.31-1.43-.9-1.17l-10.06 4.3 6.37-6.94c.32-.35.49-.61.47-.8z" />
    </svg>
  </a>
</div>

        </div>
      </div>
    </div>
  );
}
