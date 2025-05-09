"use client";

export default function KeyEvent() {
  // 키보드 이벤트 핸들러
  const handleKeyDown = (e) => {
    console.log(`눌린 키: `, e.key);
    if (e.key == "Enter") {
      const data = e.target.value;
      alert(data + " 누름요!");
    }
  };

  return (
    <>
      {/* 키보드 이벤트 */}
      <div>
        <h3>키보드 이벤트(onKeyDown)</h3>
        <input
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="엔터눌러바바바바바바바에취"
        />
      </div>
    </>
  );
}
