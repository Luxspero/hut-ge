function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white text-center p-4 rounded-lg shadow-lg">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
            🎉 Selamat Ulang Tahun, Gracelia! 🎉
          </h1>
          <p className="text-lg md:text-xl text-gray-600">8 Desember 2024</p>
        </header>

        {/* Hero Section */}
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
              bisa menyampaikan selamat ulang tahun ke kamu hehehehe. Dan kalo
              kamu baca ini, berarti Bill lagi test PAPK di tingkat Pusat.
            </p>
            <p>
              Saat ini kita hanya membayangkan apa yang akan aku buat di tanggal
              8 Desember nanti. Saat Bill bangun dari tidur, Bill sudah doa
              untuk kamu: untuk kesehatanmu, kebahagiaanmu, keluargamu, dan masa
              depanmu.
            </p>
            <p>
              "Semoga di ulang tahunmu yang ke-20 ini, kamu semakin bijaksana,
              penuh kebahagiaan, dan terus menjadi inspirasi bagi banyak orang.
              Jangan lupa untuk selalu bersyukur atas kehidupan yang kamu
              jalani. Dengar-dengaran ke Mama dan Papa, jangan bandel jadi anak
              oawkaowkwowko. Tetap semangat yaaaa, and See You!"
            </p>
          </div>
        </div>

        {/* Surprise Section */}
        <div className="mt-10 bg-blue-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-500">
            Kejutan Spesial!
          </h3>
          <p className="mt-4 text-gray-600">
            Lihat video ini Ge, maaf yah JANG TARU KIRA wkwkwkWKWKWKWK
          </p>
          <button
            onClick={() => alert("Video kejutan sedang diputar!")}
            className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-400"
          >
            Tonton Video
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-sm text-gray-400">
          From Brilliant Blasius. © 2024.
        </footer>
      </div>
    </div>
  );
}

export default App;
