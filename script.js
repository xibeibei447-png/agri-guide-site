const problems = [
  {
    id: "lodging",
    icon: "倒",
    image: "images/1-倒伏.jpg",
    title: "倒伏、茎秆弱",
    crop: "小麦 / 水稻 / 玉米",
    intro:
      "倒伏优先判断密度、施肥、品种和风雨影响。药剂更多用于前期控旺防倒，已经倒伏后不建议盲目补药。",
    tags: ["控旺", "壮秆", "防倒"],
    causes: ["播种密度偏大，田间通风透光差", "氮肥偏多、钾肥不足，茎秆韧性下降", "根系浅、基部病害或蛀茎害虫造成支撑力弱", "强风、暴雨等天气诱发倒伏"],
    actions: ["前期合理密植，控氮增钾，培育壮苗", "拔节前后按当地建议使用调节剂控旺", "排查茎基腐病、纹枯病、玉米螟等病虫害", "已倒伏田块重点排水、扶理和减少二次损伤"],
    chemicals: [
      ["多效唑", "常用于控旺、矮化、增强抗倒方向"],
      ["矮壮素", "小麦等作物控旺防倒方向常见"],
      ["烯效唑", "控旺、缩短节间、壮秆方向"],
      ["芸苔素内酯", "逆境调节方向，不能替代防倒措施"],
    ],
    warnings: ["植物生长调节剂对时期和用量很敏感，过量可能抑制生长。", "玉米倒伏常与密度、品种和风雨有关，不能简单理解为缺某一种药。"],
  },
  {
    id: "yellowing",
    icon: "黄",
    image: "images/2-发黄.jpg",
    title: "叶片发黄、长势弱",
    crop: "小麦 / 水稻 / 玉米 / 大豆",
    intro:
      "发黄原因很多，可能是缺肥、积水、低温、药害、根系差，也可能是病虫害。建议先看分布和新老叶表现。",
    tags: ["发黄", "药害", "缺素"],
    causes: ["缺氮、缺锌、缺铁等营养问题", "积水沤根、低温寡照导致吸收能力下降", "除草剂药害或前茬残留影响", "根腐病、纹枯病、飞虱蚜虫等造成长势衰弱"],
    actions: ["先排水、松土、改善根系环境", "按缺素表现补充叶面肥或中微量元素", "疑似药害时先缓解逆境，避免叠加刺激性药剂", "发现病虫害再按具体对象选择杀菌剂或杀虫剂"],
    chemicals: [
      ["芸苔素内酯", "常用于缓解逆境、恢复长势方向"],
      ["氨基酸叶面肥", "用于弱苗恢复和营养补充方向"],
      ["噻呋酰胺", "根腐、茎基部病害方向需结合登记作物"],
      ["吡虫啉", "蚜虫、飞虱等刺吸式害虫方向"],
    ],
    warnings: ["发黄不是单一病害名称，不能只凭颜色直接下药。", "叶面肥和调节剂也要避开高温、强光和作物敏感期。"],
  },
  {
    id: "leaf-disease",
    icon: "斑",
    image: "images/3-病斑.jpg",
    title: "叶片病斑、锈病、白粉",
    crop: "小麦 / 水稻 / 玉米",
    intro:
      "叶部病害要看病斑形状、颜色和扩展速度。小麦锈病、白粉病，水稻稻瘟病，玉米大小斑病都适合做单独页面。",
    tags: ["杀菌", "叶斑", "锈病"],
    causes: ["高湿、密度大、通风差促进病害传播", "感病品种和连作田块发病风险较高", "前期未及时预防，病斑快速扩展", "偏施氮肥导致植株抗性下降"],
    actions: ["识别具体病害后选择登记杀菌剂", "发病初期喷施效果通常好于重病后补救", "轮换不同作用机理药剂，减缓抗性", "结合清沟排水、降低田间湿度"],
    chemicals: [
      ["戊唑醇", "锈病、白粉病、纹枯病等方向常见"],
      ["苯醚甲环唑", "多种叶部病害方向"],
      ["吡唑醚菌酯", "叶部病害保护和治疗方向，常见于复配"],
      ["三环唑", "水稻稻瘟病方向经典成分"],
      ["井冈霉素", "水稻纹枯病方向常见"],
    ],
    warnings: ["杀菌剂要看登记对象，不能把一种病害药随意套到所有作物。", "病害严重时应结合多次防治和田间管理，而不是单次喷药期待完全恢复。"],
  },
  {
    id: "borer",
    icon: "虫",
    image: "images/4-钻心虫卷叶虫.jpg",
    title: "钻心虫、卷叶虫、夜蛾",
    crop: "水稻 / 玉米 / 小麦",
    intro:
      "鳞翅目害虫幼虫会造成卷叶、钻蛀、断心和缺刻。低龄幼虫期防治通常更容易。",
    tags: ["杀虫", "鳞翅目", "低龄幼虫"],
    causes: ["成虫迁入或田间虫源积累", "防治时期偏晚，幼虫钻入茎秆后药剂难接触", "连片种植、杂草多，为害虫提供栖息条件", "长期使用同类药剂导致抗性上升"],
    actions: ["结合虫情监测，在卵孵盛期至低龄幼虫期防治", "水稻重点看稻纵卷叶螟，玉米重点看草地贪夜蛾和玉米螟", "轮换药剂作用机理，避免单一成分连续使用", "清除田边杂草，减少虫源"],
    chemicals: [
      ["氯虫苯甲酰胺", "螟虫、卷叶螟、草地贪夜蛾方向常见"],
      ["甲维盐", "多种鳞翅目幼虫方向常见"],
      ["茚虫威", "夜蛾、粘虫、卷叶螟方向"],
      ["高效氯氟氰菊酯", "速效触杀方向，注意抗性和天敌影响"],
    ],
    warnings: ["钻蛀类害虫进入茎秆后防治难度会明显增加。", "注意保护天敌，避免不必要的高频次广谱杀虫剂使用。"],
  },
  {
    id: "sap-sucking",
    icon: "吸",
    image: "images/5-蚜虫飞虱.jpg",
    title: "蚜虫、飞虱等刺吸式害虫",
    crop: "小麦 / 水稻 / 玉米 / 大豆",
    intro:
      "刺吸式害虫会造成卷叶、发黄、煤污、传播病毒或水稻冒穿。重点看虫量、虫龄和田间分布。",
    tags: ["蚜虫", "飞虱", "传毒"],
    causes: ["温暖干燥或高湿郁闭环境利于繁殖", "偏施氮肥造成植株柔嫩，虫口增长快", "外来迁飞虫源进入", "长期单一用药导致抗性"],
    actions: ["达到防治指标后及时处理，重点喷到虫体栖息部位", "水稻飞虱注意田间下部和基部虫量", "小麦蚜虫兼顾传毒和穗期为害", "轮换新烟碱类、吡啶类等不同机理药剂"],
    chemicals: [
      ["吡虫啉", "蚜虫、飞虱方向常见"],
      ["啶虫脒", "蚜虫、蓟马、飞虱方向"],
      ["吡蚜酮", "稻飞虱、蚜虫方向"],
      ["烯啶虫胺", "飞虱、蚜虫方向"],
      ["呋虫胺", "飞虱等刺吸式害虫方向"],
    ],
    warnings: ["不同地区飞虱抗性差异较大，建议参考当地植保站用药意见。", "花期或附近有蜂源时要特别注意药剂对授粉昆虫的风险。"],
  },
  {
    id: "weeds",
    icon: "草",
    image: "images/6-杂草.jpg",
    title: "田间杂草多",
    crop: "小麦 / 水稻 / 玉米",
    intro:
      "除草剂要按作物、杂草种类、生育期和后茬作物选择。错误用药比不用药更容易造成损失。",
    tags: ["除草", "禾本科", "阔叶草"],
    causes: ["封闭除草不到位或雨水条件不合适", "杂草草龄过大，苗后防治困难", "抗性杂草增多", "作物品种、生育期或天气不适合施药"],
    actions: ["先分清禾本科、阔叶草、莎草，再选药", "小麦、水稻、玉米除草剂不能互相套用", "严格按苗龄、草龄、温度和土壤墒情施药", "注意后茬作物安全和漂移风险"],
    chemicals: [
      ["炔草酯", "小麦田部分禾本科杂草方向"],
      ["双氟磺草胺", "小麦田阔叶杂草方向"],
      ["氰氟草酯", "水稻田千金子等方向"],
      ["五氟磺草胺", "水稻田稗草等方向"],
      ["烟嘧磺隆", "玉米苗后杂草方向"],
      ["硝磺草酮", "玉米苗后阔叶及部分禾本科杂草方向"],
    ],
    warnings: ["除草剂药害风险高，必须核对作物品种、苗龄、草龄和天气。", "含莠去津等成分要特别注意后茬作物限制。"],
  },
];

const chemicalDetails = {
  多效唑: {
    effect: "抑制徒长，缩短节间，帮助茎秆更结实，主要用于前期控旺防倒。",
    method: "适合在作物旺长、倒伏风险出现前使用，已倒伏后作用有限；具体时期和用量必须按标签执行。",
    value: "性价比较高",
    caution: "过量容易抑制生长，苗弱、干旱或低温时要谨慎。",
  },
  矮壮素: {
    effect: "控制营养生长，促进植株矮壮，常用于小麦等作物防倒伏。",
    method: "一般用于拔节前后控旺，需结合苗情、密度和肥水情况判断。",
    value: "性价比较高",
    caution: "弱苗、受冻苗、干旱田不宜盲目使用。",
  },
  烯效唑: {
    effect: "控旺能力较强，可缩短节间、提高抗倒能力。",
    method: "适合旺长田块前期调控，按登记作物和推荐剂量使用。",
    value: "中等成本",
    caution: "调节剂类都怕过量，宁可先做小面积试用。",
  },
  芸苔素内酯: {
    effect: "缓解逆境、促进恢复长势，常用于低温、药害、弱苗后的调节。",
    method: "多与叶面肥配合使用，作为恢复和辅助调节，不是直接杀虫杀菌药。",
    value: "中等成本",
    caution: "不能替代杀菌剂、杀虫剂或防倒措施。",
  },
  氨基酸叶面肥: {
    effect: "补充营养，帮助弱苗恢复，提高叶片活力。",
    method: "适合发黄、弱苗、根系吸收差时作叶面补充，注意避开高温强光。",
    value: "性价比较高",
    caution: "如果根部积水或病虫害未解决，单喷叶面肥效果有限。",
  },
  噻呋酰胺: {
    effect: "偏向防治纹枯病、茎基部病害等真菌性病害。",
    method: "发现基部病害或纹枯病趋势时使用，喷施要尽量覆盖病部附近。",
    value: "中等成本",
    caution: "必须核对登记作物和病害对象。",
  },
  吡虫啉: {
    effect: "防治蚜虫、飞虱等刺吸式害虫，兼具内吸传导特点。",
    method: "虫口达到防治指标时使用，重点喷到害虫聚集部位。",
    value: "性价比较高",
    caution: "部分地区抗性较明显，花期注意对授粉昆虫风险。",
  },
  戊唑醇: {
    effect: "三唑类杀菌剂，对锈病、白粉病、纹枯病等方向常见。",
    method: "适合发病初期或预防性使用，重病田需结合复配和间隔再防。",
    value: "性价比较高",
    caution: "连续使用同类三唑药易增加抗性风险。",
  },
  苯醚甲环唑: {
    effect: "内吸性杀菌剂，对多种叶部病害有保护和治疗作用。",
    method: "病斑初现时效果较好，可与不同机理药剂轮换。",
    value: "中等成本",
    caution: "不要把一种杀菌剂套用到所有病害。",
  },
  吡唑醚菌酯: {
    effect: "保护性和治疗性兼有，常用于叶部病害复配方案。",
    method: "适合病害初期或高发前使用，喷雾要均匀覆盖叶片。",
    value: "成本偏高但效果稳定",
    caution: "避免长期单独连续使用。",
  },
  三环唑: {
    effect: "水稻稻瘟病方向经典成分，偏预防和早期控制。",
    method: "适合稻瘟病发生风险高或初发阶段使用。",
    value: "性价比较高",
    caution: "重病后单用补救能力有限。",
  },
  井冈霉素: {
    effect: "水稻纹枯病方向常见，偏保护和控制扩展。",
    method: "纹枯病发生初期使用，注意喷到稻株中下部。",
    value: "性价比较高",
    caution: "病情重时需要结合其他管理措施。",
  },
  氯虫苯甲酰胺: {
    effect: "对螟虫、卷叶螟、草地贪夜蛾等鳞翅目害虫效果较稳。",
    method: "低龄幼虫期使用更合适，钻蛀进入茎秆后难度增加。",
    value: "成本偏高但持效较好",
    caution: "注意轮换作用机理，避免抗性上升。",
  },
  甲维盐: {
    effect: "对多种鳞翅目幼虫有效，速效性较好。",
    method: "适合低龄幼虫期喷施，可与其他成分复配增强持效。",
    value: "性价比较高",
    caution: "高温强光下使用要注意安全性和药效稳定。",
  },
  茚虫威: {
    effect: "对夜蛾、粘虫、卷叶螟等咀嚼式害虫常见。",
    method: "虫龄较小时防治效果更好，喷雾覆盖虫体活动区域。",
    value: "中等成本",
    caution: "与同类杀虫剂轮换使用。",
  },
  高效氯氟氰菊酯: {
    effect: "触杀速效强，适合快速压低部分害虫数量。",
    method: "虫量高时可作快速处理，但持效和抗性要考虑。",
    value: "价格较低",
    caution: "对天敌影响较大，不建议频繁使用。",
  },
  啶虫脒: {
    effect: "防治蚜虫、蓟马、飞虱等刺吸式害虫。",
    method: "虫量上升初期使用，喷到叶背和虫体聚集处。",
    value: "性价比较高",
    caution: "与吡虫啉等同类药剂注意轮换。",
  },
  吡蚜酮: {
    effect: "稻飞虱、蚜虫方向常见，对刺吸式害虫有较好针对性。",
    method: "水稻飞虱要重点喷到植株基部和下部。",
    value: "中等成本",
    caution: "不同地区抗性差异较大。",
  },
  烯啶虫胺: {
    effect: "对飞虱、蚜虫等刺吸式害虫有较快控制作用。",
    method: "适合虫口上升期使用，可与不同机理药剂轮换。",
    value: "中等成本",
    caution: "注意安全间隔期和授粉昆虫风险。",
  },
  呋虫胺: {
    effect: "新烟碱类杀虫剂，对飞虱等刺吸式害虫常见。",
    method: "按虫情和标签使用，注意喷雾均匀。",
    value: "中等成本",
    caution: "避免与同类药剂长期连续使用。",
  },
  炔草酯: {
    effect: "小麦田部分禾本科杂草方向常见。",
    method: "看准小麦苗龄、杂草草龄和温度条件后使用。",
    value: "性价比较高",
    caution: "除草剂药害风险高，必须核对标签。",
  },
  双氟磺草胺: {
    effect: "小麦田阔叶杂草方向常见。",
    method: "适合阔叶草较小时使用，注意与禾本科杂草药区分。",
    value: "性价比较高",
    caution: "低温、弱苗、重叠喷施都可能增加药害。",
  },
  氰氟草酯: {
    effect: "水稻田千金子等禾本科杂草方向常见。",
    method: "按草龄和水层管理使用，喷后田间管理会影响效果。",
    value: "中等成本",
    caution: "水稻除草剂不能直接套到其他作物。",
  },
  五氟磺草胺: {
    effect: "水稻田稗草等杂草方向常见。",
    method: "适合水稻田苗后除草，需结合杂草种类选择。",
    value: "中等成本",
    caution: "抗性稗草地区效果可能下降。",
  },
  烟嘧磺隆: {
    effect: "玉米苗后杂草方向常见。",
    method: "严格按玉米叶龄、品种和温度使用。",
    value: "性价比较高",
    caution: "甜玉米、糯玉米或敏感品种要特别谨慎。",
  },
  硝磺草酮: {
    effect: "玉米苗后阔叶及部分禾本科杂草方向常见。",
    method: "适合玉米苗后杂草较小时使用，常见于复配方案。",
    value: "中等成本",
    caution: "注意后茬作物和低温药害风险。",
  },
};

const problemGrid = document.querySelector("#problemGrid");
const prevProblem = document.querySelector("#prevProblem");
const nextProblem = document.querySelector("#nextProblem");
const selectedCrop = document.querySelector("#selectedCrop");
const selectedImage = document.querySelector("#selectedImage");
const selectedTitle = document.querySelector("#selectedTitle");
const selectedIntro = document.querySelector("#selectedIntro");
const causeList = document.querySelector("#causeList");
const actionList = document.querySelector("#actionList");
const chemicalList = document.querySelector("#chemicalList");
const warningList = document.querySelector("#warningList");

function createListItems(items, target) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function selectProblem(id, shouldScroll = true) {
  const problem = problems.find((item) => item.id === id) || problems[0];

  selectedCrop.textContent = problem.crop;
  selectedImage.src = problem.image;
  selectedImage.alt = `${problem.title}的田间照片`;
  selectedTitle.textContent = problem.title;
  selectedIntro.textContent = problem.intro;

  createListItems(problem.causes, causeList);
  createListItems(problem.actions, actionList);
  createListItems(problem.warnings, warningList);

  chemicalList.innerHTML = "";
  problem.chemicals.forEach(([name, description]) => {
    const detail = chemicalDetails[name] || {
      effect: description,
      method: "按产品标签、登记作物和当地植保建议使用。",
      value: "视产品而定",
      caution: "使用前核对标签和安全间隔期。",
    };
    const card = document.createElement("article");
    card.className = "chemical";
    card.innerHTML = `
      <div class="chemical-head">
        <strong>${name}</strong>
        <span>${detail.value}</span>
      </div>
      <p class="chemical-summary">${description}</p>
      <dl class="chemical-detail">
        <div><dt>功效</dt><dd>${detail.effect}</dd></div>
        <div><dt>用法</dt><dd>${detail.method}</dd></div>
        <div><dt>注意</dt><dd>${detail.caution}</dd></div>
      </dl>
    `;
    chemicalList.appendChild(card);
  });

  document.querySelectorAll("[data-problem]").forEach((element) => {
    element.classList.toggle("active", element.dataset.problem === problem.id);
  });

  if (shouldScroll) {
    document.querySelector("#solution").scrollIntoView({ behavior: "smooth" });
  }
}

problems.forEach((problem) => {
  const card = document.createElement("button");
  card.className = "problem-card";
  card.type = "button";
  card.dataset.problem = problem.id;
  card.innerHTML = `
    <span class="problem-photo"><img src="${problem.image}" alt="${problem.title}的田间照片" loading="lazy" /></span>
    <div>
      <h3>${problem.title}</h3>
      <p>${problem.intro}</p>
    </div>
    <div class="tag-row">
      ${problem.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;
  card.addEventListener("click", () => selectProblem(problem.id));
  problemGrid.appendChild(card);
});

function slideProblems(direction) {
  const firstCard = problemGrid.querySelector(".problem-card");
  const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 320;
  problemGrid.scrollBy({
    left: direction * (cardWidth + 18),
    behavior: "smooth",
  });
}

prevProblem.addEventListener("click", () => slideProblems(-1));
nextProblem.addEventListener("click", () => slideProblems(1));

selectProblem("lodging", false);
