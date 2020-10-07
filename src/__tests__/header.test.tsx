import React from "react"
import { render } from "@testing-library/react"
import Header from "../components/header"

it("renders correctly", () => {
  const { container } = render(<Header siteTitle="hello" />)
  expect(container.firstChild.textContent).toBe("hello")
  expect(container.firstChild.classList).toMatchSnapshot()
})
