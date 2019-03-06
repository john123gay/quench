import React from "react";
import './style.css'

export function Form(props) {
  return (
    <form autoComplete="off" id="form">
      {props.children}
    </form>
  );
}

export function Logo() {
  return <i className="fas fa-spa logo"></i>
}

export function Wrong () {
  return <i class="fas fa-times wrong"></i>
}

export function Password(props) {
  return <input type="password" placeholder="Password" {...props}/>
}

export function Email(props) {
  return <input type="email" placeholder="Email" {...props}/>
}

export function Left(){
  return (
    <div className="split left"></div>
  );
}

export function Right(props) {
  return (
    <div className="split right">
      <div className="centered">{props.children}</div>
    </div>
  );
}

export function Inside(props) {
  return (
    <div className="inside">
      <button id="login" onClick={(event) => props.loginUser(event)}>Login</button>
      <p onClick={(event) => props.signUp(event)} id="signup">Sign Up</p>
    </div>
  )
}