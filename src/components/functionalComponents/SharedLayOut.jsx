import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";

export default function ShearedLayOut() {
  return (
    <>
      <NavBar/>
      <Outlet />
    </>
  );
}
