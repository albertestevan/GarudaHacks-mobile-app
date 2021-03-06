from jwcrypto import jwk

FOLLOWERS = [
    ("1", "~ 1k"),
    ("2", "~ 5k"),
    ("3", "~ 10k"),
    ("4", "~ 50k"),
    ("5", "~ 100k"),
    ("6", "~ 500k"),
    ("7", "> 1M"),
]

PRICES = [
    ("1", "~ 500k"),
    ("2", "~ 5M"),
    ("3", "~ 10M"),
]

CITIES = [
    ("1", "Ambon"),
    ("2", "Balikpapan"),
    ("3", "Banda Aceh"),
    ("4", "Bandung"),
    ("5", "Banjar"),
    ("6", "Banjarbaru"),
    ("7", "Banjarmasin"),
    ("8", "Batam"),
    ("9", "Batu"),
    ("10", "Baubau"),
    ("11", "Bekasi"),
    ("12", "Bengkulu"),
    ("13", "Bima"),
    ("14", "Binjai"),
    ("15", "Bitung"),
    ("16", "Blitar"),
    ("17", "Bogor"),
    ("18", "Bontang"),
    ("19", "Bukittinggi"),
    ("20", "Cilegon"),
    ("21", "Cimahi"),
    ("22", "Cirebon"),
    ("23", "Denpasar"),
    ("24", "Depok"),
    ("25", "Dumai"),
    ("26", "Jakarta Timur"),
    ("27", "Gorontalo"),
    ("28", "Gunungsitoli"),
    ("29", "Jakarta Barat"),
    ("30", "Jakarta Pusat"),
    ("31", "Jakarta Selatan"),
    ("32", "Jakarta Utara"),
    ("33", "Jambi"),
    ("34", "Jayapura"),
    ("35", "Kediri"),
    ("36", "Kendari"),
    ("37", "Kotamobagu"),
    ("38", "Kupang"),
    ("39", "Langsa"),
    ("40", "Lhokseumawe"),
    ("41", "Lubuklinggau"),
    ("42", "Madiun"),
    ("43", "Magelang"),
    ("44", "Makassar"),
    ("45", "Malang"),
    ("46", "Manado"),
    ("47", "Mataram"),
    ("48", "Medan"),
    ("49", "Metro"),
    ("50", "Mojokerto"),
    ("51", "Padang"),
    ("52", "Padang Panjang"),
    ("53", "Padang Sidempuan"),
    ("54", "Pagar Alam"),
    ("55", "Palangka Raya"),
    ("56", "Palembang"),
    ("57", "Palopo"),
    ("58", "Palu"),
    ("59", "Pangkal Pinang"),
    ("60", "Parepare"),
    ("61", "Pariaman"),
    ("62", "Pasuruan"),
    ("63", "Payakumbuh"),
    ("64", "Pekalongan"),
    ("65", "Pekanbaru"),
    ("66", "Pematangsiantar"),
    ("67", "Pontianak"),
    ("68", "Prabumulih"),
    ("69", "Probolinggo"),
    ("70", "Sabang"),
    ("71", "Salatiga"),
    ("72", "Samarinda"),
    ("73", "Sawahlunto"),
    ("74", "Semarang"),
    ("75", "Serang"),
    ("76", "Sibolga"),
    ("77", "Singkawang"),
    ("78", "Solok"),
    ("79", "Sorong"),
    ("80", "Subulussalam"),
    ("81", "Sukabumi"),
    ("82", "Sungai Penuh"),
    ("83", "Surabaya"),
    ("84", "Surakarta"),
    ("85", "Tangerang"),
    ("86", "Tanjung Pinang"),
    ("87", "Tanjungbalai"),
    ("88", "Tangerang Selatan"),
    ("89", "Tarakan"),
    ("90", "Tasikmalaya"),
    ("91", "Tebing Tinggi"),
    ("92", "Tegal"),
    ("93", "Ternate"),
    ("94", "Tidore"),
    ("95", "Tomohon"),
    ("96", "Tual"),
    ("97", "Yogyakarta"),
]

TAGS = [
    ("1", "TECHNOLOGIES"),
    ("2", "AUTOMOTIVE"),
    ("3", "BEAUTY"),
    ("4", "FOOD"),
    ("5", "FASHION"),
    ("6", "TRAVEL"),
    ("7", "DIET"),
    ("8", "FITNESS"),
    ("9", "FINANCIAL"),
    ("10", "EDUCATION"),
    ("11", "ENTERTAINMENT"),
    ("12", "SCIENCE"),
    ("13", "GAMES"),
    ("14", "COMEDY"),
    ("15", "FILM"),
    ("16", "MUSIC"),
    ("17", "ALCOHOL"),
    ("18", "ANIMAL"),
    ("19", "PLANT"),
    ("20", "FAMILY"),
]

GENDERS = [
    ("1", "MALE"),
    ("2", "FEMALE"),
    ("3", "OTHER"),
]

SALT = "WOING"

JWTKey = jwk.JWK(**{"k":"bu5Lqg3k7UeXz8xd0D4pHGSClHmEt7NqBc-AQUPbDVQ","kty":"oct"})