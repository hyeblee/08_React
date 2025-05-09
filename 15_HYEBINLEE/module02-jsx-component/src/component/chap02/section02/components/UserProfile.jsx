export default function UserProfile({ name, job, age }) {
  return (
    <div
      style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}
    >
      <h3>{name}</h3>
      <p>직업 : {job}</p>
      <p>나이 : {age}</p>
    </div>
  );
}
