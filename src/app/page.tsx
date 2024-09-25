import Link from "next/link"
export default function Portfolio(){
  return (
    <div>
      <ul>
        <h1>MY Portfolio</h1>
        <br />
        <h1>MAHEEN IMTIAZ</h1>
        <p>I'm Fresh web Developer and continue Programming in GIAIC</p>
        <br />
        <br />

        <Link href="/home"><li>About us</li></Link>
        <li> <Link href = "/education">Education</Link></li>
        <li><Link href ="/contactus">Contact us</Link></li>
        <br />
        
        <br />
        
        <h2>Email address : maheenimtiaz524@gmail.com</h2>
        <h2>Thankyou to recieving my resume</h2>
        
      </ul>
    </div>
  )
}
