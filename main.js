const LUONG_CO_BAN = 100000;

function tinhLuong() {
  var soNgayLam = document.getElementById("soNgayLam").value;

  console.log(typeof soNgayLam); // string

  // Ép kiểu string về number
  // var soLuong = LUONG_CO_BAN * parseFloat(soNgayLam)
  // var soLuong = LUONG_CO_BAN * parseInt(soNgayLam)
  var soLuong = LUONG_CO_BAN * +soNgayLam;

  var spanEl = document.createElement("span");
  spanEl.innerHTML = "Số lương: " + soLuong;

  var soLuongEl = document.getElementById("soLuong");
  soLuongEl.style.display = "block";
  soLuongEl.appendChild(spanEl);
}

function tinhTrungBinh() {
  var soTuyThich1 = document.getElementById("soTuyThich1").value;
  var soTuyThich2 = document.getElementById("soTuyThich2").value;
  var soTuyThich3 = document.getElementById("soTuyThich3").value;
  var soTuyThich4 = document.getElementById("soTuyThich4").value;
  var soTuyThich5 = document.getElementById("soTuyThich5").value;

  var trungBinhSo = (parseInt(soTuyThich1) + parseInt(soTuyThich2) + parseInt(soTuyThich3) + parseInt(soTuyThich4) + parseInt(soTuyThich5)) /5;

  var spanEl = document.createElement("span");
  spanEl.innerHTML = "Trung Bình Số: " + trungBinhSo;

  var soLuongEl = document.getElementById("trungBinhSo");
  soLuongEl.style.display = "block";
  soLuongEl.appendChild(spanEl);
}


const TIEN_DO_DOI_SANG_VIET = 23500;

function doDoisangViet() {
  var inpTienDo = document.getElementById("tienDo").value;

  var dolaDaDoi = TIEN_DO_DOI_SANG_VIET * +inpTienDo;

  var spanEl = document.createElement("span");
  spanEl.innerHTML = "Đô đã đổi sang tiền Việt: " + dolaDaDoi;

  var dolaDaDoiEl = document.getElementById("dolaDaDoi");
  dolaDaDoiEl.style.display = "block";
  dolaDaDoiEl.appendChild(spanEl);
}

function tinhToan() {
  var chieuDai = +document.getElementById("chieuDai").value;
  var chieuRong = +document.getElementById("chieuRong").value;

  var chuVi = (chieuDai + chieuRong) * 2;
  var dienTich = chieuDai * chieuRong;

  var ketQuaEl = document.getElementById("ketQua");
  ketQuaEl.innerHTML = ""

  var chuViEl = document.createElement("p");
  chuViEl.innerHTML = "Chu vi: " + chuVi;

  var dienTichEl = document.createElement("p");
  dienTichEl.innerHTML = "Diện tích: " + dienTich;

  ketQuaEl.appendChild(chuViEl);
  ketQuaEl.appendChild(dienTichEl);
}
function tinhTongKySo() {
  var sobatky = +document.getElementById("sobatky").value;

  var so_hang_don_vi = sobatky % 10;
  var so_hang_chuc = Math.floor(sobatky / 10);
  var tongHaiSo = so_hang_don_vi + so_hang_chuc;

  var tongkysoEl = document.getElementById("tongkyso");
  tongkysoEl.innerHTML = ""

  var so_hang_don_viEl = document.createElement("p");
  so_hang_don_viEl.innerHTML = "Số hàng đơn Vị: " + so_hang_don_vi;

  var so_hang_chucEl = document.createElement("p");
  so_hang_chucEl.innerHTML = "Số hàng chục: " + so_hang_chuc;

  var tongHaiSoEL = document.createElement("p");
  tongkysoEl.innerHTML = "Tổng 2 số :" + tongHaiSo;
  

  tongkysoEl.appendChild(so_hang_don_viEl);
  tongkysoEl.appendChild(so_hang_chucEl);
  tongkysoEl.appendChild(tongHaiSoEL);

}

