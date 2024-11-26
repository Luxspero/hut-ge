import React, { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white text-center p-4 rounded-lg shadow-lg">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
            🎉 Selamat Ulang Tahun, Gracelia! 🎉
          </h1>
          <p className="text-lg md:text-xl text-gray-600">8 Desember 2024</p>
        </header>

        <div className="mt-8">
          <img
            src="https://via.placeholder.com/250"
            alt="Gracelia"
            className="w-64 h-64 mx-auto rounded-full shadow-lg border-4 border-blue-500"
          />
          <h2 className="text-2xl md:text-3xl font-semibold mt-6 text-gray-700">
            Dear Gracelia,
          </h2>
          <div className="text-left mt-4 space-y-4 text-gray-500 leading-relaxed">
            <p>
              Ge, Web ini Bill mulai buat di tanggal 23 November 2024 Jam 20.00
              WITA sehabis torang Snorkeling pertama kali. Aku buat ini untuk
              bisa menyampaikan selamat ulang tahun ke kamu hehehehe.
            </p>
            <p>
              Saat ini kita hanya membayangkan apa yang akan aku buat di tanggal
              8 Desember nanti. Saat Bill bangun dari tidur, Bill sudah doa
              untuk kamu: untuk kesehatanmu, kebahagiaanmu, keluargamu, dan masa
              depanmu.
            </p>
            <p>
              "Semoga di ulang tahunmu yang ke-24 ini, kamu semakin bijaksana,
              penuh kebahagiaan, dan terus menjadi inspirasi bagi banyak orang.
              Jangan lupa untuk selalu bersyukur atas kehidupan yang kamu
              jalani. Dengar-dengaran ke Mama dan Papa, jangan bandel jadi anak
              oawkaowkwowko. Tetap semangat yaaaa, and See You!"
            </p>
          </div>
        </div>

        <div className="mt-10 bg-blue-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-500">
            Kejutan Spesial!
          </h3>
          <p className="mt-4 text-gray-600">
            Lihat video ini Ge, maaf yah JANG TARU KIRA wkwkwkWKWKWKWK
          </p>
          <button
            onClick={openModal}
            className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-400"
          >
            Tonton Video
          </button>
        </div>

        <footer className="mt-8 text-sm text-gray-400">
          From Brilliant Blasius. © 2024.
        </footer>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-blue-500">
                Video Ucapan
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-600 font-semibold text-xl"
              >
                &times;
              </button>
            </div>
            <div className="mt-4 max-w-full max-h-[75vh] flex justify-center">
              <iframe
                src="https://mega.nz/embed/V8x0UQDY#uqCheLDzepeXW83zog22ehEsz-PqCMvRYwXDVhWWi6E"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-[75vh] object-contain"
                title="Ucapan Video"
                onError={(e) => {
                  e.target.style.display = "none";
                  document.getElementById("fallback-message").style.display =
                    "block";
                }}
              ></iframe>
              <p
                id="fallback-message"
                style={{ display: "none" }}
                className="mt-4 text-red-500 text-center"
              >
                Video tidak dapat dimuat dari MEGA. Silakan gunakan link
                alternatif di bawah.
              </p>
            </div>
            <br />
            <p className="mt-4 text-gray-600">
              Ge, kalo tidak bisa Play Pake Google Drive Jo :{" "}
              <a
                target="blank_"
                href="https://drive.google.com/file/d/1O4GfVmhn_9_F9Lgtoqhtl0ny_51hG1eA/view"
                className="text-blue-500 underline"
              >
                KLIK SINI
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
