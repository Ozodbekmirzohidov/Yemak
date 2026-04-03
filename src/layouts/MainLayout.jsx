import {Header, Footer} from "../components/index"
import { Outlet } from "react-router-dom"

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
