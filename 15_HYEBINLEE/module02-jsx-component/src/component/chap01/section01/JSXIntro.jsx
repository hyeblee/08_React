export default function JSXIntro() {
  const name = "길동";
  return (
    <div>
      <h1>JSX의 개념과 역할</h1>
      <h2>안녕하세요!</h2>
      <p>{name}님 환영합니다!</p>
      <p>현재 시간: {new Date().toLocaleDateString()}</p>

      {/* JSX가 변환되는 과정 */}
      <div>
        <h2>JSX 변환 과정</h2>
        <p>
          위 JSX코드는 React.createElement() 함수 호출로 변환된다. 바벨(Babel)이
          이 변환 작업을 처리한다.
        </p>
      </div>
    </div>


  );
}
