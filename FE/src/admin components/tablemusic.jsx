import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi";
import { AiTwotoneDelete } from "react-icons/ai";

function TableMusic() {
  const musicData = [
    {
      "id": 1,
      "Judul": "Opening Ceremony: Memahami Dunia Fiksi Programming",
      "Penulis": "Tim Acara",
      "Kategori": "Fiksi",
      "Panjang": "100 Kata"
    },
    {
      "id": 2,
      "Judul": "Diskusi Politik: Dinamika Politik dalam Kode",
      "Penulis": "Tim Pembicara",
      "Kategori": "Politik",
      "Panjang": "400 Kata"
    },
    {
      "id": 3,
      "Judul": "Whitepaper Bitcoin: Membongkar Teknologi Blockchain",
      "Penulis": "Penulis 3",
      "Kategori": "Programming",
      "Panjang": "800 Kata"
    },
    {
      "id": 4,
      "Judul": "Eksplorasi Algoritma: Menyingkap Rahasia Kode",
      "Penulis": "Penulis 3",
      "Kategori": "Programming",
      "Panjang": "800 Kata"
    },
    {
      "id": 5,
      "Judul": "Menggali Dunia Web Development: Petualangan Kode",
      "Penulis": "Penulis 3",
      "Kategori": "Programming",
      "Panjang": "800 Kata"
    },
    {
      "id": 6,
      "Judul": "Puncak Acara: Merajut Kode dan Masa Depan",
      "Penulis": "Tim Acara",
      "Kategori": "Programming",
      "Panjang": "800 Kata"
    },
    {
      "id": 7,
      "Judul": "Tutorial Python: Mengenal Bahasa Pemrograman Python",
      "Penulis": "Instruktur Python",
      "Kategori": "Programming",
      "Panjang": "600 Kata"
    },
    {
      "id": 8,
      "Judul": "Hacking Etika: Menggali Kode dengan Bijak",
      "Penulis": "Ahli Keamanan",
      "Kategori": "Programming",
      "Panjang": "700 Kata"
    },
    {
      "id": 9,
      "Judul": "Coding Bootcamp: Menjadi Profesional Kode",
      "Penulis": "Tim Bootcamp",
      "Kategori": "Programming",
      "Panjang": "900 Kata"
    },
    {
      "id": 10,
      "Judul": "API Mastery: Memahami dan Menerapkan API",
      "Penulis": "Pengembang API",
      "Kategori": "Programming",
      "Panjang": "750 Kata"
    },
  ];

  return (
    <>
      <div>
        <div className="container mx-auto flex justify-end font-bold">
          <button className="bg-gray-400 text-black rounded-lg py-2 px-auto mr-[128px] mb-3 px-8 hover:bg-gray-300">
            Tambah Materi
          </button>
        </div>
        <div className="container mx-auto max-w-6xl rounded-lg overflow-hidden bg-gray-400 text-black">
          <table className="table-auto w-full ">
            <thead>
              <tr>
                <th className="border border-black px-4 py-2">ID</th>
                <th className="border border-black px-4 py-2">Judul Materi</th>
                <th className="border border-black px-4 py-2">Penulis</th>
                <th className="border border-black px-4 py-2">Kategori</th>
                <th className="border border-black px-4 py-2">Panjang</th>
                <th className="border border-black px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {musicData.map((music) => (
                <tr key={music.id}>
                  <td className="border border-black text-center px-4 py-2">
                    {music.id}
                  </td>
                  <td className="border border-black text-center px-4 py-2">
                    {music.Judul}
                  </td>
                  <td className="border border-black text-center px-4 py-2">
                    {music.Penulis}
                  </td>
                  <td className="border border-black text-center px-4 py-2">
                    {music.Kategori}
                  </td>
                  <td className="border border-black text-center px-4 py-2">
                    {music.Panjang}
                  </td>
                  <td className="border border-black text-center py-2">
                    <button className="bg-light-blue-900 hover:bg-light-blue-700  text-white text-left py-2 px-4 rounded mr-2">
                      <div>
                        <PiWarningCircleBold className="w-7 h-5" />
                      </div>
                    </button>
                    <button className="bg-light-green-900 hover:bg-light-green-700 text-white  py-2 px-4 rounded mr-2">
                      <BsPencilSquare className="w-7 h-5" />
                    </button>
                    <button className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded mr-2">
                      <AiTwotoneDelete className="w-7 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TableMusic;
