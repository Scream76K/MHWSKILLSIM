MH Wilds ビルド＆火力シミュレーター v4.19

珠選択UIの並び順を修正。

防具：防具を選択→各スロットの珠選択欄
護石：護石防具スロット／護石武器スロットの珠選択欄

並び順：
1. 珠が実際に付与する最大スキルLvの降順
2. 同じLvなら珠の名称の50音順

スロットLvは装着可能判定だけに使用し、並び順には使用しない。
MHDBのDecoration.skills[].levelを使用し、スキル本体のmaxLevel等は使用しない。

検証：
- 防具UIと護石UIの生成コードを確認。
- 共通候補生成関数を最終的な<option>生成直前まで使用することを確認。
- 同Lvの名称比較をIntl.Collator('ja-JP')で固定。
- duplicateなdecosFor定義を除去。
- Node.js --checkでJavaScript構文を確認。
- 実データ形状（Decoration.skills[].level）はMHDB公式API仕様で照合。
