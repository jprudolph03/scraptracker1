import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ActiveLotTable from "../components/ActiveLotTable";

export default function Home() {
  return (
    <div>
      <h2 className="display-2">Current Lots</h2>
      <hr />
      <ActiveLotTable />
    </div>
  );
}
