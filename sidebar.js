/**
 * Aitarch サイト 記事データ
 * 記事を追加・編集・削除する場合は、このファイルを更新してください。
 */
const allArticles = {
    // カテゴリID: 'ai-life'
    'ai-life': {
        title: 'AIを活用',
        subtitle: '日々楽しく、生産性を上げよう',
        themeClass: 'theme-ai-life',
        // 下記にブログのファイルとタイトルを記述せよ　　************************************
        articles: [
            { url: '/ai-life/article/1.html', title: '202507_AI入門講座' },
            { url: '/ai-life/article/2.html', title: '202507_AI入門講座_リンク集' },
            { url: '/ai-life/article/3.html', title: '202507_最新のAIエージェント紹介' },
            { url: '/ai-life/article/4.html', title: '202507_【実習】AI家庭教師' },
            { url: '/ai-life/article/5.html', title: '202507_【実習】NoteBookLM活用' },
            { url: '/ai-life/article/6.html', title: '202507_【実習】AIで音楽・画像生成' },
            // 新しい記事はここに追加します。例:
            // { url: '/ai-life-article-4.html', title: '新しい記事のタイトル' },
        ]
    },
    // カテゴリID: 'ai-invest'
    'ai-invest': {
        title: 'AIで投資に勝利',
        subtitle: 'データに基づいた投資戦略',
        themeClass: 'theme-ai-invest',
        articles: [
            // 今後、このカテゴリの記事をここに追加します
             { url: '/ai-invest/article/1.html', title: 'すごいぞ Google Finance' },
             { url: '/ai-invest/article/2.html', title: 'これからはロボティクス' },
             { url: '/ai-invest/article/3.html', title: 'この先には量子コンピュータ' },
        ]
    },
    // カテゴリID: 'info-test'
    'info-test': {
        title: '共通テスト「情報Ⅰ」攻略',
        subtitle: '新時代の必須スキルをマスター',
        themeClass: 'theme-info-test',
        articles: [
            // 今後、このカテゴリの記事をここに追加します
            { url: '/info-test/article/1.html', title: 'アルゴリズムとプログラミングの基礎' },
            { url: '/info-test/article/2.html', title: '「ネットワーク」ドリル100問' },
            { url: '/info-test/article/3.html', title: '「デジタル」ドリル100問' },
            { url: '/info-test/article/4.html', title: '「情報基礎」ドリル100問' },
            { url: '/info-test/article/5.html', title: '「問題解決(統計)」ドリル100問' },
            { url: '/info-test/article/6.html', title: '「情報デザイン」ドリル100問' },
            { url: '/info-test/article/7.html', title: '「プログラミング」ドリル100問' },
            { url: '/info-test/article/8.html', title: '大学入試英単語テスト1000問' },
        ]
    },
    // カテゴリID: 'ai-agent'
    'ai-agent': {
        title: 'OIH_AIエージェント研究会',
        subtitle: '高校＜数学・物理・英語＞学習アプリ',
        themeClass: 'theme-ai-agent',
        articles: [
            // type: 'game'=🎮  'app'=⚙️  'pdf'=📄  'article'=📝（省略可）
            { url: '/ai-agent/article/1.html', title: '図形と方程式シューティング', type: 'game', subject: 'math' },
            { url: '/ai-agent/article/2.html', title: 'シス単クイズ1,000問',       type: 'app',  subject: 'english' },
            { url: '/ai-agent/article/3.html', title: '鬼の平方完成特訓ゲーム',     type: 'game', subject: 'math'    },
            { url: '/ai-agent/article/4.html', title: '英語語根データベース',        type: 'app',  subject: 'english' },
            { url: '/ai-agent/article/5.html', title: '席替えアプリ',               type: 'app',  subject: 'business' },
            { url: '/ai-agent/article/6.html', title: '課題提出_自動採点_管理アプリ', type: 'app',  subject: 'business' },
            { url: '/ai-agent/article/7.html', title: '物理カードアプリ（公式・物理量）', type: 'app',  subject: 'physics' },
            { url: '/ai-agent/article/8.html', title: '英作文自動採点アプリ',            type: 'app',  subject: 'english' },
            { url: '/ai-agent/article/9.html',  title: '超傾聴ワーク（リスニング特訓）', type: 'app',  subject: 'english' },
            { url: '/ai-agent/article/10.html', title: 'めんだんカルテβ版',             type: 'app',  subject: 'business' },
            { url: '/ai-agent/article/11.html', title: '三角関数シューティング',        type: 'game', subject: 'math'     },
            { url: '/ai-agent/article/12.html', title: '三角関数マスター',              type: 'app',  subject: 'math'     },
            { url: '/ai-agent/article/13.html', title: 'このアクションが君を成長させる〜最強の勉強法', type: 'article', subject: 'other' },
            { url: '/ai-agent/article/14.html', title: 'LEAP英単語マスターアプリ', type: 'app', subject: 'english' },
            { url: '/ai-agent/article/15.html', title: 'システム英単語マスターアプリ', type: 'app', subject: 'english' },
            // 新しいアプリはここに追加します
        ]
    }
};


 // サイドバーを生成してページに挿入する関数
 // @param {string} categoryId - 表示するカテゴリのID (e.g., 'ai-life')
 // @param {string} currentPageUrl - 現在表示しているページのファイル名 (e.g., 'ai-life-article-1.html')
 
function generateSidebar(categoryId, currentPageUrl = '') {
    const sidebarContainer = document.getElementById('sidebar-container');
    const categoryData = allArticles[categoryId];

    if (!sidebarContainer || !categoryData) {
        console.error('Sidebar container or category data not found.');
        return;
    }

    // テーマカラーをbodyタグに適用
    document.body.classList.add(categoryData.themeClass);

    // タイプバッジアイコン
    const typeIcons = { game: '🎮', app: '⚙️', pdf: '📄', article: '📝' };

    // 記事リストのHTMLを生成（新しいものが上に来るよう逆順）
    const articleLinksHtml = [...categoryData.articles].reverse().map(article => {
        const isActive = currentPageUrl === article.url ? 'active' : '';
        const badge = article.type ? `<span style="margin-right:5px">${typeIcons[article.type] || ''}</span>` : '';
        return `<a href="${article.url}" class="block p-2 rounded-lg text-sm text-[var(--text-color)] ${isActive}">${badge}${article.title}</a>`;
    }).join('');

    // サイドバー全体のHTMLを構築
    const sidebarHtml = `
        <button id="sidebar-toggle"
                onclick="window.__toggleSidebar()"
                style="display:none;width:100%;padding:10px 16px;margin-bottom:8px;
                       background:var(--theme-color);color:white;font-weight:700;
                       font-size:14px;border:none;border-radius:10px;cursor:pointer;
                       text-align:left;">
            ☰ メニューを開く
        </button>
        <div id="sidebar-content" class="sticky top-6">
            <a href="/index.html" class="inline-block mb-8 text-sm text-[var(--text-color)] hover:opacity-75 transition-opacity" aria-label="トップページへ">
                &larr; Aitarch トップへ戻る
            </a>
            <h2 class="text-xl font-bold text-[var(--text-color)]">${categoryData.title}</h2>
            <p class="mb-3 text-xs text-[var(--text-color)] opacity-80">${categoryData.subtitle}</p>
            <nav class="article-list space-y-2">
                ${articleLinksHtml}
            </nav>
        </div>
    `;

    sidebarContainer.innerHTML = sidebarHtml;

    // モバイル対応：768px未満でサイドバーを折りたたむ
    const toggle  = document.getElementById('sidebar-toggle');
    const content = document.getElementById('sidebar-content');

    function applyMobileState() {
        if (window.innerWidth < 768) {
            toggle.style.display  = 'block';
            content.style.display = 'none';
        } else {
            toggle.style.display  = 'none';
            content.style.display = 'block';
        }
    }

    window.__toggleSidebar = function() {
        const isOpen = content.style.display === 'block';
        content.style.display = isOpen ? 'none' : 'block';
        toggle.textContent    = isOpen ? '☰ メニューを開く' : '✕ メニューを閉じる';
    };

    applyMobileState();
    window.addEventListener('resize', applyMobileState);
}
