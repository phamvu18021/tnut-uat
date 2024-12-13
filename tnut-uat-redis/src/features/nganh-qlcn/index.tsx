import { LayoutNganh } from "@/layouts/layoutNganh";
import { MajorsDetails } from "@/components/MajorsDetails";
import { useState, useEffect } from "react";
export const Qlcn = () => {
  const [page_content, setPageContent] = useState<any>(null);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=qlcn`, {
          next: { revalidate: 3 }
        });
        const data = await res.json();
        setPageContent(data?.posts[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getPageContent();
  }, []);
  return (
    <LayoutNganh
      title={page_content?.acf?.breadcrumbs?.title || ".QUẢN LÝ CÔNG NGHIỆP"}
      image={page_content?.acf?.breadcrumbs?.image || "/1.jpg"}
      major_benefit={page_content?.acf?.major_benefit || ""}
      path="/quan-ly-cong-nghiep"
    >
      <MajorsDetails
        major={
          page_content?.acf?.majors_details?.majors_name ||
          ".zQUẢN LÝ CÔNG NGHIỆP"
        }
        image={page_content?.acf?.majors_details?.image || "/tbts-tnut-1.png"}
        tabf={
          page_content?.acf?.majors_details?.over?.overview?.title ||
          ".Tổng quan chương trình"
        }
        tabs={
          page_content?.acf?.majors_details?.over?.chance?.title ||
          ".Cơ hội nghề nghiệp"
        }
        tabt={
          page_content?.acf?.majors_details?.over?.info?.title ||
          ".Thông tin tuyển sinh"
        }
        tabfp={[
          page_content?.acf?.majors_details?.over?.overview?.text_1 ||
            "<p><b> .Quản Lý Công Nghiệp </b> (tên tiếng Anh là Industrial Management – IM) là ngành giao thoa giữa kinh tế và kỹ thuật. Đóng vai trò quan trọng cho thành công của các công ty, doanh nghiệp kinh doanh, thương mại, dịch vụ.</p>",
          page_content?.acf?.majors_details?.over?.overview?.text_2 ||
            "<p>.Định nghĩa một cách ngắn gọn thì ngành quản lý công nghiệp là ngành đào tạo, cung cấp các kiến thức lẫn kỹ năng chuyên môn cho sinh viên về quản trị nguồn nhân lực, dự án, sản xuất, quản lý vật tư – tồn kho, đánh giá công nghệ. Với kiến thức bao quát về hoạt động kinh doanh và am hiểu thị trường, cử nhân quản lý đồng thời cũng là người chịu trách nhiệm lập dự án kinh doanh, kế hoạch tiếp thị, nghiên cứu thị trường và đầu tư tài chính…</p>"
        ]}
        tabsp={[
          page_content?.acf?.majors_details?.over?.info?.text_1 ||
            page_content?.acf?.majors_details?.over?.chance?.text_1 ||
            "z.Ngành <b>Quản Lý Công Nghiệp</b> được đánh giá là một ngành học có nhiều triển vọng nghề nghiệp trong tương lai với cơ hội việc làm rộng mở và mức lương hấp dẫn.",
          page_content?.acf?.majors_details?.over?.chance?.text_2 ||
            ".Cử nhân ngành <b>Quản Lý Công Nghiệp</b> sau khi ra trường sẽ có cơ hội làm việc tại các tổ chức sản xuất, dịch vụ, thương mại với các quy mô khác nhau, đặt biệt có nhiều cơ hội làm việc tại các công ty đa quốc gia với các vị trí làm việc sau khi tốt nghiệp như: ",
          page_content?.acf?.majors_details?.over?.chance?.text_3 ||
            ". .Quản lý nhà máy",
          page_content?.acf?.majors_details?.over?.chance?.text_4 ||
            ". .Quản lý mua hàng",
          page_content?.acf?.majors_details?.over?.chance?.text_5 ||
            ". .Quản lý sản xuất",
          page_content?.acf?.majors_details?.over?.chance?.text_6 ||
            ". .Quản lý chất lượng sản phẩm",
          page_content?.acf?.majors_details?.over?.chance?.text_7 ||
            ". .Cải tiến hệ thống sản xuất",
          page_content?.acf?.majors_details?.over?.chance?.text_8 ||
            ".. Quản trị tài chính",
          page_content?.acf?.majors_details?.over?.chance?.text_9 ||
            ". .Quản lý chuỗi cung ứng",
          page_content?.acf?.majors_details?.over?.chance?.text_10 ||
            ". .Quản trị nhân sự…"
        ]}
        tabtp={[
          page_content?.acf?.majors_details?.over?.info?.text_1 ||
            ". .Đối tượng tuyển sinh: Tốt nghiệp THPT trở lên ",
          page_content?.acf?.majors_details?.over?.info?.text_2 ||
            ". .Hình thức tuyển sinh: Xét tuyển theo hồ sơ đăng ký. KHÔNG THI TUYỂN.",
          page_content?.acf?.majors_details?.over?.info?.text_3 ||
            ". .Thời gian tuyển sinh: Liên tục trong năm.",
          page_content?.acf?.majors_details?.over?.info?.text_4 ||
            ". .Thời gian đào tạo: từ 2 - 4,5 năm tùy đối tượng đầu vào",
          page_content?.acf?.majors_details?.over?.info?.text_5 ||
            ">> .Người học có thể học vượt để rút ngắn thời gian học tập theo quy chế đào tạo theo học chế tín chỉ. Liên hệ với chúng tôi qua hotline 081.567.4848 để biết thời gian đào tạo phù hợp với văn bằng đầu vào của bạn",
          page_content?.acf?.majors_details?.over?.info?.text_6 ||
            "<b>.Văn bằng tốt nghiệp</b>",
          page_content?.acf?.majors_details?.over?.info?.text_7 ||
            ". .Bằng do Đại học kỹ thuật công nghiệp – ĐH Thái Nguyên cấp",
          page_content?.acf?.majors_details?.over?.info?.text_8 ||
            ". .Không ghi hình thức Đào tạo trên văn bằng tốt nghiệp",
          page_content?.acf?.majors_details?.over?.info?.text_9 ||
            ". .Có giá trị tương đương bằng CHÍNH QUY, được Bộ GD&ĐT công nhận và có thể học tiếp lên Thạc sĩ, Tiến sĩ, thi công chức, xét bậc lương theo quy định nhà nước"
        ]}
        image_2={page_content?.acf?.majors_details?.image_2 || ""}
      />
    </LayoutNganh>
  );
};
