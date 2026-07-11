# Hướng dẫn tùy chỉnh nội dung cho Website Kỷ niệm 60 năm

## 1. Cách sử dụng Hình ảnh và Video cục bộ (Tải từ máy tính lên)
Để sử dụng hình ảnh và video có sẵn trong máy tính của bạn thay vì dùng link ảnh trên mạng:
1. Bạn hãy tải các file hình ảnh và video đó lên thư mục `public` của dự án (Bạn có thể nhấp chuột phải vào khu vực Explorer bên tay trái, tạo thư mục `images` hoặc `videos` bên trong thư mục `public` cho dễ quản lý).
2. Khi khai báo đường dẫn trong mã nguồn (code), bạn chỉ cần bắt đầu bằng dấu gạch chéo `/` ứng với file trong thư mục public. (Ví dụ: tên file là `anh-truong.jpg` nằm trong `public/images/`, bạn sẽ ghi là `"/images/anh-truong.jpg"`, thay vì link `https://...` dài dòng).

---

## 2. Cách thêm vào "Bảng Vàng Vinh Danh"
Mở file `src/components/HallOfFame.tsx`. Tìm đến biến `HONORS` ở đầu file.
Bạn thêm dòng tương tự như sau vào danh sách:
```javascript
{ 
  id: 13, // Tăng số thứ tự id cho khỏi trùng
  name: "Tên người hoặc tập thể", 
  year: "Năm nhận thưởng", 
  award: "Tên giải thưởng hoặc thành tích", 
  type: "teacher", // Dùng "teacher" cho giáo viên/tập thể, "student" cho học sinh
  img: "/images/anh-vinh-danh.jpg" // Đường dẫn ảnh cục bộ
}
```

---

## 3. Cách thêm giáo viên vào phần "Tri Ân Thầy Cô"
Mở file `src/components/TeachersTribute.tsx`. Tìm đến biến `TEACHERS` ở đầu file.
Thêm thông tin giáo viên mới vào danh sách như sau:
```javascript
{ 
  id: 6, // Tăng số id
  name: "Tên Thầy/Cô", 
  subject: "Môn dạy (VD: Toán Học)", 
  years: "Thời gian công tác (VD: 2005 - Nay)", 
  achievements: "Các thành tích nổi bật của thầy cô...", 
  img: "/images/anh-thay-co.jpg" // Đường dẫn ảnh cục bộ
}
```

---

## 4. Cách thêm ảnh vào phần "Ký Ức Hình Ảnh"
Mở file `src/components/Gallery.tsx`. Tìm đến biến `PHOTOS` ở đầu file.
Thêm thông tin ảnh mới vào danh sách như sau:
```javascript
{ 
  id: 10, // Tăng số id 
  category: "Quá khứ", // Danh mục: Chọn "Quá khứ", "Hiện tại", hoặc "Khoảnh khắc"
  url: "/images/anh-ky-niem.jpg", // Đường dẫn ảnh cục bộ
  description: "Dòng chú thích cho bức ảnh, sẽ hiển thị khi bấm vào phóng to." 
}
```

---

## 6. Cách Quản lý và Xoá Lời nhắn (Quyền Admin)
Để xoá các lời nhắn không phù hợp, bạn cần đăng nhập bằng tài khoản Admin:
1. **Lấy UID của bạn**: Truy cập trang web, cuộn xuống phần **"Gửi Lời Yêu Thương"**. Di chuột hoặc nhấp vào góc dưới cùng bên phải của khu vực này (có một biểu tượng bánh răng nhỏ ẩn hiện khi di chuột).
2. **Đăng nhập**: Nhấp vào biểu tượng bánh răng, chọn **Admin Login** và đăng nhập bằng tài khoản Google của bạn.
3. **Cấp quyền Admin**: 
   - Sau khi đăng nhập, nếu bạn chưa có quyền, bạn sẽ thấy tên của mình nhưng không có chữ "ADMIN".
   - Bạn cần truy cập vào [Firebase Console](https://console.firebase.google.com/), chọn dự án của bạn (ID dự án: `gen-lang-client-0809310204`).
   - Vào phần **Firestore Database**.
   - Tạo một bộ sưu tập (collection) tên là `admins`.
   - Tạo một tài liệu (document) với **ID là UID của bạn** (Bạn có thể thấy UID của mình trong phần Authentication của Firebase sau khi đăng nhập lần đầu).
   - Trong tài liệu này, bạn không cần thêm trường nào (hoặc thêm `email: "email-cua-ban@gmail.com"` cho dễ nhớ).
4. **Xoá tin nhắn**: Khi đã là Admin, bạn sẽ thấy biểu tượng thùng rác màu đỏ cạnh các lời nhắn trong thanh cuộn. Nhấp vào đó để xoá.
