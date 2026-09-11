MH Wilds ビルド＆火力シミュレーター v4.20

珠選択UIの並び順を修正。

対象：
- 防具を選択した後の各スロットの珠選択欄
- 護石の防具スロット／武器スロットの珠選択欄

並び順：
1. 珠そのもののレベル（装飾品の slot）を降順：Lv3 → Lv2 → Lv1
2. 同じ珠Lvなら珠の名称を50音順

注意：
- 珠名末尾の【1】【2】【3】は装着可能スロットLvを表す。
- これは珠が付与するスキルLvとは別物。
- スロットLvは「そのスロットに装着可能か」の判定にも使用する。
- 並び順ではスキルLv・レア度・IDを使用しない。

実装：
- 防具／護石／武器の珠選択は共通の decorationCandidates() → sortDecorationCandidates() を使用。
- 同Lvの名称比較は Intl.Collator('ja-JP', {numeric:true, sensitivity:'base'}) で統一。
- duplicate な候補生成処理を作らない。

検証：
- JavaScript全scriptブロックを Node.js --check で構文確認。
- Lv3→Lv2→Lv1、その各Lv内50音順になることをサンプルデータで確認。
- 防具用と武器用の kind フィルタを確認。
- スロットLv以下のみ候補になることを確認。
