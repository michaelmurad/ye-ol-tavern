import React from "react"
import { render } from "@testing-library/react"
import Header from "../components/header"

describe("Header component", () => {
  it("renders correctly", () => {
    const { container } = render(<Header siteTitle="hello" />)
    expect(container.firstChild.textContent).toBe("hello")
  })

  it("has unchanged css", () => {
    const { container } = render(<Header siteTitle="hello" />)
    expect(container.querySelector("header").className).toMatchSnapshot()
  })
})
