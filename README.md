# Aplikasi Catatan v2

Pada tugas kali ini kalian akan diminta untuk melakukan improvement pada tugas Aplikasi catatan v1 diubah menjadi Aplikasi catatan v2

## Requirement

### Terdapat 2 Halaman yaitu halaman Tambah Catatan dan Halaman Home
- Terdapat halaman Catatan yang menggunakan react form dan sudah implement state management useState() untuk input title dan body nya
- Terdapat halaman home yang menampilkan daftar catatan
- Mengaplikasian React Router dom saat pemindahan halaman setelah tombol Submit di halaman Tambah Catatan akan menambahkan data dan langsung pindah kembali ke halaman home

### Menampilkan Daftar Catatan
Pada daftar catatan:
- menampilkan daftar catatan dengan data hardcode akan tetapi sudah mengaplikasikan Rendering list of data menggunakan array.map (data yang dihardcode berupa array dan arraynya disimpan menggunakan state management useState dari react)
- menerapkan reusable component untuk tiap component pada daftar catatan.
- data yang perlu ditampilkan meliputi Judul catatan (title), waktu pembuatan (createdAt) dan isi catatan (body)
- menampilkan tombol delete catatan (bisa berupa icon / tombol dengan tulisan hapus) yang akan menghapus catatan berdasarakan  index array dimana dia berada
- menampilkan input search by title pada bagian atas halaman daftar catatan  yang berfungsi memfilter catatan berdasarkan input 

### Menampilkan Form untuk menambah catatan di Halaman Catatan
Pada form untuk menambah catatan: 
- Mengaplikasikan React Form, kemudian data sementara disimpan menggunakan state management useState
- apabila data sudah di input dengan tombol submit dari event handler onSubmit akan menginput data sementara tadi kedalam Array hardcode buatan kalian
- Implementasi useEffect agar setiap ada perubahan yang terjadi pada array data kalian akan merefresh halaman agar data yang baru bisa ter render alias tampil pada halaman Daftar Catatan
- Implementasi Conditional Rendering pada tombol Submit, apabila judul catatan (title), dan isi catatan (body), belum diisi maka tombol Submit akan berwarna abu abu dan tidak bisa dilakukan Event Handler OnSubmit. apabila sudah Conditional Rendering akan membuat tombol abu abu tadi berubah warna dan bisa di klik, implementasikan useEffect dalam perubahan conditional rendering tersebut.

### Menggunakan framework CSS
Pada project ini kalian akan diminta untuk menghias aplikasi menggunakan framework css.
contoh: Ant Design, Bootstrap, Tailwind, Material UI dan lain-lain sesuai preferensi kalian.

## Cara pengerjaan dan pengumpulan tugas
Berikut cara pengerjaan dan pengumpulan tugas:
- Diasumsikan kalian telah memiliki repository tugas Aplikasi Catatan dan tugas v1 telah berada pada branch <namakalian>_aplikasi_catatan_v1 
- Ketika kalian telah selesai mengerjakan requirement, lakukan `git checkout -b nama_aplikasi_catatan_v2`. untuk membuat branch baru dengan nama extention v2 pada tugas kalian (NB: tugas v1 jangan diganggu lagi semua pengerjaan/ improvement dan requirement tugas baru hanya terjadi di v2)
- Terakhir, isi google form yang akan diberikan oleh mentor untuk pengumpulan tugas ini. (kalian akan diminta mengumpulkan link repo dan branch aplikasi catatan v2)
