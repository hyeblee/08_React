import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>store 학습</h1>

      <h3>chap01 - context api 필요성</h3>
      <ul>
        <li>
          <Link href='/chap01/section01'>props drilling</Link>
        </li>
        <li>
          <Link href='/chap01/section02'>context api</Link>
        </li>
      </ul>
    </>
  );
}
