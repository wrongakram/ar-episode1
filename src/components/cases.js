import React from "react";

const caseStudies = [
  {
    id: 1,
    subtitle: "Skin Elixir",
    title: "The innovative anti-aging serum",
    img:
      "https://melriver.com/wp-content/uploads/2019/12/EcorceVerte_case-study-2250x1805.jpg"
  },
  {
    id: 2,
    subtitle: "Bored of Authority",
    title: "Speaks to your individual passions with BOA",
    img: "https://melriver.com/wp-content/uploads/2019/12/BOA_case-study.jpg"
  },
  {
    id: 3,
    subtitle: "Just Away",
    title: "The cleaning kit for airpods",
    img:
      "https://melriver.com/wp-content/uploads/2019/12/SkinElixir_case-study-2250x1500.jpg"
  }
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div key={caseItem.id} className='case'>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
                <img src={caseItem.img} alt='' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
