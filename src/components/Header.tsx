import React from "react"
import { GoMarkGithub } from "react-icons/all"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div
      className={
        "flex flex-row items-center justify-between px-2 py-3 mb-2 bg-purple-500 "
      }
    >
      <Link to={"/"}>
        <h1 className={"text-4xl text-white"}>KajManage</h1>
      </Link>
      <a href="/" target={"_blank"} rel="noreferrer">
        <GoMarkGithub className={"text-5xl text-white hover:text-black"} />
      </a>
    </div>
  )
}

export default Header
