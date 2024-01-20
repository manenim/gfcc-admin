import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href = "/member/create" >Create a member</Link>
      <Link href = "/groups/leagues/create" >Create a league</Link>
      <Link href = "/groups/twenty-four/create" >Create a 24</Link>
      <Link href = "/groups/eight/create" >Create an 8</Link>
    </main>
  );
}
