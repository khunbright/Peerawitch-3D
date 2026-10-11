import { en, type Content } from "./en";

/**
 * Thai copy. Written without a first-person pronoun, matching the register of
 * a Thai CV rather than transliterating the English voice.
 *
 * Technology names, company names, project names and job titles stay in
 * English on purpose: that is how Thai engineering CVs read, and translating
 * them costs recognisability for nothing.
 *
 * NOTE: `experience` still falls back to the English bullets while the Thai
 * wording is being reviewed — see the Thai versions of the sections above for
 * the intended register.
 */
export const th: Content = {
  profile: {
    name: "พีรวิชญ์ เลิศสุขสมบัติ",
    role: "Software Engineer",
    tagline: "ระบบที่ไม่หวือหวา แต่บริษัทขาดไม่ได้",
    location: "กรุงเทพมหานคร",
    profileText:
      "Software Engineer ประสบการณ์ 3 ปี ส่วนใหญ่อยู่กับระบบหลังบ้านและระบบภายในองค์กร ทั้งระบบคลังสินค้า ระบบประเมินราคาทรัพย์สิน ระบบอนุมัติการจอง และระบบจัดการร้านค้า เริ่มต้นจากสาย Front-End ปัจจุบันทำงานแบบ Full-Stack ดูแลทั้ง API Routes ของ Next.js, Prisma, Drizzle และ MySQL ควบคู่ไปกับงาน UI ถนัดการแปลงกระบวนการทำงานภายในที่ซับซ้อนให้กลายเป็นหน้าจอที่ผู้ใช้ทำงานได้จริง ให้ความสำคัญกับโค้ดที่สะอาดและนำกลับมาใช้ซ้ำได้ และทำงานร่วมกับทีม Product, Design, BA และ QA ในรูปแบบ Agile ได้ดี",
    stats: [
      { value: "3+", label: "ปีประสบการณ์" },
      { value: "5", label: "องค์กรที่เคยร่วมงาน" },
      { value: "Full-stack", label: "Next.js · Prisma · MySQL" },
    ],
  },

  ui: {
    langShort: "ไทย",
    nav: {
      about: "เกี่ยวกับ",
      skills: "ทักษะ",
      work: "ผลงาน",
      education: "การศึกษา",
      contact: "ติดต่อ",
    },
    hero: {
      viewWork: "ดูผลงาน",
      getInTouch: "ติดต่อ",
      downloadCv: "ดาวน์โหลด CV",
      scroll: "เลื่อนลง",
    },
    sections: {
      about: "เกี่ยวกับ",
      skills: "ทักษะทางเทคนิค",
      work: "ประสบการณ์ทำงาน",
      education: "การศึกษาและใบรับรอง",
      contact: "ติดต่อ",
    },
    contact: {
      intro: "เปิดรับโอกาสงานสาย Full-Stack และ Front-End ติดต่อทางอีเมลจะได้รับการตอบกลับเร็วที่สุด",
      email: "อีเมล",
      phone: "โทรศัพท์",
      github: "GitHub",
      location: "ที่อยู่",
    },
  },

  // Skill group names translate; the technologies inside them stay as they are.
  skills: [
    { group: "ภาษา", items: en.skills[0].items },
    { group: "เฟรมเวิร์ก", items: en.skills[1].items },
    { group: "สไตล์และ UI", items: en.skills[2].items },
    { group: "Back-end และฐานข้อมูล", items: en.skills[3].items },
    { group: "การทดสอบ", items: en.skills[4].items },
    { group: "เครื่องมือและ DevOps", items: en.skills[5].items },
    {
      group: "แนวทางการทำงาน",
      items: [
        "Responsive design",
        "หลักการ UI/UX",
        "Agile",
        "การเชื่อมต่อ API",
        "Authentication และ RBAC",
      ],
    },
  ],

  experience: en.experience,

  education: [
    {
      school: "มหาวิทยาลัยศิลปากร นครปฐม",
      detail: "วิศวกรรมศาสตรบัณฑิต (วิศวกรรมอิเล็กทรอนิกส์และระบบคอมพิวเตอร์)",
      period: "2559 – 2562",
    },
    {
      school: "โรงเรียนตะพานหิน จังหวัดพิจิตร",
      detail: "แผนการเรียนวิทยาศาสตร์ – คณิตศาสตร์",
      period: "2556 – 2558",
    },
  ],

  certificates: en.certificates,
};
