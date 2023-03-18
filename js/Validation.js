function Validation() {
  let isValid = true;
  let account = document.getElementById("tknv").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dateOfWork = document.getElementById("datepicker").value;
  let salary = document.getElementById("luongCB").value;
  let competence = document.getElementById("chucvu").value;
  let timeWork = document.getElementById("gioLam").value;

  // kiểm tra account
  if (account.trim() === "") {
    document.querySelector("#tbTKNV").innerHTML = `không được để trống`;
    document.querySelector("#tbTKNV").style.display = "block";
    isValid = false;
  } else if (!/^[0-9]{4,6}$/.test(account)) {
    document.querySelector("#tbTKNV").innerHTML = `không hợp lệ`;
    document.querySelector("#tbTKNV").style.display = "block";
    isValid = false;
  } else {
    document.querySelector("#tbTKNV").innerHTML = ``;
    document.querySelector("#tbTKNV").style.display = "block";
  }

  // kiểm tra họ và tên
  if (name.trim() === "") {
    document.querySelector("#tbTen").innerHTML = `không được để trống`;
    document.querySelector("#tbTen").style.display = "block";
    isValid = false;
  } else if (!/\p{Letter}/u.test(name)) {
    document.querySelector("#tbTen").innerHTML = `không hợp lệ`;
    document.querySelector("#tbTen").style.display = "block";
  } else {
    document.querySelector("#tbTen").innerHTML = ``;
    document.querySelector("#tbTen").style.display = "block";
  }

  // kiểm tra email
  if (email.trim() === "") {
    document.querySelector("#tbEmail").innerHTML = `không được để trống`;
    document.querySelector("#tbEmail").style.display = "block";
    isValid = false;
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    document.querySelector("#tbEmail").innerHTML = `không hợp lệ`;
    document.querySelector("#tbEmail").style.display = "block";
    isValid = false;
  } else {
    document.querySelector("#tbEmail").innerHTML = ``;
    document.querySelector("#tbEmail").style.display = "block";
  }

  // kiểm tra mật khẩu
  if (password.trim() === "") {
    document.querySelector("#tbMatKhau").innerHTML = `không được để trống`;
    document.querySelector("#tbMatKhau").style.display = "block";
    isValid = false;
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)
  ) {
    document.querySelector("#tbMatKhau").innerHTML = `không hợp lệ`;
    document.querySelector("#tbMatKhau").style.display = "block";
    isValid = false;
  } else {
    document.querySelector("#tbMatKhau").innerHTML = ``;
    document.querySelector("#tbMatKhau").style.display = "block";
  }

  //kiểm tra ngày
  if (dateOfWork.trim() === "") {
    document.querySelector("#tbNgay").innerHTML = `không được để trống`;
    document.querySelector("#tbNgay").style.display = "block";
    isValid = fasle;
  } else if (!/(\d{1,2})\/(\d{1,12})\/(\d{4})/.test(dateOfWork)) {
    document.querySelector("#tbNgay").innerHTML = `không đúng định dạng`;
    document.querySelector("#tbNgay").style.display = "block";
    isValid = false;
  } else {
    document.querySelector("#tbNgay").innerHTML = ``;
    document.querySelector("#tbNgay").style.display = "block";
  }

  // kiểm tra lương CB
  if (salary.trim() === "") {
    document.querySelector("#tbLuongCB").innerHTML = `không được để trống`;
    document.querySelector("#tbLuongCB").style.display = "block";
    isValid = false;
  } else if (parseInt(salary) < 1000000 || parseInt(salary) > 20000000) {
    document.querySelector("#tbLuongCB").innerHTML = `không hợp lệ`;
    document.querySelector("#tbLuongCB").style.display = "block";
    isValid = false;
  } else {
    document.querySelector("#tbLuongCB").innerHTML = ``;
    document.querySelector("#tbLuongCB").style.display = "block";
  }

  // kiểm tra chức vụ
  if (competence.trim() === "") {
    document.querySelector("#tbChucVu").innerHTML = `không được để trống`;
    document.querySelector("#tbChucVu").style.display = "block";
    isValid = false;
  } else if (competence === "Chọn chức vụ") {
    document.querySelector(
      "#tbChucVu"
    ).innerHTML = `không được để trống chức vụ`;
    document.querySelector("#tbChucVu").style.display = "block";
    isValid = false;
  } else {
    document.querySelector("#tbChucVu").innerHTML = ``;
    document.querySelector("#tbChucVu").style.display = "block";
  }

  // kiểm tra giờ làm
  if (timeWork.trim() === "") {
    document.querySelector("#tbGiolam").innerHTML = `không được để trống`;
    document.querySelector("#tbGiolam").style.display = "block";
    isValid = false;
  } else if (parseInt(timeWork) < 80 || parseInt(timeWork) > 200) {
    document.querySelector("#tbGiolam").innerHTML = `không hợp lệ`;
    document.querySelector("#tbGiolam").style.display = "block";
    isValid = false;
  } else {
    document.querySelector("#tbGiolam").innerHTML = ``;
    document.querySelector("#tbGiolam").style.display = "block";
  }

  return isValid;
}
