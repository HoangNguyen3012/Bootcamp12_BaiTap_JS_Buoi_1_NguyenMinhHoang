// Bootcamp12_BaiTap_JS_Buoi_1_NguyenMinhHoang
// Bai 1: Tinh tien luong nhan vien
// Input Luong1Ngay
var luong1Ngay = 100000;
// Input soNgayLam
var soNgayLam = 23;
// Operation thuNhap = luong1Ngay x soNgayLam
var thuNhap = luong1Ngay*soNgayLam;
// output thuNhap
console.log('Bai 1: thu nhap la',thuNhap,'\n');
// alert(thuNhap);


// Bai 2: Tinh gia tri trung binh
// Input 5 so thuc
var soA = 6;
var soB = -4;
var soC = 17;
var soD = 40;
var soE = -53;
// Operation soTrungBinh = (soA+soB+soC+soD+soE)/5
var soTrungBinh = (soA+soB+soC+soD+soE)/5;
// Output soTrungBinh
document.write('Bai 2: trung binh 5 so thuc la ' + soTrungBinh,);

// Bai 3: Quy doi tien
// Input quyDoiUSD dang constant
const quyDoiUSD = 23500;
// Input soTienUSD
var soTienUSD = 40;
// Operation soTienVND = soTienUSD x quyDoiUSD
var soTienVND = soTienUSD * quyDoiUSD;
// Output soTienVND
console.log('Bai 3:',soTienUSD, 'USD quy doi ra' ,soTienVND,'VND');

// Bai 4: Tinh dien tich, chu vi hinh chu nhat
// Input chieuDai va chieuRong
var chieuDai = 8;
var chieuRong = 6;
if (chieuDai < chieuRong) {
    console.log('Nhap lai chieu dai va chieu rong');
} 
// Operation dienTich = chieuDai x chieuRong
var dienTich = chieuDai * chieuRong;
// Operation chuVi = 2 x (chieuRong + chieuDai)
var chuVi = 2 * (chieuRong + chieuDai);
// Output dienTich va chuVi
console.log('Bai 4: Dien tich hinh chu nhat la',dienTich);
console.log('Bai 4: Chu vi hinh chu nhat la',chuVi);
document.write('<br></br>','Bai 4: Dien tich hinh chu nhat la ',dienTich,'<br></br>','Chu vi hinh chu nhat la ',chuVi);

// Bai 5: Tinh tong 2 ky so
// Input so2ky
var so2ky = 67;
// Operation tinh so hang don vi
var hangDonVi = so2ky % 10;
// Operation tinh so hang chuc
var hangChuc = Math.floor(so2ky / 10);
// Operation tinh tong ky so
var tongKySo = hangDonVi + hangChuc;
// Output tongKySo
document.write('<br></br>','Bai 5: Tong ky so cua ',so2ky,' la ',tongKySo);

