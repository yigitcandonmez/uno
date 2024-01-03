import React, { useContext } from "react";
import { UnoContext } from "../context/context"

export default function Board () {
  const { cards, players } = useContext(UnoContext);

  return (
    <>
      <button>DEAL</button>
    </>
  )
}