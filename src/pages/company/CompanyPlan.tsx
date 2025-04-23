import Header from "../../components/companyplan/Header";
import PricingCard from "../../components/companyplan/PricingCard";
import SearchBox from "../../components/companyplan/SearchBox";

const CompanyPlan = () => {
  return (
    <div className="w-full pb-8">
      <Header />
      <SearchBox />
      <section className="mt-6 w-full grid grid-cols-4 gap-4">
        <PricingCard
          title1="First try, then trust!"
          price={0}
          name="Trial"
          title="Default"
        />
        <PricingCard
          title1="Monthly saver - yearly plan"
          des="Basic recruitment support - Standard HR docs"
          price={150}
          name="Startup & SME"
          title="Basic"
        />
        <PricingCard
          title1="Premium support - Annual price"
          des="Exclusive recruitment support - Standard HR docs"
          price={375}
          name="MSME"
          title="Premium"
        />
        <PricingCard
          title1="Pay as you use."
          des="It will be your customized plan only for you."
          price={1000}
          name="Large"
          title="Customized"
        />
      </section>
    </div>
  );
};

export default CompanyPlan;
