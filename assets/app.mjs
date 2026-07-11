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
};

const GRADE_COURSE_PAGE_META = {
  "course-01": { studentPages: [8, 14], answerPages: [2, 5], studentPageCount: 7, answerPageCount: 4 },
  "course-02": { studentPages: [15, 19], answerPages: [6, 8], studentPageCount: 5, answerPageCount: 3 },
  "course-03": { studentPages: [20, 25], answerPages: [8, 11], studentPageCount: 6, answerPageCount: 4 },
  "course-04": { studentPages: [26, 30], answerPages: [12, 14], studentPageCount: 5, answerPageCount: 3 },
  "course-05": { studentPages: [31, 35], answerPages: [14, 17], studentPageCount: 5, answerPageCount: 4 },
  "course-06": { studentPages: [36, 41], answerPages: [18, 20], studentPageCount: 6, answerPageCount: 3 },
  "course-07": { studentPages: [42, 46], answerPages: [21, 23], studentPageCount: 5, answerPageCount: 3 },
  "course-08": { studentPages: [47, 50], answerPages: [24, 26], studentPageCount: 4, answerPageCount: 3 },
  "course-09": { studentPages: [51, 52], answerPages: [26, 27], studentPageCount: 2, answerPageCount: 2 },
  "course-10": { studentPages: [53, 57], answerPages: [27, 29], studentPageCount: 5, answerPageCount: 3 },
  "course-11": { studentPages: [58, 61], answerPages: [29, 30], studentPageCount: 4, answerPageCount: 2 },
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

function hydrateTheoryCourse(item, gradeId) {
  const meta = GRADE_COURSE_PAGE_META[item.id] || {};
  const accent = COURSE_ACCENTS[item.category] || "#24a148";
  const pageLabel =
    meta.studentPages && meta.answerPages
      ? `Student ${meta.studentPages[0]}-${meta.studentPages[1]} · Answers ${meta.answerPages[0]}-${meta.answerPages[1]}`
      : "Pages pending";

  return {
    ...item,
    gradeId,
    classLabel: "Grade 1",
    source: "Discover Theory Grade 1",
    artist: "ABRSM Discovering Music Theory",
    type: "Theory Course",
    style: item.role,
    accent,
    pageLabel,
    tags: [item.category, "Grade 1", "score preview"],
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
    scoreImages: [
      {
        kind: "student",
        title: `${item.title} · 学生页预览`,
        src: `./assets/scores/grade-1/${item.id}/student-page-01.webp`,
        pageCount: meta.studentPageCount || 0,
      },
      {
        kind: "answers",
        title: `${item.title} · 答案页预览`,
        src: `./assets/scores/grade-1/${item.id}/answers-page-01.webp`,
        pageCount: meta.answerPageCount || 0,
      },
    ],
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

function renderTheoryCourseScores(course) {
  return `
    <div class="score-grid">
      ${course.scoreImages
        .map(
          (item) => `
            <figure class="score-card score-sheet">
              <div class="score-image-frame">
                <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.title)}" loading="eager" decoding="async" />
              </div>
              <figcaption>
                <strong>${escapeHtml(item.kind)}</strong>
                <span>${escapeHtml(item.pageCount)} pages mapped</span>
              </figcaption>
            </figure>
          `,
        )
        .join("")}
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

function renderCourseTabPane(course, tab) {
  if (tab === "audio") return renderTheoryCourseAudio(course);
  if (tab === "score") return renderTheoryCourseScores(course);
  if (tab === "metro") return renderTheoryCourseMetro();
  return renderTheoryCourseLesson(course);
}

function renderTheoryCourseDetail(course, courses, activeTab) {
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
        <div class="lesson-pane" data-tab-panel="lesson" ${activeTab === "lesson" ? "" : "hidden"}>${renderCourseTabPane(course, "lesson")}</div>
        <div class="lesson-pane lesson-audio-pane" data-tab-panel="audio" ${activeTab === "audio" ? "" : "hidden"}>${renderCourseTabPane(course, "audio")}</div>
        <div class="lesson-pane" data-tab-panel="score" ${activeTab === "score" ? "" : "hidden"}>${renderCourseTabPane(course, "score")}</div>
        <div class="lesson-pane lesson-metronome-pane ${activeTab === "metro" ? "" : "is-parked"}" data-tab-panel="metro">${renderCourseTabPane(course, "metro")}</div>
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
  };

  bindCoverGallery(coverGallery, getTheoryCoverGalleryItems(), (grade) => {
    const courses = getTheoryCoursePickerItems(grade.gradeId);
    state.selectedGradeId = grade.gradeId;
    state.selectedCourseId = courses[0]?.id || "";
    state.detailTab = "lesson";
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
    courseDetail.innerHTML = renderTheoryCourseDetail(selectedCourse, courses, state.detailTab);

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
