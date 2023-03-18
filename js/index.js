//input
mangNhanVien = [];

document.getElementById("btnThemNV").onclick = function () {
  //input nhanvien.NhanVien
  var nv = new NhanVien();
  nv.taiKhoan = document.querySelector("#tknv").value;
  nv.hoTen = document.querySelector("#name").value;
  nv.email = document.querySelector("#email").value;
  nv.ngayLam = document.querySelector("#datepicker").value;
  nv.chucVu = document.querySelector("#chucvu").value;
  nv.luongCoBan = document.querySelector("#luongCB").value;
  nv.heSoChucVu = document.querySelector("#chucvu").value;
  nv.gioLam = document.querySelector("#gioLam").value;
  nv.matKhau = document.querySelector("#password").value;

  console.log(nv);
  nv.tongLuong = nv.luongCoBan * nv.heSoChucVu;
  //kiem tra chuc vu

  var tagSelect = document.getElementById("chucvu");
  var viTri = tagSelect.selectedIndex;
  var chucvu = tagSelect.options[viTri].innerHTML;
  nv.chucVu = chucvu;

  if (Number(nv.gioLam) >= 192) {
    nv.xepLoai = "Xuất Sắc";
  } else if (Number(nv.gioLam) < 192 && Number(nv.gioLam) >= 176) {
    nv.xepLoai = "Giỏi";
  } else if (Number(nv.gioLam) < 176 && Number(nv.gioLam) >= 160) {
    nv.xepLoai = "Khá";
  } else if (Number(nv.gioLam) <= 160) {
    nv.xepLoai = "Trung Bình";
  }

  if (nv.gioLam >= 192) {
    console.log("vd1", Object.values(nv));
  } else if (nv.gioLam < 192 && nv.gioLam >= 176) {
    console.log("vd2", Object.values(nv));
  } /* -----------------Validation-------------- */
  let isValid = Validation();

  if (!isValid) {
    return;
  }
  mangNhanVien.push(nv);
  luuStorage();
  renderTableNhanVien(mangNhanVien);
  //progress
};

//output

/*------------function--------------- */

function renderTableNhanVien(arrNhanVien) {
  var htmlString = "";
  for (var index = 0; index < arrNhanVien.length; index++) {
    var nv = arrNhanVien[index];
    htmlString += `
    <tr>
    <td>${nv.taiKhoan}</td>
    <td>${nv.hoTen}</td>
    <td>${nv.email}</td>
    <td>${nv.ngayLam}</td>
    <td>${nv.chucVu}</td>
    <td>${nv.tongLuong}</td>
    <td>${nv.xepLoai}</td>
    <td> <button class=" btn btn-danger" onclick=" xoaPhanTuTheoTenDangNhap ('${nv.taiKhoan}')">Xoá</button>
    <button class="btn btn-primary my-3"data-toggle="modal"
    data-target="#myModal" onclick="layThongTin('${nv.taiKhoan}')">Chỉnh sửa </button></td>

    </tr>
    `;
  }
  document.getElementById("tableDanhSach").innerHTML = htmlString;
  console.log("index1", index);
  return htmlString;
}
function layThongTin(taiKhoanClick) {
  //input maSinhVien

  //output object[index]
  for (var index = 0; index < mangNhanVien.length; index++) {
    if (mangNhanVien[index].taiKhoan === taiKhoanClick) {
      document.getElementById("btnThemNV").disabled = true;
      document.getElementById("tknv").disabled = true;
      document.querySelector("#tknv").value = mangNhanVien[index].taiKhoan;
      document.querySelector("#name").value = mangNhanVien[index].hoTen;
      document.querySelector("#email").value = mangNhanVien[index].email;
      document.querySelector("#datepicker").value = mangNhanVien[index].ngayLam;
      document.querySelector("#luongCB").value = mangNhanVien[index].luongCoBan;
      document.querySelector("#chucvu").value = mangNhanVien[index].chucVu;
      document.querySelector("#gioLam").value = mangNhanVien[index].gioLam;
      document.querySelector("#password").value = mangNhanVien[index].matKhau;
      document.querySelector("#chucvu").value = mangNhanVien[index].heSoChucVu;
      break;
    }
  }
}
debugger;
document.getElementById("btnCapNhat").onclick = function () {
  var cnnv = new NhanVien();
  cnnv.taiKhoan = document.querySelector("#tknv").value;
  cnnv.hoTen = document.querySelector("#name").value;
  cnnv.email = document.querySelector("#email").value;
  cnnv.ngayLam = document.querySelector("#datepicker").value;
  cnnv.luongCoBan = document.querySelector("#luongCB").value;
  cnnv.heSoChucVu = document.querySelector("#chucvu").value;
  cnnv.gioLam = document.querySelector("#gioLam").value;
  cnnv.matKhau = document.querySelector("#password").value;
  cnnv.chucVu = document.querySelector("#chucvu").value;
  cnnv.heSoChucVu = document.querySelector("#chucvu").value;
  cnnv.tongLuong = cnnv.luongCoBan * cnnv.heSoChucVu;
  if (Number(cnnv.gioLam) >= 192) {
    cnnv.xepLoai = "Xuất Sắc";
  } else if (Number(cnnv.gioLam) < 192 && Number(cnnv.gioLam) >= 176) {
    cnnv.xepLoai = "Giỏi";
  } else if (Number(cnnv.gioLam) < 176 && Number(cnnv.gioLam) >= 160) {
    cnnv.xepLoai = "Khá";
  } else if (Number(cnnv.gioLam) <= 160) {
    cnnv.xepLoai = "Trung Bình";
  }

  var tagSelect = document.getElementById("chucvu");
  var viTri = tagSelect.selectedIndex;
  var chucvu = tagSelect.options[viTri].innerHTML;
  cnnv.chucVu = chucvu;

  for (var index = 0; index < mangNhanVien.length; index++) {
    if (mangNhanVien[index].taiKhoan === cnnv.taiKhoan) {
      mangNhanVien[index].hoTen = cnnv.hoTen;
      mangNhanVien[index].email = cnnv.email;
      mangNhanVien[index].ngayLam = cnnv.ngayLam;
      mangNhanVien[index].chucVu = cnnv.chucVu;
      mangNhanVien[index].luongCoBan = cnnv.luongCoBan;
      mangNhanVien[index].ChucVu = cnnv.chucVu;
      mangNhanVien[index].gioLam = cnnv.gioLam;
      mangNhanVien[index].matKhau = cnnv.matKhau;
      mangNhanVien[index].chucVu = cnnv.chucVu;
      mangNhanVien[index].tongLuong = cnnv.tongLuong;
      mangNhanVien[index].xepLoai = cnnv.xepLoai;
      break;
    }
  }
  let isValid = Validation();
  if (!isValid) {
    return;
  }
  document.getElementById("tknv").disabled = false;
  document.getElementById("btnThemNV").disabled = false;
  luuStorage();
  renderTableNhanVien(mangNhanVien);
};

// function xoaPhanTu(indexDel) {
//   mangNhanVien.splice(indexDel, 1);
//   renderTableNhanVien(mangNhanVien);
// }
function xoaPhanTuTheoTenDangNhap(tenDangNhapVao) {
  indexDel = -1;
  for (index = 0; index < mangNhanVien.length; index++) {
    if (mangNhanVien[index].taiKhoan === tenDangNhapVao) {
      indexDel = index;
      break;
    }
  }
  mangNhanVien.splice(indexDel, 1);
  //Tao lai bang table Sinh Vien
  luuStorage();
  renderTableNhanVien(mangNhanVien);
}
function luuStorage() {
  var stringMangNhanVien = JSON.stringify(mangNhanVien);
  localStorage.setItem("mangNhanVien", stringMangNhanVien);
}
function layStorage() {
  if (localStorage.getItem("mangNhanVien")) {
    var stringMangNhanVien = localStorage.getItem("mangNhanVien");
    mangNhanVien = JSON.parse(stringMangNhanVien);
  }
  renderTableNhanVien(mangNhanVien);
}
layStorage();
// funcition tim kiem nhan vien
document.getElementById("searchName").oninput = function () {
  var tuKhoa = document.getElementById("searchName").value;
  var mangNhanVienTimKiem = [];
  tuKhoa = tuKhoa.toLowerCase().trim();
  tuKhoa = stringToSlug(tuKhoa);
  for (var index = 0; index < mangNhanVien.length; index++) {
    var nv = mangNhanVien[index];
    // so sanh coi co === voi value nhap vao hay khong
    var xepLoai = stringToSlug(nv.xepLoai); // xếp loại của nhân viên thứ n
    if (xepLoai.search(tuKhoa) !== -1) {
      mangNhanVienTimKiem.push(nv);
    }
  }
  renderTableNhanVien(mangNhanVienTimKiem);
};
function stringToSlug(title) {
  //Đổi chữ hoa thành chữ thường
  slug = title.toLowerCase();

  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
  slug = slug.replace(/đ/gi, "d");
  //Xóa các ký tự đặt biệt
  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
    ""
  );
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-");
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-/gi, "-");
  slug = slug.replace(/\-\-/gi, "-");
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = "@" + slug + "@";
  slug = slug.replace(/\@\-|\-\@|\@/gi, "");
  return slug;
}
