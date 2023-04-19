import React from "react";
import { useState } from "react";

const Main = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["*", "/", "+", "-", "."];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const calculate = () =>{
    setCalc(eval(calc).toString())
  }
  const clear = () =>{
    setCalc('')
    setResult('')
  }
  const deleteButton = () =>{
    setCalc(calc.slice(0,-1))
  }

  return (
    <>
      <div className="row ">
        <div className="display ">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>
        <div className="my-3  mx-5 h-5 ">
          <button className="btn btn-outline-secondary col-1 mx-5 border-black" onClick={clear}>
            CE
          </button>
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            value={"="} onClick={calculate}
          >
            =
          </button>
          <button className="btn btn-outline-secondary col-1 mx-5 border-black" onClick={deleteButton}>
            delete
          </button>
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("/")}
            value={"/"}
          >
            /
          </button>
        </div>
        <div className="my-3  mx-5 h-5">
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("7")}
            value={"7"}
          >
            7
          </button>
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("8")}
            value={"8"}
          >
            8
          </button>
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("9")}
            value={"9"}
          >
            9
          </button>
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("*")}
            value={"*"}
          >
            *
          </button>
        </div>
        <div className="my-3  mx-5 h-5">
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("4")}
            value={"4"}
          >
            4
          </button>
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("5")}
            value={"5"}
          >
            5
          </button>
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("6")}
            value={"6"}
          >
            6
          </button>
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("+")}
            value={"+"}
          >
            +
          </button>
        </div>
        <div className="my-3  mx-5 h-5">
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("1")}
            value={"1"}
          >
            1
          </button>
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("2")}
            value={"2"}
          >
            2
          </button>
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("3")}
            value={"3"}
          >
            3
          </button>
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("-")}
            value={"-"}
          >
            -
          </button>
        </div>
        <div className="my-3  mx-5 h-5">
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc(".")}
            value={"."}
          >
            .
          </button>
          <button
            className="btn btn-outline-secondary col-1 mx-5 border-black"
            onClick={() => updateCalc("0")}
            value={"0"}
          >
            0
          </button>
        </div>
      </div>
    </>
  );
};
export default Main;
