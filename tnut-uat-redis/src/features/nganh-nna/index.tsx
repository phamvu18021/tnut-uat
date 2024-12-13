import { LayoutNganh } from "@/layouts/layoutNganh";
import { MajorsDetails } from "@/components/MajorsDetails";
import { useState, useEffect } from "react";
export const Nna = () => {
  const [page_content, setPageContent] = useState<any>(null);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=ngon-ngu-anh`, {
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
      title={page_content?.acf?.breadcrumbs?.title || "NGÔN NGỮ ANH."}
      image={page_content?.acf?.breadcrumbs?.image || "/4.jpg"}
      path="/ngon-ngu-anh"
      major_benefit={page_content?.acf?.major_benefit || ""}
    >
      <MajorsDetails
        major={
          page_content?.acf?.majors_details?.majors_name || "NGÔN NGỮ ANH."
        }
        image={page_content?.acf?.majors_details?.image || "/tbts-tnut-1.png"}
        image_2={page_content?.acf?.majors_details?.image_2 || ""}
        tabf={
          page_content?.acf?.majors_details?.over?.overview?.title ||
          ".Tổng quan chương trình."
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
            ".Ngành ngôn ngữ Anh (tiếng Anh là English Studies) là một ngành học chuyên nghiên cứu, sử dụng tiếng Anh để sinh viên có thể làm chủ và giao tiếp tiếng Anh thành thạo. Ngôn ngữ Anh mang đến nhiều cơ hội cho các bạn trẻ mong muốn làm việc tại môi trường kinh tế hội nhập với các doanh nghiệp nước ngoài.",
          page_content?.acf?.majors_details?.over?.overview?.text_2 ||
            ".Chương trình đào tạo ngành Ngôn ngữ Anh cung cấp cho sinh viên các kiến thức bổ trợ thêm về nền kinh tế, tài chính ngân hàng, xuất nhập khẩu, quan hệ quốc tế; những kiến thức chung và chuyên sâu về ngôn ngữ, văn hóa và văn học, đất nước – con người không chỉ của quốc gia sản sinh ra tiếng Anh mà của cả các quốc gia nói tiếng Anh.",
          page_content?.acf?.majors_details?.over?.overview?.text_3 ||
            ".Sinh viên học ngành này còn được trang bị kiến thức về kỹ năng giao tiếp, khả năng thuyết trình, phân tích và giải quyết nhanh vấn đề, giúp làm việc hiệu quả trong lĩnh vực chuyên môn sử dụng tiếng Anh. Ngành ngôn ngữ Anh đào tạo các phương pháp học tập bằng tiếng Anh bao gồm 04 kỹ năng: nghe - nói - đọc - viết một cách thành thạo và nghiên cứu về con người, văn hóa, văn học của các quốc gia sử dụng tiếng Anh trên thế giới.",
          page_content?.acf?.majors_details?.over?.overview?.text_4 ||
            ".Khi học Ngành ngôn ngữ Anh hệ Đại học từ xa của TNUT E-learning bạn sẽ được tiếp cận với hệ thống E-learning hiện tại, học tập cùng công nghệ 4.0. Học viện chủ động tự học mọi lúc mọi nơi, không cần đến trường. Sau khi hoàn thành các môn, nhà trường tổ chức các kỳ thi nhằm đảm bảo chuẩn đầu ra cho học viên.",
          page_content?.acf?.majors_details?.over?.overview?.text_5 ||
            ".Bài giảng được thiết kế đầy đủ các phần text, slide, image, voice,... Và có diễn đàn ngay trong hê thống kéo gần khoảng cách giữa học viên và giảng viên khi tham gia học tập!"
        ]}
        tabsp={[
          page_content?.acf?.majors_details?.over?.chance?.text_1 ||
            "Sau khi tốt nghiệp ngành Ngôn ngữ Anh, bạn còn có cơ hội làm việc trong nhiều lĩnh vực khác nhau như sư phạm ngoại ngữ, biên - phiên dịch, marketing, kinh tế đối ngoại, ngân hàng, du lịch… Sinh viên tốt nghiệp ngành Ngôn ngữ Anh với kỹ năng ngoại ngữ tốt, bạn dễ dàng xin được những công việc sau đây:",
          page_content?.acf?.majors_details?.over?.chance?.text_2 ||
            ". .<b>Biên dịch viên</b> tại các công ty liên doanh, doanh nghiệp nước ngoài, cơ quan ngoại giao, tổ chức kinh tế, cơ quan truyền thông...",
          page_content?.acf?.majors_details?.over?.chance?.text_3 ||
            ". .<b>Chuyên viên truyền thông</b> trong các công ty nước ngoài như: Tổ chức sự kiện, nhân viên PR, trợ lý hay thư ký cho lãnh đạo người nước ngoài.",
          page_content?.acf?.majors_details?.over?.chance?.text_4 ||
            ". .<b>Hướng dẫn viên</b> tại các công ty về du lịch hay nhà hàng, khách sạn lớn 3 sao, 5 sao chuyên tiếp xúc và làm việc với người nước ngoài.",
          page_content?.acf?.majors_details?.over?.chance?.text_5 ||
            ". .<b>Giáo viên</b> giảng dạy tiếng Anh tại các trường đại học, cao đẳng, trung cấp nghề chuyên nghiệp, hay cấp phổ thông trung học, trung tâm ngoại ngữ..."
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
            ">>. Người học có thể học vượt để rút ngắn thời gian học tập theo quy chế đào tạo theo học chế tín chỉ. Liên hệ với chúng tôi qua hotline 081.567.4848 để biết thời gian đào tạo phù hợp với văn bằng đầu vào của bạn",
          page_content?.acf?.majors_details?.over?.info?.text_6 ||
            ".Văn bằng tốt nghiệp : CỬ NHÂN",
          page_content?.acf?.majors_details?.over?.info?.text_7 ||
            ". .Bằng do Đại học kỹ thuật công nghiệp – ĐH Thái Nguyên cấp",
          page_content?.acf?.majors_details?.over?.info?.text_8 ||
            ". .Không ghi hình thức Đào tạo trên văn bằng tốt nghiệp",
          page_content?.acf?.majors_details?.over?.info?.text_9 ||
            ". .Có giá trị tương đương bằng CHÍNH QUY, được Bộ GD&ĐT công nhận và có thể học tiếp lên Thạc sĩ, Tiến sĩ, thi công chức, xét bậc lương theo quy định nhà nước"
        ]}
      />
    </LayoutNganh>
  );
};
