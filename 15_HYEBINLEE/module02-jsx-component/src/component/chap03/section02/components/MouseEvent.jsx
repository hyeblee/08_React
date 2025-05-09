"use client";

export default function MouseEvent() {
  const handleMouseOver = (e) => {
    console.log(`마우스가 오버되었습니다.`);
    e.target.style.backgroundColor = "#f0f0f0"; // ✅ 카멜케이스
  };

  const handleMouseOut = (e) => {
    console.log(`마우스가 떠났습니다.`);
    e.target.style.backgroundColor = "transparent"; // ✅ 카멜케이스
  };

  return (
    <>
      <div
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
        onMouseOver={handleMouseOver} // ✅ 함수 참조
        onMouseOut={handleMouseOut} // ✅ 함수 참조
      >
        마우스를 올려보세요!
      </div>
    </>
  );
}
