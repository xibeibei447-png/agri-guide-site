const problems = [
  {
    id: "wheat-lodging",
    image: "images/crops/cards/wheat-lodging.jpg",
    title: "小麦倒伏、茎秆弱",
    crop: "小麦",
    intro: "常见于密度偏大、氮肥偏多或风雨后。已经倒伏后不建议盲目补药，重点减少二次损伤。",
    tags: ["倒伏", "控旺", "壮秆"],
    causes: ["播种密度偏大，群体郁闭", "氮肥偏多、钾肥不足，茎秆韧性下降", "品种抗倒性弱，或风雨天气诱发"],
    actions: ["前期合理密植，控氮增钾", "拔节前后旺长田按标签使用调节剂", "已倒伏田块重点排水，避免强行扶苗造成折断"],
    chemicals: [["多效唑", "控旺、矮化、增强抗倒方向"], ["矮壮素", "小麦控旺防倒方向常见"], ["烯效唑", "缩短节间、壮秆方向"]],
    warnings: ["调节剂对时期和用量敏感，弱苗、冻害苗、旱田慎用。"],
  },
  {
    id: "wheat-fusarium-head-blight",
    image: "images/crops/cards/wheat-fusarium-head-blight.jpg",
    title: "小麦赤霉病、白穗",
    crop: "小麦",
    intro: "抽穗扬花期遇连阴雨风险高，病穗常见局部或整穗发白，后期可能影响籽粒质量。",
    tags: ["赤霉病", "白穗", "扬花期"],
    causes: ["扬花期阴雨、高湿、田间通风差", "秸秆残留和感病品种增加菌源", "防治窗口错过后补救效果下降"],
    actions: ["重点盯住抽穗扬花期预防", "雨水多时关注当地植保预警", "发病后减少病粒混入，收获和储粮注意干燥"],
    chemicals: [["戊唑醇", "赤霉病及叶部病害方向常见"], ["吡唑醚菌酯", "常见于复配保护和治疗方案"], ["苯醚甲环唑", "多种真菌病害方向"]],
    warnings: ["赤霉病重在适期预防，见到白穗后再喷药通常效果有限。"],
  },
  {
    id: "wheat-rust",
    image: "images/crops/cards/wheat-rust.jpg",
    title: "小麦锈病",
    crop: "小麦",
    intro: "叶片出现橙黄色或红褐色粉状孢子堆，严重时叶片早衰，影响灌浆。",
    tags: ["锈病", "叶部病害", "杀菌"],
    causes: ["温湿条件适宜，病菌随气流传播", "感病品种和密度大田块风险更高", "前期未及时控制导致快速扩展"],
    actions: ["发病初期及时识别并处理", "保护旗叶和上部功能叶", "轮换不同作用机理杀菌剂"],
    chemicals: [["戊唑醇", "锈病、白粉病方向常见"], ["苯醚甲环唑", "叶部病害方向"], ["吡唑醚菌酯", "保护和治疗方向，常用于复配"]],
    warnings: ["不要长期连续单用同一类三唑药剂。"],
  },
  {
    id: "wheat-powdery-mildew",
    image: "images/crops/cards/wheat-powdery-mildew.jpg",
    title: "小麦白粉病",
    crop: "小麦",
    intro: "叶片和叶鞘出现白色粉层，密度大、通风差的麦田更容易发生。",
    tags: ["白粉病", "叶部病害", "高湿"],
    causes: ["田间郁闭，湿度高", "氮肥偏多，植株柔嫩", "感病品种或早期病源积累"],
    actions: ["降低群体郁闭，合理水肥", "初发期保护上部叶片", "结合锈病等叶部病害统一防控"],
    chemicals: [["戊唑醇", "白粉病方向常见"], ["苯醚甲环唑", "多种叶部真菌病害方向"], ["吡唑醚菌酯", "保护和治疗方向"]],
    warnings: ["病害严重时需要结合田间管理，不能只依赖一次喷药。"],
  },
  {
    id: "wheat-aphids",
    image: "images/crops/cards/wheat-aphids.jpg",
    title: "小麦蚜虫",
    crop: "小麦",
    intro: "蚜虫聚集在叶片、茎秆或穗部吸汁，可造成发黄、煤污，也可能传播病毒。",
    tags: ["蚜虫", "刺吸式害虫", "传毒"],
    causes: ["温暖干燥利于虫口增长", "偏施氮肥导致植株柔嫩", "田边杂草和邻近虫源迁入"],
    actions: ["查看虫量、天敌和穗期危害程度", "达到防治指标后再用药", "喷雾重点覆盖虫体聚集部位"],
    chemicals: [["吡虫啉", "蚜虫方向常见"], ["啶虫脒", "蚜虫、蓟马方向"], ["烯啶虫胺", "刺吸式害虫方向"]],
    warnings: ["花期或周边有蜂源时注意药剂对授粉昆虫风险。"],
  },
  {
    id: "rice-blast",
    image: "images/crops/cards/rice-blast.jpg",
    title: "水稻稻瘟病",
    crop: "水稻",
    intro: "叶片常见梭形病斑，穗颈瘟会造成白穗或结实差，是水稻重要病害之一。",
    tags: ["稻瘟病", "叶瘟", "穗颈瘟"],
    causes: ["低温阴雨、高湿寡照", "偏施氮肥，植株抗性下降", "感病品种或老病区菌源多"],
    actions: ["苗叶期看叶瘟，抽穗前后重点防穗颈瘟", "高风险田块按预警提前预防", "合理氮肥，避免贪青"],
    chemicals: [["三环唑", "稻瘟病方向经典成分"], ["吡唑醚菌酯", "叶部病害保护和治疗方向"], ["苯醚甲环唑", "多种真菌病害方向"]],
    warnings: ["穗颈瘟重在抽穗前后预防，发病后补救能力有限。"],
  },
  {
    id: "rice-sheath-blight",
    image: "images/crops/cards/rice-sheath-blight.jpg",
    title: "水稻纹枯病",
    crop: "水稻",
    intro: "多从稻株中下部叶鞘开始，出现云纹状或椭圆形病斑，高温高湿下扩展快。",
    tags: ["纹枯病", "中下部", "高湿"],
    causes: ["密度大，田间湿度高", "偏施氮肥，群体郁闭", "连作田块菌核残留多"],
    actions: ["重点喷到稻株中下部", "控制氮肥，改善通风透光", "病斑上升前及时控制"],
    chemicals: [["井冈霉素", "水稻纹枯病方向常见"], ["噻呋酰胺", "纹枯病、茎基部病害方向"], ["苯醚甲环唑", "多种真菌病害方向"]],
    warnings: ["只喷上部叶片容易漏掉病部。"],
  },
  {
    id: "rice-bacterial-blight",
    image: "images/crops/cards/rice-bacterial-blight.jpg",
    title: "水稻白叶枯病",
    crop: "水稻",
    intro: "叶缘或叶尖出现黄白色枯斑，沿叶缘扩展，台风暴雨或伤口多时风险上升。",
    tags: ["白叶枯", "细菌病害", "叶缘枯"],
    causes: ["风雨造成伤口，病菌随水传播", "低洼积水、氮肥偏多", "感病品种和老病区"],
    actions: ["先排水降湿，避免串灌漫灌", "发现初期及时控制扩展", "选抗病品种和减少伤口传播"],
    chemicals: [["春雷霉素", "细菌性病害方向常见"], ["噻唑锌", "细菌性病害方向"], ["枯草芽孢杆菌", "生防和辅助抑菌方向"]],
    warnings: ["细菌病害用药效果受天气和发病阶段影响很大。"],
  },
  {
    id: "rice-planthopper",
    image: "images/crops/cards/rice-planthopper.jpg",
    title: "水稻飞虱、冒穿",
    crop: "水稻",
    intro: "飞虱多聚集在稻株基部吸汁，严重时出现成片枯黄冒穿。",
    tags: ["飞虱", "刺吸式害虫", "冒穿"],
    causes: ["迁飞虫源进入，田间下部虫量高", "偏施氮肥，植株柔嫩", "长期单一用药导致抗性"],
    actions: ["拨开稻丛看基部虫量", "达到指标后重点喷到下部", "轮换药剂机理，保护天敌"],
    chemicals: [["吡蚜酮", "稻飞虱方向"], ["呋虫胺", "飞虱等刺吸式害虫方向"], ["烯啶虫胺", "飞虱、蚜虫方向"]],
    warnings: ["不同地区飞虱抗性差异大，优先参考当地植保意见。"],
  },
  {
    id: "rice-stem-borer",
    image: "images/crops/cards/rice-stem-borer.jpg",
    title: "水稻螟虫、钻心虫",
    crop: "水稻",
    intro: "幼虫钻蛀茎秆，可造成枯心苗、白穗，进入茎秆后药剂接触难度增加。",
    tags: ["螟虫", "钻心虫", "低龄幼虫"],
    causes: ["成虫产卵和虫源积累", "防治时期偏晚", "田边杂草或邻近田块虫源"],
    actions: ["关注卵孵盛期和低龄幼虫期", "及时处理枯心苗、白穗风险田", "清除田边杂草，减少虫源"],
    chemicals: [["氯虫苯甲酰胺", "螟虫、卷叶螟方向"], ["甲维盐", "鳞翅目幼虫方向"], ["茚虫威", "夜蛾、卷叶螟方向"]],
    warnings: ["钻入茎秆后防治难度明显增加。"],
  },
  {
    id: "corn-northern-leaf-blight",
    image: "images/crops/cards/corn-northern-leaf-blight.jpg",
    title: "玉米大斑病",
    crop: "玉米",
    intro: "叶片出现长梭形或船形褐色大病斑，湿度高时扩展快，影响功能叶。",
    tags: ["大斑病", "叶部病害", "杀菌"],
    causes: ["多雨高湿，田间残体菌源多", "感病品种，密度大通风差", "病斑上升到穗位叶以上影响更大"],
    actions: ["重点保护穗位叶及以上叶片", "发病初期及时处理", "轮作、清理病残体降低菌源"],
    chemicals: [["苯醚甲环唑", "叶部病害方向"], ["吡唑醚菌酯", "保护和治疗方向"], ["戊唑醇", "多种真菌病害方向"]],
    warnings: ["重病后叶片坏死难以恢复，重在早期控制。"],
  },
  {
    id: "corn-common-rust",
    image: "images/crops/cards/corn-common-rust.jpg",
    title: "玉米锈病",
    crop: "玉米",
    intro: "叶片两面可见橙褐色突起孢子堆，湿度高、露水重时更容易发生。",
    tags: ["锈病", "叶部病害", "孢子堆"],
    causes: ["冷凉潮湿、叶面湿润时间长", "病菌随气流传播", "感病品种或田间通风差"],
    actions: ["发病初期判断严重程度", "保护中上部功能叶", "与其他叶部病害统筹防治"],
    chemicals: [["戊唑醇", "锈病方向常见"], ["苯醚甲环唑", "叶部病害方向"], ["吡唑醚菌酯", "常见复配方向"]],
    warnings: ["轻发生不一定需要用药，需结合叶位和扩展速度判断。"],
  },
  {
    id: "corn-fall-armyworm",
    image: "images/crops/cards/corn-fall-armyworm.jpg",
    title: "玉米草地贪夜蛾、螟虫",
    crop: "玉米",
    intro: "心叶和叶片出现缺刻、孔洞和虫粪，低龄幼虫期防治更容易。",
    tags: ["草地贪夜蛾", "玉米螟", "虫粪"],
    causes: ["成虫迁入或田间虫源积累", "幼虫钻入心叶或茎秆后难接触", "连续种植和杂草增加虫源"],
    actions: ["重点看心叶和虫粪", "低龄幼虫期及时防治", "轮换药剂作用机理"],
    chemicals: [["氯虫苯甲酰胺", "草地贪夜蛾、玉米螟方向"], ["甲维盐", "鳞翅目幼虫方向"], ["茚虫威", "夜蛾、粘虫方向"]],
    warnings: ["虫龄越大、钻蛀越深，药效越难保证。"],
  },
  {
    id: "corn-common-smut",
    image: "images/crops/cards/corn-common-smut.jpg",
    title: "玉米瘤黑粉病",
    crop: "玉米",
    intro: "穗、叶、茎或雄穗上形成灰白色瘤状物，后期变黑并散出粉状孢子。",
    tags: ["瘤黑粉", "穗部病害", "伤口"],
    causes: ["冰雹、虫伤、机械伤等伤口利于侵染", "品种感病或田间菌源多", "干旱后遇雨等胁迫条件"],
    actions: ["选用抗病品种，减少伤口", "及时处理重病残体", "加强虫害和机械伤管理"],
    chemicals: [["芸苔素内酯", "逆境调节和恢复方向"], ["氨基酸叶面肥", "弱苗恢复和营养补充方向"]],
    warnings: ["瘤黑粉病发生后药剂补救有限，重点是预防和减少伤口。"],
  },
  {
    id: "corn-nitrogen-deficiency",
    image: "images/crops/cards/corn-nitrogen-deficiency.jpg",
    title: "玉米缺氮发黄",
    crop: "玉米",
    intro: "下部老叶常出现从叶尖向基部发展的 V 字形黄化，植株长势弱。",
    tags: ["缺氮", "发黄", "长势弱"],
    causes: ["底肥不足或追肥不及时", "雨水淋失、根系吸收差", "低温、积水或土壤板结影响吸收"],
    actions: ["先判断是否为老叶先黄", "结合墒情及时追肥", "积水田先排水促根"],
    chemicals: [["氨基酸叶面肥", "弱苗恢复和营养补充方向"], ["芸苔素内酯", "逆境恢复方向"]],
    warnings: ["缺素问题不能只靠叶面肥，根系环境和追肥更关键。"],
  },
  {
    id: "soybean-cyst-nematode",
    image: "images/crops/cards/soybean-cyst-nematode.jpg",
    title: "大豆孢囊线虫、黄化矮缩",
    crop: "大豆",
    intro: "田间常见不规则黄化矮缩斑块，根部可见细小白色或褐色孢囊。",
    tags: ["孢囊线虫", "黄化", "根部"],
    causes: ["连作导致线虫密度积累", "土壤传播，早期地上部症状不明显", "抗性品种单一使用导致防效下降"],
    actions: ["挖根查看是否有孢囊", "轮作非寄主作物", "选抗线虫品种，必要时用种衣剂或土壤处理"],
    chemicals: [["噻呋酰胺", "根部病害方向需结合登记"], ["芸苔素内酯", "逆境恢复方向"]],
    warnings: ["线虫问题重在轮作和品种，单次喷药通常解决不了。"],
  },
  {
    id: "soybean-aphids",
    image: "images/crops/cards/soybean-aphids.jpg",
    title: "大豆蚜虫",
    crop: "大豆",
    intro: "蚜虫多聚集在嫩叶和叶背吸汁，造成卷叶、发黄，严重时影响结荚和鼓粒。",
    tags: ["蚜虫", "刺吸式害虫", "卷叶"],
    causes: ["温暖干燥利于繁殖", "田边寄主和迁飞虫源", "天敌少或用药不当造成反弹"],
    actions: ["查看虫量和天敌数量", "达到防治指标后再处理", "喷雾覆盖叶背和嫩梢"],
    chemicals: [["吡虫啉", "蚜虫方向常见"], ["啶虫脒", "蚜虫、蓟马方向"], ["烯啶虫胺", "刺吸式害虫方向"]],
    warnings: ["避免不必要的广谱杀虫剂破坏天敌。"],
  },
  {
    id: "soybean-septoria-brown-spot",
    image: "images/crops/cards/soybean-septoria-brown-spot.jpg",
    title: "大豆褐斑病",
    crop: "大豆",
    intro: "多从下部老叶开始出现小褐斑，叶片发黄早落，潮湿年份更常见。",
    tags: ["褐斑病", "下部叶", "早落叶"],
    causes: ["病残体带菌，雨水飞溅传播", "连作或免耕田菌源多", "高湿条件促进扩展"],
    actions: ["先看是否从下部叶开始", "加强轮作和病残体管理", "必要时在关键生育期防治叶部病害"],
    chemicals: [["苯醚甲环唑", "叶部病害方向"], ["吡唑醚菌酯", "保护和治疗方向"], ["戊唑醇", "多种真菌病害方向"]],
    warnings: ["轻度下部叶病斑不一定需要立即用药，需看扩展速度和生育期。"],
  },
  {
    id: "soybean-bacterial-blight",
    image: "images/crops/cards/soybean-bacterial-blight.jpg",
    title: "大豆细菌性斑点",
    crop: "大豆",
    intro: "叶片出现角斑、黄绿色晕圈，潮湿和风雨伤口条件下更容易扩展。",
    tags: ["细菌病害", "角斑", "叶斑"],
    causes: ["风雨造成伤口，病菌扩散", "种子或病残体带菌", "低温潮湿条件利于发生"],
    actions: ["减少田间传播和机械伤", "病残体管理和轮作", "必要时参考当地细菌病害用药建议"],
    chemicals: [["春雷霉素", "细菌性病害方向常见"], ["噻唑锌", "细菌性病害方向"], ["枯草芽孢杆菌", "生防辅助方向"]],
    warnings: ["细菌病害用杀菌剂效果有限，田间管理同样重要。"],
  },
  {
    id: "soybean-downy-mildew",
    image: "images/crops/cards/soybean-downy-mildew.jpg",
    title: "大豆霜霉病",
    crop: "大豆",
    intro: "叶片正面出现淡黄斑，背面可见灰白色霉层，多湿条件下更明显。",
    tags: ["霜霉病", "叶背霉层", "高湿"],
    causes: ["凉爽潮湿条件利于发生", "种子或病残体带菌", "田间通风差、湿度高"],
    actions: ["确认叶背霉层和淡黄斑", "改善通风、减少湿度", "一般以预防和种子健康为主"],
    chemicals: [["苯醚甲环唑", "叶部病害方向"], ["吡唑醚菌酯", "保护和治疗方向"]],
    warnings: ["商品大豆上轻度霜霉通常不一定值得专门用药，种子田需更重视。"],
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
  春雷霉素: {
    effect: "偏向细菌性病害和部分真菌病害方向，常用于早期控制扩展。",
    method: "适合病害初期使用，喷雾要覆盖发病部位。",
    value: "中等成本",
    caution: "细菌病害受天气影响大，不能替代排水和减少伤口传播。",
  },
  噻唑锌: {
    effect: "细菌性病害方向常见，偏保护和抑制扩展。",
    method: "适合白叶枯、细菌性斑点等初发阶段，需按登记对象使用。",
    value: "中等成本",
    caution: "发病重、雨水多时单靠药剂效果有限。",
  },
  枯草芽孢杆菌: {
    effect: "生物防治和辅助抑菌方向，偏预防和减轻发生。",
    method: "适合早期或预防性使用，注意与化学药剂混用限制。",
    value: "中等成本",
    caution: "见效通常不如化学药剂快，重病田不能只靠生防。",
  },
};

const diagnosisGuide = {
  "wheat-lodging": ["成片小麦倾斜或贴地，常在风雨后明显。", "茎秆细弱、节间过长，或根部支撑差。", "先看密度和氮肥，再排查茎基病害、蛀茎害虫。"],
  "wheat-fusarium-head-blight": ["麦穗局部或整穗发白，病穗与正常穗对比明显。", "多在抽穗扬花期雨水多后出现。", "重点判断发生时期，已白穗后补救效果有限。"],
  "wheat-rust": ["叶片有橙黄或红褐色粉状孢子堆。", "手摸可能沾粉，病斑沿叶片扩散。", "注意是否已经影响旗叶和上部功能叶。"],
  "wheat-powdery-mildew": ["叶片、叶鞘有白色粉层。", "密度大、通风差处先发生。", "与锈病区别在于白粉病呈白色粉状覆盖。"],
  "wheat-aphids": ["叶片、茎秆或穗部有小虫聚集。", "可能伴随卷叶、发黄、煤污。", "先看虫量和天敌，再决定是否处理。"],
  "rice-blast": ["叶片出现梭形病斑，边缘褐色、中间灰白。", "穗颈部受害可能出现白穗。", "抽穗前后要重点看穗颈瘟风险。"],
  "rice-sheath-blight": ["病斑多从稻株中下部叶鞘开始。", "病斑呈云纹状或椭圆形。", "扒开稻丛看中下部，不要只看上部叶片。"],
  "rice-bacterial-blight": ["叶尖或叶缘出现长条状黄白枯斑。", "风雨、台风、积水后容易扩展。", "与稻瘟病区别在于多沿叶缘、叶尖发展。"],
  "rice-planthopper": ["拨开稻丛，基部可见飞虱活动。", "严重时出现成片枯黄冒穿。", "看下部虫量，不要只看叶色判断。"],
  "rice-stem-borer": ["出现枯心苗或白穗。", "剥开茎秆可能见虫道、虫粪或幼虫。", "低龄幼虫期最关键，钻入后防治难。"],
  "corn-northern-leaf-blight": ["玉米叶片有长梭形、船形褐色大病斑。", "病斑上升到穗位叶以上影响更大。", "与锈病区别在于病斑较大，不是粉状孢子堆。"],
  "corn-common-rust": ["叶片表面有橙褐色突起孢子堆。", "湿度高、露水重时扩展较快。", "轻发生先观察叶位和扩展速度。"],
  "corn-fall-armyworm": ["心叶有缺刻、孔洞、虫粪。", "虫龄小时藏在心叶，虫龄大后危害更重。", "看心叶和新叶，不只看老叶。"],
  "corn-common-smut": ["穗、叶、茎上出现灰白色瘤状物。", "后期瘤状物变黑并散出粉末。", "多与伤口和品种感病有关。"],
  "corn-nitrogen-deficiency": ["下部老叶先黄，常呈 V 字形向基部发展。", "整株长势弱，叶色偏淡。", "先排除积水、根系差，再考虑追肥。"],
  "soybean-cyst-nematode": ["田间出现不规则黄化矮缩斑块。", "挖根可见细小白色或褐色孢囊。", "地上部像缺肥，但根部检查更关键。"],
  "soybean-aphids": ["嫩叶和叶背有蚜虫聚集。", "叶片可能卷曲、发黄。", "看虫量和天敌，避免过早滥用杀虫剂。"],
  "soybean-septoria-brown-spot": ["下部老叶先出现小褐斑。", "叶片发黄、早落，潮湿年份明显。", "注意是否从下往上扩展。"],
  "soybean-bacterial-blight": ["叶片有角斑，常伴黄绿色晕圈。", "风雨后或伤口多时扩展。", "与真菌斑点不同，药剂效果更依赖早期管理。"],
  "soybean-downy-mildew": ["叶正面淡黄斑，叶背可能有灰白霉层。", "凉爽潮湿条件下更明显。", "普通商品豆轻发生时不一定值得专门用药。"],
};

let activeCrop = "全部";
let activeSearch = "";

const problemGrid = document.querySelector("#problemGrid");
const prevProblem = document.querySelector("#prevProblem");
const nextProblem = document.querySelector("#nextProblem");
const cropFilter = document.querySelector("#cropFilter");
const problemSearch = document.querySelector("#problemSearch");
const selectedCrop = document.querySelector("#selectedCrop");
const selectedImage = document.querySelector("#selectedImage");
const selectedTitle = document.querySelector("#selectedTitle");
const selectedIntro = document.querySelector("#selectedIntro");
const diagnosisList = document.querySelector("#diagnosisList");
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

  createListItems(diagnosisGuide[problem.id] || ["先观察发生部位、发生范围、天气和近期用肥用药情况。"], diagnosisList);
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
      <div class="chemical-top">
        <div>
          <strong>${name}</strong>
          <p>${description}</p>
        </div>
        <span class="cost-badge">${detail.value}</span>
      </div>
      <div class="chemical-info">
        <section>
          <span>主要作用</span>
          <p>${detail.effect}</p>
        </section>
        <section>
          <span>使用时机</span>
          <p>${detail.method}</p>
        </section>
        <section class="risk">
          <span>风险提醒</span>
          <p>${detail.caution}</p>
        </section>
      </div>
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

function getProblemCrops(problem) {
  return problem.crop.split("/").map((item) => item.trim());
}

function matchesFilters(problem) {
  const cropMatch = activeCrop === "全部" || getProblemCrops(problem).includes(activeCrop);
  const searchText = [
    problem.title,
    problem.crop,
    problem.intro,
    ...problem.tags,
    ...problem.causes,
    ...problem.actions,
    ...problem.warnings,
    ...problem.chemicals.flat(),
  ]
    .join(" ")
    .toLowerCase();
  return cropMatch && searchText.includes(activeSearch);
}

function renderProblems() {
  const visibleProblems = problems.filter(matchesFilters);
  problemGrid.innerHTML = "";

  if (visibleProblems.length === 0) {
    problemGrid.innerHTML = `<div class="empty-state">没有找到对应内容，可以换个关键词，或先选择“全部”。</div>`;
    return;
  }

  visibleProblems.forEach((problem) => {
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

  selectProblem(visibleProblems[0].id, false);
}

cropFilter.addEventListener("click", (event) => {
  const button = event.target.closest("[data-crop]");
  if (!button) return;
  activeCrop = button.dataset.crop;
  cropFilter.querySelectorAll("[data-crop]").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
  renderProblems();
});

problemSearch.addEventListener("input", () => {
  activeSearch = problemSearch.value.trim().toLowerCase();
  renderProblems();
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

renderProblems();
