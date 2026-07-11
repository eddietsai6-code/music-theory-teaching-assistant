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
    <nav class="grade-quick-switch" aria-label="Theory grade switch">
      ${items
        .map(
          (item, index) => `
            <button
              type="button"
              class="${index === 0 ? "is-active" : ""}"
              data-grade-select="${escapeHtml(item.gradeId || "")}"
              data-index="${index}"
            >
              <span>${escapeHtml(item.title)}</span>
              <small>${escapeHtml(item.tags[0] || "theory")}</small>
            </button>
          `,
        )
        .join("")}
    </nav>
  `;
}

function bindCoverGallery(root, items, onSelectGrade) {
  if (!root || !items.length) return;

  renderCoverGallery(root, items);

  const cards = [...root.querySelectorAll("[data-gallery-card]")];
  const quickButtons = [...root.querySelectorAll("[data-grade-select]")];
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

  function setActiveGrade(index) {
    quickButtons.forEach((button) => {
      button.classList.toggle("is-active", Number(button.dataset.index || 0) === index);
    });
  }

  function selectCard(card) {
    const index = Number(card.dataset.index || 0);
    state.target = index;
    snapTarget();
    setActiveGrade(index);
    onSelectGrade?.(items[index]);
  }

  cards.forEach((card) => {
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectCard(card);
    });
  });

  quickButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index || 0);
      selectCard(cards[index]);
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

function renderLevelBoard(model, activeLevel) {
  return model.levels
    .map(
      (level) => `
        <button
          class="level-label chroma-card${level.id === activeLevel ? " is-active" : ""}"
          type="button"
          data-level="${escapeHtml(level.id)}"
          style="--accent:${escapeHtml(level.color)}"
        >
          <span class="level-kicker">${escapeHtml(level.short)}</span>
          <strong>${escapeHtml(level.label)}</strong>
          <small>${escapeHtml(level.core)}</small>
          <div class="level-meta">
            <em>${level.moduleCount} 模块</em>
            <em>0 资料</em>
          </div>
        </button>
      `,
    )
    .join("");
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

function renderTheoryCourseScores(course, activeSourceId = "zh") {
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
  });
}

function bindBlankWorkspace(model) {
  const root = document.querySelector("[data-app]");
  const coverGallery = document.getElementById("coverGallery");
  const heroStats = document.getElementById("heroStats");
  const levelBoard = document.getElementById("levelBoard");
  const levelSummary = document.getElementById("levelSummary");
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
    !levelBoard ||
    !levelSummary ||
    !queryInput ||
    !levelFilter ||
    !moduleFilter ||
    !resourceCount ||
    !activeSummary ||
    !tagCloud ||
    !resourceList ||
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

  levelFilter.insertAdjacentHTML("beforeend", renderLevelOptions(model));
  moduleFilter.insertAdjacentHTML("beforeend", renderModuleOptions(model));

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

    const activeModule = findModuleById(model.modules, state.selectedModuleId);
    const activeLevel = state.level === "all" ? activeModule.level : state.level;
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
    queryInput.value = state.query;
    levelFilter.value = state.level;
    moduleFilter.value = state.module;
    heroStats.innerHTML = renderStats(model, result);
    levelBoard.innerHTML = renderLevelBoard(model, activeLevel);
    levelSummary.textContent = `${result.levels.length} 个阶段 · ${result.modules.length} 个模块 · 0 个真实资料`;
    resourceCount.textContent = `${result.resources.length} 个占位资源`;
    activeSummary.textContent = summaryParts.length ? summaryParts.join(" · ") : "全部空白资源位";
    tagCloud.innerHTML = renderTagCloud(model, result.resources);
    resourceList.innerHTML = renderResourceList(model, result.resources, state.selectedResourceId);
    courseDetail.innerHTML = renderTheoryCourseDetail(selectedCourse, courses, state.detailTab, state.scoreSource);

    levelBoard.querySelectorAll("[data-level]").forEach((button) => {
      button.addEventListener("click", () => setLevel(button.dataset.level));
    });

    tagCloud.querySelectorAll("[data-query]").forEach((button) => {
      button.addEventListener("click", () => setQuery(button.dataset.query));
    });

    resourceList.querySelectorAll("[data-resource]").forEach((button) => {
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
  }

  queryInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
  });

  levelFilter.addEventListener("change", (event) => setLevel(event.target.value));

  moduleFilter.addEventListener("change", (event) => {
    state.module = event.target.value;
    render();
  });

  render();
}

if (typeof document !== "undefined") {
  bindBlankWorkspace(createBlankTheoryWorkspace());
}
