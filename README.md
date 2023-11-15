# Aplikasi Catatan v3

Pada tugas kali ini kalian akan diminta untuk melakukan improvement pada tugas Aplikasi catatan v1 diubah menjadi Aplikasi catatan v2

## Requirement

### Terdapat 4 Halaman yaitu halaman Tambah Catatan, Home, Login. dan Register
- Terdapat halaman Tambah Catatan yang menggunakan react form dan sudah implement state management useState() untuk input title dan body nya
- Terdapat halaman home yang menampilkan daftar catatan
- Terdapat halaman Login untuk implementasikan authentication
- Terdapat halaman Register untuk mendaftarkan akun
- Mengaplikasian React Router Dom untuk navigasi antar halaman

### Menampilkan Daftar Catatan di Home
Pada daftar catatan:
- menampilkan daftar catatan dengan data hardcode akan tetapi sudah mengaplikasikan Rendering list of data menggunakan array.map (data yang dihardcode berupa array dan arraynya disimpan menggunakan useState dari react)
- menerapkan reusable component untuk tiap component pada daftar catatan.
- data yang perlu ditampilkan meliputi Judul catatan (title), waktu pembuatan (createdAt) dan isi catatan (body)
- menampilkan tombol delete catatan (bisa berupa icon / tombol dengan tulisan hapus) yang akan menghapus catatan berdasarakan id
- menampilkan input search by title pada bagian atas halaman daftar catatan  yang berfungsi memfilter catatan berdasarkan input 

### Menampilkan Form untuk menambah catatan di Halaman Tambah Catatan
Pada form untuk menambah catatan: 
- Mengaplikasikan React Form, kemudian data sementara disimpan ke useState
- apabila data sudah di input dengan tombol submit dari event handler onSubmit akan menginput data sementara tadi kedalam Array hardcode buatan kalian
- Implementasi useEffect agar setiap ada perubahan yang terjadi pada array data kalian akan merefresh halaman agar data yang baru bisa ter render alias tampil pada halaman Daftar Catatan
- Implementasi Conditional Rendering pada tombol Submit, apabila judul catatan (title), dan isi catatan (body), belum diisi maka tombol Submit akan berwarna abu abu dan tidak bisa dilakukan Event Handler OnSubmit. apabila sudah Conditional Rendering akan membuat tombol abu abu tadi berubah warna dan bisa di klik, implementasikan useEffect dalam perubahan conditional rendering tersebut.

### Menampilkan Halaman Login
- Mengaplikasikan React Form berisi input username dan password, kemudian data sementara disimpan menggunakan useState
- Melakukan hit api tiap kali button diklik ke endpoint login yg telah di sediakan untuk mendapatkan token auth yg akan digunakan untuk autentikasi bearer token.
  
### Menampilkan Halaman Register
- Mengaplikasikan React Form berisi input username dan password, kemudian data sementara disimpan menggunakan useState
- Melakukan hit apitiap kali button diklik ke endpoint register yg telah di sediakan untuk mendapatkan token auth yg akan digunakan untuk autentikasi bearer token.

### Menjaga state user ketika sudah login dan tidak
- Ketika user belum login maka akan diarahkan ke halaman login/register
- Ketika user belum login maka akan diarahkan ke halaman home
- Terpadat fungsi untuk logout

### Menerapkan seluruh fungsional pada versi sebelumnya lalu diubah menjadi hit ke API
- Gunakan fungsinal network.js atau bisa implement sendiri
- Pada tugas ini akan disediakan file postman untuk testing dan network.js untuk implementasi hit api

### Menggunakan framework CSS
Pada project ini kalian akan diminta untuk menghias aplikasi menggunakan framework css.
contoh: Ant Design, Bootstrap, Tailwind, Material UI dan lain-lain sesuai preferensi kalian.

## Cara pengerjaan dan pengumpulan tugas
Berikut cara pengerjaan dan pengumpulan tugas:
- Diasumsikan kalian telah memiliki repository tugas Aplikasi Catatan dan tugas v2 telah berada pada branch <namakalian>_aplikasi_catatan_v2 
- Ketika kalian telah selesai mengerjakan requirement, lakukan `git checkout -b nama_aplikasi_catatan_v3`. untuk membuat branch baru dengan nama extention v3 pada tugas kalian (NB: tugas v1 jangan diganggu lagi semua pengerjaan/ improvement dan requirement tugas baru hanya terjadi di v3)
- Terakhir, isi google form yang akan diberikan oleh mentor untuk pengumpulan tugas ini. (kalian akan diminta mengumpulkan link repo dan branch aplikasi catatan v3)
