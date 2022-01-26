import logo from "./logo.svg"

export default function Navbar() {
  return (
    <div className="navbar">
      <img
        className="navbar--logo"
        src={logo}
        alt="card-place"
      />
      <p>my travel journal.</p>
    </div>
  );
}
