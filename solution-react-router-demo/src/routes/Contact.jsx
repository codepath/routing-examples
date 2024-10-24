import { Outlet, Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <h1> Contact Me? You Sure Can! </h1>
      <h2>My email: abc123@gmail.com</h2>
      <h2>My phone number: 123-456-7890</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex ex,
        interdum vitae consectetur sit amet, mollis vitae ex. Suspendisse lacus
        dolor, dapibus at fringilla eget, finibus dictum nisl. Cras gravida ut
        magna at tempus.
      </p>
      <Link
        to="/contact/email"
        style={{ fontWeight: "bold", fontSize: "larger" }}
      >
        {" "}
        Wanna Learn Some Fun Facts About Email?{" "}
      </Link>
      <br></br>
      <Link
        to="/contact/phone"
        style={{ fontWeight: "bold", fontSize: "larger" }}
      >
        {" "}
        Or About Phone Numbers?{" "}
      </Link>

      <Outlet />
    </div>
  );
};

export default Contact;
