import { LayoutNganh } from "@/layouts/layoutNganh";
import { MajorsDetails } from "@/components/MajorsDetails";
import { useState, useEffect } from "react";
export const Ktxd = () => {
  const [page_content, setPageContent] = useState<any>(null);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=ktxd`, {
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
      title={page_content?.acf?.breadcrumbs?.title || ".KỸ THUẬT XÂY DỰNG"}
      image={page_content?.acf?.breadcrumbs?.image || "/2.jpg"}
      path="/ky-thuat-xay-dung"
      major_benefit={page_content?.acf?.major_benefit || ""}
    >
      <MajorsDetails
        major={
          page_content?.acf?.majors_details?.majors_name || "zKỸ THUẬT XÂY DỰNG"
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
            "<b> .Ngành Kỹ thuật xây dựng </b> là ngành học đào tạo ra các kỹ sư xây dựng có khả năng tư vấn, thực thi, giám sát, thiết kế và nghiệm thu công trình. Trong đó bao gồm các công trình của nhà nước như đường cầu, các cơ sở vật chất công cộng. Ngoài ra kỹ sư xây dựng còn làm các công trình cho doanh nghiệp cá nhân.",
          page_content?.acf?.majors_details?.over?.overview?.text_2 ||
            ".Khi học ngành <b> Kỹ thuật xây dựng </b> bạn sẽ được học các kiến thức cơ bản về khoa học tự nhiên và khoa học xã hội. Một số môn như: chủ nghĩa Mác Lênin, tư tưởng Hồ Chí Minh, Toán học đại cương… Tiếp đến là các môn chuyên ngành về kỹ thuật xây dựng. Bạn sẽ được học các môn về thiết kế, tính toán, phân tích, tổ chức thi công và tư vấn giám sát công trình. Sinh viên được thực tập tại các công ty xây dựng, có kiến thức thực tế."
        ]}
        tabsp={[
          page_content?.acf?.majors_details?.over?.chance?.text_1 ||
            ".Sinh viên tốt nghiệp ngành Kỹ thuật xây dựng có thể làm việc tại các công ty tư vấn về xây dựng, thi công xây dựng dự án hoặc tự lập các công ty riêng về thiết kế, giám sát, lập dự án hoặc làm việc tại các ban quản lý dự án xây dựng. Cụ thể:",
          page_content?.acf?.majors_details?.over?.chance?.text_2 ||
            ". .Kỹ sư thiết kế, thi công",
          page_content?.acf?.majors_details?.over?.chance?.text_3 ||
            ". .Kỹ sư giám sát",
          page_content?.acf?.majors_details?.over?.chance?.text_4 ||
            ". .Kỹ sư quản lý chất lượng",
          page_content?.acf?.majors_details?.over?.chance?.text_5 ||
            ". .Chuyên viên tư vấn",
          page_content?.acf?.majors_details?.over?.chance?.text_6 ||
            ". .Giảng dạy"
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
            "<b>.Văn bằng tốt nghiệp</b>",
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
