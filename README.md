# Clan One Virtual Room

## 本番環境
- https://clanone-virtual-room.pages.dev/

## プロジェクト概要
- Webブラウザ上で没入感のあるバーチャルルームを体験できるアプリケーションです。
- 3Dモデルのリビング空間と、キーボード／タッチ入力で操作できるプレイヤーキャラクターを表示します。
- 物理演算を取り入れたカプセルコライダーや、Bloom・Noise などのポストエフェクトでルームの質感を強調しています。
- 最新の Next.js Edge Runtime 上で動作し、Cloudflare Pages にデプロイしています。
- まだ試験運用中であり、既知・未知のバグが多く含まれています。挙動が不安定な場合はリロードをお試しください。

## 技術スタック
- フレームワーク: Next.js 14, React 18
- 言語: TypeScript
- 3D / レンダリング: @react-three/fiber, @react-three/drei, three.js
- 物理演算: @react-three/rapier, @dimforge/rapier3d-compat
- プレイヤー制御: ecctrl, react-joystick-component
- UI ユーティリティ: Tailwind CSS, class-variance-authority, lucide-react
- デプロイ: Cloudflare Pages
- 3D アセット: Cloudflare R2 上の `clan-one-virtual-room.glb`

## セットアップ
```bash
npm install
npm run dev
```
ブラウザで http://localhost:3000 を開くと開発中のバーチャルルームを確認できます。

## 開発メモ
- メインの 3D シーンは `src/components/Experience.tsx` に実装されています。
- ルームモデルは `src/components/Room.tsx` からリモートの GLB ファイルを読み込みます。
- Edge Runtime 対応のため、`src/app/page.tsx` から `export const runtime = 'edge';` を指定しています。
