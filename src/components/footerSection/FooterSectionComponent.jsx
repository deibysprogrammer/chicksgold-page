import "./FooterSectionComponent.css"

/*============================================================
  FooterSectionComponent: Footer section rendering component
==============================================================*/

export default function FooterSection({ title = "title", sections = [] }) {
  return (
    <section className="section-link">
      <h4 className="section-link-title">{title}</h4>
      {sections.map(({url, title}) => (
        <a key={url} className="section-link-item" href={`${url}`}>
          {title}
        </a>
      ))}
    </section>
  );
}
