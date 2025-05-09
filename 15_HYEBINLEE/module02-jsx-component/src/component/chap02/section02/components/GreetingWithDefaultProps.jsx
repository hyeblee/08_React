export default function GreetingWithDefaultProps({
  name = "손님",
  job = "무직",
  age = 0,
}) {
  console.log({ name, job, age }); // 기본값이 적용된 props 확인
  return (
    <div style={{ background: "#f0f0f0", padding: "5px", margin: "5px 0" }}>
      <h3>안녕하세요, {name}님</h3>
      <p>직업: {job}</p>
      <p>나이: {age}</p>
    </div>
  );
}
