/* Lightweight UI localization for the static frontend. */
(function () {
  'use strict';

  const STORAGE_KEY = 'omc-locale';
  const SUPPORTED = ['en', 'zh', 'ja'];
  const messages = {
    en: {
      'Products': 'Products', 'PRODUCTS': 'PRODUCTS', 'New Product': 'New Product', 'Import Product': 'Import Product',
      '▼ Show more': '▼ Show more', '▲ Show less': '▲ Show less', 'Toggle project list': 'Toggle project list', 'CEO message input': 'CEO message input',
      '💬 Chat': '💬 Chat', '👑 YOU': '👑 YOU', '⚙ SETTINGS': '⚙ SETTINGS', '🔑 API Connections': '🔑 API Connections',
      '⏰ System Crons': '⏰ System Crons', '👁 Display': '👁 Display', '📖 In meeting...': '📖 In meeting...',
      '● ONLINE': '● ONLINE', '● OFFLINE': '● OFFLINE', 'Applying...': 'Applying...', 'Waiting...': 'Waiting...',
      'Waiting for tasks...': 'Waiting for tasks...', 'No work principles yet': 'No work principles yet',
      'No 1-on-1 notes yet': 'No 1-on-1 notes yet', 'Loading settings...': 'Loading settings...', 'Loading files...': 'Loading files...',
      'Loading models...': 'Loading models...', 'Loading minutes...': 'Loading minutes...', 'Loading activity...': 'Loading activity...',
      'Loading kanban...': 'Loading kanban...', 'Loading roadmap...': 'Loading roadmap...', 'No issues': 'No issues',
      'No issues in DONE status to release.': 'No issues in DONE status to release.', 'Issue title': 'Issue title',
      'Description (optional)': 'Description (optional)', 'Story pts': 'Story pts', 'Sprint name': 'Sprint name',
      'Goal (optional)': 'Goal (optional)', 'Capacity (pts)': 'Capacity (pts)', 'Goal': 'Goal', 'Target': 'Target',
      'Unit': 'Unit', 'KR title': 'KR title', 'Client ID': 'Client ID', 'Client Secret': 'Client Secret',
      'Enter API key...': 'Enter API key...', 'Enter model ID...': 'Enter model ID...', 'AI-Powered Search (improves candidate quality)': 'AI-Powered Search (improves candidate quality)',
      'Activity Log': 'Activity Log', 'ACTIVITY LOG': 'ACTIVITY LOG', 'Team Roster': 'Team Roster', 'TEAM ROSTER': 'TEAM ROSTER',
      'All Roles': 'All Roles', 'All Departments': 'All Departments', 'All Levels': 'All Levels',
      'CEO Console': 'CEO Console', 'CEO CONSOLE': 'CEO CONSOLE', 'Projects': 'Projects', 'Project': 'Project',
      '1-on-1': '1-on-1', 'Chat': 'Chat', 'Chat with EA': 'Chat with EA', 'No Product': 'No Product',
      'Link task to product': 'Link task to product', 'Attach file or image': 'Attach file or image',
      'Attach file or image — sent with your next message': 'Attach file or image — sent with your next message',
      '$ Type message, / for commands (Enter to send)': '$ Type message, / for commands (Enter to send)',
      'Settings': 'Settings', 'SETTINGS': 'SETTINGS', 'API Connections': 'API Connections', 'System Crons': 'System Crons',
      'Display': 'Display', 'Text Size': 'Text Size', 'Language': 'Language', 'Announcements': 'Announcements',
      'Loading...': 'Loading...', 'Meeting': 'Meeting', 'Meeting Type:': 'Meeting Type:', '1-on-1 Meeting': '1-on-1 Meeting',
      'All-Hands (CEO Address)': 'All-Hands (CEO Address)', 'Discussion (Open Floor)': 'Discussion (Open Floor)',
      'Select Employee:': 'Select Employee:', '-- Select Employee --': '-- Select Employee --', 'Start Meeting': 'Start Meeting',
      'Type a message...': 'Type a message...', 'Send': 'Send', 'End Meeting': 'End Meeting',
      'Employee Details': 'Employee Details', 'Upload Avatar': 'Upload Avatar', 'Name': 'Name', 'Nickname': 'Nickname',
      'Dept': 'Dept', 'Role': 'Role', 'Level': 'Level', 'Skills': 'Skills', 'Perms': 'Perms', 'Salary': 'Salary', 'Perf': 'Perf',
      'OKRs': 'OKRs', 'Work Principles': 'Work Principles', '1-on-1 Notes': '1-on-1 Notes', 'Scheduled Jobs': 'Scheduled Jobs',
      'Stop All': 'Stop All', 'No scheduled jobs': 'No scheduled jobs', 'Project History': 'Project History',
      'Task Board': 'Task Board', 'No tasks': 'No tasks', 'Execution Log': 'Execution Log', 'No logs': 'No logs',
      'Work History': 'Work History', 'No work history': 'No work history', 'Cancel': 'Cancel', 'Available': 'Available',
      'Capacity': 'Capacity', 'Participants': 'Participants', 'None': 'None', 'Live Meeting Log': 'Live Meeting Log',
      'Reject': 'Reject', 'Approve': 'Approve', 'Product Detail': 'Product Detail', 'Notification': 'Notification', 'Apply': 'Apply',
      'Select a task': 'Select a task', 'NEW PRODUCT': 'NEW PRODUCT', 'Objective': 'Objective', 'Owner': 'Owner',
      'Select owner...': 'Select owner...', 'Key Results': 'Key Results', '+ Add KR': '+ Add KR', 'Create': 'Create',
      'TRACE VIEWER': 'TRACE VIEWER', 'YOU': 'YOU', 'Do Not Disturb': 'Do Not Disturb', 'Background Tasks': 'Background Tasks',
      'Export SVG Screenshot': 'Export SVG Screenshot', 'Stop All Tasks': 'Stop All Tasks', 'Force reload all data from disk': 'Force reload all data from disk',
      'Ex-Employee Wall': 'Ex-Employee Wall', 'Company Culture': 'Company Culture', 'Company Direction': 'Company Direction',
      'Dashboard': 'Dashboard', 'Export': 'Export', 'Delete': 'Delete', 'Save': 'Save', 'Close': 'Close', 'Clear': 'Clear', 'End': 'End',
      'Interview': 'Interview', 'Hire': 'Hire', 'Back to Candidates': 'Back to Candidates', 'Talent Pool': 'Talent Pool',
      'Onboarding': 'Onboarding', 'Code updated': 'Code updated', 'Reconnecting...': 'Reconnecting...',
      'BACKGROUND TASKS': 'BACKGROUND TASKS', 'Select a project to start': 'Select a project to start', 'No messages yet.': 'No messages yet.',
      'Show more': 'Show more', 'Show less': 'Show less', 'No active sessions': 'No active sessions', 'Load failed': 'Load failed',
      'Authenticated': 'Authenticated', 'No key': 'No key', 'Ready': 'Ready', 'Status unknown': 'Status unknown',
      'On-demand (no active sessions)': 'On-demand (no active sessions)', '-- Use default --': '-- Use default --',
      '-- Use default model --': '-- Use default model --', 'RECRUIT PARTY (0)': 'RECRUIT PARTY (0)', 'RECRUITING...': 'RECRUITING...',
      'Search...': 'Search...', 'All Priority': 'All Priority', 'Backlog': 'Backlog', 'Planned': 'Planned', 'In Progress': 'In Progress',
      'In Review': 'In Review', 'Done': 'Done', 'Released': 'Released', 'Reopen': 'Reopen', 'Sprint: ': 'Sprint: ',
      'No Sprint': 'No Sprint', 'Assignee: ': 'Assignee: ', 'Unassigned': 'Unassigned', 'History': 'History', 'Add': 'Add',
      'Set the company strategy / direction. This is injected into every employee\'s prompt.': 'Set the company strategy / direction. This is injected into every employee\'s prompt.',
      'Add a new culture entry...': 'Add a new culture entry...', 'Polish / Enrich': 'Polish / Enrich',
      'Send a message to this meeting...': 'Send a message to this meeting...', 'Delete product': 'Delete product'
    },
    zh: {
      'Products': '产品', 'PRODUCTS': '产品', 'New Product': '新建产品', 'Import Product': '导入产品',
      '▼ Show more': '▼ 显示更多', '▲ Show less': '▲ 收起', 'Toggle project list': '切换项目列表', 'CEO message input': 'CEO 消息输入框',
      '💬 Chat': '💬 聊天', '👑 YOU': '👑 你', '⚙ SETTINGS': '⚙ 设置', '🔑 API Connections': '🔑 API 连接',
      '⏰ System Crons': '⏰ 系统定时任务', '👁 Display': '👁 显示', '📖 In meeting...': '📖 会议中……',
      '● ONLINE': '● 在线', '● OFFLINE': '● 离线', 'Applying...': '应用中……', 'Waiting...': '等待中……',
      'Waiting for tasks...': '等待任务中……', 'No work principles yet': '暂无工作原则',
      'No 1-on-1 notes yet': '暂无一对一记录', 'Loading settings...': '正在加载设置……', 'Loading files...': '正在加载文件……',
      'Loading models...': '正在加载模型……', 'Loading minutes...': '正在加载会议记录……', 'Loading activity...': '正在加载活动……',
      'Loading kanban...': '正在加载看板……', 'Loading roadmap...': '正在加载路线图……', 'No issues': '暂无问题',
      'No issues in DONE status to release.': '没有可发布的已完成问题。', 'Issue title': '问题标题',
      'Description (optional)': '描述（可选）', 'Story pts': '故事点', 'Sprint name': '迭代名称',
      'Goal (optional)': '目标（可选）', 'Capacity (pts)': '容量（点）', 'Goal': '目标', 'Target': '目标值',
      'Unit': '单位', 'KR title': '关键结果标题', 'Client ID': '客户端 ID', 'Client Secret': '客户端密钥',
      'Enter API key...': '输入 API 密钥……', 'Enter model ID...': '输入模型 ID……', 'AI-Powered Search (improves candidate quality)': 'AI 搜索（提升候选人质量）',
      'Activity Log': '活动日志', 'ACTIVITY LOG': '活动日志', 'Team Roster': '团队成员', 'TEAM ROSTER': '团队成员',
      'All Roles': '所有角色', 'All Departments': '所有部门', 'All Levels': '所有级别',
      'CEO Console': 'CEO 控制台', 'CEO CONSOLE': 'CEO 控制台', 'Projects': '项目', 'Project': '项目',
      '1-on-1': '一对一', 'Chat': '聊天', 'Chat with EA': '与助理聊天', 'No Product': '无产品',
      'Link task to product': '关联到产品', 'Attach file or image': '附加文件或图片',
      'Attach file or image — sent with your next message': '附加文件或图片——随下一条消息发送',
      '$ Type message, / for commands (Enter to send)': '$ 输入消息，输入 / 使用命令（回车发送）',
      'Settings': '设置', 'SETTINGS': '设置', 'API Connections': 'API 连接', 'System Crons': '系统定时任务',
      'Display': '显示', 'Text Size': '文字大小', 'Language': '语言', 'Announcements': '公告',
      'Loading...': '加载中……', 'Meeting': '会议', 'Meeting Type:': '会议类型：', '1-on-1 Meeting': '一对一会议',
      'All-Hands (CEO Address)': '全员会议（CEO 致辞）', 'Discussion (Open Floor)': '开放讨论',
      'Select Employee:': '选择员工：', '-- Select Employee --': '-- 选择员工 --', 'Start Meeting': '开始会议',
      'Type a message...': '输入消息……', 'Send': '发送', 'End Meeting': '结束会议',
      'Employee Details': '员工详情', 'Upload Avatar': '上传头像', 'Name': '姓名', 'Nickname': '昵称',
      'Dept': '部门', 'Role': '角色', 'Level': '级别', 'Skills': '技能', 'Perms': '权限', 'Salary': '薪资', 'Perf': '绩效',
      'OKRs': 'OKR', 'Work Principles': '工作原则', '1-on-1 Notes': '一对一记录', 'Scheduled Jobs': '定时任务',
      'Stop All': '全部停止', 'No scheduled jobs': '暂无定时任务', 'Project History': '项目历史',
      'Task Board': '任务看板', 'No tasks': '暂无任务', 'Execution Log': '执行日志', 'No logs': '暂无日志',
      'Work History': '工作记录', 'No work history': '暂无工作记录', 'Cancel': '取消', 'Available': '可用',
      'Capacity': '容量', 'Participants': '参与者', 'None': '无', 'Live Meeting Log': '实时会议记录',
      'Reject': '拒绝', 'Approve': '批准', 'Product Detail': '产品详情', 'Notification': '通知', 'Apply': '应用',
      'Select a task': '选择任务', 'NEW PRODUCT': '新建产品', 'Objective': '目标', 'Owner': '负责人',
      'Select owner...': '选择负责人……', 'Key Results': '关键结果', '+ Add KR': '+ 添加关键结果', 'Create': '创建',
      'TRACE VIEWER': '追踪查看器', 'YOU': '你', 'Do Not Disturb': '请勿打扰', 'Background Tasks': '后台任务',
      'Export SVG Screenshot': '导出 SVG 截图', 'Stop All Tasks': '停止所有任务', 'Force reload all data from disk': '从磁盘强制重新加载数据',
      'Ex-Employee Wall': '前员工墙', 'Company Culture': '公司文化', 'Company Direction': '公司方向',
      'Dashboard': '仪表板', 'Export': '导出', 'Delete': '删除', 'Save': '保存', 'Close': '关闭', 'Clear': '清除', 'End': '结束',
      'Interview': '面试', 'Hire': '录用', 'Back to Candidates': '返回候选人', 'Talent Pool': '人才库',
      'Onboarding': '入职', 'Code updated': '代码已更新', 'Reconnecting...': '正在重新连接……',
      'BACKGROUND TASKS': '后台任务', 'Select a project to start': '选择一个项目开始', 'No messages yet.': '暂无消息。',
      'Show more': '显示更多', 'Show less': '显示更少', 'No active sessions': '暂无活动会话', 'Load failed': '加载失败',
      'Authenticated': '已认证', 'No key': '无密钥', 'Ready': '就绪', 'Status unknown': '状态未知',
      'On-demand (no active sessions)': '按需运行（无活动会话）', '-- Use default --': '-- 使用默认值 --',
      '-- Use default model --': '-- 使用默认模型 --', 'RECRUIT PARTY (0)': '招聘队伍（0）', 'RECRUITING...': '招聘中……',
      'Search...': '搜索……', 'All Priority': '所有优先级', 'Backlog': '待办', 'Planned': '已计划', 'In Progress': '进行中',
      'In Review': '审核中', 'Done': '已完成', 'Released': '已发布', 'Reopen': '重新打开', 'Sprint: ': '迭代：',
      'No Sprint': '无迭代', 'Assignee: ': '负责人：', 'Unassigned': '未分配', 'History': '历史', 'Add': '添加',
      'Set the company strategy / direction. This is injected into every employee\'s prompt.': '设置公司战略／方向。此内容会注入每位员工的提示词。',
      'Add a new culture entry...': '添加新的文化条目……', 'Polish / Enrich': '润色／扩展',
      'Send a message to this meeting...': '向本次会议发送消息……', 'Delete product': '删除产品'
    },
    ja: {
      'Products': 'プロダクト', 'PRODUCTS': 'プロダクト', 'New Product': '新規プロダクト', 'Import Product': 'プロダクトをインポート',
      '▼ Show more': '▼ さらに表示', '▲ Show less': '▲ 折りたたむ', 'Toggle project list': 'プロジェクト一覧を切り替え', 'CEO message input': 'CEOメッセージ入力',
      '💬 Chat': '💬 チャット', '👑 YOU': '👑 あなた', '⚙ SETTINGS': '⚙ 設定', '🔑 API Connections': '🔑 API接続',
      '⏰ System Crons': '⏰ システム定期タスク', '👁 Display': '👁 表示', '📖 In meeting...': '📖 ミーティング中…',
      '● ONLINE': '● オンライン', '● OFFLINE': '● オフライン', 'Applying...': '適用中…', 'Waiting...': '待機中…',
      'Waiting for tasks...': 'タスクを待機中…', 'No work principles yet': '仕事の原則はまだありません',
      'No 1-on-1 notes yet': '1on1メモはまだありません', 'Loading settings...': '設定を読み込み中…', 'Loading files...': 'ファイルを読み込み中…',
      'Loading models...': 'モデルを読み込み中…', 'Loading minutes...': '議事録を読み込み中…', 'Loading activity...': 'アクティビティを読み込み中…',
      'Loading kanban...': 'カンバンを読み込み中…', 'Loading roadmap...': 'ロードマップを読み込み中…', 'No issues': '問題なし',
      'No issues in DONE status to release.': 'リリースできる完了済みの問題はありません。', 'Issue title': '問題のタイトル',
      'Description (optional)': '説明（任意）', 'Story pts': 'ストーリーポイント', 'Sprint name': 'スプリント名',
      'Goal (optional)': '目標（任意）', 'Capacity (pts)': 'キャパシティ（ポイント）', 'Goal': '目標', 'Target': '目標値',
      'Unit': '単位', 'KR title': '成果タイトル', 'Client ID': 'クライアントID', 'Client Secret': 'クライアントシークレット',
      'Enter API key...': 'APIキーを入力…', 'Enter model ID...': 'モデルIDを入力…', 'AI-Powered Search (improves candidate quality)': 'AI検索（候補者の質を向上）',
      'Activity Log': 'アクティビティログ', 'ACTIVITY LOG': 'アクティビティログ', 'Team Roster': 'チームメンバー', 'TEAM ROSTER': 'チームメンバー',
      'All Roles': 'すべての役割', 'All Departments': 'すべての部門', 'All Levels': 'すべてのレベル',
      'CEO Console': 'CEOコンソール', 'CEO CONSOLE': 'CEOコンソール', 'Projects': 'プロジェクト', 'Project': 'プロジェクト',
      '1-on-1': '1on1', 'Chat': 'チャット', 'Chat with EA': 'EAとチャット', 'No Product': 'プロダクトなし',
      'Link task to product': 'タスクをプロダクトに紐付け', 'Attach file or image': 'ファイルまたは画像を添付',
      'Attach file or image — sent with your next message': 'ファイルまたは画像を添付（次のメッセージと一緒に送信）',
      '$ Type message, / for commands (Enter to send)': '$ メッセージを入力、/でコマンド（Enterで送信）',
      'Settings': '設定', 'SETTINGS': '設定', 'API Connections': 'API接続', 'System Crons': 'システム定期タスク',
      'Display': '表示', 'Text Size': '文字サイズ', 'Language': '言語', 'Announcements': 'お知らせ',
      'Loading...': '読み込み中…', 'Meeting': 'ミーティング', 'Meeting Type:': 'ミーティング形式：', '1-on-1 Meeting': '1on1ミーティング',
      'All-Hands (CEO Address)': '全体会議（CEOスピーチ）', 'Discussion (Open Floor)': 'ディスカッション（自由討議）',
      'Select Employee:': '社員を選択：', '-- Select Employee --': '-- 社員を選択 --', 'Start Meeting': 'ミーティングを開始',
      'Type a message...': 'メッセージを入力…', 'Send': '送信', 'End Meeting': 'ミーティングを終了',
      'Employee Details': '社員詳細', 'Upload Avatar': 'アバターをアップロード', 'Name': '名前', 'Nickname': 'ニックネーム',
      'Dept': '部門', 'Role': '役割', 'Level': 'レベル', 'Skills': 'スキル', 'Perms': '権限', 'Salary': '報酬', 'Perf': '評価',
      'OKRs': 'OKR', 'Work Principles': '仕事の原則', '1-on-1 Notes': '1on1メモ', 'Scheduled Jobs': '定期タスク',
      'Stop All': 'すべて停止', 'No scheduled jobs': '定期タスクなし', 'Project History': 'プロジェクト履歴',
      'Task Board': 'タスクボード', 'No tasks': 'タスクなし', 'Execution Log': '実行ログ', 'No logs': 'ログなし',
      'Work History': '作業履歴', 'No work history': '作業履歴なし', 'Cancel': 'キャンセル', 'Available': '利用可能',
      'Capacity': '定員', 'Participants': '参加者', 'None': 'なし', 'Live Meeting Log': 'ミーティングログ',
      'Reject': '拒否', 'Approve': '承認', 'Product Detail': 'プロダクト詳細', 'Notification': '通知', 'Apply': '適用',
      'Select a task': 'タスクを選択', 'NEW PRODUCT': '新規プロダクト', 'Objective': '目的', 'Owner': '担当者',
      'Select owner...': '担当者を選択…', 'Key Results': '主要な成果', '+ Add KR': '+ 成果を追加', 'Create': '作成',
      'TRACE VIEWER': 'トレースビューア', 'YOU': 'あなた', 'Do Not Disturb': '取り込み中', 'Background Tasks': 'バックグラウンドタスク',
      'Export SVG Screenshot': 'SVGスクリーンショットを出力', 'Stop All Tasks': 'すべてのタスクを停止', 'Force reload all data from disk': 'ディスクから全データを強制再読み込み',
      'Ex-Employee Wall': '元社員ウォール', 'Company Culture': '企業文化', 'Company Direction': '会社の方向性',
      'Dashboard': 'ダッシュボード', 'Export': 'エクスポート', 'Delete': '削除', 'Save': '保存', 'Close': '閉じる', 'Clear': 'クリア', 'End': '終了',
      'Interview': '面接', 'Hire': '採用', 'Back to Candidates': '候補者に戻る', 'Talent Pool': '人材プール',
      'Onboarding': 'オンボーディング', 'Code updated': 'コードが更新されました', 'Reconnecting...': '再接続中…',
      'BACKGROUND TASKS': 'バックグラウンドタスク', 'Select a project to start': 'プロジェクトを選択して開始', 'No messages yet.': 'メッセージはまだありません。',
      'Show more': 'さらに表示', 'Show less': '折りたたむ', 'No active sessions': 'アクティブなセッションなし', 'Load failed': '読み込みに失敗しました',
      'Authenticated': '認証済み', 'No key': 'キーなし', 'Ready': '準備完了', 'Status unknown': '状態不明',
      'On-demand (no active sessions)': 'オンデマンド（アクティブなセッションなし）', '-- Use default --': '-- デフォルトを使用 --',
      '-- Use default model --': '-- デフォルトモデルを使用 --', 'RECRUIT PARTY (0)': '採用パーティー（0）', 'RECRUITING...': '採用中…',
      'Search...': '検索…', 'All Priority': 'すべての優先度', 'Backlog': 'バックログ', 'Planned': '計画済み', 'In Progress': '進行中',
      'In Review': 'レビュー中', 'Done': '完了', 'Released': 'リリース済み', 'Reopen': '再オープン', 'Sprint: ': 'スプリント：',
      'No Sprint': 'スプリントなし', 'Assignee: ': '担当者：', 'Unassigned': '未割り当て', 'History': '履歴', 'Add': '追加',
      'Set the company strategy / direction. This is injected into every employee\'s prompt.': '会社の戦略／方向性を設定します。この内容は全社員のプロンプトに注入されます。',
      'Add a new culture entry...': '新しい文化項目を追加…', 'Polish / Enrich': '推敲／拡張',
      'Send a message to this meeting...': 'このミーティングにメッセージを送信…', 'Delete product': 'プロダクトを削除'
    }
  };

  function normalize(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function preserveWhitespace(original, translated) {
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    return leading + translated + trailing;
  }

  const textKeys = new WeakMap();
  const attributeKeys = new WeakMap();

  function resolveKey(value) {
    const normalized = normalize(value);
    for (const dict of Object.values(messages)) {
      for (const [key, translated] of Object.entries(dict)) {
        if (translated === normalized) return key;
      }
    }
    return normalized;
  }

  const api = {
    locale: 'en',
    messages,
    supported: SUPPORTED,
    t(key, vars) {
      let value = messages[this.locale]?.[key] ?? messages.en[key] ?? key;
      for (const [name, replacement] of Object.entries(vars || {})) {
        value = value.replaceAll(`{${name}}`, String(replacement));
      }
      return value;
    },
    apply(root = document) {
      const dict = messages[this.locale] || messages.en;
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes = [];
      let node;
      while ((node = walker.nextNode())) nodes.push(node);
      for (const textNode of nodes) {
        if (!textNode.parentElement || ['SCRIPT', 'STYLE', 'TEXTAREA'].includes(textNode.parentElement.tagName)) continue;
        const key = textKeys.get(textNode) || resolveKey(textNode.nodeValue);
        textKeys.set(textNode, key);
        if (dict[key]) textNode.nodeValue = preserveWhitespace(textNode.nodeValue, dict[key]);
      }
      root.querySelectorAll?.('[title], [aria-label], [placeholder]').forEach((el) => {
        for (const attr of ['title', 'aria-label', 'placeholder']) {
          const keys = attributeKeys.get(el) || {};
          const key = keys[attr] || resolveKey(el.getAttribute(attr));
          keys[attr] = key;
          attributeKeys.set(el, keys);
          if (key && dict[key]) el.setAttribute(attr, dict[key]);
        }
      });
      const select = document.getElementById('locale-select');
      if (select) select.value = this.locale;
    },
    setLocale(locale) {
      if (!SUPPORTED.includes(locale)) return;
      this.locale = locale;
      localStorage.setItem(STORAGE_KEY, locale);
      document.documentElement.lang = locale === 'ja' ? 'ja-JP' : locale === 'zh' ? 'zh-CN' : 'en';
      this.apply();
      window.dispatchEvent(new CustomEvent('localechange', { detail: { locale } }));
    },
    init() {
      const saved = localStorage.getItem(STORAGE_KEY);
      const browser = (navigator.language || '').slice(0, 2);
      this.locale = SUPPORTED.includes(saved) ? saved : SUPPORTED.includes(browser) ? browser : 'en';
      document.documentElement.lang = this.locale === 'ja' ? 'ja-JP' : this.locale === 'zh' ? 'zh-CN' : 'en';
      this.apply();
      const select = document.getElementById('locale-select');
      select?.addEventListener('change', (event) => this.setLocale(event.target.value));
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const added of mutation.addedNodes) {
            if (added.nodeType === Node.ELEMENT_NODE) this.apply(added);
          }
        }
      }).observe(document.body, { childList: true, subtree: true });
    }
  };

  window.i18n = api;
  window.t = (key, vars) => api.t(key, vars);
  document.addEventListener('DOMContentLoaded', () => api.init(), { once: true });
})();
