const today = new Date().toLocaleDateString();
const savedDate = localStorage.getItem("savedDate");

if (savedDate !== today) {
    localStorage.setItem("savedDate", today);
    localStorage.removeItem("foods");
}

const translations = {
    jp: {
        title: "毎日栄養たっぷりの一皿",
        inputTitle: "今日食べたものを入力してください :",
        listTitle: "今日入力した食品：",
        resultTitle: "結果",
        backMain: "🏠 メインページに戻る",
        eatenGroups: "食べた食料群",
        missedGroups: "不足している食料群",
        allGroups: "すべての食料群を摂取しました！",
        examples: "例",
        benefit: "効果",
        none: "なし",
        submit: "✅登録",
        added: "➕追加",
        details: "不足している食料群の詳細",
        recordTitle: "今日の食事を記録する",
        recordDesc: "あなたの食事内容を入力して、足りない栄養をチェック！",
        recordBtn: "➡ 食事を記録する",
        learnTitle: "食事グループについて学ぶ",
        learnDesc: "穀類・タンパク質・野菜・果物・乳製品・脂質の6つのグループを学ぼう。",
        learnBtn: "➡ 詳しく見る",
        historyTitle: "食事履歴を見る",
        historyDesc: "これまでに記録した食事内容と栄養バランスを確認できます。",
        historyBtn: "➡ 履歴を見る",
        groups: {
            grains: "穀類",
            protein: "たんぱく質",
            vegetables: "野菜",
            fruits: "果物",
            dairy: "乳製品",
            fats: "脂質"
        }
    },
    en: {
        title: "Make everyday a complete plate",
        inputTitle: "Enter what you ate today:",
        listTitle: "Foods entered today:",
        resultTitle: "Result",
        backMain: "🏠 Back to Main Page",
        eatenGroups: "Food groups you ate",
        missedGroups: "Groups you missed",
        allGroups: "You ate from all food groups!",
        examples: "examples",
        benefit: "benefit",
        none: "None",
        submit: "✅Submit",
        added: "➕Add",
        details: "Details of missed food groups",
        recordTitle: "Record today’s meals",
        recordDesc: "Enter your meal details and check what nutrients you are missing!",
        recordBtn: "➡ Record Meals",
        learnTitle: "Learn About Food Groups",
        learnDesc: "Learn about the six food groups: grains, protein, vegetables, fruits, dairy, and fats.",
        learnBtn: "➡ Learn More",
        historyTitle: "View Meal History",
        historyDesc: "Check your past meals and nutrition balance.",
        historyBtn: "➡ View History",
        groups: {
            grains: "Grains",
            protein: "Protein",
            vegetables: "Vegetables",
            fruits: "Fruits",
            dairy: "Dairy",
            fats: "Fats"
        }
    },
    mm: {
        title: "နေ့တိုင်း အာဟာရစုံလင်တဲ့ အစားအစာတစ်ပန်းကန်",
        inputTitle: "ဒီနေ့စားခဲ့တဲ့အစားအစာများကိုရိုက်ထည့်ပါ:",
        listTitle: "ဒီနေ့သွင်းထားသောအစားအစာများ:",
        resultTitle: "ရလဒ်",
        backMain: "🏠 မူလစာမျက်နှာသို့ ပြန်သွားရန်",
        eatenGroups: "စားသုံးခဲ့သောအုပ်စုများ",
        missedGroups: "မစားနိုင်ခဲ့သောအုပ်စုများ",
        allGroups: "အုပ်စုအားလုံး စားသုံးပြီးပါပြီ!",
        examples: "ဥပမာ",
        benefit: "အကျိူးကျေးဇူး",
        none: "မရှိပါ",
        submit: "✅Submitလုပ်မည်",
        added: "➕ထည့်ပြီးပါပြီ",
        details: "မစားနိုင်ခဲ့သောအုပ်စုများအကြောင်းအရာအသေးစိတ်",
        recordTitle: "ဒီနေ့စားသောက်မှုကို မှတ်တမ်းတင်ပါ",
        recordDesc: "သင့်အစားအစာ အချက်အလက်ထည့်ပြီး၊ မလုံလောက်သေးတဲ့ အာဟာရတွေကို စစ်ဆေးပါ။",
        recordBtn: "➡ စားသောက်မှု မှတ်တမ်းတင်ရန်",
        learnTitle: "အစားအသောက် အုပ်စုများအကြောင်း သင်ယူရန်",
        learnDesc: "ဂျုံသီးနှံ၊ ပရိုတင်း၊ ဟင်းသီးဟင်းရွက်၊ သစ်သီးများ၊ နို့ထွက်ပစ္စည်းများ၊ အဆီအာဟာရများ စသော အစားအသောက်အုပ်စု ခြောက်မျိုးကို သင်ယူကြပါစို့။",
        learnBtn: "➡ ပိုမိုလေ့လာရန်",
        historyTitle: "စားသောက်မှုမှတ်တမ်းကြည့်ရန်",
        historyDesc: "သင့်ယခင်စားသောက်မှုနှင့် အာဟာရချိန်ညှိမှုကို ကြည့်နိုင်သည်။",
        historyBtn: "➡ မှတ်တမ်းကြည့်ရန်",
        groups: {
            grains: "ကစီအုပ်စု",
            protein: "အသားအုပ်စု",
            dairy: "နို့ထွက်ပစ္စည်းအုပ်စု",
            vegetables: "ဟင်းသီးဟင်းရွက်အုပ်စု",
            fruits: "အသီးအနှံအုပ်စု",
            fats: "အဆီအုပ်စု"
        }
    }
};

const groupNames = {
    jp: {
        grains: "穀類",
        protein: "たんぱく質",
        dairy: "乳製品",
        vegetables: "野菜",
        fruits: "果物",
        fats: "脂肪"
    },
    en: {
        grains: "Grains",
        protein: "Protein",
        dairy: "Dairy",
        vegetables: "Vegetables",
        fruits: "Fruits",
        fats: "Fats"
    },
    mm: {
        grains: "ကစီအုပ်စု",
        protein: "အသားအုပ်စု",
        dairy: "နို့ထွက်ပစ္စည်းအုပ်စု",
        vegetables: "ဟင်းသီးဟင်းရွက်အုပ်စု",
        fruits: "အသီးအနှံအုပ်စု",
        fats: "အဆီအုပ်စု"
    }
};

const groupInfo = {
    jp: {
        grains: { examples: "ご飯、パン、麺など", benefit: "エネルギー源として体を動かす力になります。" },
        protein: { examples: "肉、魚、卵、大豆製品など", benefit: "筋肉や血液を作るために必要です。" },
        dairy: { examples: "牛乳、チーズ、ヨーグルトなど", benefit: "カルシウムを補い、骨や歯を強くします。" },
        vegetables: { examples: "ほうれん草、キャベツ、にんじんなど", benefit: "ビタミンやミネラルが豊富で、体の調子を整えます。" },
        fruits: { examples: "りんご、みかん、バナナなど", benefit: "ビタミンCが多く、風邪予防や美肌に役立ちます。" },
        fats: { examples: "油、バター、ナッツなど", benefit: "体に必要なエネルギーを補給しますが、摂りすぎに注意。" }
    },
    en: {
        grains: { examples: "Rice, bread, noodles, etc.", benefit: "Provide energy for daily activities." },
        protein: { examples: "Meat, fish, eggs, tofu, etc.", benefit: "Helps build muscles and repair body tissues." },
        dairy: { examples: "Milk, cheese, yogurt, etc.", benefit: "Provides calcium for strong bones and teeth." },
        vegetables: { examples: "Spinach, cabbage, carrots, etc.", benefit: "Rich in vitamins and minerals to keep you healthy." },
        fruits: { examples: "Apples, oranges, bananas, etc.", benefit: "High in vitamin C, good for skin and immunity." },
        fats: { examples: "Oil, butter, nuts, etc.", benefit: "Gives energy but should be consumed in moderation." }
    },
    mm: {
        grains: { examples: "ထမင်း၊ ပေါင်မုန့်၊ ခေါက်ဆွဲ စသည်။", benefit: "နေ့စဉ် လှုပ်ရှားမှုများအတွက် စွမ်းအင် ပံ့ပိုးပေးသည်။" },
        protein: { examples: "အသား၊ ငါး၊ ငရုပ်သီး၊ ဒါ့အပြင် ဒိန်ခဲအမျိုးအစားများ။", benefit: "ကြွက်သားဖွံ့ဖြိုးစေပြီး ကိုယ်ခန္ဓာ အဆစ်အစိတ်များ ပြန်လည်ပြုပြင်နိုင်စေသည်။" },
        dairy: { examples: "နို့၊ ချိစ်၊ ဒိန်ချဥ် စသည်။", benefit: "အမြှေးအရိုးခိုင်မာဖို့အတွက် ကယ်လစီယမ် ပေးတယ်။" },
        vegetables: { examples: "ဟင်းသီးဟင်းရွက်အမျိုးအစားများ", benefit: "ကျန်းမာရေးအတွက် ဗီတာမင်နှင့် သတ္တုဓာတ်များအပြည့်အစုံပါရှိသည်။" },
        fruits: { examples: "ပန်းသီး၊ လိမ္မော်၊ ငှက်ပျောသီး စသည်။", benefit: "ဗီတာမင် C ပါဝင်မှုများများပြီး အရေပြားနှင့် အာရုံခံစွမ်းအားအတွက် ကောင်းမွန်သည်။" },
        fats: { examples: "ဆီ၊ ချောကလက်၊ ငရုပ်သီး အစေ့ စသည်။", benefit: "စွမ်းအင် ပံ့ပိုးပေးသော်လည်း မျှတစွာ စားသုံးသင့်သည်။" }
    }
};

const foodGroups = {
    grains: ["rice", "bread", "noodle", "ご飯", "パン", "麺", "ထမင်း", "နို့ဒယ်"],
    protein: ["meat", "fish", "egg", "chicken", "beef", "魚", "肉", "卵", "ကြက်", "ငါး", "အမဲသား"],
    dairy: ["milk", "cheese", "yogurt", "牛乳", "チーズ", "ヨーグルト", "နို့", "ချိစ်"],
    vegetables: ["vegetable", "carrot", "cabbage", "サラダ", "野菜", "キャベツ", "ဆန့်", "ဟင်းသီးဟင်းရွက်"],
    fruits: ["apple", "banana", "orange", "fruit", "りんご", "バナナ", "果物", "အသီးအနှံ"],
    fats: ["oil", "butter", "nuts", "脂肪", "ナッツ", "バター", "ဆီ", "စိမ်းသီး"]
};

const dishToGroups = {
    "たこ焼き": ["grains", "protein", "fats"],
    "お好み焼き": ["grains", "protein", "vegetables"],
    "カレー": ["grains", "protein", "vegetables"],
    "カレーライス": ["grains", "protein", "vegetables"],
    "寿司": ["grains", "protein"],
    "ピザ": ["grains", "protein", "dairy", "fats"],
    "ラーメン": ["grains", "protein", "fats"],
    "うどん": ["grains", "protein"],
    "そば": ["grains", "protein"],
    "味噌汁": ["protein", "vegetables"],
    "ハンバーガー": ["grains", "protein", "vegetables", "fats"],
    "ケーキ": ["grains", "fats", "dairy"],
    "アイスクリーム": ["dairy", "fats"],
    "天ぷら": ["protein", "fats"],
    "焼肉": ["protein", "fats"],
    "唐揚げ": ["protein", "fats"],
    "弁当": ["grains", "protein", "vegetables"],
    "カツ丼": ["grains", "protein", "fats"],
    "親子丼": ["grains", "protein", "fats"],
    "牛丼": ["grains", "protein", "fats"],
    "天丼": ["grains", "protein", "fats"],
    "サンドイッチ": ["grains", "protein", "vegetables"],
    "スープ": ["vegetables", "protein"],
    "カレーうどん": ["grains", "protein", "vegetables"],
    "パスタ": ["grains", "protein", "fats"],
    "グラタン": ["grains", "dairy", "fats"],
    "オムライス": ["grains", "protein", "fats"],
    "トースト": ["grains", "fats", "dairy"],
    "コロッケ": ["protein", "fats"],
    "餃子": ["grains", "protein", "vegetables", "fats"],
    "春巻き": ["grains", "protein", "vegetables", "fats"],
    "シチュー": ["protein", "vegetables", "dairy"],
    "パンケーキ": ["grains", "fats", "dairy"],
    "そぼろご飯": ["grains", "protein"],
    "おでん": ["protein", "vegetables"],
    "もつ鍋": ["protein", "vegetables", "fats"],
    "茶碗蒸し": ["protein", "dairy"],
    "お吸い物": ["protein", "vegetables"],
    "ふりかけご飯": ["grains"],
    "みそ煮込みうどん": ["grains", "protein", "vegetables"],
    "きんぴらごぼう": ["vegetables", "fats"],
    "豚汁": ["protein", "vegetables", "fats"],
    "しらすご飯": ["grains", "protein"],
    "納豆ご飯": ["grains", "protein"],
    "おにぎり（梅・鮭など）": ["grains", "protein"],
    "うな丼": ["grains", "protein", "fats"],
    "天ぷらそば": ["grains", "protein", "vegetables", "fats"],
    "カキフライ": ["protein", "fats"],
    "焼きそば": ["grains", "vegetables", "protein", "fats"],
    "コーンスープ": ["vegetables", "dairy", "fats"],

    "fried rice": ["grains", "protein", "vegetables"],
    "fried noodles": ["grains", "protein", "vegetables"],
    "burger": ["grains", "protein", "vegetables", "fats"],
    "pizza": ["grains", "protein", "dairy", "fats"],
    "sushi": ["grains", "protein"],
    "salad": ["vegetables"],
    "cake": ["grains", "fats", "dairy"],
    "ice cream": ["dairy", "fats"],
    "noodle soup": ["grains", "protein"],
    "sandwich": ["grains", "protein", "vegetables"],
    "fried chicken": ["protein", "fats"],
    "omelette rice": ["grains", "protein", "fats"],
    "grilled fish": ["protein"],
    "curry rice": ["grains", "protein", "vegetables"],
    "pasta": ["grains", "protein", "fats"],
    "toast": ["grains", "fats", "dairy"],
    "stew": ["protein", "vegetables", "dairy"],
    "pancake": ["grains", "fats", "dairy"],
    "green salad": ["vegetables"],
    "fruit salad": ["fruits"],
    "vegetable stir-fry": ["vegetables", "fats", "protein"],
    "tofu salad": ["protein", "vegetables"],
    "stir-fried vegetables": ["vegetables", "fats"],
    "tofu soup": ["protein", "vegetables"],

    "ထမင်းကြော်": ["grains", "protein", "vegetables"],
    "မုန့်ဟင်းခါး": ["grains", "protein", "vegetables"],
    "အမဲသားဟင်း": ["protein", "fats"],
    "ကြက်သားဟင်း": ["protein", "fats"],
    "သီဟိုဠ်ထမင်း": ["grains", "protein", "vegetables"],
    "အုန်းနို့ထမင်း": ["grains", "dairy", "fats"],
    "နို့ထမင်း": ["grains", "dairy", "fats"],
    "အကြော်": ["protein", "fats"],
    "ထန်းလျက်": ["fats", "fruits"],
    "နို့ခေါက်ဆွဲ": ["grains", "protein", "dairy"],
    "အုန်းနို့မုန့်": ["grains", "fats", "dairy"],
    "ဒိုးနတ်": ["grains", "fats", "dairy"],
    "ငရုပ်သီးကြော်": ["vegetables", "fats"],
    "ဟင်းသီးဟင်းရွက်သုပ်": ["vegetables"],
    "ကြက်သားထမင်း": ["grains", "protein", "fats"],
    "အမဲသားထမင်း": ["grains", "protein", "fats"],
    "ငါးသလောက်ထမင်း": ["grains", "protein", "fats"],
    "ပုစွန်ထမင်း": ["grains", "protein", "fats"],
    "အမဲသားကာရီ": ["protein", "fats"],
    "ကြက်သားကာရီ": ["protein", "fats"],
    "ငါးကာရီ": ["protein", "fats"],
    "ငါးသလောက်ဟင်း": ["protein", "fats"],
    "အမဲသားဖက်ဟင်း": ["protein", "vegetables", "fats"],
    "နို့ခေါက်ဆွဲ": ["grains", "protein", "dairy"],
    "‌‌ခေါက်ဆွဲအေး": ["grains", "protein", "vegetables"],
    "ခေါက်ဆွဲနွေး": ["grains", "protein", "vegetables"],
    "အကြော်အမျိုးအစားများ": ["grains", "fats"],
    "မုန့်လုံးကြီး": ["grains", "fats"],
    "မုန့်တီ": ["grains", "protein", "fats"],
    "အုန်းနို့မုန့်": ["grains", "fats", "dairy"],
    "မုန့်သောင်းလေး": ["grains", "fats"],
    "မုန့်ကလပ်": ["grains", "fats", "dairy"],
    "မုန့်ပေါင်": ["grains", "fats", "dairy"],
    "မုန့်ချို": ["grains", "fats", "dairy"],
    "အုန်းနို့မုန့်လုံး": ["grains", "fats", "dairy"],
    "သစ်သီးအာလူးသုပ်": ["fruits", "vegetables"],
    "ထန်းလျက်": ["fats", "fruits"],
    "နို့မလိုင်": ["dairy", "fats"],
    "ခေါက်ဆွဲသုပ်": ["grains", "vegetables"],
    "လက်ဖက်ရည်": ["fats"],
    "သစ်သီးဖျော်ရည်": ["fruits"],
    "နို့အေး": ["dairy"],
    "ငှက်ပျောသီးဖျော်ရည်": ["fruits"],
    "သံပုရာဖျော်ရည်": ["fruits"],
    "လိမ္မော်ဖျော်ရည်": ["fruits"],

};


const langSelect = document.querySelectorAll("#langSelect");
const foodInput = document.getElementById("foodInput");
const addBtn = document.getElementById("addBtn");
const submitBtn = document.getElementById("submitBtn");
const foodList = document.getElementById("foodList");
const resultArea = document.getElementById("resultArea");
const groupsContainer = document.querySelector(".food-groups");
const title = document.getElementById("title");
const mainTitle = document.getElementById("mainTitle");
const mainSubtitle = document.getElementById("mainSubtitle");

const page = document.body.dataset.page;

let currentLang = localStorage.getItem("lang") || "jp";

function loadLanguage(lang) {
    if (title) title.textContent = translations[lang].title;
    if (mainTitle) mainTitle.textContent = translations[lang].title;
    if (mainSubtitle) mainSubtitle.textContent = {
        jp: "毎日の食事を記録して、健康的な食生活をサポート！",
        en: "Record your meals daily to maintain a healthy diet!",
        mm: "နေ့တိုင်း သင့်စားသောက်မှုကို မှတ်တမ်းတင်ပြီး ကျန်းမာရေးအတွက်ကူညီပါ။"
    }[lang];

    if (page === "food") {
        if (document.getElementById("inputTitle")) document.getElementById("inputTitle").textContent = translations[lang].inputTitle;
        if (document.getElementById("listTitle")) document.getElementById("listTitle").textContent = translations[lang].listTitle;
        if (submitBtn) submitBtn.textContent = translations[lang].submit;
        if (addBtn) addBtn.textContent = translations[lang].added;
        if (resultArea) resultArea.innerHTML = "";
        const backBtn = document.querySelector(".main-btn");
        if (backBtn) backBtn.textContent = translations[lang].backMain;
    }

    if (page === "main") {
        if (document.getElementById("recordTitle")) document.getElementById("recordTitle").textContent = translations[lang].recordTitle;
        if (document.getElementById("recordDesc")) document.getElementById("recordDesc").textContent = translations[lang].recordDesc;
        if (document.getElementById("recordBtn")) document.getElementById("recordBtn").textContent = translations[lang].recordBtn;
        if (document.getElementById("learnTitle")) document.getElementById("learnTitle").textContent = translations[lang].learnTitle;
        if (document.getElementById("learnDesc")) document.getElementById("learnDesc").textContent = translations[lang].learnDesc;
        if (document.getElementById("learnBtn")) document.getElementById("learnBtn").textContent = translations[lang].learnBtn;

        if (document.getElementById("historyTitle"))
            document.getElementById("historyTitle").textContent =
                translations[lang].historyTitle;

        if (document.getElementById("historyDesc"))
            document.getElementById("historyDesc").textContent =
                translations[lang].historyDesc;

        if (document.getElementById("historyBtn"))
            document.getElementById("historyBtn").textContent =
                translations[lang].historyBtn;


    }


    if (page === "groups") {
        if (groupsContainer) loadGroups(lang);
    }

    
    if (document.getElementById("groupsTitle"))
        document.getElementById("groupsTitle").textContent = {
            jp: "食事グループを学ぼう",
            en: "Learn the Food Groups",
            mm: "အစားအသောက် အုပ်စုများကို သင်ယူကြမယ်"
        }[lang];

    if (document.getElementById("groupsIntroTitle"))
        document.getElementById("groupsIntroTitle").textContent = {
            jp: "6つの食事グループ",
            en: "The 6 Food Groups",
            mm: "အစာအုပ်စု ၆ မျိုး"
        }[lang];

    if (document.getElementById("groupsIntro"))
        document.getElementById("groupsIntro").textContent = {
            jp: "各グループを学んで、毎日の食生活を健康的にしましょう！",
            en: "Learn each group and improve your daily diet!",
            mm: "အုအုပ်စုတိုင်းကို လေ့လာပြီး သင့်နေ့စဉ် အစားအသောက်ကို ပိုမိုကျန်းမာအောင် တိုးတက်စေကြပါစို့!"
        }[lang];

}

langSelect.forEach(sel => {
    sel.value = currentLang;
    sel.addEventListener("change", () => {
        currentLang = sel.value;
        localStorage.setItem("lang", currentLang);
        loadLanguage(currentLang);
        renderHistory(); 
    });
});


function loadGroups(lang) {
    if (!groupsContainer) return;
    groupsContainer.innerHTML = "";
    Object.keys(groupNames[lang]).forEach(g => {
        const info = groupInfo[lang][g];
        const div = document.createElement("div");
        div.className = "group-card card";
        div.innerHTML = `
            <h3>${groupNames[lang][g]}</h3>
            <p>📋 ${translations[lang].examples}: ${info.examples}</p>
            <p>💪 ${translations[lang].benefit}: ${info.benefit}</p>
        `;
        groupsContainer.appendChild(div);
    });
}
if (page === "food") {
    let foods = JSON.parse(localStorage.getItem("foods")) || [];

    function updateFoodList() {
        foodList.innerHTML = "";
        foods.forEach((food, index) => {
            const li = document.createElement("li");
            li.textContent = food;

            const delBtn = document.createElement("button");
            delBtn.textContent = "❌";
            delBtn.onclick = () => {
                foods.splice(index, 1);
                localStorage.setItem("foods", JSON.stringify(foods));
                updateFoodList();
            };

            li.appendChild(delBtn);
            foodList.appendChild(li);
        });
    }
    updateFoodList();

    addBtn.onclick = () => {
        const val = foodInput.value.trim();
        if (!val) return;
        foods.push(val);
        localStorage.setItem("foods", JSON.stringify(foods));
        updateFoodList();
        foodInput.value = "";
    };

    submitBtn.onclick = () => {
        if (foods.length === 0) {
            alert("No data");
            return;
        }

        const eatenGroups = new Set();

        foods.forEach(food => {
            const lower = food.toLowerCase();

            Object.entries(dishToGroups).forEach(([dish, groups]) => {
                if (lower.includes(dish.toLowerCase())) {
                    groups.forEach(g => eatenGroups.add(g));
                }
            });
            Object.entries(foodGroups).forEach(([group, items]) => {
                items.forEach(item => {
                    if (lower.includes(item.toLowerCase())) {
                        eatenGroups.add(group);
                    }
                });
            });
        });

        const allGroups = Object.keys(foodGroups);
        const missedGroups = allGroups.filter(g => !eatenGroups.has(g));

        const eatenTranslated = [...eatenGroups].map(g => groupNames[currentLang][g]);
        const missedTranslated = missedGroups.map(g => groupNames[currentLang][g]);

        let text = `
<p>${translations[currentLang].eatenGroups}: <strong>${eatenTranslated.join(",")}</strong></p>
<p>${translations[currentLang].missedGroups}: <strong>${missedTranslated.join(",")}</strong></p>
`;

        if (missedGroups.length > 0) {
            text += `<h3>${translations[currentLang].details}</h3>`;
            missedGroups.forEach(group => {
                const info = groupInfo[currentLang][group];
                text += `
<div class="group-info">
    <h4>${groupNames[currentLang][group]}</h4>
    <p>📋 ${translations[currentLang].examples}: ${info.examples}</p>
    <p>💪 ${translations[currentLang].benefit}: ${info.benefit}</p>
</div>`;
            });
        }
        const score = eatenGroups.size * 10;
        const level =
            score <= 20 ? "🥉 Beginner" :
                score <= 40 ? "🥈 Intermediate" :
                    "🥇 Master";

        text += `
<hr>
<p>🏆 Score: <strong>${score} / 60</strong></p>
<p>🎖 Level: <strong>${level}</strong></p>
<h3>📊 Nutrition Balance</h3>
`;

        allGroups.forEach(group => {
            const has = eatenGroups.has(group);
            text += `
<div>
${groupNames[currentLang][group]}
<div style="height:10px;width:${has ? "100%" : "30%"};background:${has ? "#4caf50" : "#ccc"}"></div>
</div>`;
        });

        resultArea.innerHTML = text;
        const history = JSON.parse(localStorage.getItem("history")) || [];
        history.push({
            date: today,
            foods: [...foods],
            eaten: eatenTranslated,
            missed: missedTranslated
        });
        localStorage.setItem("history", JSON.stringify(history));
    };
}

function renderHistory() {
    if (page !== "history") return;

    const historyArea = document.getElementById("historyArea");
    const historyTitle = document.getElementById("historyTitle");
    const historyIntro = document.getElementById("historyIntro");

    const historyTexts = {
        jp: {
            title: "食事履歴",
            intro: "これまでの食事記録",
            date: "日付",
            foods: "食べた食品",
            eaten: "食べたグループ",
            missed: "不足グループ",
            empty: "履歴はまだありません。"
        },
        en: {
            title: "Meal History",
            intro: "Your past meal records",
            date: "Date",
            foods: "Foods",
            eaten: "Eaten groups",
            missed: "Missed groups",
            empty: "No history yet."
        },
        mm: {
            title: "စားသောက်မှုမှတ်တမ်း",
            intro: "ယခင်စားသောက်မှုမှတ်တမ်းများ",
            date: "ရက်စွဲ",
            foods: "စားသောက်ခဲ့သောအစားအစာများ",
            eaten: "စားပြီးသောအုပ်စုများ",
            missed: "မလုံလောက်သောအုပ်စုများ",
            empty: "မှတ်တမ်းမရှိသေးပါ။"
        }
    };

    historyTitle.textContent = historyTexts[currentLang].title;
    historyIntro.textContent = historyTexts[currentLang].intro;

    const history = JSON.parse(localStorage.getItem("history")) || [];

    if (history.length === 0) {
        historyArea.innerHTML = `<p>${historyTexts[currentLang].empty}</p>`;
        return;
    }

    historyArea.innerHTML = "";
    history.slice().reverse().forEach(item => {
        const div = document.createElement("div");
        div.className = "card history-card";
        div.innerHTML = `
            <p><strong>📅 ${historyTexts[currentLang].date}:</strong> ${item.date}</p>
            <p>🍽 ${historyTexts[currentLang].foods}: ${item.foods.join(", ")}</p>
            <p>✅ ${historyTexts[currentLang].eaten}: ${item.eaten.join(", ")}</p>
            <p>⚠️ ${historyTexts[currentLang].missed}: ${item.missed.join(", ")}</p>
        `;
        historyArea.appendChild(div);
    });
}
loadLanguage(currentLang);
renderHistory();

