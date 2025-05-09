/* 
기본 함수형 컴포넌트 작성

함수형 컴포넌트는 React에서 UI를 구성하는 가장 기본적인 방법이다.
JavaScript 함수를 사용하여 React 엘리먼트를 반환하는 간단한 형태를 가진다.

함수형 컴포넌트의 특징:
1. JavaScript 함수로 정의
2. props를 인자로 받음
3. JSX를 반환
4. 상태(state)와 생명주기 기능은 Hooks를 통해 사용

기본 문법:
(호이스팅O )
function ComponentName(props) {
  return <div>컴포넌트 내용</div>;
}

또는 화살표 함수 문법:
(호이스팅X)
const ComponentName = (props) => {
  return <div>컴포넌트 내용</div>;
};

props는 컴포넌트에 전달되는 데이터로, 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달하는 방법이다.
*/

import GreetingWithDefault from "./GreetingWithDeafult";
import UserProfile from "./UserProfile";
import GreetingWithDefaultProps from "./GreetingWithDefaultProps";

export default function FunctionComponent() {
  return (
    <div>
      <h1>기본 함수형 컴포넌트 작성</h1>
      <section>
        <h2>함수형 컴포넌트 정의</h2>
        <p>
          <strong>함수형 컴포넌트</strong>는 props를 입력으로 받아 React
          엘리먼트를 반환하는 JavaScript 함수이다. 함수형 컴포넌트는 간결하고
          직관적이며, 최신 React 개발의 중심이 되는 방식이다.
        </p>

        <div>
          <h3>함수형 컴포넌트의 기본 구조</h3>
          <pre>
            {`
              // 기본 함수 선언 방식
              function Greeting(props) {
                  return <h1>Hello, {props.name}</h1>;
              }
              
              // 화살표 함수 방식
              const Greeting = (props) => {
                  return <h1>Hello, {props.name}</h1>;
              };
              
              // 구조 분해 할당 사용
              function Greeting({ name, age }) {
                  return (
                  <div>
                      <h1>Hello, {name}</h1>
                      <p>Age: {age}</p>
                  </div>
                  );
              }`}
          </pre>
        </div>
      </section>

      <hr />

      <section>
        <h2>props 사용하기</h2>
        <p>
          <strong>props</strong>(properties의 줄임말)는 컴포넌트에 전달되는
          데이터이다. 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달할 때
          사용한다. props는 읽기 전용(immutable)이며, 컴포넌트 내부에서 수정할
          수 없다.
        </p>

        <div>
          <h3>props 사용 예제</h3>
          <pre>
            {`
                // 컴포넌트 정의
                function UserProfile(props) {
                    return (
                    <div>
                        <h2>{props.name}</h2>
                        <p>직업: {props.job}</p>
                        <p>나이: {props.age}</p>
                    </div>
                    );
                }

                // 컴포넌트 사용
                <UserProfile name="홍길동" job="개발자" age={30} />`}
          </pre>
        </div>

        {/* 실제 props 사용 */}
        <div>
          <h3>실제 props 예제</h3>
          <UserProfile name="홍길동" job="개발자" age={30} />
          <UserProfile name="신사임닫" job="개발자" age={40} />
        </div>
      </section>

      <section>
        <h2>기본 props 값 설정</h2>
        <p>
          컴포넌트에 props가 전달되지 않았을 때 사용할 기본값을 설정할 수 있다.
          이를 통해 컴포넌트를 더 견고하게 만들 수 있다.
        </p>

        <div>
          <h3>기본 props 설정 방법</h3>
          <pre>
            {`
                        // 방법 1: 함수 매개변수에서 기본값 설정
                        function Greeting({ name = "Guest" }) {
                            return <h1>Hello, {name}</h1>;
                        }
                        
                        // 방법 2: defaultProps 사용
                        function Greeting(props) {
                            return <h1>Hello, {props.name}</h1>;
                        }
                        
                        Greeting.defaultProps = {
                            name: "Guest"
                        };`}
          </pre>
        </div>

        {/* 기본값 예제 */}
        <div>
          <h3>기본 props 예제</h3>
          <GreetingWithDefault />
          <GreetingWithDefault name="홍길동" />

          <hr />

          <GreetingWithDefaultProps />
        </div>
      </section>

      <hr />

      <section>
        <h2>childeren props</h2>
      </section>
    </div>
  );
}
