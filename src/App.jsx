import React, { useState } from "react";

const RoadmapEkskul = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Data lengkap berdasarkan mapping profil lulusan dan nilai inti
  const roadmapData = {
    "TK MONTESSORI": {
      "Latihan Olah-Bakat/Minat": [
        { nama: "Ballet", status: "aktual" },
        { nama: "Dance", status: "aktual" },
        { nama: "Musik", status: "aktual" },
        { nama: "Gymnastic", status: "aktual" },
        { nama: "Tae Kwon Do", status: "aktual" },
        { nama: "Wushu", status: "aktual" },
        { nama: "Creative Arts", status: "usulan-external" },
      ],
      "Karya Ilmiah": [{ nama: "Literasi", status: "aktual" }],
      Krida: [],
      Keagamaan: [],
      Pemrograman: [{ nama: "Coding", status: "usulan-external-prioritas" }],
      Lainnya: [],
    },
    "SD MONTESSORI": {
      "Latihan Olah-Bakat/Minat": [
        { nama: "Storytelling", status: "usulan-external" },
        { nama: "Musik", status: "usulan-external-prioritas" },
        { nama: "Desain Grafis", status: "usulan-external" },
        { nama: "Fotografi", status: "usulan-external" },
        { nama: "Ballet", status: "usulan-external-prioritas" },
        { nama: "Dance", status: "usulan-unit" },
        { nama: "Taek Kwon Do", status: "aktual" },
        { nama: "Gymnastic", status: "aktual" },
        { nama: "Wushu", status: "usulan-external" },
      ],
      "Karya Ilmiah": [{ nama: "Coding", status: "aktual" }],
      Krida: [],
      Keagamaan: [],
      Pemrograman: [{ nama: "Coding", status: "aktual" }],
      Lainnya: [],
    },
    "KB-TKK SANTO YUSUP III": {
      "Latihan Olah-Bakat/Minat": [
        { nama: "Tari & Gerak Irama", status: "aktual" },
        { nama: "Creative Arts", status: "usulan-external" },
        { nama: "Melukis", status: "usulan-unit" },
        { nama: "Musik", status: "usulan-unit" },
        { nama: "Vocal", status: "usulan-unit" },
        { nama: "Band", status: "usulan-unit" },
        { nama: "Paduan Suara", status: "usulan-external" },
        { nama: "Ballet", status: "usulan-unit" },
        { nama: "Fashion Show", status: "usulan-unit" },
        { nama: "Teater", status: "usulan-unit" },
        { nama: "Renang", status: "usulan-unit" },
        { nama: "Futsal", status: "usulan-unit" },
        { nama: "Wushu", status: "usulan-unit" },
        { nama: "Jujitsu", status: "usulan-external" },
        { nama: "Karate", status: "usulan-external" },
        { nama: "Voli", status: "usulan-external" },
        { nama: "Tae Kwon Do", status: "usulan-unit" },
      ],
      "Karya Ilmiah": [
        { nama: "Bahasa Inggris", status: "aktual" },
        { nama: "Bahasa Mandarin", status: "aktual" },
        { nama: "Science", status: "usulan-external" },
        { nama: "Sempoa", status: "usulan-unit" },
        { nama: "Literasi", status: "usulan-external" },
      ],
      Krida: [],
      Keagamaan: [],
      Pemrograman: [
        { nama: "Coding", status: "usulan-unit" },
        { nama: "Robotic", status: "usulan-unit" },
      ],
      Lainnya: [],
    },
    "SDK SANTO YUSUP II": {
      "Latihan Olah-Bakat/Minat": [
        { nama: "Tari Modern", status: "aktual" },
        { nama: "Desain Grafis", status: "aktual" },
        { nama: "Melukis", status: "aktual" },
        { nama: "Band & Vocalia", status: "aktual" },
        { nama: "Musik", status: "usulan-unit" },
        { nama: "Paduan Suara", status: "usulan-unit" },
        { nama: "Teater", status: "usulan-unit" },
        { nama: "Fashion Show", status: "usulan-unit" },
        { nama: "Ballet", status: "usulan-external" },
        { nama: "Tari Tradisional", status: "usulan-unit" },
        { nama: "Basket", status: "aktual" },
        { nama: "Futsal", status: "aktual" },
        { nama: "Catur", status: "usulan-external" },
        { nama: "Renang", status: "usulan-unit" },
        { nama: "Badminton", status: "usulan-unit" },
        { nama: "Tae Kwon Do", status: "usulan-external" },
        { nama: "Voli", status: "usulan-external" },
        { nama: "Karate", status: "usulan-external" },
        { nama: "Jujitsu", status: "usulan-external-prioritas" },
        { nama: "Tenis Meja", status: "usulan-unit" },
        { nama: "Wushu", status: "usulan-unit" },
        { nama: "Mini Soccer", status: "usulan-external" },
        { nama: "Vocal", status: "usulan-unit" },
      ],
      "Karya Ilmiah": [
        { nama: "Science", status: "usulan-unit" },
        { nama: "OSN Matematika SD", status: "usulan-external" },
        { nama: "OSN IPA SD", status: "usulan-external" },
        { nama: "OSN IPS SD", status: "usulan-external-prioritas" },
        { nama: "Mandarin Club", status: "usulan-unit" },
        { nama: "HSK - Mandarin", status: "usulan-external" },
        { nama: "Storytelling", status: "usulan-external" },
      ],
      Krida: [{ nama: "Dokter Kecil", status: "usulan-external" }],
      Keagamaan: [],
      Pemrograman: [
        { nama: "Coding", status: "usulan-unit" },
        { nama: "Robotic", status: "usulan-unit" },
      ],
      Lainnya: [],
    },
    "SDK SANTO YUSUP III": {
      "Latihan Olah-Bakat/Minat": [
        { nama: "Tari Modern", status: "aktual" },
        { nama: "Tari Tradisional", status: "aktual" },
        { nama: "Paduan Suara", status: "aktual" },
        { nama: "Ansambel", status: "aktual" },
        { nama: "Desain Grafis", status: "usulan-external" },
        { nama: "Fotografi", status: "usulan-external" },
        { nama: "Fashion Design", status: "usulan-external" },
        { nama: "Band", status: "usulan-external-prioritas" },
        { nama: "Teater", status: "usulan-external" },
        { nama: "Storytelling", status: "usulan-external" },
        { nama: "Melukis", status: "usulan-external" },
        { nama: "Vocal", status: "usulan-external" },
        { nama: "Ballet", status: "usulan-external" },
        { nama: "Basket", status: "aktual" },
        { nama: "Wushu", status: "aktual" },
        { nama: "Catur", status: "usulan-external" },
        { nama: "Tenis Meja", status: "usulan-external" },
        { nama: "Jujitsu", status: "usulan-external" },
        { nama: "Karate", status: "usulan-external" },
        { nama: "Voli", status: "usulan-external" },
        { nama: "Tae Kwon Do", status: "usulan-external" },
        { nama: "Renang", status: "usulan-unit" },
        { nama: "Badminton", status: "usulan-external" },
        { nama: "Futsal", status: "usulan-external" },
        { nama: "Mini Soccer", status: "usulan-external" },
      ],
      "Karya Ilmiah": [
        { nama: "Coding", status: "aktual" },
        { nama: "Robotic", status: "usulan-unit" },
        { nama: "Sains", status: "aktual" },
        { nama: "OSN IPA SD", status: "aktual" },
        { nama: "OSN Matematika SD", status: "aktual" },
        { nama: "HSK - Mandarin", status: "usulan-external" },
        { nama: "Mandarin Club", status: "usulan-external" },
        { nama: "OSN IPS SD", status: "usulan-external-prioritas" },
      ],
      Krida: [{ nama: "Dokter Kecil", status: "usulan-external" }],
      Keagamaan: [],
      Lainnya: [],
    },
    "SMPK KOLESE SANTO YUSUP 1": {
      "Latihan Olah-Bakat/Minat": [
        { nama: "Paduan Suara", status: "aktual" },
        { nama: "Tari Modern", status: "aktual" },
        { nama: "Dance", status: "aktual" },
        { nama: "Band & Vocalia", status: "aktual" },
        { nama: "Teater", status: "usulan-external-prioritas" },
        { nama: "Videografi", status: "usulan-unit" },
        { nama: "Ansambel", status: "usulan-external-prioritas" },
        { nama: "Desain Grafis", status: "usulan-external-prioritas" },
        { nama: "Vocal", status: "usulan-external" },
        { nama: "Videografi", status: "usulan-external" },
        { nama: "Melukis", status: "usulan-external-prioritas" },
        { nama: "Vocal", status: "usulan-unit" },
        { nama: "Fashion Show", status: "usulan-external-prioritas" },
        { nama: "Ballet", status: "usulan-external" },
        { nama: "Tari Tradisional", status: "usulan-external" },
        { nama: "Basket", status: "aktual" },
        { nama: "Jujitsu", status: "aktual" },
        { nama: "Futsal", status: "usulan-external-prioritas" },
        { nama: "Pickle Ball", status: "usulan-external" },
        { nama: "Wushu", status: "usulan-unit" },
        { nama: "Catur", status: "usulan-unit" },
        { nama: "Tenis Meja", status: "usulan-external" },
        { nama: "Karate", status: "usulan-external" },
        { nama: "Voli", status: "usulan-external" },
        { nama: "Tae Kwon Do", status: "usulan-external" },
        { nama: "Renang", status: "usulan-external" },
        { nama: "Badminton", status: "usulan-unit" },
        { nama: "Padel", status: "usulan-external" },
        { nama: "Mini Soccer", status: "usulan-external" },
      ],
      "Karya Ilmiah": [
        { nama: "Coding", status: "usulan-external-prioritas" },
        { nama: "Robotic", status: "usulan-external-prioritas" },
        { nama: "OSN Matematika SMP", status: "aktual" },
        { nama: "OSN Fisika SMP", status: "aktual" },
        { nama: "HSK - Mandarin", status: "aktual" },
        { nama: "Public Speaking", status: "usulan-external" },
        { nama: "English Club", status: "usulan-external" },
        { nama: "Mandarin Club", status: "usulan-unit" },
        { nama: "Science", status: "usulan-external" },
        { nama: "OSN IPA SMP", status: "usulan-unit" },
        { nama: "OSN IPS SMP", status: "aktual" },
      ],
      Krida: [{ nama: "Palang Merah Remaja", status: "usulan-external" }],
      Keagamaan: [],
      Lainnya: [{ nama: "Enterpreneurship", status: "usulan-external" }],
    },
    "SMPK KOLESE SANTO YUSUP 2": {
      "Latihan Olah-Bakat/Minat": [
        { nama: "Tari Modern", status: "aktual" },
        { nama: "Tari Tradisional", status: "usulan-external-prioritas" },
        { nama: "Band & Vocalia", status: "aktual" },
        { nama: "Desain Grafis", status: "usulan-external" },
        { nama: "Videografi", status: "usulan-external" },
        { nama: "Melukis", status: "usulan-external" },
        { nama: "Ansambel", status: "usulan-external-prioritas" },
        { nama: "Paduan Suara", status: "usulan-external-prioritas" },
        { nama: "Teater", status: "usulan-external" },
        { nama: "Vocal", status: "usulan-external" },
        { nama: "Fashion Design", status: "usulan-external" },
        { nama: "Ballet", status: "usulan-external" },
        { nama: "Basket", status: "aktual" },
        { nama: "Pickle Ball", status: "usulan-external" },
        { nama: "Wushu", status: "usulan-external-prioritas" },
        { nama: "Catur", status: "usulan-unit" },
        { nama: "Tenis Meja", status: "usulan-external" },
        { nama: "Jujitsu", status: "usulan-external" },
        { nama: "Karate", status: "usulan-external" },
        { nama: "Voli", status: "usulan-unit" },
        { nama: "Tae Kwon Do", status: "usulan-external" },
        { nama: "Renang", status: "usulan-unit" },
        { nama: "Badminton", status: "usulan-unit" },
        { nama: "Futsal", status: "usulan-unit" },
        { nama: "Padel", status: "usulan-external" },
        { nama: "Mini Soccer", status: "usulan-external" },
      ],
      "Karya Ilmiah": [
        { nama: "Coding", status: "usulan-external-prioritas" },
        { nama: "Robotic", status: "usulan-external-prioritas" },
        { nama: "OSN IPA SMP", status: "aktual" },
        { nama: "OSN Matematika SMP", status: "aktual" },
        { nama: "OSN IPS SMP", status: "aktual" },
        { nama: "English Club", status: "usulan-unit" },
        { nama: "Science", status: "usulan-external-prioritas" },
        { nama: "Public Speaking", status: "usulan-external" },
        { nama: "Mandarin Club", status: "usulan-unit" },
        { nama: "HSK - Mandarin", status: "usulan-external" },
        { nama: "Indonesian Club", status: "usulan-unit" },
      ],
      Krida: [{ nama: "Palang Merah Remaja", status: "usulan-external" }],
      Keagamaan: [],
      Lainnya: [{ nama: "Enterpreneurship", status: "usulan-external" }],
    },
    "SMAK KOLESE SANTO YUSUP": {
      "Latihan Olah-Bakat/Minat": [
        { nama: "Paduan Suara", status: "aktual" },
        { nama: "Band & Vocalia", status: "aktual" },
        { nama: "Multimedia", status: "aktual" },
        { nama: "Tari Modern", status: "aktual" },
        { nama: "Tari Tradisional", status: "aktual" },
        { nama: "Melukis", status: "usulan-external-prioritas" },
        { nama: "Ansambel", status: "usulan-external-prioritas" },
        { nama: "Fashion Show", status: "usulan-external-prioritas" },
        { nama: "Fashion Design", status: "usulan-external" },
        { nama: "Teater", status: "usulan-external-prioritas" },
        { nama: "Ballet", status: "usulan-external" },
        { nama: "Vocal", status: "usulan-external" },
        { nama: "Basket", status: "aktual" },
        { nama: "Futsal", status: "aktual" },
        { nama: "Wushu", status: "usulan-unit" },
        { nama: "Pickle Ball", status: "usulan-external" },
        { nama: "Padel", status: "usulan-external" },
        { nama: "Badminton", status: "usulan-unit" },
        { nama: "Renang", status: "usulan-external" },
        { nama: "Tae Kwon Do", status: "usulan-unit" },
        { nama: "Voli", status: "usulan-unit" },
        { nama: "Karate", status: "usulan-unit" },
        { nama: "Jujitsu", status: "usulan-external-prioritas" },
        { nama: "Tenis Meja", status: "usulan-external" },
        { nama: "Catur", status: "usulan-external" },
        { nama: "Mini Soccer", status: "usulan-external" },
      ],
      "Karya Ilmiah": [
        { nama: "Coding", status: "usulan-external-prioritas" },
        { nama: "Robotic", status: "usulan-external-prioritas" },
        { nama: "Podcasting", status: "usulan-external" },
        { nama: "Kosayu Library Club", status: "aktual" },
        { nama: "English Club", status: "aktual" },
        { nama: "Persiapan TOEFL", status: "aktual" },
        { nama: "OSN Fisika SMA", status: "aktual" },
        { nama: "OSN Matematika SMA", status: "aktual" },
        { nama: "OSN Informatika SMA", status: "aktual" },
        { nama: "OSN Kimia SMA", status: "aktual" },
        { nama: "OSN Ekonomi SMA", status: "aktual" },
        { nama: "OSN Geografi SMA", status: "aktual" },
        { nama: "OSN Kebumian SMA", status: "aktual" },
        { nama: "OSN Astronomi SMA", status: "aktual" },
        { nama: "OSN Biologi SMA", status: "aktual" },
        { nama: "Science Club", status: "aktual" },
        { nama: "TOCFL Preparation", status: "usulan-unit" },
        { nama: "HSK - Mandarin", status: "usulan-external-prioritas" },
        { nama: "Jurnalistik", status: "usulan-external" },
        { nama: "Model United Nations", status: "usulan-unit" },
        { nama: "Mandarin Club", status: "usulan-external-prioritas" },
      ],
      Krida: [
        { nama: "Palang Merah Remaja", status: "usulan-external" },
        { nama: "Mindset & Character", status: "aktual" },
      ],
      Keagamaan: [
        { nama: "Katekumen", status: "aktual" },
        { nama: "Legio Maria", status: "aktual" },
      ],
      Lainnya: [
        { nama: "Enterpreneurship", status: "aktual" },
        { nama: "Culinary", status: "aktual" },
      ],
    },
  };

  const units = Object.keys(roadmapData);
  const categories = [
    "Semua",
    "Latihan Olah-Bakat/Minat",
    "Karya Ilmiah",
    "Krida",
    "Keagamaan",
    "Lainnya",
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "aktual":
        return "bg-blue-300 text-gray-900";
      case "usulan-unit":
        return "bg-green-300 text-gray-900";
      case "usulan-external":
        return "bg-yellow-200 text-gray-900";
      case "usulan-external-prioritas":
        return "bg-pink-400 text-gray-900";
      default:
        return "bg-gray-200 text-gray-900";
    }
  };

  // Fungsi untuk mendapatkan semua nama ekstrakurikuler berdasarkan kategori
  const getAllEkskulNames = (category) => {
    const names = new Set();

    if (category === "Semua") {
      // Ambil semua ekstrakurikuler dari semua kategori
      units.forEach((unit) => {
        categories.forEach((cat) => {
          if (cat !== "Semua") {
            const ekskuls = roadmapData[unit][cat] || [];
            ekskuls.forEach((e) => names.add(e.nama));
          }
        });
      });
    } else {
      // Ambil ekstrakurikuler dari kategori tertentu
      units.forEach((unit) => {
        const ekskuls = roadmapData[unit][category] || [];
        ekskuls.forEach((e) => names.add(e.nama));
      });
    }

    return Array.from(names).sort();
  };

  // Fungsi untuk mencari ekstrakurikuler di suatu unit
  const findEkskul = (unit, category, name) => {
    if (category === "Semua") {
      // Cari di semua kategori
      for (const cat of categories) {
        if (cat !== "Semua") {
          const ekskuls = roadmapData[unit][cat] || [];
          const found = ekskuls.find((e) => e.nama === name);
          if (found) return found;
        }
      }
      return null;
    } else {
      // Cari di kategori tertentu
      const ekskuls = roadmapData[unit][category] || [];
      return ekskuls.find((e) => e.nama === name);
    }
  };

  const getTotalPerUnit = (unit) => {
    let total = 0;
    categories.forEach((cat) => {
      if (cat !== "Semua") {
        total += roadmapData[unit][cat]?.length || 0;
      }
    });
    return total;
  };

  const getAktualPerUnit = (unit) => {
    let aktual = 0;
    categories.forEach((cat) => {
      if (cat !== "Semua") {
        const items = roadmapData[unit][cat] || [];
        aktual += items.filter((e) => e.status === "aktual").length;
      }
    });
    return aktual;
  };

  const getShortUnitName = (unit) => {
    return unit
      .replace("KOLESE ", "KOLESE")
      .replace("SANTO YUSUP", "SANTO YUSUP")
      .replace("KB-TKK", "KB-TKK");
  };

  return (
    <div className="min-h-screen w-screen bg-gray-50 p-0">
      <div className="w-full h-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          SIMULASI ROADMAP EKSTRAKURIKULER
        </h1>

        {/* Filter Kategori */}
        <div className="mb-6 flex gap-3 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Legenda */}
        <div className="bg-gray-700 text-white p-4 rounded-lg mb-6">
          <h3 className="font-bold mb-3 text-lg">LEGENDA</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-300 rounded border border-gray-400"></div>
              <span>: Ekstrakurikuler yang SEDANG AKTIF di sekolah</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-300 rounded border border-gray-400"></div>
              <span>: USULAN Ekstrakurikuler dari UNIT SEKOLAH</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-200 rounded border border-gray-400"></div>
              <span>: USULAN Ekstrakurikuler dari SUPPORT EXTRA EXTERNAL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-pink-400 rounded border border-gray-400"></div>
              <span>
                : USULAN PRIORITAS Ekstrakurikuler dari SUPPORT EXTRA EXTERNAL
              </span>
            </div>
          </div>
        </div>

        {/* Tabel Roadmap */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border-2 border-gray-400 p-3 text-left font-bold text-gray-900 sticky left-0 bg-gray-200 z-10 min-w-[180px]">
                    Ekstrakurikuler
                  </th>
                  {units.map((unit) => (
                    <th
                      key={unit}
                      className="border-2 border-gray-400 p-2 text-center font-bold min-w-[120px] text-xs text-gray-900"
                    >
                      {getShortUnitName(unit)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {getAllEkskulNames(selectedCategory).map((ekskulName, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="border-2 border-gray-300 p-2 font-medium text-gray-900 bg-gray-50 sticky left-0 z-10 text-sm">
                      {ekskulName}
                    </td>
                    {units.map((unit) => {
                      const ekskul = findEkskul(
                        unit,
                        selectedCategory,
                        ekskulName
                      );
                      return (
                        <td key={unit} className="border-2 border-gray-300 p-0">
                          {ekskul && (
                            <div
                              className={`${getStatusColor(
                                ekskul.status
                              )} h-full p-2 text-center font-medium text-xs`}
                            >
                              {ekskul.nama}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {units.map((unit) => {
            const total = getTotalPerUnit(unit);
            const aktual = getAktualPerUnit(unit);
            return (
              <div
                key={unit}
                className="bg-white p-4 rounded-lg shadow border-2 border-gray-200"
              >
                <h4 className="font-bold text-xs mb-2 text-gray-600">
                  {getShortUnitName(unit)}
                </h4>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {total}
                </div>
                <div className="text-xs text-gray-500">
                  {aktual} aktual, {total - aktual} usulan
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadmapEkskul;
