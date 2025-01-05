import Image1 from "./testimonialassets/wolfblay.jpeg";
import Image2 from "./testimonialassets/willbay.png";
import Image3 from "./testimonialassets/stevejack.png";
import TestimonialCard from "./TestimonialCard";
import Header from "../../../shared/Header";

const Testimonials = () => {
  return (
    <div className="mt-52">
      <Header text={"Our Happy Clients"} />
      <div className="flex flex-wrap items-center justify-center gap-4">
        <TestimonialCard
          image={Image1}
          name="Wolf Bay"
          role="Baby Carer"
          testimonialText="I am really grateful to EquiSports for finding the best qualityful equipments for me. Happy with the woman who was given to me. The EquiSports team was extremely cooperative. It is a great portal for working people like us who can easily search and find any service related to sports and health."
          rating="4.6"
        />
        <TestimonialCard
          image={Image2}
          name="Amir Hasan"
          role="Health Specialist"
          testimonialText="Thank You EquiSports for helping me and my clients to get the perfect and delightful health advices. Althoug I study health, your process about health is unique. Looking forward to enhance our relations."
          rating="4.8"
        />
        <TestimonialCard
          image={Image3}
          name="Sourav Vashisht"
          role="Chef"
          testimonialText="I bought treadmill, dumbells and health equipments from EquiSports. They provided the best quality products for their clients. I found the platform pretty user friendly and their support team quite patient. I would highly recommend everyone to use this Platform for buying equipments."
        />
      </div>
    </div>
  );
};

export default Testimonials;
