export type TMenus = {
  path: string;
  title: string;
  childs?: {
    path: string;
    title: string;
  }[];
}[];
export const menus = [
  {
    path: "/", // the url
    title: "TRANG CHỦ"
  },
  {
    path: "/gioi-thieu", // the url
    title: "GIỚI THIỆU" // view rendered
  },
  {
    path: "#", // the url
    title: "CHƯƠNG TRÌNH ĐÀO TẠO",
    childs: [
      {
        path: "/ngon-ngu-anh",
        title: "Ngôn ngữ Anh"
      },
      {
        path: "/ky-thuat-xay-dung",
        title: "Kỹ thuật xây dựng"
      },
      {
        path: "/quan-ly-cong-nghiep",
        title: "Quản lý công nghiệp"
      },

      {
        path: "/kinh-te-cong-nghiep",
        title: "Kinh tế công nghiệp"
      }
    ]
  },

  {
    path: "/lich-khai-giang", // the url
    title: "LỊCH KHAI GIẢNG" // view rendered
  },

  {
    path: "/tin-tuc", // the url
    title: "TIN TỨC & SỰ KIỆN" // view rendered
  },
  {
    path: "/dang-ky", // the url
    title: "ĐĂNG KÝ"
  }
];
