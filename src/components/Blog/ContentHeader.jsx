import React from "react";

const articles = [
  {
    id: 1,
    title: "Mengubah Sampah Plastik Menjadi Produk Bernilai",
    category: "Lingkungan",
    excerpt:
      "Pelajari langkah praktis mengubah sampah plastik menjadi produk berguna — dari pengumpulan hingga teknik daur ulang sederhana.",
    image: "article1.webp",
  },
  {
    id: 2,
    title: "Panduan Lengkap Belajar Godot untuk Game 2.5D",
    category: "Teknologi",
    excerpt:
      "Mulai dari instalasi sampai deployment mobile — panduan ringkas membuat game RPG 2.5D menggunakan Godot dengan gaya low-poly.",
    image: "article2.webp",
  },
  {
    id: 3,
    title: "Tips Produktivitas Pelajar: Mengatur Waktu Belajar di Era Digital",
    category: "Pendidikan",
    excerpt:
      "Strategi sederhana untuk meningkatkan fokus dan manajemen waktu bagi pelajar yang terganggu oleh notifikasi.",
    image: "article3.webp",
  },
  {
    id: 3,
    title: "Tips Produktivitas Pelajar: Mengatur Waktu Belajar di Era Digital",
    category: "Pendidikan",
    excerpt:
      "Strategi sederhana untuk meningkatkan fokus dan manajemen waktu bagi pelajar yang terganggu oleh notifikasi.",
    image: "article3.webp",
  },
];

function Content() {
  const featuredArticle = articles[0];
  const sideArticles = articles.slice(1);

  return (
    <div className="bg-[#f8f9fa] min-h-screen">

      <div className="max-w-7xl mx-auto py-10 px-6 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Blog & Article
        </h1>
        <p className="text-gray-500 mt-2">
          Baca Kumpulan Blog & Article dari Kami
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-20 space-y-10">
        <div className="relative group overflow-hidden rounded-3xl shadow-xl cursor-pointer">
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <span className="bg-[#e34040] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">
              {featuredArticle.category}
            </span>
            <h2 className="text-white text-xl md:text-4xl font-bold leading-tight max-w-3xl">
              {featuredArticle.title}
            </h2>
            <p className="text-gray-200 text-sm md:text-base mt-3 max-w-2xl line-clamp-2 md:line-clamp-none">
              {featuredArticle.excerpt}
            </p>
          </div>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x scrollbar-hide">
          {sideArticles.map((article) => (
            <div
              key={article.id}
              className="min-w-[85%] md:min-w-0 snap-center group relative overflow-hidden rounded-2xl shadow-md h-[250px] md:h-[300px]"
            >
              <img
                src={article.image}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className="text-[#e34040] text-[10px] font-bold uppercase tracking-widest mb-2">
                  {article.category}
                </span>

                <h3 className="text-white font-bold text-lg leading-snug line-clamp-2 break-words">
                  {article.title}
                </h3>

                <p className="text-gray-300 text-xs mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
