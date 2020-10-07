import React from "react"
import { render } from "@testing-library/react"
import Header from "../components/header"

it("renders correctly", () => {
  const { container } = render(<Header siteTitle="hello" />)
  const { firstChild } = container as any
  expect(firstChild.textContent).toBe("hello")
  expect(firstChild.classList).toMatchSnapshot()
})
