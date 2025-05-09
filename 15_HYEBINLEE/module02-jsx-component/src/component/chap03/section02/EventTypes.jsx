/* 
React에서 자주 사용하는 이벤트 타입들


*/

import FormEvent from "@/component/chap03/section02/components/FormEvent";
import MouseEvent from "@/component/chap03/section02/components/MouseEvent";
import KeyEvent from "@/component/chap03/section02/components/KeyEvent";

export default function EventTypes() {
  return (
    <div>
      <h2>다양한 이벤트 타입</h2>
      <FormEvent />

      <hr />

      <MouseEvent />

      <hr />

      <KeyEvent />
    </div>
  );
}
