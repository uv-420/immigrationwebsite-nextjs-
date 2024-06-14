import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project was generated By{" "}
        <a href="https://www.dhiwise.com" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Dhiwise
        </a>
        . Quickly use below links to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/visaoffers" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Visaoffers
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/visadetails" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Visadetails
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/countries" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Countries
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/countrydetails" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Countrydetails
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/blog" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Blog
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/blogdetails" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Blogdetails
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/team" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Team
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/teamdetails" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Teamdetails
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/faq" style={{ color: "#87CEFA", textDecoration: "none" }}>
            FAQ
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/contact" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Contact
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/error" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Error
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/home1" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Home1
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/storydetails" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Storydetails
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/gallery" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Gallery
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/coachingdetails" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Coachingdetails
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/visa" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Visa
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/about" style={{ color: "#87CEFA", textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/pricingtables" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Pricingtables
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/coaching" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Coaching
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/successstory" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Successstory
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
