import { LayoutNganh } from "@/layouts/layoutNganh";
import { MajorsDetails } from "@/components/MajorsDetails";
import { useState, useEffect } from "react";
export const Ktcn = () => {
  const [page_content, setPageContent] = useState<any>(null);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=ktcn`, {
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
      title={page_content?.acf?.breadcrumbs?.title || "zKINH TẾ CÔNG NGHIỆP"}
      image={page_content?.acf?.breadcrumbs?.image || "/3.jpg"}
      path="/kinh-te-cong-nghiep"
      major_benefit={page_content?.acf?.major_benefit || ""}
    >
      <MajorsDetails
        major={
          page_content?.acf?.majors_details?.majors_name ||
          "zKINH TẾ CÔNG NGHIỆP"
        }
        image={page_content?.acf?.majors_details?.image || "/tbts-tnut-1.png"}
        image_2={page_content?.acf?.majors_details?.image_2 || ""}
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
            "<b>.Ngành Kinh tế công nghiệp</b> có tên tiếng Anh là Industrial economics. Kinh tế công nghiệp là một chuyên ngành Kinh tế học thuộc lĩnh vực kinh tế học ứng dụng, chuyên nghiên cứu về cơ cấu, tổ chức ngành, năng lực cạnh tranh giữa các ngành và tiểu ngành kinh tế.",
          page_content?.acf?.majors_details?.over?.overview?.text_2 ||
            ".Mục tiêu đào tạo của ngành <b>Kinh tế công nghiệp</b> chính là đào tạo ra đội ngũ nguồn nhân lực chất lượng cao về kinh tế và quản lý trong các lĩnh vực công nghiệp, năng lượng. Đào tạo những kiến thức về tổ chức hoạt động và vận hành của thị trường, những vấn đề kinh tế trong các ngành công nghiệp và năng lượng cũng như những kiến thức liên quan đến quản lý các nguồn tài nguyên."
        ]}
        tabsp={[
          page_content?.acf?.majors_details?.over?.chance?.text_1 ||
            ".Sinh viên tốt nghiệp ngành Kinh tế công nghiệp sẽ có đầy đủ những kiến thức khoa học cơ bản cùng với những phẩm chất nghề nghiệp cần thiết để có thể tham gia vào quá trình quản lý một cách hiệu quả.",
          page_content?.acf?.majors_details?.over?.chance?.text_2 ||
            ".Cụ thể là sau khi nhận được tấm bằng cử nhân ngành Kinh tế công nghiệp, các bạn sẽ có đủ năng lực để làm việc tại:",
          page_content?.acf?.majors_details?.over?.chance?.text_3 ||
            ". .Nghiên cứu viên, tư vấn viên trong lĩnh vực năng lượng và môi trường",
          page_content?.acf?.majors_details?.over?.chance?.text_4 ||
            ". .Kỹ sư vận hành và quản lý năng lượng trong doanh nghiệp sản xuất",
          page_content?.acf?.majors_details?.over?.chance?.text_5 ||
            ". .Tham gia giảng dạy tại các trường đại học, cao đẳng...",
          page_content?.acf?.majors_details?.over?.chance?.text_6 ||
            ". .Kiểm toán viên tại các Công ty kiểm toán",
          page_content?.acf?.majors_details?.over?.chance?.text_7 ||
            ". .Trợ lý giám đốc, Chuyên gia tư vấn về Kinh tế..."
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
            "<b>Văn bằng tốt nghiệp</b>",
          page_content?.acf?.majors_details?.over?.info?.text_7 ||
            ". Bằng do Đại học kỹ thuật công nghiệp – ĐH Thái Nguyên cấp",
          page_content?.acf?.majors_details?.over?.info?.text_8 ||
            ". Không ghi hình thức Đào tạo trên văn bằng tốt nghiệp",
          page_content?.acf?.majors_details?.over?.info?.text_9 ||
            ". Có giá trị tương đương bằng CHÍNH QUY, được Bộ GD&ĐT công nhận và có thể học tiếp lên Thạc sĩ, Tiến sĩ, thi công chức, xét bậc lương theo quy định nhà nước"
        ]}
      />
    </LayoutNganh>
  );
};
