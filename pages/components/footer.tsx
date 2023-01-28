import Link from "next/link";

const Footer = () => {
  return (
    <div
      style={{
        color: "#ACB2B2",
        display: "block",
        textAlign: "center",
        marginBottom: "50px",
        fontSize: "12px",
        textTransform: "uppercase",
      }}
    >
      <h6>
        <Link href="https://github.com/theurbandev" target={"_blank"}>
          theurbandev
        </Link>{" "}
      </h6>
    </div>
  );
};

export default Footer;
