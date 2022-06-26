import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import M from "materialize-css"

const Signin = () => {
  const history = useHistory()
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "invalid email", classes: "#c62828 red darken-3" })
      return
    }
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-2" })
        } else {
          localStorage.setItem("jwt", data.token)
          localStorage.setItem("user", JSON.stringify(data.user))
          M.toast({
            html: "signed in successfully",
            classes: "#43a047 green darken-2",
          })
          history.push("/")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='mycard'>
      <div className='card auth-card input-field'>
        <h2 className='brand-logo'>Instafam</h2>
        <input
          type='text'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => PostData()}
          className='btn waves-effect waves-light #64b5f6 blue darken-1'
        >
          Login
        </button>
        <h6>
          <Link to='/signup'>Don't have an account</Link>
        </h6>
      </div>
    </div>
  )
}

export default Signin