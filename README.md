# Lambang Daerah Seluruh Indonesia

Ini adalah projek yang berisi lambang daerah seluruh Indonesia, 38 Provinsi, dan 513 Kabupaten/Kota.

Logo-logo yang ada didalam API adalah hasil Web scraping di Wikipedia, yang mana menurut saya URL yang ada di sana kurang rapih. Maka dari itu, projek ini dibuat agar orang-orang bisa lebih mudah mendapatkan lambang daerah dengan URL yang rapih, cocok untuk pembuatan input "daerah asal" pada form.

## API

### Lambang Provinsi

Params:

| Nama     | Deskripsi                                                                             |
| -------- | ------------------------------------------------------------------------------------- |
| `:size`  | Mengatur ukuran lambang, minimal 24                                                   |
| `:index` | Index lambang, digunakan untuk mendapatkan 1 lambang, nilainya antara `1` sampai `38` |

```bash
# Semua lambang
GET https://symbolsofindonesia.vercel.app/api/provinces

# Mengatur ukuran
GET https://symbolsofindonesia.vercel.app/provinces/:size

# Mendapatkan satu lambang
GET https://symbolsofindonesia.vercel.app/api/provinces/:index/:size
```

### Lambang Provinsi

Params:

| Nama     | Deskripsi                                                                              |
| -------- | -------------------------------------------------------------------------------------- |
| `:size`  | Mengatur ukuran lambang, minimal 24                                                    |
| `:index` | Index lambang, digunakan untuk mendapatkan 1 lambang, nilainya antara `1` sampai `514` |

```bash
# Semua lambang
GET https://symbolsofindonesia.vercel.app/api/provinces

# Mengatur ukuran
GET https://symbolsofindonesia.vercel.app/provinces/:size

# Mendapatkan satu lambang
GET https://symbolsofindonesia.vercel.app/api/provinces/:index/:size
```

## Kontribusi

Rencananya projek ini akan menyediakan lambang yang lebih lengkap dari seluruh indonesia, seperti sekolah, dan instansi lainnya. Maka dari itu saya mengajak Anda untuk mari bersama-sama kita kembangkan projek ini.

Jika ada masalah harap disampaikan pada halaman issue.

Terima kasih, semoga projek ini bermanfaat.
