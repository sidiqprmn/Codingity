import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi";
import { AiTwotoneDelete } from "react-icons/ai";

function DataUsers() {
  const musicData = [
    {
      id: 1,
      Username: "Anies",
      Password: "40 kota",
      Kategori: "Intelektual",
    },
    {
      id: 2,
      Username: "Prabowo",
      Password: "gemoy123",
      Kategori: "menhan",
    },
    {
      id: 3,
      Username: "Ganjar",
      Password: "ampun dj",
      Kategori: "gubernur",
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
        <div className="container mx-auto max-w-5xl rounded-lg overflow-hidden bg-gray-400 text-black">
          <table className="table-auto w-full ">
            <thead>
              <tr>
                <th className="border border-black px-4 py-2">ID</th>
                <th className="border border-black px-4 py-2">Username</th>
                <th className="border border-black px-4 py-2">Password</th>
                <th className="border border-black px-4 py-2">Kategori user</th>
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
                    {music.Username}
                  </td>
                  <td className="border border-black text-center px-4 py-2">
                    {music.Password}
                  </td>
                  <td className="border border-black text-center px-4 py-2">
                    {music.Kategori}
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

export default DataUsers;
