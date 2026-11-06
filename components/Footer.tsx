import { Logo } from "./Logo";
import { company, footerLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div>
            <Logo />
            <p className="desc">Chem-mechanical process engineering — flushing, pre-commissioning, industrial utilities and engineered equipment in the UAE.</p>
          </div>
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h5>{col.heading}</h5>
              <ul>
                {col.links.map(([label, href]) => (
                  <li key={label}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="f-big" aria-hidden="true">HYDRO</div>
        <div className="f-bottom">
          <span>© {new Date().getFullYear()} {company.name}</span>
          <span>Part of Island Tower Group</span>
        </div>
      </div>
    </footer>
  );
}
