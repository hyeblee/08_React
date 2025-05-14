"use client";

import { useContext } from "react";
import { UserContext } from "./ContextGrandparent";

function ContextChild() {
  const user = useContext(UserContext);
}

export default ContextChild;
