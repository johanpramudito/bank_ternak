export const diseaseData = {
  lsd: {
    id: "lsd",
    hero: {
      title: "LSD",
      subtitle: "Lumpy Skin Disease / Penyakit Kulit Berbintik",
      penyebab: "Virus Capripoxvirus",
      hewanPeka: "sapi, kerbau, dan beberapa jenis hewan ruminansia liar",
      backgroundImage: "/lsd/bg.png",
    },
    penularan: {
      title: "Proses Penularan Dapat Melalui",
      items: [
        {
          content: [
            "Serangga penghisap darah, seperti nyamuk, caplak dan lalat",
            "Kontak langsung antara hewan sakit dan hewan yang sehat",
            "Penularan dari induk yang sakit kepada anak di dalam kandungan dan melalui air susu",
            "Melalui jarum suntik yang tidak steril dan digunakan berulang",
            "Pakan dan air minum yang tercemar ludah hewan yang terinfeksi",
          ],
        },
      ],
    },
    gejala: {
      title: "Gejala Klinis",
      layout: "grid-cols-1 md:grid-cols-2",
      items: [
        {
          content: [
            "Demam mencapai 41.5°C.",
            "Timbulnya benjolan-benjolan pada kulit dengan batas yang jelas di daerah kepala, leher, punggung, perut, ekor, dan daerah genital.",
            "Ingusan dan produksi air liur berlebih.",
            "Keropeng pada hidung dan rongga mulut.",
            "Pembengkakan pada kelenjar pertahanan.",
            "Penurunan produksi susu.",
          ],
          images: ["/lsd/LSD1.png", "/lsd/LSD2.png"],
        },
      ],
    },
    quote:
      "Diagnosis LSD tidak hanya berdasarkan gejala klinis, namun harus dengan dilakukan uji laboratorium. Selain itu, dalam menegakkan diagnosis perlu dipertimbangkan diagnosis banding penyakit mengingat terdapat penyakit lain yang menunjukkan gejala klinis yang mirip dengan LSD.",
    waspada: {
      title: "Waspada",
      items: [
        {
          content:
            "Tingkat penularan penyakit antara 10-20 % dengan mortalitas atau kematian sebesar 1-5 %, dan tingkat morbiditas atau angka sakit mencapai 27 %.",
          color: "green",
        },
        {
          content:
            "Masa inkubasi virus berkisar 2-5 minggu, demam muncul 6-9 hari pasca inokulasi dan nodul muncul antara 4-20 hari pasca inokulasi. Sehingga OIE (Organisasi Kesehatan Hewan Dunia) menetapkan masa inkubasi LSD adalah 28 hari.",
          color: "brown",
        },
        {
          content:
            "Pada sapi jantan bisa menyebabkan kemandulan permanen atau sementara, sedangkan pada sapi betina menyebabkan abortus (keguguran) dan infertilitas (kemandulan) sementara.",
          color: "green",
        },
        {
          content:
            "Umumnya sapi yang terkena sulit untuk sembuh total. Infeksi sekunder sering terjadi terutama pneumonia dan nodul yang tergigit lalat akan menyebabkan luka yang dalam.",
          color: "brown",
        },
      ],
    },
    kerugian:
      "Berdampak pada kerugian kesehatan dan ekonomi karena kulit sapi atau kerbau mengalami kerusakan, turunnya berat badan, produksi susu menurun, abortus dan kemandulan sementara hingga permanen, kehilangan tenaga kerja hewan sebagai pembajak sawah, tambahan biaya untuk vaksinasi dan pengobatan.",
    pengendalian: {
      title: "Pengendalian & Pencegahan",
      layout: "grid-cols-1 md:grid-cols-2",
      items: [
        {
          title: "Stamping Out",
          content:
            "Hewan terinfeksi dipisahkan dan dilakukan pemotongan bersyarat.",
        },
        {
          title: "Vaksinasi",
          content: "Merupakan tindakan kontrol paling efektif dan ekonomis.",
        },
        {
          title: "Konsultasi Dokter",
          content:
            "Segera hubungi dokter hewan terdekat untuk penanganan yang tepat.",
        },
        {
          title: "Biosekuriti",
          content:
            "Praktik biosekuriti ketat, seperti desinfeksi dan karantina hewan baru.",
        },
      ],
    },
    bibliography: [
      "Sendow, I., Assadah, N., Ratnawati, A., Dharmayanti, N., & Sepulloh, M. (2021). Lumpy Skin Disease: Ancaman Penyakit Emerging bagi Status Kesehatan Hewan Nasional dalam.",
      "Sirat, M. M. P., Ermawati, R., Parera, H., Dhani, A. R., Ramadanti, A. H., Sani, D., & Hizkia, E. PENYAKIT KULIT BERBENJOL PADA TERNAK SAPI.",
    ],
  },
  pmk: {
    id: "pmk",
    hero: {
      title: "PMK",
      subtitle: "Penyakit Mulut dan Kuku",
      penyebab: "Virus Aphthovirus",
      hewanPeka: "Sapi, domba, kambing, babi, dan hewan berkuku belah lainnya",
      backgroundImage: "/pmk/bg.png",
    },
    penularan: {
      title: "Proses Penularan Dapat Melalui",
      items: [
        {
          title: "Pakan dan Air yang Terkontaminasi",
          content:
            "Sisa makanan atau air minum yang terkena ludah atau ekskresi hewan terinfeksi dapat menjadi sumber penularan tidak langsung penyakit PMK.",
        },
        {
          title: "Air Mani",
          content:
            "Jika air mani yang terkontaminasi digunakan untuk inseminasi buatan, maka virus bisa menyebar ke betina yang diinseminasi.",
        },
        {
          title: "Kontak dengan Hewan Sakit",
          content:
            "Hewan sehat dapat tertular apabila bersentuhan dengan air liur, lepuh, atau cairan tubuh dari hewan yang terinfeksi. Termasuk kontak saat makan, minum, atau berdesakan di kandang/pengangkutan.",
        },
        {
          title: "Aerosol",
          content:
            "Virus dapat menyebar lewat udara, terutama dalam kondisi padat dan tertutup. Jarak penularan lewat udara bisa mencapai radius 10 kilometer dalam kondisi tertentu.",
        },
        {
          title: "Air Susu",
          content:
            "Virus dapat dikeluarkan melalui air susu hewan yang terinfeksi, bahkan sebelum hewan tersebut menunjukkan gejala klinis. Susu mentah dari hewan terinfeksi bisa menularkan virus jika dikonsumsi, terciprat ke mulut, hidung, atau luka terbuka pada hewan lain.",
        },
        {
          title: "Peralatan, Kendaraan, dan Manusia",
          content:
            "Orang atau barang yang berpindah dari satu peternakan ke peternakan lain dapat menjadi pembawa virus. Virus dapat menempel di pakaian, sepatu, alat peternakan, kendaraan, bahkan tangan manusia yang bersentuhan dengan hewan/lingkungan terkontaminasi. ",
        },
      ],
    },
    gejala: {
      title: "Gejala Klinis",
      layout: "grid-cols-1 md:grid-cols-2",
      items: [
        {
          content: [
            "Hipersalivasi atau air ludah yang keluar terus menerus.",
            "Lesi di daerah mulut, karena bibir dan gusi tampak merah dan panas yang akhirnya bagian tersebut melepuh dan berisi cairan.",
            "Lesi pada kuku, bagian pergelangan kaki membengkak.",
            "Malas bergerak.",
            "Nafsu makan menurun",
          ],
          images: ["/pmk/PMK1.png", "/pmk/PMK2.png", "/pmk/PMK3.png"],
        },
      ],
    },
    waspada: {
      title: "Waspada",
      items: [
        {
          content:
            "Morbiditas atau angka sakit dapat mencapai 100% pada populasi yang rentan, kematian lebih sering terjadi pada hewan muda.",
          color: "green",
        },
        {
          content:
            "Penularan virus sangat cepat, bahkan penyebaran virus melalui udara dapat mencapai radius 10 kilometer. Masa inkubasi virus sekitar 2–14 hari, selama itu penularan tetap bisa terjadi.",
          color: "brown",
        },
      ],
    },
    kerugian:
      "Wabah ini menyebabkan penurunan produktivitas ternak seperti turunnya produksi susu, lambatnya pertambahan bobot badan, serta kematian pada anak ternak yang lebih rentan. Harga jual ternak juga menurun drastis karena pembatasan lalu lintas hewan dan kekhawatiran pasar, sementara peternak harus menanggung biaya tambahan untuk pengobatan, disinfeksi kandang, dan vaksinasi.",
    pengendalian: {
      title: "Pengendalian & Pencegahan",
      items: [
        {
          title: "Isolasi dan Karantina Ternak",
          content:
            "Ternak yang menunjukkan gejala PMK harus segera diisolasi untuk mencegah penularan. Beberapa daerah menerapkan lockdown dan melarang lalu lintas ternak sebagai tindakan preventif, karena penularan dapat terjadi melalui hewan luar, pasar, pengunjung kandang, dan buruknya biosekuriti.",
        },
        {
          title: "Pengobatan Simptomatik",
          content:
            "Pengobatan dilakukan untuk meredakan gejala, seperti pemberian antiseptik pada mulut, cairan untuk mencegah dehidrasi, ramuan herbal tradisional, serta dukungan nutrisi dan perawatan lainnya oleh peternak. Pengobatan lain berupa injeksi antibiotik atau sulfa, mengobati bagian kulit dengan penicillin powder, dan menambahkan vitamin A pada ransum untuk menguatkan jaringan kulit.",
        },
        {
          title: "Vaksinasi",
          content:
            "Vaksinasi menjadi langkah utama dalam pengendalian PMK. Program ini dilakukan secara bertahap untuk membentuk herd immunity. Vaksin dikembangkan melalui rekayasa genetika dan pelaksanaannya melibatkan tenaga kesehatan hewan.",
        },
        {
          title: "Konsultasi dengan Dokter",
          content:
            "Sebaiknya dikonsultasikan pada dokter hewan sehingga mendapatkan penanganan dan terapi yang tepat.",
        },
      ],
    },
    bibliography: [
      "Bulu, P. M. (2023). Epidemiologi, Penanggulangan Dan Pemberantasan Penyakit Mulut Dan Kuku (Pembelajaran dari Wabah PMK Indonesia 1887-1997). Partner.",
      "Rohma, M. R., Zamzami, A., Utami, H. P., Karsyam, H. A., & Widianingrum, D. C. (2022, November). Kasus penyakit mulut dan kuku di Indonesia: epidemiologi, diagnosis penyakit, angka kejadian, dampak penyakit, dan pengendalian. In Conference of Applied Animal Science Proceeding Series (Vol. 3, pp. 15-22).",
    ],
  },
  brucellosis: {
    id: "brucellosis",
    hero: {
      title: "Brucellosis",
      subtitle: "Keluron",
      penyebab:
        "Bakteri Brucella Brucella abortus → sapi Brucella melitensis → kambing dan domba Brucella suis → babi Brucella ovis → domba Brucella canis → anjing",
      hewanPeka: "Sapi, domba, kambing, anjing dan babi",
      backgroundImage: "/brucellosis/bg.png",
    },
    penularan: {
      title: "Proses Penularan",
      items: [
        {
          title: "Kontak dengan Produk Abortus",
          content: [
            "Kontak dengan fetus, plasenta, atau cairan dari hewan yang mengalami keguguran (abortus).",
            "Kontak tidak langsung melalui susu, air, pakan tercemar, atau inseminasi buatan",
            "Aerosol atau udara terkontaminasi yang terhirup",
            "Penularan melalui perkawinan sering terjadi",
          ],
        },
        {
          title: "Penularan pada Manusia (Zoonosis)",
          content: [
            "Melalui konsumsi susu yang tidak dipasteurisasi atau kontak langsung dengan hewan terinfeksi.",
            "Bakteri Brucella dapat menular ke manusia (zoonosis), saat menangani hewan yang terinfeksi tanpa pelindung (APD)",
            "Kontak langsung dengan jaringan hewan sakit melalui luka di kulit atau mukosa.",
            "Mengkonsumsi susu mentah/tidak dipasteurisasi.",
            "Inhalasi aerosol dari lingkungan tercemar",
            "Tertusuk vaksin secara tidak sengaja",
          ],
        },
      ],
    },
    gejala: {
      title: "Gejala Klinis",
      customLayout: "brucellosis",
      items: [
        {
          title: "Pada Hewan Betina",
          color: "dark",
          content: [
            "Abortus (keguguran) pada trimester akhir kebuntingan.",
            "Retensi plasenta (ari-ari tidak keluar).",
            "Penurunan produksi susu.",
          ],
        },
        {
          title: "Pada Hewan Jantan",
          color: "dark",
          content: [
            "Radang testis (orchitis) dan epididimitis.",
            "Testikel mengecil sehingga terjadi Infertilitas (mandul).",
          ],
        },
        {
          title: "Pada Manusia",
          color: "dark_green",
          content:
            "Pada manusia, terjadi demam tidak teratur (naik turun), berkeringat saat malam hari, nyeri otot dan sendi, sakit kepala, lelah, anoreksia (tidak nafsu makan). Bisa terjadi komplikasi: pembengkakan testis, radang sendi, endokarditis (radang pada jantung), gangguan saraf, dan kelelahan kronis",
        },
        {
          images: [
            "/brucellosis/BRU1.png",
            "/brucellosis/BRU2.png",
            "/brucellosis/BRU3.png",
            "/brucellosis/BRU4.png",
          ],
        },
      ],
    },
    waspada: {
      title: "Waspada",
      items: [
        {
          content:
            "Dapat menular pada manusia (zoonosis) dan sulit dikenali karena gejalanya mirip flu atau tifus, dan bisa muncul berbulan-bulan setelah terpapar. Morbiditas (angka sakit) pada hewan tinggi terutama di daerah endemis atau tanpa program vaksinasi, persentase hewan terinfeksi di suatu populasi bisa mencapai 20-30%, bahkan lebih tinggi pada populasi tanpa pengawasan.",
          color: "brown",
        },
        {
          content:
            "Dapat menular pada manusia (zoonosis) dan sulit dikenali karena gejalanya mirip flu atau tifus, dan bisa muncul berbulan-bulan setelah terpapar.",
          color: "green",
        },
        {
          content:
            "Menimbulkan kerugian terutama bagi peternak, karena terjadi abortus berulang tanpa sebab yang jelas, kelahiran prematur atau lemah, mandulnya pejantan, infeksi yang sulit dideteksi tanpa uji laboratorium.",
          color: "brown",
        },
      ],
    },
    pengendalian: {
      title: "Pengendalian & Pencegahan",
      items: [
        {
          title: "Vaksinasi",
          content:
            "Dilakukan vaksinasi terutama pada daerah dengan prevalensi tinggi. Ada 2 jenis, yaitu S19: Vaksin hidup yang dilemahkan, efektif 70–80%, digunakan pada sapi umur 3–12 bulan dan RB51: Vaksin yang lebih aman untuk sapi bunting dan tidak menyebabkan hasil positif palsu pada uji serologis, namun lebih mahal.",
        },
        {
          title: "Biosekuriti dan Manajemen Peternakan",
          content:
            "Menghindari pencampuran ternak baru tanpa karantina, menjaga kebersihan kandang, peralatan, air dan pakan. Produk abortus (janin, plasenta, cairan) dimusnahkan secara aman (dibakar/dikubur dalam). Menggunakan pakaian pelindung (APD) saat menangani hewan abortus atau mencurigakan.",
        },
        {
          title: "Test and Slaughter",
          content:
            "Pengujian serologis (test) untuk mendeteksi ternak positif penyakit. Pemotongan ternak reaktor oleh petugas khusus (slaughter) karena sulit disembuhkan secara tuntas, hewan bisa menjadi carrier (pembawa bakteri) seumur hidup, meskipun tampak sehat.",
        },
        {
          title: "Penyuluhan/Edukasi",
          content:
            "Sangat penting dilakukan sosialisasi rutin tentang bahaya brucellosis agar peternak sadar akan pentingnya melaporkan kasus abortus dan melakukan pemeriksaan rutin pada ternak.",
        },
        {
          title: "Pasteurisasi Susu",
          content:
            "Jangan mengkonsumsi susu mentah. Semua susu dan produk olahannya harus dipasteurisasi sebelum dikonsumsi untuk mencegah penularan ke manusia.",
        },
        {
          title: "Stamping out",
          content:
            "Ternak yang menunjukkan gejala atau terdiagnosis brucellosis harus segera dipisahkan dari kelompok untuk mencegah penularan ke hewan lain.",
        },
        {
          title: "Konsultasi dengan Dokter",
          content:
            "Sebaiknya dikonsultasikan pada dokter hewan sehingga mendapatkan penanganan dan terapi yang tepat.",
        },
      ],
    },
    bibliography: [
      "Corbel, M. J. (2006). Brucellosis in humans and animals. World Health Organization.",
      "Dr. Thind’s Homeopathy. (n.d.). Brucellosis (Rock fever, Cyprus fever). https://drthindhomeopathy.com/disease/brucellosis-rock-fever-cyprus-fever/",
      "KaryaDrh. (2015, Juli 20). Penyakit Brucellosis pada sapi dan dampaknya terhadap kesehatan manusia. KaryaDrh Blogspot. https://karyadrh.blogspot.com/2015/07/penyakit-brucellosis-pada-sapi-dan.html",
      "Khasrad dan Rusdimansyah. (2022). Manajemen Pemeliharaan Sapi Pedaging. Padang: Andalas University Press.",
    ],
  },
  orf: {
    id: "orf",
    hero: {
      title: "ORF",
      penyebab: "Virus Parapox",
      hewanPeka:
        "Kambing dan domba (umumnya menyerang hewan muda umur 3-5 bulan)",
      backgroundImage: "/orf/bg.png",
    },
    penularan: {
      title: "Proses Penularan",
      items: [
        {
          content: [
            "Kambing dan domba menjadi hospes alami virus Parapox dan dapat menular ke manusia (zoonosis) saat menangani hewan yang terinfeksi tanpa pelindung (APD), dan virus masuk melalui luka atau goresan di kulit manusia.",
            "Dengan kontak langsung, seperti saat menyentuh luka atau keropeng, menyusu, saling menjilati yang melibatkan air liur, kontak antara kelamin, maupun saat berdesakan di dalam kandang.",
            "Penularan secara tidak langsung melalui pakan, air minum, dan benda yang tercemar air ludah hewan yang terinfeksi.",
            "Masa inkubasi penyakit Orf (waktu sejak hewan terpapar virus hingga muncul gejala klinis) umumnya berlangsung selama 2-5 hari.",
          ],
        },
      ],
    },
    gejala: {
      title: "Gejala Klinis",
      customLayout: "orf",
      content: [
        "Diawali dengan demam hingga 40,5℃",
        "Batuk, bersin, dan flu",
        "Nafsu makan menurun",
        "Mata merah, berair, dan belekan",
        "Keratitis, konjungtivitis, pink eye",
      ],
      items: [
        {
          title: "Pada Hewan",
          content:
            "Hewan yang terinfeksi virus mengalami peradangan atau keropeng pada kulit sekitar mulut, kelopak mata, alat genital, ambing pada hewan yang sedang menyusui dan kaki bagian dalam atau pada  tempat yang jarang ditumbuhi bulu.",
          images: ["/orf/ORF1.png", "/orf/ORF2.png"],
        },
        {
          title: "Pada Manusia",
          content: [
            "Orang yang terinfeksi virus orf biasanya mengalami luka atau nodul di tangan atau lengan bawah. Ruam ini bersifat infeksius, artinya dapat menyebar ke area tubuh seseorang jika mereka menggaruk atau menyentuh luka tersebut. Luka berkembang secara bertahap selama enam minggu. Mereka mungkin juga mengalami demam ringan, kelelahan, atau pembengkakan kelenjar di leher dan ketiak (kelenjar getah bening).",
          ],
          images: ["/orf/ORF3.png", "/orf/ORF4.png", "/orf/ORF5.png"],
        },
      ],
    },
    waspada: {
      title: "Waspada",
      items: [
        {
          content:
            "Penyakit ini dapat menular ke manusia (Zoonosis), dikenal sebagai ektima kontagiosa melalui sentuhan pada keropeng hewan yang terinfeksi.",
          color: "green",
        },
        {
          content:
            "Morbiditas atau angka sakit mencapai 90% pada hewan muda tetapi angka kematian relatif rendah.",
          color: "brown",
        },
        {
          content:
            "Sifat penyakit umumnya endemik dan penyakit banyak muncul pada kelompok kambing yang baru datang pada suatu wilayah.",
          color: "green",
        },
      ],
    },
    kerugian:
      "Penyakit Orf pada kambing menyebabkan luka di mulut yang membuat hewan sulit makan, sehingga menjadi kurus dan pertumbuhannya terhambat. Produksi susu menurun, terutama jika lesi muncul di ambing atau puting. Hewan juga tampak lesu, sulit bergerak, dan butuh waktu lama untuk sembuh. Akibatnya, peternak mengalami kerugian dari penurunan berat badan, biaya pengobatan, dan turunnya nilai jual. Selain itu, karena bersifat zoonosis, Orf juga beresiko menular ke manusia.",
    pengendalian: {
      title: "Pengendalian & Pencegahan",
      items: [
        {
          title: "Mengenakan Sarung Tangan",
          content:
            "Sangat penting mengenakan sarung tangan karet atau lateks saat memegang domba atau kambing yang terindikasi penyakit orf.Cuci tangan Anda sesering mungkin dengan air hangat dan sabun selama minimal 20 detik, terutama jika tangan terlihat kotor. Jika tidak ada sabun dan tangan Anda tidak terlihat kotor, gunakan pembersih tangan berbahan dasar alkohol.",
        },
        {
          title: "Antibiotik",
          content:
            "Diberi antibiotika berspektrum luas untuk mencegah infeksi sekunder. Disamping itu dapat diberikan multivitamin untuk memperbaiki kondisi tubuh sedangkan kulit yang terinfeksi diberikan pengobatan lokal dengan yodium tincture",
        },
        {
          title: "Penanganan",
          content:
            "Membersihkan luka terlebih dahulu menggunakan larutan Rivanol, lalu diberikan Povidone Iodine pada permukaan luka secukupnya. Pada bagian kulit yang luka, diberikan salep Acyclovir 3 kali sehari. Jaga luka agar tetap kering dan ditutup dengan perban tahan air.",
        },
        {
          title: "Penyuluhan/Edukasi",
          content:
            "Penyampaian informasi kepada peternak tentang status penyakit ini yang bersifat zoonosis. Berbahaya bagi peternak dan ternak, serta jika tidak ditindaklanjuti dengan segera dapat menyebabkan kematian hingga kerugian ekonomi.",
        },
        {
          title: "Konsultasi dengan Dokter",
          content:
            "Sebaiknya dikonsultasikan pada dokter hewan sehingga mendapatkan penanganan dan terapi yang tepat.",
        },
        {
          title: "Stemping Out",
          content:
            "Kambing yang sakit ditempatkan terpisah dari kambing sehat dan diberi pakan rumput segar dan lunak atau muda. Kandang dihindarkan dari keadaan becek dan tergenang air.",
        },
      ],
    },
    bibliography: [
      "Centers for Disease Control and Prevention. (2022, September 26). About Orf virus. U.S. Department of Health & Human Services. https://www.cdc.gov/orf-virus/about/index.html",
      "Dinas Pertanian Kabupaten Sleman. (2023, Juli 12). Apa itu penyakit Orf (Bengoran/Dakangan)? https://pertanian.slemankab.go.id/apa-itu-penyakit-orf-bengoran-dakangan/",
      "Simarmata, Y. T., Kale, N. D., & Sanam, M. U. (2021). Laporan Kasus Penyakit ORF (Ecthyma contagiosa) Pada Kambing. Jurnal Veteriner Nusantara, 4(Supl. 2).",
      "Wardhani, L. D. K., Jatmiko, B. S., & Khofifaturrahmah, R. (2022). Studi Kasus Orf Pada Kambing di Desa Megasari Kabupaten Kotabaru Kalimantan Selatan. Jurnal Ilmiah Fillia Cendekia Vol, 7(1), 7-11.",
    ],
  },
  antraks: {
    id: "antraks",
    hero: {
      title: "ANTRAKS",
      penyebab:
        "Bakteri Bacillus anthracis, yang bisa membentuk spora yang dapat bertahan bertahun-tahun di tanah, terutama di tanah basah, lembab, atau yang sering tergenang air. Spora tahan terhadap panas, kekeringan, dan disinfektan biasa.",
      hewanPeka: "Sapi, domba, kambing, kuda",
      backgroundImage: "/antraks/bg.png",
    },
    penularan: {
      title: "Proses Penularan Dapat Melalui",
      items: [
        {
          content: [
            "Penularan secara langsung dari hewan atau bangkai yang terinfeksi. Jika luka terbuka terkena spora dari hewan/jaringan/produk terinfeksi.",
            "Penularan secara tidak langsung melalui produk hewan (wol, kulit, tulang, dan daging), tanah yang terkontaminasi spora, gigitan serangga penghisap darah, mengkonsumsi pakan atau daging yang terkontaminasi spora. pupuk dari tepung tulang, dan benda lain yang terkontaminasi spora. Spora juga dapat masuk dan menginfeksi saluran pernafasan.",
          ],
        },
      ],
    },
    gejala: {
      title: "Gejala Klinis",
      items: [
        {
          title: "Pada Hewan",
          color: "dark",
          content: [
            "Terkadang demam tinggi dan kesulitan bernapas",
            "Hewan mati mendadak tanpa alasan yang jelas",
            "Keluar darah gelap dari lubang di tubuh (hidung, mulut, dan anus)",
            "Bangkai cepat membusuk dan tidak kaku setelah mati",
            "Pada babi, leher dan kepala bisa bengkak dan sulit menelan atau bernapas",
          ],
        },
        {
          title: "Pada Manusia",
          color: "dark_green",
          content: [
            "Pada kulit: muncul benjolan merah seperti gigitan serangga, jadi luka bernanah, lalu menghitam di tengah (pustula), biasanya tidak sakit tapi bisa demam dan bengkak",
            "Pada saluran pernapasan: flu berat (demam, batuk, nyeri dada), hingga menyebabkan sesak napas berat jika sudah parah",
            "Pada saluran cerna: mual, muntah, diare berdarah, sakit perut hebat, bisa disertai demam dan lemas",
            "Melalui suntikan: gejala seperti luka di kulit dan infeksi berat di jaringan dalam",
          ],
        },
      ],
    },
    waspada: {
      title: "Waspada",
      items: [
        {
          content:
            "Penyakit ini sangat penting untuk diwaspadai karena spora dari bakteri ini sulit untuk dimusnahkan. Bersifat zoonosis (menular pada manusia). Segera laporkan kepada petugas kesehatan setempat (Dinas Peternakan / Pertanian, Puskeswan, Balai veteriner, dan iSIKHNAS) jika menjumpai gejala seperti yang sudah disebutkan.",
          color: "brown",
        },
        {
          content:
            "Jangan membuka bangkai yang dicurigai antraks karena spora akan tetap hidup dan akan menyebar jika tidak ditangani dengan tepat.",
          color: "green",
        },
        {
          content:
            "Jangan menyembelih, membagikan, atau mengonsumsi ternak sakit/mati mendadak. Tradisi purak (membagi daging ternak mati) sangat berbahaya.",
          color: "brown",
        },
      ],
    },
    kerugian:
      "Menyebabkan kerugian besar karena hewan dapat mati mendadak tanpa gejala, sehingga peternak kehilangan ternak secara tiba-tiba. Penyakit ini juga menular ke manusia, terutama melalui kontak dengan bangkai atau tanah yang terkontaminasi spora. Selain itu, adanya kasus antraks bisa menyebabkan larangan pemotongan, distribusi daging dihentikan, dan menurunkan kepercayaan konsumen.",
    pengendalian: {
      title: "Pengendalian & Pencegahan",
      items: [
        {
          title: "Vaksinasi Ternak",
          content:
            "Vaksin diberikan pada ternak sehat di daerah rawan atau endemis antraks, untuk melindungi ternak dari infeksi dan mencegah wabah. Vaksin bisa mencegah infeksi bakteri Bacillus anthracis dan racunnya sekaligus",
        },
        {
          title: "Isolasi dan Larangan Pemotongan",
          content:
            "Hewan yang sakit atau dicurigai antraks harus dipisahkan dan tidak boleh disembelih. Jika dipotong, bakteri bisa menyebar ke lingkungan dan menular ke hewan atau manusia lain.",
        },
        {
          title: "Pemusnahan Bangkai dengan Aman",
          content:
            "Hewan mati mendadak jangan dibuka atau dibagikan. Bangkai harus dibakar atau dikubur minimal 2 meter, lalu ditutup kapur 0,5 meter, jangan dibuang ke sungai atau tempat terbuka.",
        },
        {
          title: "Edukasi dan Pelaporan",
          content:
            "Peternak perlu mengetahui tanda-tanda antraks dan cara melaporkannya. Jika ada kematian mendadak, jangan diotopsi sendiri, segera lapor ke petugas peternakan atau Puskeswan.",
        },
        {
          title: "Pengawasan Produk Hewan",
          content:
            "Jangan mengkonsumsi daging dari hewan sakit atau mati mendadak. Daging dari hewan yang dicurigai antraks tidak boleh dijual atau dibagikan.",
        },
        {
          title: "Pengendalian Lalu Lintas Ternak",
          content:
            "Hewan dari daerah tertular tidak boleh dipindahkan ke daerah bebas. Lalu lintas hewan harus dikontrol dan ada izin kesehatan hewan.",
        },
        {
          title: "Kebersihan Kandang dan Lingkungan",
          content:
            "Kandang harus dibersihkan dan didisinfeksi secara rutin, terutama setelah ada kematian mendadak. Jangan beri pakan dari tanah/lahan yang diduga terkontaminasi spora.",
        },
      ],
    },
    bibliography: [
      "https://www-cdc-gov.translate.goog/orf-virus/about/index.html?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=imgs",
      "https://pertanian.slemankab.go.id/apa-itu-penyakit-orf-bengoran-dakangan/",
      "Simarmata, Y. T., Kale, N. D., & Sanam, M. U. (2021). Laporan Kasus Penyakit ORF (Ecthyma contagiosa) Pada Kambing. Jurnal Veteriner Nusantara, 4(Supl. 2).",
      "Wardhani, L. D. K., Jatmiko, B. S., & Khofifaturrahmah, R. (2022). Studi Kasus Orf Pada Kambing di Desa Megasari Kabupaten Kotabaru Kalimantan Selatan. Jurnal Ilmiah Fillia Cendekia Vol, 7(1), 7-11.",
    ],
  },
  tuberculosis: {
    id: "tuberculosis",
    hero: {
      title: "TUBERCULOSIS",
      penyebab: "Bakteri Mycobacterium",
      hewanPeka:
        "Mycobacterium bovis → penyebab utama TBC pada sapi, babi, kambing, dan bisa menular ke manusia Mycobacterium tuberculosis → penyebab utama TBC pada manusia, bisa menular ke sapi Mycobacterium avium → menyerang unggas, kadang menular ke manusia dan hewan lain",
      backgroundImage: "/tuberculosis/bg.png",
    },
    penularan: {
      title: "Proses Penularan Dapat Melalui",
      items: [
        {
          content: [
            "Menghirup droplet dari hewan sakit.",
            "Kontak dengan hewan, produk hewan seperti daging atau organ dari hewan yang sakit",
            "Pedet atau babi yang minum susu terkontaminasi, konsumsi pakan/limbah terinfeksi. Manusia meminum susu mentah yang tidak dipasteurisasi",
          ],
        },
      ],
    },
    gejala: {
      title: "Gejala Klinis",
      customLayout: "tuberculosis",
      items: [
        {
          title: "Pada Hewan",
          color: "dark_green",
          content: [
            "Demam ringan",
            "Batuk kronis, sulit bernapas",
            "Kurus, lemas, tidak nafsu makan",
            "Pembengkakan kelenjar getah bening",
            "Bisa muncul granuloma di paru-paru, limpa, hati, atau usus (terlihat saat dibedah)",
          ],
        },
        {
          title: "Pada Manusia",
          color: "dark",
          content: [
            "Mirip TBC biasa: batuk lama, demam, berkeringat saat malam, lemas",
            "Bisa menyerang paru-paru, tulang, ginjal, otak, atau kelenjar getah bening",
            "Biasanya terjadi pada anak-anak atau orang yang minum susu mentah, atau pekerja yang sering kontak dengan sapi",
          ],
        },
        {
          images: ["/tuberculosis/TBC1.png", "/tuberculosis/TBC2.png"],
        },
      ],
    },
    waspada: {
      title: "Waspada",
      items: [
        {
          content:
            "Manusia harus waspada terhadap tuberkulosis hewan karena penyakit ini bisa menular dari hewan ke manusia (zoonosis), terutama melalui konsumsi susu mentah dan menghirup udara yang tercemar di kandang.",
          color: "brown",
        },
        {
          content:
            "Orang yang bekerja di peternakan atau rumah potong hewan memiliki risiko lebih tinggi. Meski tidak menular antar manusia, infeksi ini tetap berbahaya karena sulit diobati dan bisa menyebabkan kematian jika tidak ditangani dengan tepat.",
          color: "green",
        },
        {
          content:
            "Penularan paling sering terjadi dari sapi yang terinfeksi Mycobacterium bovis. Gejalanya mirip dengan TBC biasa, seperti batuk lama, demam, dan lemas, tetapi lebih sulit didiagnosis dan bisa menyerang organ selain paru-paru.",
          color: "brown",
        },
      ],
    },
    kerugian:
      "Menimbulkan kerugian secara perlahan karena bersifat kronis. Ternak menjadi kurus, produksi susu menurun, dan harus diafkir jika terinfeksi. Penularan ke manusia melalui susu mentah juga berisiko, terutama bagi peternak dan anak-anak. Pemeriksaan rutin, isolasi, dan kontrol penyakit memerlukan biaya tambahan dan menambah beban peternak.",

    pengendalian: {
      title: "Pengendalian & Pencegahan",
      items: [
        {
          title: "Pasteurisasi Susu Sebelum Dikonsumsi",
          content:
            "Susu mentah dari sapi terinfeksi bisa menularkan TBC ke manusia. Pasteurisasi (pemanasan susu hingga suhu tertentu) bisa membunuh bakteri berbahaya seperti Mycobacterium bovis. Susu harus selalu direbus atau dipasteurisasi sebelum diminum, terutama untuk anak-anak.",
        },
        {
          title: "Vaksinasi BCG untuk Manusia",
          content:
            "Vaksin BCG membantu melindungi manusia, terutama anak-anak, dari TBC. Vaksin ini tidak mencegah penularan dari hewan, tetapi mengurangi risiko gejala berat jika terinfeksi.",
        },
        {
          title: "Uji Tuberkulin pada Sapi",
          content:
            "Tes ini dilakukan untuk mengetahui apakah sapi terinfeksi TBC. Dilakukan dengan menyuntikkan sedikit antigen di bawah kulit, lalu dilihat reaksinya.",
        },
        {
          title: "Hindari Konsumsi Daging dan Susu dari Hewan Sakit",
          content:
            "Hewan yang menunjukkan gejala TBC atau hasil uji positif tidak boleh dikonsumsi daging atau susunya. Daging dan susu harus berasal dari hewan yang sehat dan lolos pemeriksaan kesehatan.",
        },
        {
          title: "Menjaga Kebersihan Kandang",
          content:
            "Kotoran yang menumpuk bisa jadi sumber infeksi karena bakteri TBC tahan lama di lingkungan. Bersihkan kandang secara rutin, jaga ventilasi udara, dan hindari kepadatan hewan.",
        },
        {
          title: "Isolasi atau Afkir Ternak Positif",
          content:
            "Sapi yang positif TBC harus dipisahkan atau dikeluarkan dari populasi (afkir). Tujuannya agar tidak menularkan ke sapi lain atau ke manusia.",
        },
      ],
    },
    bibliography: [
      "Carrisoza-Urbina, J., Morales-Salinas, E., Bedolla-Alva, M. A., Hernández-Pando, R., & Gutiérrez-Pabello, J. A. (2019). Atypical granuloma formation in Mycobacterium bovis-infected calves. PloS One, 14(7), e0218547.",
      "Irish Cattle Breeding Federation. (n.d.). All about TB. https://www.icbf.com/all-about-tb/",
      "Shitaye, J. E., Tsegaye, W., & Pavlik, I. (2007). Bovine tuberculosis infection in animal and human populations in Ethiopia: a review. Veterinarni Medicina, 52(8), 317.",
    ],
  },
  fasciolosis: {
    id: "fasciolosis",
    hero: {
      title: "FASCIOLOSIS",
      penyebab: "Parasit Fasciola hepatica",
      hewanPeka: "Sapi dan Domba",
      backgroundImage: "/fasciolosis/bg.png",
    },
    penularan: {
      title: "Proses Penularan Dapat Melalui",
      items: [
        {
          title: "Zoonosis",
          content:
            "Melalui metaserkaria yang tertelan, biasanya terjadi saat seseorang mengonsumsi sayuran air mentah (seperti selada air) atau minum air yang terkontaminasi. Metaserkaria adalah stadium infektif dari cacing hati Fasciola spp. yang menempel pada tumbuhan air atau berada dalam air yang tidak higienis.",
        },
        {
          title: "Telur Fasciola",
          content:
            "Telur Fasciola dikeluarkan bersama feses hewan yang terinfeksi dan menetas di lingkungan basah menjadi larva mirasidium. Larva ini kemudian masuk ke dalam tubuh siput air sebagai inang perantara dan mengalami beberapa tahap perkembangan. Setelah itu, larva keluar dari siput dalam bentuk metaserkaria, yaitu stadium infektif, lalu menempel di rumput atau berada di air. Hewan lain dapat terinfeksi saat memakan rumput atau meminum air yang terkontaminasi metaserkaria tersebut.",
        },
      ],
    },
    gejala: {
      title: "Gejala Klinis",
      customLayout: "fasciolosis",
      items: [
        {
          title: "Sapi",
          color: "red",
          content: [
            "Penurunan produksi susu sekitar 5-15%",
            "Penurunan pertumbuhan pada sapi atau domba potong",
            "Abortus (kematian pada janin) pada akhir kebuntingan",
          ],
        },
        {
          title: "Manusia",
          color: "red",
          content: [
            "Ketegangan perut dan nyeri",
            "Letih",
            "Terkadang demam, diare, hepatomegaly, eosinophilia",
            "Anemia",
          ],
        },
        {
          title: "Domba",
          color: "red",
          content: [
            "Nyeri pada bagian perut (akut apabila cacing sudah bermigrasi ke hati)",
            "Anemia",
            "Mati mendadak",
          ],
        },
        {
          images: ["/fasciolosis/FAS1.png"],
        },
      ],
    },
    waspada: {
      title: "Waspada",
      items: [
        {
          content:
            "Penyakit ini bersifat zoonosis, artinya juga dapat menular ke manusia, sehingga meningkatkan risiko bagi kesehatan masyarakat di sekitar peternakan.",
          color: "green",
        },
        {
          content:
            "Pemantauan rutin, pengendalian vektor (siput), serta pemberian obat cacing secara berkala menjadi langkah penting untuk mencegah dan mengendalikan penyakit ini.",
          color: "brown",
        },
        {
          content:
            "Peternak harus waspada terhadap penyakit fascioliasis karena penyakit ini disebabkan oleh parasit hati Fasciola hepatica atau Fasciola gigantica yang menyerang saluran empedu hewan ternak, terutama sap dan domba. Infeksi ini dapat menyebabkan kerusakan hati yang serius, menurunkan nafsu makan, pertumbuhan, serta produksi susu dan daging. Jika tidak segera dikenali dan ditangani, fascioliasis bisa menyebabkan kematian hewan dan kerugian ekonomi yang besar bagi peternak.",
          color: "brown",
        },
      ],
    },
    kerugian:
      "Penyakit fasciolosis dapat menimbulkan kerugian besar bagi peternak karena hewan ternak yang terinfeksi akan mengalami penurunan berat badan, penurunan produksi susu dan daging, gangguan pertumbuhan, serta peningkatan angka kematian, yang pada akhirnya berdampak langsung terhadap pendapatan dan kelangsungan usaha peternakan. Selain itu, biaya pengobatan, pencegahan, serta potensi penolakan pasar terhadap hewan yang terinfeksi juga menambah beban ekonomi bagi peternak.",
    pengendalian: {
      title: "Pengendalian & Pencegahan",
      items: [
        {
          title: "Pemberian Obat Cacing",
          content: [
            "Penggunaan obat cacing (fasciolisida) secara rutin dan strategis.",
          ],
        },
        {
          title: "Manajemen Padang Rumput",
          content:
            "Menghindari penggembalaan di area basah dan berawa tempat siput hidup.",
        },
      ],
    },
    bibliography: [
      "Elliott, T., Kelley, J., Rawlin, G., & Spithill, T. (2015). High prevalence of fasciolosis and evaluation of drug efficacy against Fasciola hepatica in dairy cattle in the Maffra and Bairnsdale districts of Gippsland, Victoria, Australia. Veterinary Parasitology, 209(1–2), 117–124.",
      "Taylor, M. A., Coop, R. L., & Wall, R. L. (2016). Veterinary parasitology (4th ed.). Wiley-Blackwell.",
    ],
  },
  bloat: {
    id: "bloat",
    hero: {
      title: "BLOAT",
      subtitle: "(Penyakit Mulut & Kuku)",
      penyebab: "Virus Aphthovirus",
      hewanPeka: "Ruminansia, seperti sapi (lebih peka) dan kambing",
      backgroundImage: "/bloat/bg.png",
    },
    penyebab: {
      title: "Penyebab",
      items: [
        {
          title: "Frothy / wet bloat",
          content:
            "Berbentuk busa bersifat persisten (tahan lama) yang bercampur dengan isi rumen. Disebabkan oleh konsumsi pakan seperti leguminosa (alfalfa, clover), rumput, dan biji-bijian yang mengandung protein terlarut tinggi dan lignin rendah. Pakan ini menyebabkan pembentukan busa stabil dalam rumen yang menghambat pengeluaran gas.",
        },
        {
          title: "Free gas / dry bloat",
          content:
            "Berbentuk gas bebas yang terpisah dari ingesta. Dry bloat terjadi karena gas yang biasanya dikeluarkan melalui eruktasi (sendawa) menumpuk di dalam rumen. Disebabkan oleh pakan yang menyebabkan peningkatan produksi gas dan penurunan pH rumen secara bersamaan. Selain itu juga dapat disebabkan oleh esofagus yang tersumbat oleh benda asing, tumor, atau pembengkakan jaringan.",
        },
      ],
    },
    gejala: {
      title: "Gejala Klinis",
      layout: "grid-cols-1 md:grid-cols-2",
      items: [
        {
          content: [
            "Distensi (pembesaran) rumen bagian kiri",
            "Hewan tampak gelisah / stres",
            "Dispneu (kesulitan bernapas), distensi dari rumen akan mengakibatkan tekanan pada diafragma rongga dada maupun abdomen sehingga ternak akan sulit bernafas. Frekuensi pernafasan meningkat dan menjadi dangkal serta memaksa hewan bernafas melalui mulut",
            "Hewan berulang kali berbaring dan bangun",
            "Peningkatan frekuensi defekasi",
            "Hewan sering menendang perut dan berguling untuk mengurangi rasa sakit",
            "Penurunan atau hilangnya nafsu makan",
          ],
          images: ["/bloat/Bloat.png"],
        },
      ],
    },
    waspada: {
      title: "Waspada",
      items: [
        {
          content:
            "Bloat dapat muncul secara mendadak dan harus segera ditangani karena dapat berakibat fatal.",
          color: "green",
        },
      ],
    },
    kerugian:
      "Dapat menyebabkan kematian pada hewan ternak. Selain kematian, bloat juga mengakibatkan kerugian ekonomi yang cukup tinggi, seperti biaya perubahan strategi manajemen pakan, tindakan pencegahan dan pengobatan.",
    pengendalian: {
      title: "Pengendalian & Pencegahan",
      items: [
        {
          title: "Manajemen Pakan",
          content:
            "Menghindari konsumsi leguminosa berlebih tanpa kombinasi hijauan lain. Tambahkan leguminosa yang mengandung tanin terkondensasi untuk menurunkan pembentukan busa. Berikan silase jagung sebelum alfalfa.",
        },
        {
          title: "Minyak Nabati",
          content:
            "Diberi minum minyak yang berasal dari tumbuh-tumbuhan, misalnya minyak kacang tanah sebanyak 0.6 liter dan ditambahkan minyak terpentine 28 cc. Karena minyak tersebut dapat menghancurkan buih yang terbentuk di dalam rumen yang menghalangi keluarnya gas. Selain itu, juga bisa diberikan preparat silicone guna menghindarkan rentangan permukaan rumen dan sekaligus menghancurkan buih.",
        },
        {
          title: "Tindakan Darurat",
          content:
            "Jika gas tidak dapat keluar, dilakukan trokarisasi (penusukan dinding perut ke rumen) untuk mengeluarkan gas. Trokarisasi dilakukan dengan menusuk perut sebelah kiri menggunakan trocar dan cannula. Tempat penusukan pada bagian belakang rusuk yang terakhir atau pada ujung pinggang. Cannula bisa membuka lubang yang lebar, tetapi meninggalkan bekas yang sekecil mungkin.",
        },
        {
          title: "Additive dan Obat",
          content:
            "Poloxalene, simethicone, atau antibiotik (misalnya penicillin dosis rendah) dapat digunakan untuk pencegahan. NaCl dalam pakan meningkatkan asupan air dan membantu pengeluaran gas.",
        },
      ],
    },
    bibliography: [
      "Akbar, F. (2019). Metabolisme Disorder. The Wonderful Ecosystem of Ruminant’s Rumen, 58.",
      "Khasrad dan Rusdimansyah. (2022). Manajemen Pemeliharaan Sapi Pedaging. Padang: Andalas University Press.",
      "Putra, N. G. W., Ramadani, D. N., Ardiansyah, A., Syaifudin, F., Yulinar, R. I., & Khasanah, H. (2022). Strategi pencegahan dan penanganan gangguan metabolis pada ternak ruminansia. Jurnal Peternakan Indonesia (Indonesian Journal of Animal Science), 24(2), 150-159.",
    ],
  },
  "defisiensi-mineral": {
    id: "defisiensi-mineral",
    hero: {
      title: "DEFISIENSI MINERAL",
      hewanPeka:
        "Ruminansia muda dan induk → sapi perah/pejantan, kambing bunting/laktasi, anak ternak rentan hipomineralemia (Ca, Mg, Se, Zn)",
      backgroundImage: "/defisiensi-mineral/bg.png",
    },
    penyebab: {
      title: "Penyebab",
      items: [
        {
          title: "Kekurangan Mineral dalam Pakan",
          content:
            "Pakan ternak terutama hijauan, mungkin tidak selalu mengandung cukup mineral untuk memenuhi kebutuhan ternak, terutama pada tanah yang miskin mineral.",
        },
        {
          title: "Kualitas Pakan yang Buruk",
          content:
            "Pakan yang terkontaminasi atau rusak dapat mengurangi ketersediaan mineral bagi ternak.",
        },
        {
          title: "Gangguan Penyerapan",
          content:
            "Beberapa kondisi kesehatan atau interaksi obat dapat mengganggu penyerapan mineral dalam saluran pencernaan",
        },
        {
          title: "Kebutuhan yang Meningkat",
          content:
            "Ternak yang sedang dalam masa pertumbuhan, bunting, atau laktasi membutuhkan mineral lebih banyak, sehingga lebih rentan terhadap defisiensi.",
        },
        {
          title: "Kondisi Tanah",
          content:
            "Tanah pasir, pH ekstrim (alkali pH 8 defisiensi Fe, Mn, Zn; asam pH 5 defisiensi Cu)",
        },
        {
          title: "Kurang Suplemen",
          content:
            "Tidak adanya tambahan mineral dalam bentuk blok/injeksi untuk ternak di padang/pakan monoton",
        },
      ],
    },
    penularan: {
      title: "Proses Penularan Dapat Melalui",
      items: [
        {
          content: [
            "Non-infeksius, bukan menular dengan persebaran patogen. Dipicu secara nutrisi akibat konsumsi pakan defisien.",
            "Masalah bisa meluas ke kelompok karena pakan dan tanah serupa",
          ],
        },
      ],
    },
    gejala: {
      title: "Gejala Klinis",
      customLayout: "defisiensi-mineral",
      items: [
        {
          title: "Umum",
          color: "green",
          content: [
            "Gangguan makan pica (keinginan dan nafsu makan terhadap benda atau zat yang bukan makanan atau tidak memiliki nilai gizi), seperti menjilat dinding, kayu, tanah karena craving mineral",
            "Penurunan nafsu makan, pertumbuhan, berat badan, kurus, kurang imun",
            "Reproduksi terganggu, seperti abortus, retensi plasenta, infertility, dystocia",
          ],
        },
        {
          title: "Mineral Spesifik",
          color: "brown",
          content: [
            "Kalsium (Ca): hypocalcemia/milk fever → ambruk mendadak pada sapi saat melahirkan",
            "Magnesium (Mg): Grass tetany → kegelisahan, kejang, berjalan tak beraturan, ambruk, kematian",
            "Selenium dan Vitamin E: White muscle disease: kelemahan otot, demam otot, kesulitan berdiri",
            "Zinc (Zn): dermatitis, gangguan imun, alopecia, parakeratosis, pertumbuhan lambat",
            "Cu, Co, Fe, I, Mn: anemia, gondok, gangguan reproduksi, pertumbuhan terhambat",
          ],
        },
      ],
    },
    pengendalian: {
      title: "Pengendalian & Pencegahan",
      items: [
        {
          title:
            "Berikan pakan yang mengandung semua mineral esensial, baik makro maupun mikro",
        },
        {
          title:
            "Perhatikan kualitas pakan hijauan dan tambahkan konsentrat yang kaya mineral",
        },
        {
          title:
            "Gunakan pakan tambahan seperti mineral blok untuk melengkapi kebutuhan mineral ternak",
        },
        {
          title:
            "Untuk kekurangan mineral dalam pakan, berikan suplemen mineral melalui pakan atau air minum",
        },
        {
          title:
            "Perhatikan gejala defisiensi mineral pada ternak, seperti penurunan nafsu makan, pertumbuhan terhambat, bulu kusam, atau gangguan reproduksi",
        },
        {
          title:
            "Sesuaikan jenis dan jumlah pakan dengan kebutuhan ternak berdasarkan umur,jenis kelamin, dan fase reproduksi",
        },
      ],
    },
    bibliography: [
      "Zaeini, Iqin. (2019, 13 Desember). Penyakit Defisiensi Mineral pada Ternak Ruminansia dan Upaya Pencegahannya. Dinas Peternakan dan Kesehatan Hewan. https://disnakeswan.lebakkab.go.id/penyakit-defisiensi-mineral-pada-ternak-ruminansia-dan-upaya-pencegahannya/",
      "Wahyuni, Ike (2021, 24 Agustus). Defisiensi Mineral pada Ternak Sapi Ruminansia. https://cybex.id/artikel/98671/defisiensi-mineral-pada-ternak-sapi-ruminansia/",
      "Grehenson Gusti. (2024, 7 Oktober). Kenali Gejala Ternak Kurang Mineral. Tim UGM Kenalkan Cara Bikin Mineral Blok Sederhana. https://ugm.ac.id/id/berita/kenali-gejala-ternak-kurang-mineral-tim-ugm-kenalkan-cara-bikin-mineral-blok-sederhana/",
      "Peternakans1. (2024, 16 Agustus). Atasi Kekurangan Mineral pada Ternak, Rizqi Ibnu Awwalin (Mahasiswa S1 Peternakan Undip) Melakukan Pelatihan Pembuatan Mineral Blok sebagai Permen Jilat Kaya Mineral untuk Ternak Saat KKN di Klaten. https://peternakan.fpp.undip.ac.id/2024/08/atasi-kekurangan-mineral-pada-ternak-rizqi-ibnu-awwalin-mahasiswa-s1-peternakan-undip-melakukan-pelatihan-pembuatan-mineral-blok-sebagai-permen-jilat-kaya-mineral-untuk-ternak-saat-kkn-di-klaten/",
    ],
  },
};
