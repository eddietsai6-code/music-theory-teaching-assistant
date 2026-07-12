import { G1_OCR_SELECTION_SAMPLES } from "./g1-ocr-data.mjs";
import { G1_HOTSPOTS_FULL } from "./g1-hotspots-full.mjs";

const THEORY_LEVELS = [
  {
    id: "starter",
    label: "起步",
    short: "S0",
    order: 0,
    color: "#e6422e",
    core: "认识音名、唱名、谱号、基本节拍和课堂记录方式。",
    boundary: "能说清音高与节拍的基础概念，并完成一页空白学习卡。",
  },
  {
    id: "foundation",
    label: "初阶",
    short: "L1",
    order: 1,
    color: "#0ea5b7",
    core: "调号、音程、常用节奏型和简单旋律读谱。",
    boundary: "能按模块完成概念复述、节奏跟读和基础听辨。",
  },
  {
    id: "practice",
    label: "练习",
    short: "L2",
    order: 2,
    color: "#f6b331",
    core: "把乐理概念变成课堂练习、听辨任务和谱面标注。",
    boundary: "能在练习卡里留下可复盘的错因、节拍和读谱证据。",
  },
  {
    id: "integration",
    label: "综合",
    short: "L3",
    order: 3,
    color: "#0f8c5a",
    core: "连接和声、旋律、节奏、视唱和谱面阅读。",
    boundary: "能用一个主题串联概念讲解、听唱和小测。",
  },
  {
    id: "assessment",
    label: "测评",
    short: "L4",
    order: 4,
    color: "#3454d1",
    core: "阶段测评、错题复盘、课后作业和学习报告。",
    boundary: "能按章节生成待填充题卡和复盘路径。",
  },
];

const MODULE_SHELLS = [
  {
    id: "theory",
    title: "乐理基础",
    label: "core",
    status: "待填充",
    level: "starter",
    accent: "#e6422e",
    summary: "音名、谱号、调号、音程、和弦与常用记号的主线容器。",
    keywords: ["音名", "谱号", "调号", "音程", "和弦", "记号", "基础"],
    teaching: {
      goal: "建立可以继续挂载讲义、板书和练习的乐理概念主线。",
      focus: "先放空白概念卡、课堂讲解位和复盘位，等待课程数据接入。",
      practiceOrder: ["确认概念目录", "补充课堂讲义", "关联基础练习", "记录易错点"],
      commonIssues: ["概念来源未确认", "章节顺序未确定", "例题尚未接入"],
      passStandard: "真实资料接入后，每个概念都能对应讲解、练习和复盘证据。",
    },
  },
  {
    id: "rhythm",
    title: "节奏训练",
    label: "pulse",
    status: "待填充",
    level: "foundation",
    accent: "#f6b331",
    summary: "拍号、节奏型、速度、分拍、听写与课堂打卡的练习区。",
    keywords: ["拍号", "节奏", "速度", "分拍", "听写", "打卡"],
    teaching: {
      goal: "为节拍、节奏型和听写练习预留可操作的课堂工作台。",
      focus: "用空白节拍格、练习步骤和反馈位先固定教学流程。",
      practiceOrder: ["拍号识别", "节奏口读", "分拍标注", "听写复盘"],
      commonIssues: ["节拍感来源未接入", "音频材料待收录", "速度分级待确定"],
      passStandard: "学生能按节拍格完成跟读、标注和错因记录。",
    },
  },
  {
    id: "ear",
    title: "视唱练耳",
    label: "ear",
    status: "待填充",
    level: "practice",
    accent: "#0ea5b7",
    summary: "模唱、旋律听辨、音程听辨、调性感知与视唱任务池。",
    keywords: ["视唱", "练耳", "听辨", "模唱", "旋律", "调性"],
    teaching: {
      goal: "搭建视唱练耳的任务池，等待音频和课堂样例接入。",
      focus: "保留听辨标签、模唱步骤、音频位和反馈位。",
      practiceOrder: ["听辨目标", "模唱片段", "记录偏差", "复唱复盘"],
      commonIssues: ["听辨音频未接入", "学生音域未分层", "调性样例待整理"],
      passStandard: "每个听唱任务都能留下目标、音频、反馈和复盘记录。",
    },
  },
  {
    id: "notation",
    title: "谱面阅读",
    label: "score",
    status: "待填充",
    level: "integration",
    accent: "#0f8c5a",
    summary: "五线谱、简谱、节奏谱、课堂板书和讲义截图的整理区。",
    keywords: ["五线谱", "简谱", "谱面", "板书", "讲义", "阅读"],
    teaching: {
      goal: "为不同谱面材料建立统一的阅读与标注入口。",
      focus: "先放谱面占位、标注规则和课堂板书位。",
      practiceOrder: ["识别谱号", "定位拍号", "标注旋律", "复盘阅读路径"],
      commonIssues: ["谱面素材未接入", "标注规则待统一", "图片尺寸待确认"],
      passStandard: "真实谱面接入后，能按统一样式展示、标注和复盘。",
    },
  },
  {
    id: "assessment",
    title: "题库测评",
    label: "quiz",
    status: "待填充",
    level: "assessment",
    accent: "#d9488b",
    summary: "章节小测、错题回看、阶段测评和课后作业的结构位。",
    keywords: ["题库", "测评", "错题", "作业", "考试", "复习"],
    teaching: {
      goal: "预留题库、错题和阶段报告入口，等待题目 schema 设计。",
      focus: "用空白题卡呈现题型、错因、复盘和完成标准。",
      practiceOrder: ["选择章节", "生成题卡", "标记错因", "输出复盘"],
      commonIssues: ["题型未确定", "评分规则未接入", "错题字段待设计"],
      passStandard: "题库接入后，每道题都能关联章节、错因和复盘记录。",
    },
  },
];

const RESOURCE_SHELLS = [
  {
    id: "concept-map",
    title: "概念讲义卡",
    moduleId: "theory",
    level: "starter",
    type: "讲义",
    status: "待填充",
    summary: "音名、谱号、调号、音程与和弦的概念地图占位。",
    tags: ["概念", "讲义", "音程", "和弦"],
  },
  {
    id: "rhythm-grid",
    title: "节奏格练习",
    moduleId: "rhythm",
    level: "foundation",
    type: "练习",
    status: "待填充",
    summary: "拍号、节奏型、分拍和课堂打卡的节奏工作纸。",
    tags: ["节奏", "拍号", "分拍", "打卡"],
  },
  {
    id: "ear-lab",
    title: "听唱任务池",
    moduleId: "ear",
    level: "practice",
    type: "音频位",
    status: "待填充",
    summary: "视唱、模唱、旋律听辨和音程听辨的音频占位。",
    tags: ["视唱", "听辨", "模唱", "音程"],
  },
  {
    id: "score-desk",
    title: "谱面标注台",
    moduleId: "notation",
    level: "integration",
    type: "谱面",
    status: "待填充",
    summary: "五线谱、简谱、节奏谱和课堂板书的图片区域。",
    tags: ["谱面", "简谱", "五线谱", "板书"],
  },
  {
    id: "assessment-lab",
    title: "错题复盘抽屉",
    moduleId: "assessment",
    level: "assessment",
    type: "测评",
    status: "待填充",
    summary: "章节小测、错题、作业和阶段测评的题卡占位。",
    tags: ["题库", "测评", "错题", "作业"],
  },
];

const DETAIL_TABS = ["课程", "练习", "资源", "测评"];
const COURSE_TABS = ["Lesson", "Audio", "Score", "Metro"];

const COVER_GALLERY_ITEMS = [
  {
    gradeId: "grade-1",
    image: "./assets/covers/Cover1.webp",
    text: "Grade 1",
    title: "Grade 1",
    description: "基础乐理、谱号、节拍与简单音程的入门工作簿。",
    tags: ["notation", "pulse"],
    accent: "#24a148",
  },
  {
    gradeId: "grade-2",
    image: "./assets/covers/Cover2.webp",
    text: "Grade 2",
    title: "Grade 2",
    description: "调号、音程关系、常用节奏型与课堂练习路径。",
    tags: ["interval", "rhythm"],
    accent: "#d9488b",
  },
  {
    gradeId: "grade-3",
    image: "./assets/covers/Cover3.webp",
    text: "Grade 3",
    title: "Grade 3",
    description: "旋律、和声、听辨与谱面阅读的综合连接。",
    tags: ["melody", "harmony"],
    accent: "#1f79d1",
  },
  {
    gradeId: "grade-4",
    image: "./assets/covers/Cover4.webp",
    text: "Grade 4",
    title: "Grade 4",
    description: "更复杂的节奏组织、和弦色彩与应用分析。",
    tags: ["chords", "analysis"],
    accent: "#f97316",
  },
  {
    gradeId: "grade-5",
    image: "./assets/covers/Cover5.webp",
    text: "Grade 5",
    title: "Grade 5",
    description: "阶段测评、错题复盘与完整乐理知识网络。",
    tags: ["review", "exam"],
    accent: "#d32828",
  },
];

const GRADE_COURSE_ITEMS = {
  "grade-1": [
    {
      id: "course-01",
      title: "节奏（第一部分）",
      category: "notation / pulse",
      role: "notation / pulse",
      location: "音符的时值，小节与小节线，拍号",
    },
    {
      id: "course-02",
      title: "音高（第一部分）",
      category: "pitch",
      role: "pitch",
      location: "高音谱号和音谱表上的音符",
    },
    {
      id: "course-03",
      title: "节奏（第二部分）",
      category: "rhythm",
      role: "rhythm",
      location: "十六分音符，音符的分组，休止符",
    },
    {
      id: "course-04",
      title: "音高（第二部分）",
      category: "pitch",
      role: "pitch",
      location: "临时变化记号，半音和全音",
    },
    {
      id: "course-05",
      title: "节奏（第三部分）",
      category: "rhythm",
      role: "rhythm",
      location: "延音线，附点音符，附点音符的分组",
    },
    {
      id: "course-06",
      title: "音阶",
      category: "scales",
      role: "scales",
      location: "C 大调音阶，音阶中的级数与半音",
    },
    {
      id: "course-07",
      title: "调性与调号",
      category: "keys",
      role: "keys",
      location: "C、G、D 和 F 大调",
    },
    {
      id: "course-08",
      title: "音程",
      category: "intervals",
      role: "intervals",
      location: "C、G、D 和 F 大调中的音程",
    },
    {
      id: "course-09",
      title: "主三和弦",
      category: "triads",
      role: "triads",
      location: "C、G、D 和 F 大调的主三和弦",
    },
    {
      id: "course-10",
      title: "术语和标记",
      category: "terms",
      role: "terms",
      location: "第 1 级需要掌握的音乐术语和标记",
    },
    {
      id: "course-11",
      title: "综合音乐练习",
      category: "music in context",
      role: "music in context",
      location: "综合问答与音乐语境练习",
    },
  ],
  "grade-2": [
    {
      id: "course-01",
      title: "音高",
      category: "pitch",
      role: "pitch",
      location: "加线，以及高音谱号和低音谱号之间的音符改写",
    },
    {
      id: "course-02",
      title: "节奏（第一部分）",
      category: "rhythm",
      role: "rhythm",
      location: "以二分音符和八分音符为拍的拍号，以及不同拍号中的节奏改写",
    },
    {
      id: "course-03",
      title: "节奏（第二部分）",
      category: "rhythm",
      role: "rhythm",
      location: "三连音与附点休止符",
    },
    {
      id: "course-04",
      title: "节奏（第三部分）",
      category: "rhythm",
      role: "rhythm",
      location: "音符和休止符的分组，以及跨多个拍子的音符分组",
    },
    {
      id: "course-05",
      title: "调性与音阶（第一部分）",
      category: "scales",
      role: "scales",
      location: "A、降 B 和降 E 大调的调性与音阶",
    },
    {
      id: "course-06",
      title: "调性与音阶（第二部分）",
      category: "scales",
      role: "scales",
      location: "关系大小调、和声小调，以及 A、E、D 和声小调",
    },
    {
      id: "course-07",
      title: "音程",
      category: "intervals",
      role: "intervals",
      location: "A、降 B、降 E 大调，以及 A、E、D 小调中的音程",
    },
    {
      id: "course-08",
      title: "主三和弦",
      category: "triads",
      role: "triads",
      location: "A、E、D 小调与 A、降 B、降 E 大调的主三和弦",
    },
    {
      id: "course-09",
      title: "术语和标记",
      category: "terms",
      role: "terms",
      location: "第 2 级需要掌握的音乐术语和标记",
    },
    {
      id: "course-10",
      title: "综合音乐练习",
      category: "music in context",
      role: "music in context",
      location: "第 2 级综合问答与音乐语境练习",
    },
  ],
  "grade-3": [
    {
      id: "course-01",
      title: "节奏（第一部分）",
      category: "rhythm",
      role: "rhythm",
      location: "三十二分音符、弱起、二连音/三连音/四连音，以及音符与休止符分组",
    },
    {
      id: "course-02",
      title: "节奏（第二部分）",
      category: "rhythm",
      role: "rhythm",
      location: "单拍子与复拍子、新拍号，以及复拍子中的音符和休止符分组",
    },
    {
      id: "course-03",
      title: "音高",
      category: "pitch",
      role: "pitch",
      location: "三条加线上的音符，以及八度移调",
    },
    {
      id: "course-04",
      title: "调性与音阶（第一部分）",
      category: "scales",
      role: "scales",
      location: "E 大调与降 A 大调",
    },
    {
      id: "course-05",
      title: "调性与音阶（第二部分）",
      category: "scales",
      role: "scales",
      location: "旋律小调，以及 B、G、升 F、C、升 C、F 小调",
    },
    {
      id: "course-06",
      title: "音程",
      category: "intervals",
      role: "intervals",
      location: "纯音程、大音程与小音程",
    },
    {
      id: "course-07",
      title: "主三和弦",
      category: "triads",
      role: "triads",
      location: "最多四个升降号的大调与小调主三和弦",
    },
    {
      id: "course-08",
      title: "术语和标记",
      category: "terms",
      role: "terms",
      location: "第 3 级需要掌握的音乐术语和标记",
    },
    {
      id: "course-09",
      title: "综合音乐练习",
      category: "music in context",
      role: "music in context",
      location: "第 3 级综合问答与音乐语境练习",
    },
  ],
  "grade-4": [
    {
      id: "course-01",
      title: "节奏（第一部分）",
      category: "rhythm",
      role: "rhythm",
      location: "倍全音符、倍全休止符、双附点音符与二连音",
    },
    {
      id: "course-02",
      title: "节奏（第二部分）",
      category: "rhythm",
      role: "rhythm",
      location: "新的单拍子和复拍子，以及音符与休止符分组",
    },
    {
      id: "course-03",
      title: "音高",
      category: "pitch",
      role: "pitch",
      location: "中音谱号、重升重降与等音",
    },
    {
      id: "course-04",
      title: "调性与音阶（第一部分）",
      category: "scales",
      role: "scales",
      location: "音阶各级的技术名称，以及 B 大调与降 D 小调",
    },
    {
      id: "course-05",
      title: "调性与音阶（第二部分）",
      category: "scales",
      role: "scales",
      location: "降 B 小调、升 G 小调与半音阶",
    },
    {
      id: "course-06",
      title: "音程",
      category: "intervals",
      role: "intervals",
      location: "小二度、增音程与减音程",
    },
    {
      id: "course-07",
      title: "三和弦/和弦",
      category: "triads",
      role: "triads",
      location: "主要三和弦，以及原位主要和弦",
    },
    {
      id: "course-08",
      title: "术语、标记与乐器（第一部分）",
      category: "terms",
      role: "terms",
      location: "乐器家族、乐器音域、谱号与演奏指示",
    },
    {
      id: "course-09",
      title: "术语、标记与乐器（第二部分）",
      category: "terms",
      role: "terms",
      location: "装饰音、新意大利语和法语术语、反复记号",
    },
    {
      id: "course-10",
      title: "综合音乐练习",
      category: "music in context",
      role: "music in context",
      location: "第 4 级综合问答与音乐语境练习",
    },
  ],
  "grade-5": [
    {
      id: "course-01",
      title: "节奏",
      category: "rhythm",
      role: "rhythm",
      location: "单拍子与复拍子的改写复习、不规则拍号、不规则拍号分组、五连音与六连音",
    },
    {
      id: "course-02",
      title: "音高（第一部分）",
      category: "pitch",
      role: "pitch",
      location: "次中音谱号，以及不同谱号之间的八度移调",
    },
    {
      id: "course-03",
      title: "音高（第二部分）",
      category: "pitch",
      role: "pitch",
      location: "按大二度、小三度和纯五度移调，寻找新调号，以及带临时记号的旋律移调",
    },
    {
      id: "course-04",
      title: "调性与音阶",
      category: "scales",
      role: "scales",
      location: "升 F/降 G 大调、升 D/降 E 小调、五级乐理全部调性与五度圈",
    },
    {
      id: "course-05",
      title: "音程",
      category: "intervals",
      role: "intervals",
      location: "有无调号的音程、半音音程与复音程",
    },
    {
      id: "course-06",
      title: "和弦",
      category: "triads",
      role: "triads",
      location: "上主音和弦、终止式、为旋律选择合适和弦与转位",
    },
    {
      id: "course-07",
      title: "术语、标记与乐器（第一部分）",
      category: "terms",
      role: "terms",
      location: "第 5 级新增乐器、移调乐器、声部类型与音域",
    },
    {
      id: "course-08",
      title: "术语、标记与乐器（第二部分）",
      category: "terms",
      role: "terms",
      location: "写出的装饰音、新意大利语和德语术语、钢琴相关术语与标记",
    },
    {
      id: "course-09",
      title: "综合音乐练习",
      category: "music in context",
      role: "music in context",
      location: "第 5 级综合问答与音乐语境练习",
    },
  ],
};

const GRADE_COURSE_PAGE_META = {
  "grade-1": {
    "course-01": { zhStudentPages: [8, 14], zhAnswerPages: [2, 5], enStudentPages: [5, 11], enAnswerPages: [5, 8] },
    "course-02": { zhStudentPages: [15, 19], zhAnswerPages: [6, 8], enStudentPages: [12, 16], enAnswerPages: [9, 10] },
    "course-03": { zhStudentPages: [20, 25], zhAnswerPages: [8, 11], enStudentPages: [17, 22], enAnswerPages: [11, 14] },
    "course-04": { zhStudentPages: [26, 30], zhAnswerPages: [12, 14], enStudentPages: [23, 27], enAnswerPages: [15, 16] },
    "course-05": { zhStudentPages: [31, 35], zhAnswerPages: [14, 17], enStudentPages: [28, 32], enAnswerPages: [17, 20] },
    "course-06": { zhStudentPages: [36, 41], zhAnswerPages: [18, 20], enStudentPages: [33, 38], enAnswerPages: [21, 23] },
    "course-07": { zhStudentPages: [42, 46], zhAnswerPages: [21, 23], enStudentPages: [39, 43], enAnswerPages: [24, 26] },
    "course-08": { zhStudentPages: [47, 50], zhAnswerPages: [24, 26], enStudentPages: [44, 47], enAnswerPages: [27, 28] },
    "course-09": { zhStudentPages: [51, 52], zhAnswerPages: [26, 27], enStudentPages: [48, 49], enAnswerPages: [29, 29] },
    "course-10": { zhStudentPages: [53, 57], zhAnswerPages: [27, 29], enStudentPages: [50, 54], enAnswerPages: [30, 31] },
    "course-11": { zhStudentPages: [58, 61], zhAnswerPages: [29, 30], enStudentPages: [55, 58], enAnswerPages: [32, 34] },
  },
  "grade-2": {
    "course-01": { zhStudentPages: [8, 12], enStudentPages: [5, 9], enAnswerPages: [45, 47] },
    "course-02": { zhStudentPages: [13, 21], enStudentPages: [10, 18], enAnswerPages: [48, 51] },
    "course-03": { zhStudentPages: [22, 25], enStudentPages: [19, 22], enAnswerPages: [52, 54] },
    "course-04": { zhStudentPages: [26, 30], enStudentPages: [23, 27], enAnswerPages: [55, 56] },
    "course-05": { zhStudentPages: [31, 36], enStudentPages: [28, 33], enAnswerPages: [57, 59] },
    "course-06": { zhStudentPages: [37, 41], enStudentPages: [34, 38], enAnswerPages: [60, 62] },
    "course-07": { zhStudentPages: [42, 44], enStudentPages: [39, 41], enAnswerPages: [63, 64] },
    "course-08": { zhStudentPages: [45, 46], enStudentPages: [42, 43], enAnswerPages: [65, 65] },
    "course-09": { zhStudentPages: [47, 50], enStudentPages: [44, 47], enAnswerPages: [66, 67] },
    "course-10": { zhStudentPages: [51, 55], enStudentPages: [48, 52], enAnswerPages: [68, 70] },
  },
  "grade-3": {
    "course-01": { zhStudentPages: [8, 17], enStudentPages: [5, 14], enAnswerPages: [81, 86] },
    "course-02": { zhStudentPages: [18, 25], enStudentPages: [15, 22], enAnswerPages: [87, 91] },
    "course-03": { zhStudentPages: [26, 31], enStudentPages: [23, 28], enAnswerPages: [92, 95] },
    "course-04": { zhStudentPages: [32, 35], enStudentPages: [29, 32], enAnswerPages: [96, 97] },
    "course-05": { zhStudentPages: [36, 44], enStudentPages: [33, 41], enAnswerPages: [98, 103] },
    "course-06": { zhStudentPages: [45, 48], enStudentPages: [42, 45], enAnswerPages: [104, 106] },
    "course-07": { zhStudentPages: [49, 51], enStudentPages: [46, 48], enAnswerPages: [107, 108] },
    "course-08": { zhStudentPages: [52, 55], enStudentPages: [49, 52], enAnswerPages: [109, 110] },
    "course-09": { zhStudentPages: [56, 59], enStudentPages: [53, 56], enAnswerPages: [111, 112] },
  },
  "grade-4": {
    "course-01": { zhStudentPages: [8, 14], enStudentPages: [5, 11], enAnswerPages: [123, 126] },
    "course-02": { zhStudentPages: [15, 22], enStudentPages: [12, 19], enAnswerPages: [127, 132] },
    "course-03": { zhStudentPages: [23, 30], enStudentPages: [20, 27], enAnswerPages: [133, 136] },
    "course-04": { zhStudentPages: [31, 36], enStudentPages: [28, 33], enAnswerPages: [137, 140] },
    "course-05": { zhStudentPages: [37, 45], enStudentPages: [34, 42], enAnswerPages: [141, 145] },
    "course-06": { zhStudentPages: [46, 53], enStudentPages: [43, 50], enAnswerPages: [146, 150] },
    "course-07": { zhStudentPages: [54, 60], enStudentPages: [51, 57], enAnswerPages: [151, 155] },
    "course-08": { zhStudentPages: [61, 65], enStudentPages: [58, 62], enAnswerPages: [156, 156] },
    "course-09": { zhStudentPages: [66, 70], enStudentPages: [63, 67], enAnswerPages: [157, 159] },
    "course-10": { zhStudentPages: [71, 75], enStudentPages: [68, 72], enAnswerPages: [160, 162] },
  },
  "grade-5": {
    "course-01": { zhStudentPages: [4, 12], enStudentPages: [5, 13], enAnswerPages: [175, 179] },
    "course-02": { zhStudentPages: [13, 19], enStudentPages: [14, 20], enAnswerPages: [180, 182] },
    "course-03": { zhStudentPages: [20, 29], enStudentPages: [21, 30], enAnswerPages: [183, 187] },
    "course-04": { zhStudentPages: [30, 37], enStudentPages: [31, 38], enAnswerPages: [188, 191] },
    "course-05": { zhStudentPages: [38, 46], enStudentPages: [39, 47], enAnswerPages: [192, 197] },
    "course-06": { zhStudentPages: [47, 63], enStudentPages: [48, 64], enAnswerPages: [198, 206] },
    "course-07": { zhStudentPages: [64, 70], enStudentPages: [65, 71], enAnswerPages: [207, 208] },
    "course-08": { zhStudentPages: [71, 78], enStudentPages: [72, 79], enAnswerPages: [209, 212] },
    "course-09": { zhStudentPages: [79, 87], enStudentPages: [80, 88], enAnswerPages: [213, 216] },
  },
};

const ANSWER_BOOK_STARTS = {
  "grade-1": { bodyStartPdfPage: 5, titles: ["Rhythm (Part 1)", "Pitch (Part 1)", "Rhythm (Part 2)", "Pitch (Part 2)", "Rhythm (Part 3)", "Scales", "Keys & Key Signatures", "Intervals", "Tonic Triads", "Terms & Signs", "Music in Context"], printedStarts: [1, 5, 7, 11, 13, 17, 20, 23, 25, 26, 28], practiceStart: 31 },
  "grade-2": { bodyStartPdfPage: 45, titles: ["Pitch", "Rhythm (Part 1)", "Rhythm (Part 2)", "Rhythm (Part 3)", "Keys & Scales (Part 1)", "Keys & Scales (Part 2)", "Intervals", "Tonic Triads", "Terms & Signs", "Music in Context"], printedStarts: [1, 4, 8, 11, 13, 16, 19, 21, 22, 24], practiceStart: 27 },
  "grade-3": { bodyStartPdfPage: 81, titles: ["Rhythm (Part 1)", "Rhythm (Part 2)", "Pitch", "Keys & Scales (Part 1)", "Keys & Scales (Part 2)", "Intervals", "Tonic Triads", "Terms & Signs", "Music in Context"], printedStarts: [1, 7, 12, 16, 18, 24, 27, 29, 31], practiceStart: 33 },
  "grade-4": { bodyStartPdfPage: 123, titles: ["Rhythm (Part 1)", "Rhythm (Part 2)", "Pitch", "Keys & Scales (Part 1)", "Keys & Scales (Part 2)", "Intervals", "Triads/Chords", "Terms, Signs & Instruments (Part 1)", "Terms, Signs & Instruments (Part 2)", "Music in Context"], printedStarts: [1, 5, 11, 15, 19, 24, 29, 34, 35, 38], practiceStart: 41 },
  "grade-5": { bodyStartPdfPage: 175, titles: ["Rhythm", "Pitch (Part 1)", "Pitch (Part 2)", "Keys & Scales", "Intervals", "Chords", "Terms, Signs & Instruments (Part 1)", "Terms, Signs & Instruments (Part 2)", "Music in Context"], printedStarts: [1, 6, 9, 14, 18, 24, 33, 35, 39], practiceStart: 43 },
};

const COURSE_ACCENTS = {
  rhythm: "#f6b331",
  pitch: "#0ea5b7",
  "notation / pulse": "#24a148",
  scales: "#3454d1",
  keys: "#0f8c5a",
  intervals: "#d9488b",
  triads: "#8b5cf6",
  terms: "#e6422e",
  "music in context": "#f97316",
};

const DIGITAL_TEXTBOOK_SAMPLES = {
  "grade-1": {
    "course-01": {
      label: "中文电子教材样品",
      note: "以英文原版的清爽教材版式为结构底稿，用中文版资料校准术语和中文表达。",
      pages: [
        {
          id: "g1-c01-p01",
          eyebrow: "STUDENT 01",
          sourcePage: "P.8 / EN P.5",
          title: "基础：节奏和音高",
          subtitle: "我们将要学习音乐中非常重要的两个元素：节奏和音高。",
          variant: "basics",
          sections: [
            {
              heading: "节奏",
              points: [
                "节奏描述了不同时值的音符如何按照时间发展组合在一起。",
                "“脉动”可以被稳定地计数，就像心跳一样。它提供了构建节奏的框架。",
              ],
              callouts: [
                { label: "打节奏", hearts: 8 },
                { label: "脉动", hearts: 8, beats: ["1", "2", "3", "4", "1", "2", "3", "4"] },
              ],
              followUps: [
                "将“脉动”按照一定数量组合在一起，就构成了拍子。现在我们把这些脉动按照四拍子组合在一起。",
                "时值是指一个音符将持续多长时间。这里是三个常见音符的时值。",
                "二分音符和四分音符由符头和符干组成。全音符的符头是空心的，而且没有符干。",
              ],
              noteCard: {
                rows: [
                  ["全音符", "○", "四拍"],
                  ["二分音符", "𝅗𝅥", "两拍"],
                  ["四分音符", "♩", "一拍"],
                ],
              },
              stemCard: {
                notehead: "符头",
                stem: "符干",
              },
            },
            {
              heading: "音高",
              points: [
                "音高表示音符听起来高或低。",
                "为了表示音高，我们用五线谱来标记音符位置。",
                "音符可以记在五线谱任意的线或间，不同的线、间代表着不同的音高位置。",
                "五线谱上音符的位置越高，音高就越高。",
                "所有音高分别以字母 A、B、C、D、E、F、G 来命名。",
              ],
              staff: true,
            },
          ],
        },
        {
          id: "g1-c01-p02",
          eyebrow: "STUDENT 02",
          sourcePage: "P.9 / EN P.6",
          title: "1 节奏（第一部分）",
          subtitle: "",
          learnAbout: ["音符的时值", "小节与小节线", "拍号"],
          variant: "chapter",
          sections: [
            {
              heading: "时值",
              points: [
                "时值表示一个音符有几拍。四个常见音符是全音符、二分音符、四分音符和八分音符。",
                "两个八分音符加起来是一拍，用符杠连接在一起：♪ ♪ 变成 ♫。",
              ],
            },
          ],
          timeValueCard: {
            rows: [
              { name: "全音符", symbol: "○", count: "四拍", hearts: 4 },
              { name: "二分音符", symbol: "𝅗𝅥", count: "两拍", hearts: 2 },
              { name: "四分音符", symbol: "♩", count: "一拍", hearts: 1 },
              { name: "八分音符", symbol: "♪", count: "半拍", hearts: 0.5 },
            ],
          },
          exercises: [
            {
              number: 1,
              title: "完成表格。",
              type: "table",
              headers: ["音符名称", "写法", "数几拍？"],
              rows: [
                ["全音符", "", "4"],
                ["", "𝅗𝅥", ""],
                ["四分音符", "", ""],
                ["", "", "1/2"],
              ],
            },
            {
              number: 2,
              title: "圈选每个问题的正确答案。",
              type: "choices",
              rows: [
                ["a", "时值最短的音符是哪个？", ["𝅗𝅥", "♪", "♩"]],
                ["b", "时值最长的音符是哪个？", ["○", "𝅗𝅥", "♪"]],
                ["c", "这三个音符中哪个时值比二分音符长？", ["四分音符", "八分音符", "全音符"]],
                ["d", "♫ 加在一起的时值是？", ["两拍", "一拍", "四拍"]],
                ["e", "𝅗𝅥 ♩ 加在一起的时值是？", ["三拍", "两拍", "一拍"]],
              ],
            },
          ],
          soundBox: {
            title: "实际运用",
            text: "请你在老师或者朋友打出稳定拍子时，尝试打出不同时值的音符。边打拍子边计算“脉动”。",
          },
        },
      ],
    },
  },
};

const OCR_SELECTION_SAMPLES = {
  "grade-1": {
    "course-01": {
      label: "中文注释样品",
      note: "保留英文原版图片，用 OCR 文本层支持框选翻译。",
      pages: [
        {
          id: "g1-c01-en-p01",
          pageLabel: "STUDENT 01",
          sourceLabel: "SOURCE P.5",
          src: "./assets/scores/grade-1-original/course-01/student-page-01.webp",
          alt: "Discovering Music Theory Grade 1 page 1",
          ocrSegments: [
            { id: "p01-title", text: "THE BASICS: RHYTHM & PITCH", zh: "基础：节奏和音高", x: 15.9, y: 3.5, w: 45, h: 8, fs: 4.2 },
            { id: "p01-intro", text: "We're going to start by exploring two very important elements of music: rhythm and pitch.", zh: "我们将从音乐中两个非常重要的元素开始学习：节奏和音高。", x: 15.9, y: 15.8, w: 65, h: 2.8, fs: 1.72 },
            { id: "p01-rhythm-heading", text: "Rhythm", zh: "节奏", x: 21.6, y: 20.0, w: 18, h: 3.2, fs: 2.25 },
            { id: "p01-rhythm-def", text: "Rhythm describes how notes of different durations (or time values) are organised over time.", zh: "节奏描述了不同时值的音符如何随着时间被组织起来。", x: 21.6, y: 22.7, w: 66, h: 2.7, fs: 1.6 },
            { id: "p01-pulse-def", text: "A pulse is a steady count, like a heartbeat. It provides the framework on which rhythms are built.", zh: "脉动是一种稳定的计数，像心跳一样。它为构建节奏提供基本框架。", x: 21.6, y: 25.6, w: 68, h: 2.8, fs: 1.6 },
            { id: "p01-tap-label", text: "Tap:", zh: "打拍：", x: 22.7, y: 30.0, w: 8, h: 2.7, fs: 1.55 },
            { id: "p01-pulse-groups", text: "The pulse is organised into groups of counts. These counts are known as beats.", zh: "脉动会被组织成一组一组的计数，这些计数称为拍。", x: 21.6, y: 34.9, w: 60.8, h: 2.8, fs: 1.6 },
            { id: "p01-four-beats", text: "Here, the pulse is arranged into groups of four beats:", zh: "这里，脉动被安排成四拍一组。", x: 22.6, y: 37.4, w: 52, h: 2.6, fs: 1.55 },
            { id: "p01-pulse-label", text: "Pulse:", zh: "脉动：", x: 22.7, y: 41.2, w: 10, h: 2.6, fs: 1.5 },
            { id: "p01-beats-label", text: "Beats: 1 2 3 4 1 2 3 4", zh: "拍：1 2 3 4 1 2 3 4。", x: 22.7, y: 44.0, w: 44, h: 2.8, fs: 1.5 },
            { id: "p01-time-value", text: "A time value shows how many counts a note lasts.", zh: "时值表示一个音符持续多少拍。", x: 21.6, y: 49.0, w: 45, h: 2.8, fs: 1.6 },
            { id: "p01-common-values", text: "Here are three common time values:", zh: "这里有三种常见的时值。", x: 22.6, y: 51.6, w: 34, h: 2.5, fs: 1.5 },
            { id: "p01-value-card", text: "semibreve: 4 counts minim: 2 counts crotchet: 1 count", zh: "全音符：4 拍；二分音符：2 拍；四分音符：1 拍。", x: 61.5, y: 49.6, w: 20, h: 9.6, fs: 1.38 },
            { id: "p01-note-parts", text: "Minims and crotchets are made up of a vertical line called a stem joined to a notehead.", zh: "二分音符和四分音符由一个叫作符干的竖线连接符头组成。", x: 21.6, y: 62.0, w: 43.5, h: 3.1, fs: 1.55 },
            { id: "p01-pitch-heading", text: "Pitch", zh: "音高", x: 21.6, y: 69.8, w: 14, h: 3.1, fs: 2.2 },
            { id: "p01-pitch-def", text: "Pitch describes how high or low a note sounds.", zh: "音高描述一个音听起来有多高或多低。", x: 21.6, y: 72.7, w: 42, h: 2.7, fs: 1.55 },
            { id: "p01-stave", text: "To show pitches, we place notes on a stave:", zh: "为了表示音高，我们把音符写在五线谱上。", x: 21.6, y: 75.4, w: 38, h: 2.7, fs: 1.55 },
            { id: "p01-lines-spaces", text: "Notes can be placed on every line and in every space of the stave. Each line and each space represents a different pitch.", zh: "音符可以写在五线谱的每一条线和每一个间上；每条线和每个间都代表不同的音高。", x: 21.6, y: 79.3, w: 68, h: 4.8, fs: 1.48 },
            { id: "p01-higher", text: "The higher the note is placed on the stave, the higher its pitch.", zh: "音符在五线谱上的位置越高，音高就越高。", x: 21.6, y: 84.5, w: 54, h: 2.7, fs: 1.48 },
            { id: "p01-letter-names", text: "All pitches are given a letter name between A and G in the alphabet.", zh: "所有音高都会用 A 到 G 之间的字母音名来表示。", x: 21.6, y: 93.4, w: 62, h: 2.8, fs: 1.48 },
          ],
        },
        {
          id: "g1-c01-en-p02",
          pageLabel: "STUDENT 02",
          sourceLabel: "SOURCE P.6",
          src: "./assets/scores/grade-1-original/course-01/student-page-02.webp",
          alt: "Discovering Music Theory Grade 1 page 2",
          ocrSegments: [
            { id: "p02-title", text: "1 RHYTHM (PART 1)", zh: "1 节奏（第一部分）", x: 4.6, y: 2.3, w: 38, h: 9.5, fs: 5.2 },
            { id: "p02-learn-about", text: "In this chapter you will learn about Time values (notes) Bars and metre Time signatures", zh: "在本章中，你将学习：音符的时值、小节与拍子、拍号。", x: 64.6, y: 3.9, w: 29.5, h: 7.6, fs: 1.5 },
            { id: "p02-time-heading", text: "Time values", zh: "时值", x: 12.5, y: 17.5, w: 22, h: 3.2, fs: 2.25 },
            { id: "p02-time-def", text: "Time values show how many counts a note lasts. Four common time values are semibreves, minims, crotchets and quavers.", zh: "时值表示一个音符持续多少拍。常见时值包括全音符、二分音符、四分音符和八分音符。", x: 12.7, y: 20.5, w: 37, h: 7.2, fs: 1.55 },
            { id: "p02-quaver-pairs", text: "Pairs of quavers add up to one count. They are joined together with a beam:", zh: "两个八分音符相加等于一拍。它们用符杠连接在一起。", x: 12.7, y: 29.5, w: 35, h: 5.5, fs: 1.55 },
            { id: "p02-becomes", text: "becomes", zh: "变成。", x: 18.5, y: 35.0, w: 10, h: 2.4, fs: 1.4 },
            { id: "p02-value-semibreve", text: "Semibreve 4 counts", zh: "全音符：4 拍。", x: 53.8, y: 18.6, w: 23, h: 2.8, fs: 1.75 },
            { id: "p02-value-minim", text: "Minim 2 counts", zh: "二分音符：2 拍。", x: 53.8, y: 22.0, w: 22, h: 2.8, fs: 1.75 },
            { id: "p02-value-crotchet", text: "Crotchet 1 count", zh: "四分音符：1 拍。", x: 53.8, y: 25.5, w: 23, h: 2.8, fs: 1.75 },
            { id: "p02-value-quaver", text: "Quaver 1/2 a count", zh: "八分音符：半拍。", x: 53.8, y: 29.0, w: 25, h: 2.8, fs: 1.75 },
            { id: "p02-ex1-title", text: "Exercise 1 Complete this table.", zh: "练习 1：完成这张表格。", x: 8.5, y: 38.7, w: 38, h: 3.2, fs: 1.85 },
            { id: "p02-table-head", text: "Name of note Looks like How many counts?", zh: "音符名称；音符样子；持续几拍。", x: 13.5, y: 44.0, w: 54, h: 3.0, fs: 1.45 },
            { id: "p02-table-semibreve", text: "Semibreve 4", zh: "全音符：4 拍。", x: 14.7, y: 49.0, w: 50, h: 3.0, fs: 1.45 },
            { id: "p02-table-crotchet", text: "Crotchet", zh: "四分音符。", x: 15.5, y: 60.3, w: 14, h: 3.0, fs: 1.45 },
            { id: "p02-table-half", text: "1/2", zh: "半拍。", x: 61.0, y: 66.8, w: 5, h: 2.7, fs: 1.35 },
            { id: "p02-sound-title", text: "Theory in sound", zh: "听觉中的乐理。", x: 78.7, y: 37.7, w: 13, h: 4.8, fs: 1.95 },
            { id: "p02-sound-text", text: "Try clapping different time values while your teacher or a friend taps a steady pulse. Count the pulse out loud as you clap.", zh: "请老师或同学稳定地打拍，你尝试拍出不同的时值，并边拍边大声数出脉动。", x: 78.8, y: 45.0, w: 14.5, h: 13.5, fs: 1.35 },
            { id: "p02-ex2-title", text: "Exercise 2 Circle the correct answer for each question.", zh: "练习 2：为每个问题圈出正确答案。", x: 8.5, y: 74.3, w: 48, h: 3.4, fs: 1.8 },
            { id: "p02-q-a", text: "Which of these notes has the shortest duration?", zh: "以下哪个音符的时值最短？", x: 13.1, y: 79.3, w: 34, h: 2.7, fs: 1.35 },
            { id: "p02-q-b", text: "Which of these notes has the longest duration?", zh: "以下哪个音符的时值最长？", x: 13.1, y: 84.1, w: 34, h: 2.7, fs: 1.35 },
            { id: "p02-q-c", text: "Which of these lasts longer than a minim?", zh: "以下哪个音符比二分音符持续更久？", x: 13.1, y: 89.0, w: 31, h: 2.7, fs: 1.35 },
            { id: "p02-q-c-options", text: "crotchet quaver semibreve", zh: "四分音符；八分音符；全音符。", x: 54.2, y: 89.0, w: 35, h: 2.7, fs: 1.28 },
            { id: "p02-q-d", text: "How many counts is worth?", zh: "这个节奏值几拍？", x: 13.1, y: 93.5, w: 27, h: 2.7, fs: 1.35 },
            { id: "p02-q-d-options", text: "2 counts 1 count 4 counts", zh: "2 拍；1 拍；4 拍。", x: 54.0, y: 93.5, w: 35, h: 2.7, fs: 1.28 },
            { id: "p02-q-e", text: "How many counts is worth?", zh: "这个节奏值几拍？", x: 13.1, y: 97.7, w: 27, h: 2.2, fs: 1.35 },
            { id: "p02-q-e-options", text: "3 counts 2 counts 1 count", zh: "3 拍；2 拍；1 拍。", x: 54.0, y: 97.7, w: 35, h: 2.2, fs: 1.28 },
          ],
        },
      ],
    },
  },
};

function numberedPageName(kind, pageNumber) {
  return `${kind}-page-${String(pageNumber).padStart(2, "0")}.webp`;
}

function pageCountFromRange(range) {
  return Array.isArray(range) ? range[1] - range[0] + 1 : 0;
}

function pageRangeLabel(range) {
  return Array.isArray(range) ? `${range[0]}-${range[1]}` : "pending";
}

function gradeNumber(gradeId) {
  return Number(String(gradeId).replace("grade-", "")) || 1;
}

function gradeTitle(gradeId) {
  return `Grade ${gradeNumber(gradeId)}`;
}

function answerBasePathFor(gradeId) {
  return `${gradeId}-answers-original`;
}

function getCoursePageMeta(gradeId, courseId) {
  return GRADE_COURSE_PAGE_META[gradeId]?.[courseId] || {};
}

function makeScorePages(item, section, sourceRange, basePath) {
  const count = pageCountFromRange(sourceRange);
  return Array.from({ length: count }, (_, index) => {
    const pageNumber = index + 1;
    const sourcePage = Array.isArray(sourceRange) ? sourceRange[0] + index : pageNumber;
    const fileKind = section.fileKind || section.kind;
    return {
      kind: section.kind,
      sectionLabel: section.label,
      pageNumber,
      sourcePage,
      title: `${item.title} · ${section.label} ${pageNumber}`,
      src: `./assets/scores/${basePath}/${item.id}/${numberedPageName(fileKind, pageNumber)}`,
    };
  });
}

function makeScoreSection(item, section, sourceRange, basePath) {
  const pages = makeScorePages(item, section, sourceRange, basePath);

  return {
    ...section,
    pageCount: pages.length,
    sourcePageRange: pageRangeLabel(sourceRange),
    pages,
  };
}

function buildAnswerBookGrade([gradeId, config]) {
  const pdfOffset = config.bodyStartPdfPage - 1;
  const courses = config.printedStarts.map((start, index) => {
    const end = (config.printedStarts[index + 1] || config.practiceStart) - 1;
    return {
      id: `course-${String(index + 1).padStart(2, "0")}`,
      title: config.titles[index],
      printedPages: [start, end],
      pdfPages: [start + pdfOffset, end + pdfOffset],
      pageCount: end - start + 1,
    };
  });

  return {
    gradeId,
    label: gradeTitle(gradeId),
    bodyStartPdfPage: config.bodyStartPdfPage,
    courseCount: courses.length,
    courses,
  };
}

const ANSWER_BOOK_REFERENCE_INDEX = Object.entries(ANSWER_BOOK_STARTS).map(buildAnswerBookGrade);

export function createBlankTheoryWorkspace() {
  const levels = THEORY_LEVELS.map((level) => ({
    ...level,
    moduleCount: MODULE_SHELLS.filter((module) => module.level === level.id).length,
    resourceCount: 0,
    status: "待填充",
  }));

  const modules = MODULE_SHELLS.map((module, index) => ({
    ...module,
    order: index + 1,
    materialCount: 0,
    lessonCount: 0,
    audioCount: 0,
    slots: ["课程", "练习", "资源", "测评"],
  }));

  const resources = RESOURCE_SHELLS.map((resource, index) => ({
    ...resource,
    order: index + 1,
    materialCount: 0,
    audioCount: 0,
    scoreCount: 0,
  }));

  return {
    title: "乐理教学助手",
    subtitle: "从零开始的音乐理论课程工作台",
    mode: "zero-data",
    status: "从零开始",
    stats: {
      levels: levels.length,
      modules: modules.length,
      resources: 0,
      materials: 0,
      lessons: 0,
      audio: 0,
    },
    levels,
    modules,
    resources,
    materials: [],
  };
}

export function findModuleById(modules, moduleId) {
  return modules.find((module) => module.id === moduleId) || modules[0];
}

export function findLevelById(levels, levelId) {
  return levels.find((level) => level.id === levelId) || levels[0];
}

export function searchEmptyWorkspace(model, query = "", filters = {}) {
  const normalizedQuery = normalize(query);
  const levelFilter = filters.level || "all";
  const moduleFilter = filters.module || "all";

  const modules = model.modules.filter((module) => {
    const levelMatch = levelFilter === "all" || module.level === levelFilter;
    const moduleMatch = moduleFilter === "all" || module.id === moduleFilter;
    const queryMatch = !normalizedQuery || textMatches(module, normalizedQuery);
    return levelMatch && moduleMatch && queryMatch;
  });

  const resources = model.resources.filter((resource) => {
    const module = findModuleById(model.modules, resource.moduleId);
    const levelMatch = levelFilter === "all" || resource.level === levelFilter;
    const moduleMatch = moduleFilter === "all" || resource.moduleId === moduleFilter;
    const queryMatch =
      !normalizedQuery ||
      textMatches(resource, normalizedQuery) ||
      textMatches(module, normalizedQuery);
    return levelMatch && moduleMatch && queryMatch;
  });

  const levels = model.levels.filter((level) => !normalizedQuery || textMatches(level, normalizedQuery));

  return {
    query,
    levels,
    modules,
    resources,
    materials: [],
  };
}

export function getTheoryModuleDetail(model, moduleId) {
  const module = findModuleById(model.modules, moduleId);
  const level = findLevelById(model.levels, module.level);
  const resource = model.resources.find((item) => item.moduleId === module.id) || null;

  return {
    module,
    level,
    resource,
    tabs: DETAIL_TABS,
    teaching: module.teaching,
    media: {
      audio: [],
      scores: [],
      files: [],
    },
  };
}

export function getTheoryCoverGalleryItems() {
  return COVER_GALLERY_ITEMS.map((item) => ({ ...item }));
}

export function getTheoryCoursePickerItems(gradeId = "grade-1") {
  return (GRADE_COURSE_ITEMS[gradeId] || []).map((item) => hydrateTheoryCourse(item, gradeId));
}

export function getTheoryCourseDetail(courseId = "course-01", gradeId = "grade-1") {
  const courses = getTheoryCoursePickerItems(gradeId);
  return courses.find((course) => course.id === courseId) || courses[0] || null;
}

export function getAnswerBookReferenceIndex() {
  return ANSWER_BOOK_REFERENCE_INDEX.map((grade) => ({
    ...grade,
    courses: grade.courses.map((course) => ({ ...course })),
  }));
}

function hotspotTitle(item) {
  if (item.kind === "exercise-question" && item.marker) return `题目 ${item.marker}`;
  if (item.kind === "heading") return item.chineseText || item.englishText || "标题";
  if (item.kind === "table-row") return "表格行";
  if (item.kind === "notation-example") return "谱例";
  if (item.kind === "visual-example") return "示例";
  if (item.kind === "terminology-label") return "术语";
  if (item.kind === "footer") return "页脚";
  if (item.kind === "page-note") return "页面提示";
  if (item.marker === "bullet") return "项目符号";
  return item.chineseText || item.englishText || item.itemId;
}

function hotspotToModule(item) {
  return {
    id: item.itemId,
    kind: item.kind || "sentence",
    marker: item.marker || "",
    title: hotspotTitle(item),
    trigger: item.bbox,
    highlight: item.bbox,
    zh: item.chineseText || "",
    en: item.englishText || "",
    source: item.source || "hotspot-json",
  };
}

const G1_FULL_HOTSPOT_MODULES_BY_PAGE = Object.fromEntries(
  G1_HOTSPOTS_FULL.pages.map((page) => [
    page.pageId,
    page.items.map(hotspotToModule),
  ]),
);

const G1_STUDENT_OCR_PAGES_BY_ID = Object.fromEntries(
  Object.values(G1_OCR_SELECTION_SAMPLES).flatMap((sample) => sample.pages.map((page) => [page.id, page])),
);

function annotationSourceLabel(page) {
  const pageNumber = String(page.pageNumber || 0).padStart(2, "0");
  return page.section === "answers" ? `EN answer page ${pageNumber}` : `EN source page ${pageNumber}`;
}

function annotationAltText(page) {
  const section = page.section === "answers" ? "answer" : "student";
  return `Grade 1 ${page.courseId} ${section} page ${page.pageNumber}`;
}

function fullHotspotPageToAnnotationPage(page) {
  const ocrPage = G1_STUDENT_OCR_PAGES_BY_ID[page.pageId];
  return {
    id: page.pageId,
    pageLabel: page.pageLabel,
    sourceLabel: annotationSourceLabel(page),
    src: page.image,
    alt: annotationAltText(page),
    section: page.section,
    coverageStatus: page.coverageStatus,
    ocrSegments: ocrPage?.ocrSegments || [],
    modules: (G1_FULL_HOTSPOT_MODULES_BY_PAGE[page.pageId] || []).map((module) => ({ ...module })),
  };
}

function getGrade1FullHotspotSample(courseId) {
  const pages = G1_HOTSPOTS_FULL.pages.filter((page) => page.courseId === courseId);
  if (!pages.length) return null;
  const fallback = G1_OCR_SELECTION_SAMPLES[courseId];
  return {
    id: fallback?.id || `g1-${courseId}-full-hotspots`,
    label: fallback?.label || "English original with Chinese selection notes",
    schemaVersion: G1_HOTSPOTS_FULL.schemaVersion,
    hotspotCount: pages.reduce((total, page) => total + page.items.length, 0),
    pages: pages.map(fullHotspotPageToAnnotationPage),
  };
}

const OCR_MODULE_DEFINITIONS = {
  "g1-course-01-p01": [
    {
      id: "p01-rhythm",
      kind: "module",
      title: "节奏",
      trigger: { x: 17.7, y: 18.8, w: 15.2, h: 4.4 },
      highlight: { x: 17.2, y: 18.4, w: 76.2, h: 47.4 },
      zh: "节奏描述不同时值的音符如何随着时间组织起来。脉动是稳定的计数，像心跳一样，为节奏建立框架。脉动按一定数量组合成拍，这里每四拍为一组。时值表示一个音符持续多少拍，常见有全音符 4 拍、二分音符 2 拍、四分音符 1 拍。二分音符和四分音符由符干连接符头构成，全音符只有符头，没有符干。",
      en: "Rhythm describes how notes of different durations are organised over time. A pulse is a steady count. Time values show how many counts a note lasts.",
    },
    {
      id: "p01-rhythm-definition",
      kind: "sentence",
      title: "节奏定义",
      trigger: { x: 19.0, y: 22.3, w: 70.0, h: 3.1 },
      highlight: { x: 19.0, y: 22.3, w: 70.0, h: 3.1 },
      zh: "节奏：不同时值的音符如何按时间组织。",
      en: "Rhythm describes how notes of different durations are organised over time.",
    },
    {
      id: "p01-pulse-definition",
      kind: "sentence",
      title: "脉动定义",
      trigger: { x: 19.0, y: 25.2, w: 71.0, h: 3.2 },
      highlight: { x: 19.0, y: 25.2, w: 71.0, h: 3.2 },
      zh: "脉动：像心跳一样稳定计数，支撑节奏。",
      en: "A pulse is a steady count, like a heartbeat.",
    },
    {
      id: "p01-pulse-groups-note",
      kind: "sentence",
      title: "拍的分组",
      trigger: { x: 19.0, y: 34.6, w: 64.0, h: 3.2 },
      highlight: { x: 19.0, y: 34.6, w: 64.0, h: 3.2 },
      zh: "脉动会分成一组组的计数，这些计数叫拍。",
      en: "The pulse is organised into groups of counts.",
    },
    {
      id: "p01-time-value-note",
      kind: "sentence",
      title: "时值",
      trigger: { x: 19.0, y: 48.7, w: 49.0, h: 3.2 },
      highlight: { x: 19.0, y: 48.7, w: 49.0, h: 3.2 },
      zh: "时值：一个音符持续多少拍。",
      en: "A time value shows how many counts a note lasts.",
    },
    {
      id: "p01-pitch",
      kind: "module",
      title: "音高",
      trigger: { x: 17.7, y: 66.2, w: 13.0, h: 4.4 },
      highlight: { x: 17.2, y: 66.0, w: 76.6, h: 27.6 },
      zh: "音高描述一个音听起来有多高或多低。为了表示音高，我们把音符写在五线谱上；音符可以写在线和间上，每条线和每个间代表不同音高。音符在五线谱上的位置越高，音高就越高。所有音高都用 A 到 G 之间的字母名称表示。",
      en: "Pitch describes how high or low a note sounds. Notes are placed on a stave; the higher the note is placed, the higher its pitch.",
    },
    {
      id: "p01-pitch-definition",
      kind: "sentence",
      title: "音高定义",
      trigger: { x: 19.0, y: 72.4, w: 46.0, h: 3.1 },
      highlight: { x: 19.0, y: 72.4, w: 46.0, h: 3.1 },
      zh: "音高：一个音听起来有多高或多低。",
      en: "Pitch describes how high or low a note sounds.",
    },
    {
      id: "p01-stave-note",
      kind: "sentence",
      title: "五线谱",
      trigger: { x: 19.0, y: 75.1, w: 42.0, h: 3.1 },
      highlight: { x: 19.0, y: 75.1, w: 42.0, h: 3.1 },
      zh: "表示音高时，把音符放在五线谱上。",
      en: "To show pitches, we place notes on a stave.",
    },
  ],
  "g1-course-01-p02": [
    {
      id: "p02-time-values",
      kind: "module",
      title: "时值",
      trigger: { x: 7.6, y: 15.0, w: 27.0, h: 3.4 },
      highlight: { x: 6.7, y: 14.8, w: 88.7, h: 18.0 },
      zh: "时值表示一个音符持续多少拍。常见时值包括全音符、二分音符、四分音符和八分音符。两个八分音符合起来是一拍，通常用符杠连接。",
      en: "Time values show how many counts a note lasts. Common values include semibreves, minims, crotchets and quavers. Pairs of quavers add up to one count.",
    },
    {
      id: "p02-time-values-sentence",
      kind: "sentence",
      title: "时值定义",
      trigger: { x: 10.0, y: 20.1, w: 42.0, h: 7.5 },
      highlight: { x: 10.0, y: 20.1, w: 42.0, h: 7.5 },
      zh: "时值：音符持续多少拍；常见有全音符、二分音符、四分音符、八分音符。",
      en: "Time values show how many counts a note lasts.",
    },
    {
      id: "p02-quaver-pairs-sentence",
      kind: "sentence",
      title: "八分音符",
      trigger: { x: 10.0, y: 29.2, w: 39.0, h: 5.8 },
      highlight: { x: 10.0, y: 29.2, w: 39.0, h: 5.8 },
      zh: "两个八分音符合起来是一拍，常用符杠连接。",
      en: "Pairs of quavers add up to one count.",
    },
    {
      id: "p02-exercise-1",
      kind: "module",
      title: "练习 1",
      trigger: { x: 7.8, y: 33.3, w: 40.5, h: 3.5 },
      highlight: { x: 7.0, y: 33.0, w: 66.4, h: 31.0 },
      zh: "练习 1：完成表格。根据音符名称、音符样子和持续拍数，把缺失的信息填进去。",
      en: "Exercise 1: Complete this table. Fill in the missing note name, appearance, or count value.",
    },
    {
      id: "p02-theory-in-sound",
      kind: "module",
      title: "听觉中的乐理",
      trigger: { x: 76.5, y: 33.7, w: 17.0, h: 18.6 },
      highlight: { x: 76.2, y: 33.5, w: 17.8, h: 19.2 },
      zh: "请一边拍不同的时值，一边让老师或朋友稳定地打拍。你拍的时候，大声数出脉动。",
      en: "Try clapping different time values while your teacher or a friend taps a steady pulse. Count the pulse out loud as you clap.",
    },
    {
      id: "p02-exercise-2",
      kind: "module",
      title: "练习 2",
      trigger: { x: 7.8, y: 66.2, w: 50.0, h: 3.5 },
      highlight: { x: 7.0, y: 66.0, w: 82.8, h: 26.4 },
      zh: "练习 2：为每个问题圈出正确答案。判断哪个音符时值最短、哪个最长、哪个比二分音符长，并计算两个音符合起来值多少拍。",
      en: "Exercise 2: Circle the correct answer for each question about note durations and count values.",
    },
    {
      id: "p02-ex2-question-a",
      kind: "sentence",
      title: "题目 a",
      trigger: { x: 8.0, y: 78.8, w: 40.0, h: 3.5 },
      highlight: { x: 8.0, y: 78.8, w: 40.0, h: 3.5 },
      zh: "a：以下哪个音符的时值最短？",
      en: "Which of these notes has the shortest duration?",
    },
    {
      id: "p02-ex2-question-b",
      kind: "sentence",
      title: "题目 b",
      trigger: { x: 8.0, y: 83.6, w: 40.0, h: 3.5 },
      highlight: { x: 8.0, y: 83.6, w: 40.0, h: 3.5 },
      zh: "b：以下哪个音符的时值最长？",
      en: "Which of these notes has the longest duration?",
    },
    {
      id: "p02-ex2-question-c",
      kind: "sentence",
      title: "题目 c",
      trigger: { x: 8.0, y: 88.5, w: 82.0, h: 3.5 },
      highlight: { x: 8.0, y: 88.5, w: 82.0, h: 3.5 },
      zh: "c：以下哪个音符比二分音符更长？",
      en: "Which of these lasts longer than a minim?",
    },
    {
      id: "p02-ex2-question-d",
      kind: "sentence",
      title: "题目 d",
      trigger: { x: 8.0, y: 93.0, w: 82.0, h: 3.5 },
      highlight: { x: 8.0, y: 93.0, w: 82.0, h: 3.5 },
      zh: "d：这两个音符合起来值多少拍？",
      en: "How many counts is this worth?",
    },
    {
      id: "p02-ex2-question-e",
      kind: "sentence",
      title: "题目 e",
      trigger: { x: 8.0, y: 96.7, w: 82.0, h: 3.1 },
      highlight: { x: 8.0, y: 96.7, w: 82.0, h: 3.1 },
      zh: "e：这两个音符合起来值多少拍？",
      en: "How many counts is this worth?",
    },
  ],
};

function hydrateAnnotationSample(sample) {
  if (!sample) return null;
  return {
    ...sample,
    pages: sample.pages.map((page) => ({
      ...page,
      modules: (page.modules || OCR_MODULE_DEFINITIONS[page.id] || []).map((module) => ({ ...module })),
    })),
  };
}

function getAnnotationSample(gradeId, courseId) {
  if (gradeId === "grade-1") {
    return getGrade1FullHotspotSample(courseId) || hydrateAnnotationSample(G1_OCR_SELECTION_SAMPLES[courseId] || null);
  }
  const sample =
    OCR_SELECTION_SAMPLES[gradeId]?.[courseId] || null;
  return hydrateAnnotationSample(sample);
}

function hydrateTheoryCourse(item, gradeId) {
  const meta = getCoursePageMeta(gradeId, item.id);
  const accent = COURSE_ACCENTS[item.category] || "#24a148";
  const gradeLabel = gradeTitle(gradeId);
  const zhAnswerPages = meta.zhAnswerPages || meta.enAnswerPages;
  const zhAnswerBasePath = meta.zhAnswerPages ? gradeId : answerBasePathFor(gradeId);
  const answerBasePath = answerBasePathFor(gradeId);
  const zhSections = [
    makeScoreSection(
      item,
      { kind: "student", label: "Student", title: "中文学生资料", description: "中文学生册课堂讲解、例题、练习与阶段回顾" },
      meta.zhStudentPages,
      gradeId,
    ),
    makeScoreSection(
      item,
      { kind: "answers", label: "Answers", title: "答案资料", description: "对应练习的核对页与订正参考" },
      zhAnswerPages,
      zhAnswerBasePath,
    ),
  ];
  const enSections = [
    makeScoreSection(
      item,
      { kind: "student", label: "Student", title: "English original", description: "原版英文学生册页面，用来和中文整理版核对" },
      meta.enStudentPages,
      `${gradeId}-original`,
    ),
    makeScoreSection(
      item,
      { kind: "answers", label: "Answers", title: "Answer book original", description: "1-5 级总答案册中的对应答案页" },
      meta.enAnswerPages,
      answerBasePath,
    ),
  ];
  const scoreSources = [
    {
      id: "zh",
      label: "中文整理版",
      shortLabel: "ZH",
      description: "中文学生册为默认阅读材料；答案页按总答案册映射到本课。",
      sections: zhSections,
      pages: zhSections.flatMap((section) => section.pages),
      totalPages: zhSections.reduce((sum, section) => sum + section.pageCount, 0),
      pageLabel: `中文学生 ${pageRangeLabel(meta.zhStudentPages)} · 答案 ${pageRangeLabel(zhAnswerPages)}`,
    },
    {
      id: "en",
      label: "English original",
      shortLabel: "EN",
      description: "英文原版学生册和答案册，作为中文版本的核对来源。",
      sections: enSections,
      pages: enSections.flatMap((section) => section.pages),
      totalPages: enSections.reduce((sum, section) => sum + section.pageCount, 0),
      pageLabel: `Original student ${pageRangeLabel(meta.enStudentPages)} · answers ${pageRangeLabel(meta.enAnswerPages)}`,
    },
    {
      id: "compare",
      label: "中英对照",
      shortLabel: "A/B",
      description: "中文学生页与英文原版页按同课顺序并排，方便逐页校对和后续中文化整理。",
      sections: [],
      pages: [],
      totalPages: Math.max(pageCountFromRange(meta.zhStudentPages), pageCountFromRange(meta.enStudentPages)),
      pageLabel: `中文 ${pageRangeLabel(meta.zhStudentPages)} ↔ English ${pageRangeLabel(meta.enStudentPages)}`,
    },
  ];
  const scoreSections = zhSections;
  const pageLabel =
    meta.zhStudentPages && zhAnswerPages
      ? `Student ${meta.zhStudentPages[0]}-${meta.zhStudentPages[1]} · Answers ${zhAnswerPages[0]}-${zhAnswerPages[1]}`
      : "Pages pending";

  return {
    ...item,
    gradeId,
    classLabel: gradeLabel,
    source: `Discover Theory ${gradeLabel}`,
    artist: "ABRSM Discovering Music Theory",
    type: "Theory Course",
    style: item.role,
    accent,
    pageLabel,
    tags: [item.category, gradeLabel, "score preview"],
    tabs: COURSE_TABS,
    teaching: {
      goal: `掌握${item.location}，能在谱面中准确识别并完成基础练习。`,
      focus: `围绕「${item.title}」先读题、圈出关键符号，再完成书面练习。`,
      practiceOrder: ["读课题", "圈关键词", "完成例题", "核对答案"],
      commonIssues: ["只背定义不看谱例", "忽略题目里的拍号或调号", "答案订正没有写原因"],
      passStandard: "能独立完成本课学生页第一组练习，并用答案页核对后留下错因。",
    },
    audioSlots: [
      {
        title: "课堂讲解音频位",
        label: `${item.title} · audio slot`,
        src: "",
      },
    ],
    annotationSample: getAnnotationSample(gradeId, item.id),
    digitalSample: DIGITAL_TEXTBOOK_SAMPLES[gradeId]?.[item.id] || null,
    scoreSources,
    scoreSections,
    scoreImages: scoreSections.flatMap((section) => section.pages),
    scoreTotalPages: scoreSections.reduce((sum, section) => sum + section.pageCount, 0),
    scoreNote: meta.notes || "本课中文、英文原版和答案册页组已按 PDF 目录完整映射。",
  };
}

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function textMatches(item, normalizedQuery) {
  const haystack = [
    item.id,
    item.title,
    item.label,
    item.short,
    item.status,
    item.type,
    item.summary,
    item.core,
    item.boundary,
    ...(item.keywords || []),
    ...(item.tags || []),
  ]
    .map(normalize)
    .join(" ");

  return haystack.includes(normalizedQuery);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderStats(model, result) {
  return [
    ["阶段", model.stats.levels],
    ["模块", model.stats.modules],
    ["资料", model.stats.materials],
    ["音频", model.stats.audio],
    ["匹配", result.resources.length],
  ]
    .map(([label, value]) => `<span><strong>${value}</strong>${label}</span>`)
    .join("");
}

function renderCoverGallery(root, items) {
  root.innerHTML = `
    <div class="circular-gallery-stage">
      ${items
        .map(
          (item, index) => `
            <figure
              class="circular-gallery-card"
              data-gallery-card
              data-index="${index}"
              data-grade="${escapeHtml(item.gradeId || "")}"
              role="button"
              tabindex="0"
              aria-controls="levelSongPicker"
              aria-label="Open ${escapeHtml(item.title)} courses"
            >
              <div class="gallery-card-media" style="--accent:${escapeHtml(item.accent)}">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.text)} workbook cover" loading="eager" decoding="async" />
              </div>
              <figcaption class="gallery-card-copy">
                <div>
                  <strong>${escapeHtml(item.title)}</strong>
                  <span>${escapeHtml(item.tags[0] || "theory")}</span>
                </div>
                <p>${escapeHtml(item.description)}</p>
                <em>${item.tags.map((tag) => escapeHtml(tag)).join(" / ")}</em>
              </figcaption>
            </figure>
          `,
        )
        .join("")}
    </div>
  `;
}

function bindCoverGallery(root, items, onSelectGrade) {
  if (!root || !items.length) return;

  renderCoverGallery(root, items);

  const cards = [...root.querySelectorAll("[data-gallery-card]")];
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const state = {
    current: 0,
    target: 0,
    startX: 0,
    startY: 0,
    startTarget: 0,
    dragging: false,
    moved: false,
    pressCard: null,
    frame: 0,
  };

  function wrapOffset(index, current) {
    const length = items.length;
    return ((((index - current) % length) + length + length / 2) % length) - length / 2;
  }

  function layout() {
    const rect = root.getBoundingClientRect();
    const step = Math.max(260, Math.min(340, rect.width * 0.35));
    const center = rect.width / 2;

    cards.forEach((card, index) => {
      const offset = wrapOffset(index, state.current);
      const abs = Math.abs(offset);
      const x = center + offset * step;
      const y = -4 + abs * abs * 10;
      const z = abs < 0.45 ? 86 : -70 - abs * 46;
      const scale = Math.max(0.86, 1 - abs * 0.055);
      const rotateY = -offset * 16;
      const rotateZ = offset * -5.5;
      const opacity = abs > 1.55 ? 0 : Math.max(0.74, 1 - abs * 0.08);

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
      card.style.setProperty("--z", `${z}px`);
      card.style.setProperty("--rotate-y", `${rotateY}deg`);
      card.style.setProperty("--rotate-z", `${rotateZ}deg`);
      card.style.setProperty("--scale", scale.toFixed(3));
      card.style.setProperty("--alpha", opacity.toFixed(3));
      card.style.zIndex = String(Math.round(100 - abs * 10));
      card.classList.toggle("is-front", abs < 0.45);
    });
  }

  function animate() {
    state.current += (state.target - state.current) * 0.08;
    if (Math.abs(state.target - state.current) < 0.002) state.current = state.target;
    layout();

    if (state.current !== state.target || state.dragging) {
      state.frame = window.requestAnimationFrame(animate);
    } else {
      state.frame = 0;
    }
  }

  function requestLayout() {
    if (reducedMotion) {
      state.current = state.target;
      layout();
      return;
    }
    if (!state.frame) state.frame = window.requestAnimationFrame(animate);
  }

  function snapTarget() {
    state.target = Math.round(state.target);
    requestLayout();
  }

  function selectCard(card) {
    const index = Number(card.dataset.index || 0);
    state.target = index;
    snapTarget();
    onSelectGrade?.(items[index]);
  }

  cards.forEach((card) => {
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectCard(card);
    });
  });

  root.addEventListener("pointerdown", (event) => {
    state.dragging = true;
    state.startX = event.clientX;
    state.startY = event.clientY;
    state.startTarget = state.target;
    state.moved = false;
    state.pressCard = event.target.closest("[data-gallery-card]");
    root.classList.add("is-dragging");
    root.setPointerCapture?.(event.pointerId);
  });

  root.addEventListener("pointermove", (event) => {
    if (!state.dragging) return;
    const rect = root.getBoundingClientRect();
    if (Math.hypot(event.clientX - state.startX, event.clientY - state.startY) > 8) {
      state.moved = true;
    }
    const delta = (state.startX - event.clientX) / Math.max(120, rect.width * 0.28);
    state.target = state.startTarget + delta;
    requestLayout();
  });

  root.addEventListener("pointerup", (event) => {
    state.dragging = false;
    root.classList.remove("is-dragging");
    if (root.hasPointerCapture?.(event.pointerId)) root.releasePointerCapture(event.pointerId);
    if (!state.moved && state.pressCard) {
      selectCard(state.pressCard);
    } else {
      snapTarget();
    }
    state.pressCard = null;
  });

  root.addEventListener("pointercancel", () => {
    state.dragging = false;
    root.classList.remove("is-dragging");
    snapTarget();
  });

  root.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const delta = event.deltaY || event.deltaX;
      state.target += Math.sign(delta || 1) * 0.48;
      requestLayout();
      window.clearTimeout(root._gallerySnapTimer);
      root._gallerySnapTimer = window.setTimeout(snapTarget, 140);
    },
    { passive: false },
  );

  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      state.target += 1;
      snapTarget();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      state.target -= 1;
      snapTarget();
    }
    if (event.key === "Home") {
      event.preventDefault();
      state.target = 0;
      snapTarget();
    }
  });

  window.addEventListener("resize", layout);
  layout();
}

function renderResourceList(model, resources, selectedResourceId) {
  if (!resources.length) {
    return `
      <div class="empty-note">
        <strong>没有匹配的占位资源</strong>
        <span>换一个模块、阶段或关键词继续定位。</span>
      </div>
    `;
  }

  return resources
    .map((resource, index) => {
      const module = findModuleById(model.modules, resource.moduleId);
      const level = findLevelById(model.levels, resource.level);
      const active = resource.id === selectedResourceId ? " is-active" : "";
      return `
        <button class="resource-label${active}" type="button" data-resource="${escapeHtml(resource.id)}">
          <span class="roll-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="label-field">${escapeHtml(resource.type)}</span>
          <strong>${escapeHtml(resource.title)}</strong>
          <small>${escapeHtml(module.title)} · ${escapeHtml(level.label)} · ${escapeHtml(resource.status)}</small>
          <p>${escapeHtml(resource.summary)}</p>
          <div class="tag-row">${tagMarkup(resource.tags, 4)}</div>
        </button>
      `;
    })
    .join("");
}

function renderTagCloud(model, resources) {
  const counts = new Map();
  const pool = resources.length ? resources : model.resources;
  pool.forEach((resource) => {
    resource.tags.forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1));
  });

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-CN"))
    .slice(0, 12)
    .map(
      ([tag, count]) => `
        <button type="button" class="tag-chip" data-query="${escapeHtml(tag)}">
          ${escapeHtml(tag)}<em>${count}</em>
        </button>
      `,
    )
    .join("");
}

function tagMarkup(tags, limit) {
  return tags
    .slice(0, limit)
    .map((tag) => `<span class="tag-chip">${escapeHtml(tag)}</span>`)
    .join("");
}

function renderModuleOptions(model) {
  return model.modules
    .map((module) => `<option value="${escapeHtml(module.id)}">${escapeHtml(module.title)}</option>`)
    .join("");
}

function renderLevelOptions(model) {
  return model.levels
    .map((level) => `<option value="${escapeHtml(level.id)}">${escapeHtml(level.label)}</option>`)
    .join("");
}

function renderTheoryNotebook(detail) {
  const { module, level, resource } = detail;
  return `
    <div class="lesson-cover" style="--accent:${escapeHtml(module.accent)}">
      <span class="label-field">Module</span>
      <h3>${escapeHtml(module.title)}</h3>
      <p>${escapeHtml(module.summary)}</p>
      <div class="sticker-grid lesson-fields">
        <p><span>阶段</span><b>${escapeHtml(level.label)}</b></p>
        <p><span>状态</span><b>${escapeHtml(module.status)}</b></p>
        <p><span>资源位</span><b>${resource ? escapeHtml(resource.title) : "待填充"}</b></p>
        <p><span>媒体</span><b>0 音频 / 0 谱面</b></p>
      </div>
      <div class="tag-row">${tagMarkup(module.keywords, 6)}</div>
    </div>
  `;
}

function renderPracticeSteps(detail) {
  return `
    <div class="practice-steps">
      ${detail.teaching.practiceOrder
        .map(
          (step, index) => `
            <div>
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${escapeHtml(step)}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
    <dl class="lesson-list">
      <dt>目标</dt><dd>${escapeHtml(detail.teaching.goal)}</dd>
      <dt>重点</dt><dd>${escapeHtml(detail.teaching.focus)}</dd>
      <dt>常见阻塞</dt><dd>${escapeHtml(detail.teaching.commonIssues.join("；"))}</dd>
      <dt>完成标准</dt><dd>${escapeHtml(detail.teaching.passStandard)}</dd>
    </dl>
  `;
}

function renderResourcePane(detail) {
  return `
    <div class="resource-workbench">
      <article>
        <span>audio slot</span>
        <strong>0</strong>
        <em>待收录音频</em>
      </article>
      <article>
        <span>score slot</span>
        <strong>0</strong>
        <em>待收录谱面</em>
      </article>
      <article>
        <span>file slot</span>
        <strong>0</strong>
        <em>待收录讲义</em>
      </article>
    </div>
    <div class="resource-note">
      <span>${escapeHtml(detail.resource?.type || "资源")}</span>
      <strong>${escapeHtml(detail.resource?.title || "待填充资源位")}</strong>
      <small>${escapeHtml(detail.resource?.summary || "资料收录后会挂到这里。")}</small>
    </div>
  `;
}

function renderAssessmentPane(detail) {
  return `
    <div class="assessment-board">
      <div>
        <span>quiz</span>
        <strong>题卡待填充</strong>
        <p>后续由课程数据线程接入题型、答案、错因和阶段报告。</p>
      </div>
      <div class="blank-answer-sheet" aria-hidden="true">
        <i></i><i></i><i></i><i></i>
      </div>
    </div>
    <dl class="lesson-list compact">
      <dt>题目</dt><dd>0</dd>
      <dt>错题</dt><dd>0</dd>
      <dt>报告</dt><dd>待填充</dd>
    </dl>
  `;
}

function renderDetailPane(detail, activeTab) {
  if (activeTab === "练习") return renderPracticeSteps(detail);
  if (activeTab === "资源") return renderResourcePane(detail);
  if (activeTab === "测评") return renderAssessmentPane(detail);

  return `
    <div class="course-map">
      <div class="staff-preview" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
        <b style="--x:18%;--y:52%"></b>
        <b style="--x:42%;--y:32%"></b>
        <b style="--x:68%;--y:62%"></b>
      </div>
      <div>
        <span class="label-field">${escapeHtml(detail.level.short)} / ${escapeHtml(detail.level.label)}</span>
        <h4>${escapeHtml(detail.module.title)}课程壳</h4>
        <p>${escapeHtml(detail.teaching.goal)}</p>
      </div>
    </div>
    ${renderPracticeSteps(detail)}
  `;
}

function renderModuleDetail(detail, activeTab) {
  return `
    ${renderTheoryNotebook(detail)}
    <div class="lesson-tabs" role="tablist" aria-label="${escapeHtml(detail.module.title)}详情">
      ${detail.tabs
        .map(
          (tab) => `
            <button type="button" class="${tab === activeTab ? "is-active" : ""}" data-tab="${escapeHtml(tab)}">
              ${escapeHtml(tab)}
            </button>
          `,
        )
        .join("")}
    </div>
    <div class="lesson-pane">${renderDetailPane(detail, activeTab)}</div>
  `;
}

function tabKey(tab) {
  return normalize(tab);
}

function renderCourseSelector(courses, selectedCourseId) {
  return `
    <div class="lesson-course-strip" aria-label="Grade 1 course list">
      ${courses
        .map(
          (course, index) => `
            <button
              type="button"
              class="${course.id === selectedCourseId ? "is-active" : ""}"
              data-course="${escapeHtml(course.id)}"
              style="--accent:${escapeHtml(course.accent)}"
            >
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${escapeHtml(course.title)}</strong>
              <small>${escapeHtml(course.role)}</small>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderTheoryCourseLesson(course) {
  return `
    <div class="practice-steps">
      ${course.teaching.practiceOrder
        .map(
          (step, index) => `
            <div>
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${escapeHtml(step)}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
    <dl class="lesson-list">
      <dt>Goal</dt><dd>${escapeHtml(course.teaching.goal)}</dd>
      <dt>Focus</dt><dd>${escapeHtml(course.teaching.focus)}</dd>
      <dt>Common issues</dt><dd>${escapeHtml(course.teaching.commonIssues.join("；"))}</dd>
      <dt>Pass standard</dt><dd>${escapeHtml(course.teaching.passStandard)}</dd>
      <dt>Mapped pages</dt><dd>${escapeHtml(course.pageLabel)}</dd>
    </dl>
  `;
}

function renderTheoryCourseAudio(course) {
  const activeSlot = course.audioSlots[0];
  const srcAttribute = activeSlot.src ? `src="${escapeHtml(activeSlot.src)}"` : "";
  return `
    <div class="audio-workbench">
      <div class="audio-player-frame">
        <div class="audio-version-head">
          <div>
            <span>practice audio</span>
            <strong>${escapeHtml(activeSlot.title)}</strong>
            <em>${escapeHtml(activeSlot.label)}</em>
          </div>
        </div>
        <div class="audio-speed-player-shell">
          <audio-speed-player
            ${srcAttribute}
            label="${escapeHtml(activeSlot.label)}"
            engine="rubberband"
            no-upload
          ></audio-speed-player>
        </div>
      </div>
    </div>
  `;
}

function renderReaderPage(course, sourceId, section, page, loading = "eager") {
  const figureId = `${course.gradeId}-${course.id}-${sourceId}-${page.kind}-${page.pageNumber}`;
  return `
    <figure class="reader-page score-image-frame" id="${escapeHtml(figureId)}">
      <figcaption>
        <span>${escapeHtml(page.sectionLabel)} ${String(page.pageNumber).padStart(2, "0")}</span>
        <em>source p.${escapeHtml(page.sourcePage)}</em>
      </figcaption>
      <img src="${escapeHtml(page.src)}" alt="${escapeHtml(page.title)}" loading="${loading}" decoding="async" />
    </figure>
  `;
}

function renderReaderSourcePanel(course, source, activeSourceId) {
  const isActive = source.id === activeSourceId;
  return `
    <div
      class="reader-source-panel ${isActive ? "is-active" : ""}"
      data-score-source-panel="${escapeHtml(source.id)}"
      ${isActive ? "" : "hidden"}
    >
      <div class="reader-toolbar">
        <div>
          <span>${escapeHtml(source.shortLabel)} source</span>
          <strong>${escapeHtml(source.label)}</strong>
          <em>${escapeHtml(source.totalPages)} pages · ${escapeHtml(source.pageLabel)}</em>
        </div>
        <nav class="reader-section-toggle" aria-label="${escapeHtml(source.label)} sections">
          ${source.sections
            .map(
              (section) => `
                <a href="#${escapeHtml(course.gradeId)}-${escapeHtml(course.id)}-${escapeHtml(source.id)}-${escapeHtml(section.kind)}">
                  <b>${escapeHtml(section.label)}</b>
                  <small>${escapeHtml(section.pageCount)} pages</small>
                </a>
              `,
            )
            .join("")}
        </nav>
      </div>
      <div class="reader-page-strip" aria-label="${escapeHtml(course.title)} ${escapeHtml(source.label)} page index">
        ${source.sections
          .flatMap((section) =>
            section.pages.map(
              (page) => `
                <a class="reader-page-thumb" href="#${escapeHtml(course.gradeId)}-${escapeHtml(course.id)}-${escapeHtml(source.id)}-${escapeHtml(page.kind)}-${page.pageNumber}">
                  <span>${String(page.pageNumber).padStart(2, "0")}</span>
                  <small>${escapeHtml(section.label)}</small>
                </a>
              `,
            ),
          )
          .join("")}
      </div>
      <div class="reader-note">
        <span>source map</span>
        <strong>${escapeHtml(source.description)}</strong>
      </div>
      <div class="reader-spread">
        ${source.sections
          .map(
            (section) => `
              <section class="reader-section" id="${escapeHtml(course.gradeId)}-${escapeHtml(course.id)}-${escapeHtml(source.id)}-${escapeHtml(section.kind)}">
                <header class="reader-section-head">
                  <div>
                    <span>${escapeHtml(section.label)}</span>
                    <strong>${escapeHtml(section.title)}</strong>
                    <em>PDF pages ${escapeHtml(section.sourcePageRange)} · ${escapeHtml(section.description)}</em>
                  </div>
                  <b>${escapeHtml(section.pageCount)} pages</b>
                </header>
                ${section.pages
                  .map((page) => renderReaderPage(course, source.id, section, page, isActive ? "eager" : "lazy"))
                  .join("")}
              </section>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function sectionByKind(source, kind) {
  return source.sections.find((section) => section.kind === kind) || { pages: [] };
}

function renderComparePageCard(course, sourceId, section, page, label) {
  if (!page) {
    return `
      <div class="reader-compare-empty">
        <span>${escapeHtml(label)}</span>
        <strong>本侧无对应页</strong>
      </div>
    `;
  }

  return `
    <figure class="reader-compare-page score-image-frame">
      <figcaption>
        <span>${escapeHtml(label)} ${String(page.pageNumber).padStart(2, "0")}</span>
        <em>source p.${escapeHtml(page.sourcePage)}</em>
      </figcaption>
      <img src="${escapeHtml(page.src)}" alt="${escapeHtml(course.title)} ${escapeHtml(label)} ${escapeHtml(page.pageNumber)}" loading="lazy" decoding="async" />
    </figure>
  `;
}

function renderCompareSourcePanel(course, source, activeSourceId) {
  const zhSource = course.scoreSources.find((item) => item.id === "zh");
  const enSource = course.scoreSources.find((item) => item.id === "en");
  const zhStudent = sectionByKind(zhSource, "student");
  const enStudent = sectionByKind(enSource, "student");
  const answerSection = sectionByKind(enSource, "answers");
  const pairCount = Math.max(zhStudent.pages.length, enStudent.pages.length);
  const isActive = source.id === activeSourceId;

  return `
    <div
      class="reader-source-panel ${isActive ? "is-active" : ""}"
      data-score-source-panel="${escapeHtml(source.id)}"
      ${isActive ? "" : "hidden"}
    >
      <div class="reader-toolbar">
        <div>
          <span>${escapeHtml(source.shortLabel)} source</span>
          <strong>${escapeHtml(source.label)}</strong>
          <em>${escapeHtml(pairCount)} pairs · ${escapeHtml(source.pageLabel)}</em>
        </div>
        <nav class="reader-section-toggle" aria-label="Compare sections">
          <a href="#${escapeHtml(course.gradeId)}-${escapeHtml(course.id)}-compare-student">
            <b>Student</b>
            <small>${escapeHtml(pairCount)} pairs</small>
          </a>
          <a href="#${escapeHtml(course.gradeId)}-${escapeHtml(course.id)}-compare-answers">
            <b>Answers</b>
            <small>${escapeHtml(answerSection.pages.length)} pages</small>
          </a>
        </nav>
      </div>
      <div class="reader-note">
        <span>compare mode</span>
        <strong>${escapeHtml(source.description)}</strong>
      </div>
      <section class="reader-section" id="${escapeHtml(course.gradeId)}-${escapeHtml(course.id)}-compare-student">
        <header class="reader-section-head">
          <div>
            <span>Student</span>
            <strong>中文 / English side by side</strong>
            <em>中文 PDF pages ${escapeHtml(zhStudent.sourcePageRange || "pending")} · English PDF pages ${escapeHtml(enStudent.sourcePageRange || "pending")}</em>
          </div>
          <b>${escapeHtml(pairCount)} pairs</b>
        </header>
        <div class="reader-compare-stack">
          ${Array.from({ length: pairCount }, (_, index) => {
            const zhPage = zhStudent.pages[index];
            const enPage = enStudent.pages[index];
            return `
              <article class="reader-compare-pair">
                ${renderComparePageCard(course, "zh", zhStudent, zhPage, "中文")}
                ${renderComparePageCard(course, "en", enStudent, enPage, "English")}
              </article>
            `;
          }).join("")}
        </div>
      </section>
      <section class="reader-section" id="${escapeHtml(course.gradeId)}-${escapeHtml(course.id)}-compare-answers">
        <header class="reader-section-head">
          <div>
            <span>Answers</span>
            <strong>答案册原版索引</strong>
            <em>PDF pages ${escapeHtml(answerSection.sourcePageRange || "pending")} · 后续中文化时以这里为核对底稿</em>
          </div>
          <b>${escapeHtml(answerSection.pages.length)} pages</b>
        </header>
        <div class="reader-spread">
          ${answerSection.pages.map((page) => renderReaderPage(course, "compare", answerSection, page, isActive ? "eager" : "lazy")).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderHeartPulse(count) {
  const full = Math.floor(count);
  const half = count % 1 ? 1 : 0;
  return `
    <span class="heart-row" aria-label="${escapeHtml(count)} beats">
      ${Array.from({ length: full }, () => "<i></i>").join("")}
      ${half ? "<i class=\"is-half\"></i>" : ""}
    </span>
  `;
}

function renderMiniStaff() {
  return `
    <div class="digital-staff" aria-label="五线谱上音符位置由低到高">
      <span></span><span></span><span></span><span></span><span></span>
      ${[10, 18, 28, 38, 49, 59, 70, 80, 90].map((x, index) => `<b style="--x:${x}%;--y:${78 - index * 6}%"></b>`).join("")}
      <em class="staff-low">低</em>
      <em class="staff-high">高</em>
    </div>
  `;
}

function renderDigitalCallout(callout) {
  return `
    <div class="digital-pulse-card">
      <strong>${escapeHtml(callout.label)}：</strong>
      ${renderHeartPulse(callout.hearts)}
      ${callout.beats ? `<div class="beat-row"><strong>拍数：</strong>${callout.beats.map((beat) => `<span>${escapeHtml(beat)}</span>`).join("")}</div>` : ""}
    </div>
  `;
}

function renderDigitalSection(section) {
  return `
    <section class="digital-info-section">
      <header>
        <span aria-hidden="true">i</span>
        <h4>${escapeHtml(section.heading)}</h4>
      </header>
      <div class="digital-section-body">
        <div class="digital-copy">
          ${(section.points || []).map((point) => `<p>${escapeHtml(point)}</p>`).join("")}
          ${(section.callouts || []).map(renderDigitalCallout).join("")}
          ${(section.followUps || []).map((point) => `<p>${escapeHtml(point)}</p>`).join("")}
          ${section.staff ? renderMiniStaff() : ""}
        </div>
        ${section.noteCard ? `
          <aside class="note-value-card">
            ${section.noteCard.rows.map((row) => `
              <div>
                <strong>${escapeHtml(row[0])}</strong>
                <span>${escapeHtml(row[1])}</span>
                <b>${escapeHtml(row[2])}</b>
              </div>
            `).join("")}
          </aside>
        ` : ""}
        ${section.stemCard ? `
          <aside class="stem-card">
            <span>${escapeHtml(section.stemCard.notehead)}</span>
            <b>♩</b>
            <span>${escapeHtml(section.stemCard.stem)}</span>
          </aside>
        ` : ""}
      </div>
    </section>
  `;
}

function renderTimeValueCard(card) {
  if (!card) return "";
  return `
    <aside class="time-value-card" aria-label="常见音符时值">
      ${card.rows.map((row) => `
        <div>
          <strong>${escapeHtml(row.name)}</strong>
          <span>${escapeHtml(row.symbol)}</span>
          <b>${escapeHtml(row.count)}</b>
          ${renderHeartPulse(row.hearts)}
        </div>
      `).join("")}
    </aside>
  `;
}

function renderDigitalExercise(exercise) {
  if (exercise.type === "choices") {
    return `
      <section class="digital-exercise">
        <h4><span>练习 ${escapeHtml(exercise.number)}</span>${escapeHtml(exercise.title)}</h4>
        <div class="choice-list">
          ${exercise.rows.map((row) => `
            <div>
              <b>${escapeHtml(row[0])}</b>
              <p>${escapeHtml(row[1])}</p>
              <ul>${row[2].map((choice) => `<li>${escapeHtml(choice)}</li>`).join("")}</ul>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section class="digital-exercise">
      <h4><span>练习 ${escapeHtml(exercise.number)}</span>${escapeHtml(exercise.title)}</h4>
      <table class="exercise-table">
        <thead>
          <tr>${exercise.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${exercise.rows.map((row) => `
            <tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function renderDigitalTextbookPage(page) {
  const isChapter = page.variant === "chapter";
  const sectionMarkup = (page.sections || []).map(renderDigitalSection).join("");
  const exerciseMarkup = (page.exercises || []).map(renderDigitalExercise).join("");
  const sideMarkup = `
    ${renderTimeValueCard(page.timeValueCard)}
    ${page.soundBox ? `
      <aside class="theory-sound-card">
        <strong>${escapeHtml(page.soundBox.title)}</strong>
        <p>${escapeHtml(page.soundBox.text)}</p>
      </aside>
    ` : ""}
  `;
  return `
    <article class="digital-textbook-page ${isChapter ? "is-chapter" : "is-basics"}">
      <div class="digital-page-meta">
        <span>${escapeHtml(page.eyebrow)}</span>
        <span>${escapeHtml(page.sourcePage)}</span>
      </div>
      <header class="digital-page-hero">
        <div>
          <small>${isChapter ? "Discovering Music Theory Grade 1" : "Discovering Music Theory"}</small>
          <h3>${escapeHtml(page.title)}</h3>
          <p>${escapeHtml(page.subtitle)}</p>
        </div>
        ${page.learnAbout ? `
          <aside>
            <strong>本章中，我们将学习</strong>
            ${page.learnAbout.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </aside>
        ` : ""}
      </header>
      <div class="digital-page-body">
        ${isChapter ? `
          <div class="digital-chapter-top">
            <div class="digital-main-flow">${sectionMarkup}</div>
            <div class="digital-side-flow">${sideMarkup}</div>
          </div>
          <div class="digital-exercise-flow">${exerciseMarkup}</div>
        ` : `
          <div class="digital-main-flow">${sectionMarkup}${exerciseMarkup}</div>
          <div class="digital-side-flow">${sideMarkup}</div>
        `}
      </div>
    </article>
  `;
}

function renderDigitalTextbookSample(course) {
  const sample = course.digitalSample;
  return `
    <div class="digital-textbook-sample">
      <div class="digital-page-stack">
        ${sample.pages.map(renderDigitalTextbookPage).join("")}
      </div>
    </div>
  `;
}

function boundedPercent(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.min(100, Math.max(0, number));
}

function rectStyle(rect) {
  return [
    `--x:${boundedPercent(rect?.x)}%`,
    `--y:${boundedPercent(rect?.y)}%`,
    `--w:${boundedPercent(rect?.w)}%`,
    `--h:${boundedPercent(rect?.h)}%`,
  ].join(";");
}

function rectData(rect) {
  return [rect?.x, rect?.y, rect?.w, rect?.h].map((value) => boundedPercent(value)).join(",");
}

function parseRectData(value) {
  const [x, y, w, h] = String(value || "").split(",").map((part) => Number(part));
  return { x, y, w, h };
}

function renderAnnotationModuleHotspot(module) {
  const kind = module.kind || "module";
  return `
    <button
      type="button"
      class="annotation-module-hotspot is-${escapeHtml(kind)}"
      style="${rectStyle(module.trigger)}"
      data-annotation-module="${escapeHtml(module.id)}"
      data-module-kind="${escapeHtml(kind)}"
      data-module-marker="${escapeHtml(module.marker || "")}"
      data-module-source="${escapeHtml(module.source || "")}"
      data-module-title="${escapeHtml(module.title)}"
      data-module-zh="${escapeHtml(module.zh)}"
      data-module-en="${escapeHtml(module.en)}"
      data-module-highlight="${escapeHtml(rectData(module.highlight))}"
      aria-label="翻译模块：${escapeHtml(module.title)}"
    ></button>
  `;
}

function renderAnnotationPage(page, index) {
  return `
    <article class="annotation-page" aria-label="${escapeHtml(page.pageLabel)} ${escapeHtml(page.sourceLabel)}">
      <div class="annotation-page-meta">
        <span>${escapeHtml(page.pageLabel)}</span>
        <span>${escapeHtml(page.sourceLabel)}</span>
      </div>
      <figure class="annotation-page-frame">
        <img src="${escapeHtml(page.src)}" alt="${escapeHtml(page.alt)}" loading="${index === 0 ? "eager" : "lazy"}" />
        <div class="annotation-module-highlight" data-module-highlight-box hidden></div>
        ${(page.modules || []).map(renderAnnotationModuleHotspot).join("")}
      </figure>
    </article>
  `;
}

function renderAnnotationReader(course) {
  const sample = course.annotationSample;
  return `
    <div class="annotation-reader" data-annotation-reader>
      <div class="annotation-page-stack">
        ${sample.pages.map(renderAnnotationPage).join("")}
      </div>
      <div class="selection-translation-popover" data-selection-popover hidden></div>
    </div>
  `;
}

function hideSelectionPopover(root) {
  const popover = root.querySelector("[data-selection-popover]");
  if (!popover) return;
  popover.hidden = true;
  popover.style.left = "";
  popover.style.top = "";
}

function clearModuleTranslation(root) {
  root.querySelectorAll("[data-annotation-module].is-active").forEach((button) => button.classList.remove("is-active"));
  root.querySelectorAll("[data-module-highlight-box]").forEach((highlight) => {
    highlight.hidden = true;
    highlight.style.cssText = "";
  });
}

function clampPixel(value, min, max) {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(value, max));
}

function positionModulePopover(popover, button) {
  const gap = 10;
  const margin = 12;
  const buttonRect = button.getBoundingClientRect();
  const frameRect = button.closest(".annotation-page-frame")?.getBoundingClientRect() || buttonRect;
  const popoverRect = popover.getBoundingClientRect();
  const width = popoverRect.width || Math.min(280, window.innerWidth - margin * 2);
  const height = popoverRect.height || 132;
  const rightSpace = window.innerWidth - frameRect.right;
  const leftSpace = frameRect.left;
  let left;

  if (rightSpace >= width + gap + margin) {
    left = frameRect.right + gap;
  } else if (leftSpace >= width + gap + margin) {
    left = frameRect.left - width - gap;
  } else {
    const sideCandidate = buttonRect.left < window.innerWidth / 2
      ? buttonRect.right + gap
      : buttonRect.left - width - gap;
    left = clampPixel(sideCandidate, margin, window.innerWidth - width - margin);
  }

  const top = clampPixel(
    buttonRect.top + buttonRect.height / 2 - height / 2,
    margin,
    window.innerHeight - height - margin,
  );

  popover.style.left = `${Math.round(left)}px`;
  popover.style.top = `${Math.round(top)}px`;
}

function showModuleTranslation(root, button) {
  const popover = root.querySelector("[data-selection-popover]");
  if (!popover) return;
  const frame = button.closest(".annotation-page-frame");
  const highlight = frame?.querySelector("[data-module-highlight-box]");
  const highlightRect = parseRectData(button.dataset.moduleHighlight);
  if (highlight) {
    highlight.style.cssText = rectStyle(highlightRect);
    highlight.hidden = false;
  }
  button.classList.add("is-active");
  popover.dataset.moduleKind = button.dataset.moduleKind || "module";
  popover.innerHTML = `
    <span>${escapeHtml(button.dataset.moduleTitle || "")}</span>
    <p>${escapeHtml(button.dataset.moduleZh || "")}</p>
    <em>${escapeHtml(button.dataset.moduleEn || "")}</em>
  `;
  popover.hidden = false;
  positionModulePopover(popover, button);
}

function activateAnnotationModule(root, button, { forceOpen = false } = {}) {
  const wasActive = button.classList.contains("is-active");
  clearModuleTranslation(root);
  hideSelectionPopover(root);
  if (wasActive && !forceOpen) return;
  showModuleTranslation(root, button);
}

function renderTheoryCourseScores(course, activeSourceId = "zh") {
  if (course.annotationSample) return renderAnnotationReader(course);
  if (course.digitalSample) return renderDigitalTextbookSample(course);

  const safeActiveSource = course.scoreSources.some((source) => source.id === activeSourceId) ? activeSourceId : "zh";
  return `
    <div class="material-reader" data-score-reader>
      <div class="reader-source-head">
        <div>
          <span>digital lesson pack</span>
          <strong>${escapeHtml(course.title)}</strong>
          <em>${escapeHtml(course.source)} · ${escapeHtml(course.scoreNote)}</em>
        </div>
        <nav class="reader-source-switch" aria-label="Material source">
          ${course.scoreSources
            .map(
              (source) => `
                <button
                  type="button"
                  class="${source.id === safeActiveSource ? "is-active" : ""}"
                  data-score-source="${escapeHtml(source.id)}"
                >
                  <b>${escapeHtml(source.label)}</b>
                  <small>${escapeHtml(source.totalPages)} pages</small>
                </button>
              `,
            )
            .join("")}
        </nav>
      </div>
      <div class="reader-source-panels">
        ${course.scoreSources
          .map((source) =>
            source.id === "compare"
              ? renderCompareSourcePanel(course, source, safeActiveSource)
              : renderReaderSourcePanel(course, source, safeActiveSource),
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderTheoryCourseMetro() {
  const metronomeSrc = `https://professional-metronome-c0k.pages.dev/?v=${Date.now()}`;
  return `
    <div class="lesson-metronome-shell">
      <iframe
        class="lesson-metronome-frame"
        src="${metronomeSrc}"
        title="Professional metronome"
        allow="autoplay"
      ></iframe>
    </div>
  `;
}

function renderCourseTabPane(course, tab, activeScoreSource = "zh") {
  if (tab === "audio") return renderTheoryCourseAudio(course);
  if (tab === "score") return renderTheoryCourseScores(course, activeScoreSource);
  if (tab === "metro") return renderTheoryCourseMetro();
  return renderTheoryCourseLesson(course);
}

function renderTheoryCourseDetail(course, courses, activeTab, activeScoreSource = "zh") {
  if (!course) {
    return `<div class="empty-note"><strong>Grade material pending</strong><span>选择 Grade 1 可以查看已拆分的 11 个课时。</span></div>`;
  }

  return `
    <div class="lesson-cover" style="--accent:${escapeHtml(course.accent)}">
      <span class="label-field">Name</span>
      <h3>${escapeHtml(course.title)}</h3>
      <p>${escapeHtml(course.artist)} · ${escapeHtml(course.source)}</p>
      <div class="sticker-grid lesson-fields">
        <p><span>Class</span><b>${escapeHtml(course.classLabel)}</b></p>
        <p><span>Source</span><b>${escapeHtml(course.source)}</b></p>
        <p><span>Type</span><b>${escapeHtml(course.type)}</b></p>
      </div>
      <div class="song-tags">${tagMarkup(course.tags, 5)}</div>
    </div>
    <div class="lesson-main">
      ${renderCourseSelector(courses, course.id)}
      <div class="lesson-tabs" role="tablist" aria-label="${escapeHtml(course.title)} details">
        ${course.tabs
          .map((tab) => {
            const key = tabKey(tab);
            return `<button type="button" class="${activeTab === key ? "is-active" : ""}" data-tab="${key}">${escapeHtml(tab)}</button>`;
          })
          .join("")}
      </div>
      <div class="lesson-content-stack" data-content-stack>
        <div class="lesson-pane" data-tab-panel="lesson" ${activeTab === "lesson" ? "" : "hidden"}>${renderCourseTabPane(course, "lesson", activeScoreSource)}</div>
        <div class="lesson-pane lesson-audio-pane" data-tab-panel="audio" ${activeTab === "audio" ? "" : "hidden"}>${renderCourseTabPane(course, "audio", activeScoreSource)}</div>
        <div class="lesson-pane" data-tab-panel="score" ${activeTab === "score" ? "" : "hidden"}>${renderCourseTabPane(course, "score", activeScoreSource)}</div>
        <div class="lesson-pane lesson-metronome-pane ${activeTab === "metro" ? "" : "is-parked"}" data-tab-panel="metro">${renderCourseTabPane(course, "metro", activeScoreSource)}</div>
      </div>
    </div>
  `;
}

function updateTheoryCourseDetailTab(root, activeTab) {
  root.querySelectorAll("[data-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === activeTab);
  });

  root.querySelectorAll("[data-tab-panel]").forEach((panel) => {
    const isActive = panel.dataset.tabPanel === activeTab;
    if (panel.dataset.tabPanel === "metro") {
      panel.hidden = false;
      panel.classList.toggle("is-parked", !isActive);
    } else {
      panel.hidden = !isActive;
    }
  });
}

function updateScoreSource(root, activeSourceId) {
  root.querySelectorAll("[data-score-source]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.scoreSource === activeSourceId);
  });

  root.querySelectorAll("[data-score-source-panel]").forEach((panel) => {
    const isActive = panel.dataset.scoreSourcePanel === activeSourceId;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
    if (isActive) {
      panel.querySelectorAll('img[loading="lazy"]').forEach((image) => {
        image.loading = "eager";
      });
    }
  });
}

function bindBlankWorkspace(model) {
  const root = document.querySelector("[data-app]");
  const coverGallery = document.getElementById("coverGallery");
  const heroStats = document.getElementById("heroStats");
  const queryInput = document.getElementById("queryInput");
  const levelFilter = document.getElementById("levelFilter");
  const moduleFilter = document.getElementById("moduleFilter");
  const resourceCount = document.getElementById("resourceCount");
  const activeSummary = document.getElementById("activeSummary");
  const tagCloud = document.getElementById("tagCloud");
  const resourceList = document.getElementById("resourceList");
  const courseDetail = document.getElementById("courseDetail");

  if (
    !root ||
    !heroStats ||
    !courseDetail
  ) {
    return;
  }

  const state = {
    query: "",
    level: "all",
    module: "all",
    selectedResourceId: model.resources[0]?.id || "",
    selectedModuleId: model.modules[0]?.id || "",
    selectedGradeId: "grade-1",
    selectedCourseId: "course-01",
    detailTab: "lesson",
    scoreSource: "zh",
  };

  bindCoverGallery(coverGallery, getTheoryCoverGalleryItems(), (grade) => {
    const courses = getTheoryCoursePickerItems(grade.gradeId);
    state.selectedGradeId = grade.gradeId;
    state.selectedCourseId = courses[0]?.id || "";
    state.detailTab = "lesson";
    state.scoreSource = "zh";
    render();
    document.getElementById("lesson")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  levelFilter?.insertAdjacentHTML("beforeend", renderLevelOptions(model));
  moduleFilter?.insertAdjacentHTML("beforeend", renderModuleOptions(model));

  function selectResource(resourceId, shouldScroll = false) {
    const resource = model.resources.find((item) => item.id === resourceId);
    if (!resource) return;
    state.selectedResourceId = resource.id;
    state.selectedModuleId = resource.moduleId;
    render();
    if (shouldScroll) document.getElementById("lesson")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function setLevel(levelId) {
    state.level = levelId;
    render();
  }

  function setQuery(query) {
    state.query = query;
    render();
  }

  function render() {
    const result = searchEmptyWorkspace(model, state.query, {
      level: state.level,
      module: state.module,
    });

    if (!result.resources.some((resource) => resource.id === state.selectedResourceId)) {
      const fallback = result.resources[0] || model.resources[0];
      state.selectedResourceId = fallback?.id || "";
      state.selectedModuleId = fallback?.moduleId || model.modules[0]?.id || "";
    }

    const selectedResource = model.resources.find((resource) => resource.id === state.selectedResourceId);
    if (selectedResource) state.selectedModuleId = selectedResource.moduleId;

    const courses = getTheoryCoursePickerItems(state.selectedGradeId);
    if (!courses.some((course) => course.id === state.selectedCourseId)) {
      state.selectedCourseId = courses[0]?.id || "";
      state.detailTab = "lesson";
      state.scoreSource = "zh";
    }
    const selectedCourse = getTheoryCourseDetail(state.selectedCourseId, state.selectedGradeId);
    const summaryParts = [];
    if (state.query.trim()) summaryParts.push(`搜索：${state.query.trim()}`);
    if (state.level !== "all") summaryParts.push(findLevelById(model.levels, state.level).label);
    if (state.module !== "all") summaryParts.push(findModuleById(model.modules, state.module).title);

    root.dataset.mode = model.mode;
    if (queryInput) queryInput.value = state.query;
    if (levelFilter) levelFilter.value = state.level;
    if (moduleFilter) moduleFilter.value = state.module;
    heroStats.innerHTML = renderStats(model, result);
    if (resourceCount) resourceCount.textContent = `${result.resources.length} 个占位资源`;
    if (activeSummary) activeSummary.textContent = summaryParts.length ? summaryParts.join(" · ") : "全部空白资源位";
    if (tagCloud) tagCloud.innerHTML = renderTagCloud(model, result.resources);
    if (resourceList) resourceList.innerHTML = renderResourceList(model, result.resources, state.selectedResourceId);
    courseDetail.innerHTML = renderTheoryCourseDetail(selectedCourse, courses, state.detailTab, state.scoreSource);

    tagCloud?.querySelectorAll("[data-query]").forEach((button) => {
      button.addEventListener("click", () => setQuery(button.dataset.query));
    });

    resourceList?.querySelectorAll("[data-resource]").forEach((button) => {
      button.addEventListener("click", () => selectResource(button.dataset.resource, true));
    });

    courseDetail.querySelectorAll("[data-course]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedCourseId = button.dataset.course;
        state.detailTab = "lesson";
        state.scoreSource = "zh";
        render();
        document.getElementById("lesson")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    courseDetail.querySelectorAll("[data-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        state.detailTab = button.dataset.tab;
        updateTheoryCourseDetailTab(courseDetail, state.detailTab);
      });
    });

    courseDetail.querySelectorAll("[data-score-source]").forEach((button) => {
      button.addEventListener("click", () => {
        state.scoreSource = button.dataset.scoreSource;
        updateScoreSource(courseDetail, state.scoreSource);
      });
    });

    if (courseDetail.querySelector("[data-annotation-reader]") && !courseDetail.dataset.annotationModuleBound) {
      courseDetail.dataset.annotationModuleBound = "true";
      courseDetail.addEventListener("click", (event) => {
        const button = event.target.closest("[data-annotation-module]");
        if (!button || !courseDetail.contains(button)) {
          if (!event.target.closest("[data-selection-popover]")) {
            clearModuleTranslation(courseDetail);
            hideSelectionPopover(courseDetail);
          }
          return;
        }
        event.preventDefault();
        activateAnnotationModule(courseDetail, button);
      });
      courseDetail.addEventListener("dblclick", (event) => {
        const button = event.target.closest("[data-annotation-module]");
        if (!button || !courseDetail.contains(button)) return;
        event.preventDefault();
        activateAnnotationModule(courseDetail, button, { forceOpen: true });
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          clearModuleTranslation(courseDetail);
          hideSelectionPopover(courseDetail);
        }
      });
    }

  }

  queryInput?.addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
  });

  levelFilter?.addEventListener("change", (event) => setLevel(event.target.value));

  moduleFilter?.addEventListener("change", (event) => {
    state.module = event.target.value;
    render();
  });

  render();
}

if (typeof document !== "undefined") {
  bindBlankWorkspace(createBlankTheoryWorkspace());
}
